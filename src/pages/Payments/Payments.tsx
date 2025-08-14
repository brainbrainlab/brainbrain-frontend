import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paymentsService } from '@/services/paymentsService';
import { usePaymentsStore } from '@/stores/paymentsStore';

import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';
import PageLayout from '@/components/common/PageLayout/PageLayout';

import { couponsApi } from '@/api/coupons';

import { PAYMENT_OPTIONS } from '@/constants/payments';

import * as S from './Payments.styles';

function Payments() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Zustand Store에서 상태와 액션을 가져옵니다.
  const { userInfo, testResults, actions } = usePaymentsStore();
  const { setPaymentSuccess } = actions;

  const [selectedOption, setSelectedOption] = useState<string>('premium');
  const [showCouponModal, setShowCouponModal] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountRate, setDiscountRate] = useState<number>(0);

  useEffect(() => {
    console.log(userInfo, testResults, actions);
    // Store에 필요한 데이터가 없으면, 정보 입력 페이지로 돌려보냅니다.
    if (!userInfo || !testResults) {
      navigate('/404');
    }
  }, [userInfo, testResults]);

  useEffect(() => {
    setCouponCode('');
  }, [showCouponModal]);

  // 데이터가 로드되기 전이나, 리디렉션이 필요한 경우 렌더링을 막습니다.
  if (!userInfo || !testResults) {
    return null;
  }
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleCouponSubmit = async (event: any) => {
    event.preventDefault();
    if (!couponCode.trim()) return;
    const coupon = await couponsApi.getCoupons(couponCode);
    if (!coupon) {
      alert(t('payments.coupon.invalid'));
      return;
    }
    setDiscountRate(coupon.discountRate);
    alert('payment.');
    console.log(discountRate);
    setShowCouponModal(false);
  };

  const handlePayments = async (event: any) => {
    event.preventDefault();
    if (!selectedOption) return;

    const selectedPlan = Object.values(PAYMENT_OPTIONS).find(option => option.id === selectedOption);
    if (!selectedPlan) return;

    try {
      // 1. 결제 요청
      const finalPrice = selectedPlan.price * (1 - discountRate);
      if (finalPrice <= 0) {
        // 펀딩 쿠폰 로직 넣기
      }
      const paymentsResult = await paymentsService.requestPayments(finalPrice, selectedPlan.id);

      if (paymentsResult.success && paymentsResult.orderId && paymentsResult.result) {
        // 2. 결제 성공 후 결과 전송 (백엔드 API 호출)
        const setOrderId = usePaymentsStore.getState().actions.setOrderId;
        setOrderId(paymentsResult.orderId);
        setPaymentSuccess({ orderId: paymentsResult.orderId, result: paymentsResult.result });
      }
    } catch (e) {
      navigate('/payments/fail');
      console.log(e);
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
            <S.OptionTitle>{t(`payments.options.${option.id}.title`)}</S.OptionTitle>
            <S.Price>{Math.ceil(option.price * (1 - discountRate)).toLocaleString()}원</S.Price>
            <S.FeaturesList>
              {Array.isArray(t(`payments.options.${option.id}.features`, { returnObjects: true }))
                ? (t(`payments.options.${option.id}.features`, { returnObjects: true }) as string[]).map(
                    (feature: string, index: number) => (
                      <S.FeatureItem key={index}>
                        <S.CheckIcon />
                        {feature}
                      </S.FeatureItem>
                    ),
                  )
                : null}
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
        <S.CouponForm>
          <S.Input
            type="text"
            placeholder={t('payments.coupon.placeholder')}
            value={couponCode}
            onChange={e => setCouponCode(e.target.value)}
          />
          <Button onClick={handleCouponSubmit}>{t('payments.coupon.register')}</Button>
        </S.CouponForm>
      </Modal>
    </PageLayout>
  );
}

export default Payments;
