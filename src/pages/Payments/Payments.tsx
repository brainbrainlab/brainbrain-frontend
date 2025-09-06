import { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paymentsService } from '@/services/paymentsService';
import { usePaymentsStore } from '@/stores/paymentsStore';

import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';
import PageLayout from '@/components/common/PageLayout/PageLayout';

import { Coupon } from '@/api/constants';
import { couponsApi } from '@/api/coupons';

// ✨ 수정: 변경된 데이터 구조를 가진 PAYMENT_OPTIONS를 가져옵니다.
import { PAYMENT_OPTIONS } from '@/constants/payments';

import * as S from './Payments.styles';

// ✨ 추가: feature 객체의 타입을 명확히 정의합니다.
interface Feature {
  text: string;
  image: string;
}

function Payments() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const openPostcode = useDaumPostcodePopup();

  const { userInfo, testResults, actions } = usePaymentsStore();
  const { setPaymentSuccess, setOrderId, setShippingInfo } = actions;

  const [selectedOption, setSelectedOption] = useState<string>('premium');
  const [showCouponModal, setShowCouponModal] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');
  const [coupon, setCoupon] = useState<Coupon>();

  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  const [recipient, setRecipient] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');

  // ✨ 수정: 어떤 '항목'에 마우스가 올라왔는지 관리하기 위한 상태
  const [hoveredFeature, setHoveredFeature] = useState<{ optionId: string; index: number } | null>(null);

  useEffect(() => {
    if (!userInfo || !testResults) {
      navigate('/404');
    }
  }, [userInfo, testResults, navigate]);

  useEffect(() => {
    setCouponCode('');
  }, [showCouponModal]);

  if (!userInfo || !testResults) {
    return null;
  }

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleCouponSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!couponCode.trim()) return;
    const fetchedCoupon = await couponsApi.getCoupons(couponCode);
    if (!fetchedCoupon || !fetchedCoupon.isAvailable) {
      alert(t('payments.coupon.invalid'));
      return;
    }
    setCoupon(fetchedCoupon);
    setShowCouponModal(false);
  };

  const handleCompletePostcode = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setPostcode(data.zonecode);
    setAddress(fullAddress);
  };
  const handleClickPostcode = () => {
    openPostcode({ onComplete: handleCompletePostcode });
  };

  const handleAddressSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!recipient || !phoneNumber || !postcode || !address || !detailedAddress) {
      alert('모든 배송 정보를 입력해주세요.');
      return;
    }
    setShippingInfo({ recipient, address, detailedAddress, phoneNumber, postcode });
    setShowAddressModal(false);
    await handleFinalSubmit();
  };

  const handleFinalSubmit = async () => {
    const selectedPlan = Object.values(PAYMENT_OPTIONS).find(option => option.id === selectedOption);
    if (!selectedPlan) return;

    const isCouponApplied =
      coupon && (coupon.couponTarget === selectedPlan.id.toUpperCase() || coupon.couponTarget === 'ALL');
    const finalPrice = isCouponApplied
      ? Math.floor(selectedPlan.price * (1 - coupon.discountRate))
      : selectedPlan.price;

    try {
      if (isCouponApplied && finalPrice <= 0) {
        const orderId = await couponsApi.useFreeCoupons(coupon.couponCode, selectedPlan.id);
        setOrderId(orderId);
        navigate('/payments/processing');
        return;
      }
      const paymentsResult = await paymentsService.requestPayments(finalPrice, selectedPlan.id, coupon?.couponCode);

      if (paymentsResult.success && paymentsResult.orderId && paymentsResult.result) {
        setOrderId(paymentsResult.orderId);
        setPaymentSuccess({ orderId: paymentsResult.orderId, result: paymentsResult.result });
        navigate('/payments/processing');
      }
    } catch (e) {
      navigate('/payments/fail');
      console.error(e);
    }
  };

  const handlePayments = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!selectedOption) return;

    if (selectedOption === 'premium') {
      setShowAddressModal(true);
    } else {
      handleFinalSubmit();
    }
  };

  return (
    <PageLayout innerWidth="80%">
      <S.Title>{t('payments.title')}</S.Title>
      <S.OptionsContainer>
        {Object.values(PAYMENT_OPTIONS).map(option => (
          <S.OptionCard
            key={option.id}
            $isSelected={selectedOption === option.id}
            $isBest={option.isBest}
            onClick={() => handleOptionSelect(option.id)}
          >
            {option.isBest && <S.BestBadge>BEST</S.BestBadge>}
            <S.OptionTitle>{option.title}</S.OptionTitle>
            <S.Price>
              {coupon && (coupon.couponTarget === option.id.toUpperCase() || coupon.couponTarget === 'ALL') ? (
                <span>
                  <del style={{ textDecoration: 'line-through', color: 'lightgray' }}>
                    {option.price.toLocaleString()}
                  </del>{' '}
                  {Math.floor(option.price * (1 - coupon.discountRate)).toLocaleString()}
                  {t('common.currency')}
                </span>
              ) : (
                <span>
                  {option.price.toLocaleString()}
                  {t('common.currency')}
                </span>
              )}
            </S.Price>
            <S.FeaturesList>
              {option.features.map((feature: Feature, index: number) => (
                <S.FeatureItem key={index}>
                  <S.CheckIcon />
                  {feature.text}
                  <S.HoverImageWrapper
                    isVisible={hoveredFeature?.optionId === option.id && hoveredFeature?.index === index}
                  >
                    <S.HoverImage src={feature.image} alt={`${feature.text} preview`} />
                  </S.HoverImageWrapper>
                  <S.PreviewIcon
                    onMouseEnter={() => setHoveredFeature({ optionId: option.id, index })}
                    onMouseLeave={() => setHoveredFeature(null)}
                    isHovered={hoveredFeature?.optionId === option.id && hoveredFeature?.index === index}
                  ></S.PreviewIcon>
                </S.FeatureItem>
              ))}
            </S.FeaturesList>
          </S.OptionCard>
        ))}
      </S.OptionsContainer>

      <S.ActionsContainer>
        <Button filled={false} onClick={() => setShowCouponModal(true)}>
          {t('payments.coupon.register')}
        </Button>
        <Button filled={true} onClick={handlePayments} disabled={!selectedOption}>
          {t('payments.process.makePayments')}
        </Button>
      </S.ActionsContainer>

      <Modal isOpen={showCouponModal} onClose={() => setShowCouponModal(false)} title={t('payments.coupon.title')}>
        <S.CouponForm onSubmit={handleCouponSubmit}>
          <S.Input
            type="text"
            placeholder={t('payments.coupon.placeholder')}
            value={couponCode}
            onChange={e => setCouponCode(e.target.value)}
          />
          <Button type="submit">{t('payments.coupon.register')}</Button>
        </S.CouponForm>
      </Modal>

      <Modal isOpen={showAddressModal} onClose={() => setShowAddressModal(false)} title={'배송 정보 입력'}>
        <S.AddressForm onSubmit={handleAddressSubmit}>
          <S.Label htmlFor="recipient">수령인</S.Label>
          <S.Input
            id="recipient"
            type="text"
            placeholder="받는 분 이름을 입력해주세요"
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
          />
          <S.Label htmlFor="phoneNumber">연락처</S.Label>
          <S.Input
            id="phoneNumber"
            type="text"
            placeholder="-를 제외한 번호를 입력해주세요"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />

          <S.Label htmlFor="postcode">우편번호</S.Label>
          <S.PostcodeWrapper>
            <S.Input
              id="postcode"
              type="text"
              placeholder="우편번호"
              value={postcode}
              readOnly
              onClick={handleClickPostcode}
            />
            <Button type="button" onClick={handleClickPostcode} filled={false}>
              우편번호 찾기
            </Button>
          </S.PostcodeWrapper>

          <S.Input type="text" placeholder="주소" value={address} readOnly onClick={handleClickPostcode} />

          <S.Input
            type="text"
            placeholder="상세주소를 입력해주세요"
            value={detailedAddress}
            onChange={e => setDetailedAddress(e.target.value)}
          />
          <Button type="submit">입력 완료 및 결제</Button>
        </S.AddressForm>
      </Modal>
    </PageLayout>
  );
}

export default Payments;
