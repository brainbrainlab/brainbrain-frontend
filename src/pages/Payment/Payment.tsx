import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Payment.styles';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { PAYMENT_OPTIONS } from '../../constants/payment';

interface PaymentOption {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly features: readonly string[];
  readonly isBest: boolean;
}

interface UserInfo {
  email: string;
  name: string;
  age: string;
  gender: string;
  country: string;
  agreement: boolean;
}

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!location.state) {
      navigate('/404', { replace: true });
      return;
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  const { plan, userInfo, testResults } = location.state;
  const [selectedOption, setSelectedOption] = useState<string>('premium');
  const [showCouponModal, setShowCouponModal] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleCouponSubmit = () => {
    // TODO: 쿠폰 검증 로직 구현
    setShowCouponModal(false);
  };

  const handlePayment = () => {
    if (!selectedOption) return;

    const selectedPlan = Object.values(PAYMENT_OPTIONS).find(option => option.id === selectedOption) as PaymentOption;
    if (!selectedPlan) return;

    navigate('/payment/process', {
      state: {
        plan: selectedPlan,
        couponCode,
        userInfo,
        testResults,
      },
    });
  };

  return (
    <S.Container>
      <S.Title>{t('payment.title')}</S.Title>
      <S.OptionsContainer>
        {Object.values(PAYMENT_OPTIONS).map(option => (
          <S.OptionCard
            key={option.id}
            $isSelected={selectedOption === option.id}
            $isBest={option.isBest}
            onClick={() => handleOptionSelect(option.id)}
          >
            {option.isBest && <S.BestBadge>BEST</S.BestBadge>}
            <S.OptionTitle>{t(`payment.options.${option.id}.title`)}</S.OptionTitle>
            <S.Price>{option.price.toLocaleString()}원</S.Price>
            <S.FeaturesList>
              {(t(`payment.options.${option.id}.features`, { returnObjects: true }) as string[]).map(
                (feature: string, index: number) => (
                  <S.FeatureItem key={index}>
                    <S.CheckIcon />
                    {feature}
                  </S.FeatureItem>
                ),
              )}
            </S.FeaturesList>
          </S.OptionCard>
        ))}
      </S.OptionsContainer>

      <S.ActionsContainer>
        <Button filled={false} onClick={() => setShowCouponModal(true)}>
          {t('payment.coupon.register')}
        </Button>
        <Button filled={true} onClick={handlePayment} disabled={!selectedOption}>
          {t('payment.process.makePayment')}
        </Button>
      </S.ActionsContainer>

      <Modal isOpen={showCouponModal} onClose={() => setShowCouponModal(false)} title={t('payment.coupon.title')}>
        <S.CouponForm>
          <S.Input
            type="text"
            placeholder={t('payment.coupon.placeholder')}
            value={couponCode}
            onChange={e => setCouponCode(e.target.value)}
          />
          <Button onClick={handleCouponSubmit}>{t('payment.coupon.register')}</Button>
        </S.CouponForm>
      </Modal>
    </S.Container>
  );
}

export default Payment;
