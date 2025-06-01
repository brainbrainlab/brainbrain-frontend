import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';
import PageLayout from '@/components/common/PageLayout/PageLayout';

import { PAYMENT_OPTIONS } from '@/constants/payments';
import { paymentsService } from '@/services/paymentsService';
import { PaymentsCompleteRequest, PaymentsProcessProps } from './types';

import * as S from './Payments.styles';

function Payments() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState<string>('premium');
  const [showCouponModal, setShowCouponModal] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');

  useEffect(() => {
    if (!location.state) {
      navigate('/404', { replace: true });
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  const { userInfo, testResults } = location.state as PaymentsProcessProps;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleCouponSubmit = () => {
    // TODO: 쿠폰 검증 로직 구현
    setShowCouponModal(false);
  };

  const handlePayments = async () => {
    if (!selectedOption) return;

    const selectedPlan = Object.values(PAYMENT_OPTIONS).find(option => option.id === selectedOption);
    if (!selectedPlan) return;

    try {
      // 1. 결제 요청
      const paymentsResult = await paymentsService.requestPayments(selectedPlan.price, selectedPlan.id);

      if (paymentsResult.success && paymentsResult.orderId && paymentsResult.result) {
        // 2. 결제 성공 후 결과 전송
        const paymentsData: PaymentsCompleteRequest = {
          orderId: paymentsResult.orderId,
          userInfo: {
            ...userInfo,
            agreement: true,
          },
          testResults,
          paymentsInfo: {
            planId: selectedOption,
            amount: selectedPlan.price,
          },
        };

        // 3. 결제 결과 페이지로 이동
        navigate('/payments/success', {
          state: {
            orderId: paymentsResult.orderId,
            paymentsData,
            paymentsResult: paymentsResult.result,
          },
        });
      }
    } catch (error) {
      navigate('/payments/fail', { replace: true });
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
            <S.Price>{option.price.toLocaleString()}원</S.Price>
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
