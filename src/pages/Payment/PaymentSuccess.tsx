import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import Button from '@/components/Button/Button';
import PageLayout from '@/components/common/PageLayout/PageLayout';

import { PAYMENT_PATHS } from '@/constants/payment';

import * as S from './PaymentSuccess.styles';

interface PaymentSuccessProps {
  plan: {
    id: string;
    title: string;
    price: number;
    features: string[];
  };
  formData: {
    [key: string]: string;
  };
  userInfo: {
    email: string;
    name: string;
    age: string;
    gender: string;
    country: string;
  };
  testResults: {
    answers: number[];
  };
  orderId: string;
  amount: number;
}

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
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

  const { plan, formData, userInfo, testResults, orderId, amount } = location.state as PaymentSuccessProps;

  useEffect(() => {
    const validateQueryParams = () => {
      const queryOrderId = searchParams.get('orderId');
      const queryAmount = searchParams.get('amount');
      const queryPaymentKey = searchParams.get('paymentKey');

      if (!queryOrderId || !queryAmount || !queryPaymentKey) {
        navigate(PAYMENT_PATHS.FAIL, {
          state: {
            error: t('error.invalidParameters'),
          },
        });
        return;
      }

      if (queryOrderId !== orderId || parseInt(queryAmount) !== amount) {
        navigate(PAYMENT_PATHS.FAIL, {
          state: {
            error: t('error.parameterMismatch'),
          },
        });
        return;
      }

      // TODO: 백엔드에서 결제 검증
      // const response = await fetch('/api/payment/verify', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     orderId: queryOrderId,
      //     amount: queryAmount,
      //     paymentKey: queryPaymentKey,
      //   }),
      // });

      // if (!response.ok) {
      //   navigate(PAYMENT_PATHS.FAIL, {
      //     state: {
      //       error: t('error.verificationFailed'),
      //     },
      //   });
      //   return;
      // }
    };

    validateQueryParams();
  }, [searchParams, orderId, amount, navigate, t]);

  return (
    <PageLayout>
      <S.Title>{t('payment.success.title')}</S.Title>

      <S.Section>
        <S.SectionTitle>{t('payment.success.paymentInfo')}</S.SectionTitle>
        <S.InfoList>
          <S.InfoItem>
            <S.InfoLabel>{t('payment.success.orderId')}</S.InfoLabel>
            <S.InfoValue>{orderId}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>{t('payment.success.amount')}</S.InfoLabel>
            <S.InfoValue>
              {amount.toLocaleString()}
              {t('common.currency')}
            </S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>{t('payment.success.productName')}</S.InfoLabel>
            <S.InfoValue>{plan.title}</S.InfoValue>
          </S.InfoItem>
        </S.InfoList>
      </S.Section>

      <S.Section>
        <S.SectionTitle>{t('payment.success.buyerInfo')}</S.SectionTitle>
        <S.InfoList>
          <S.InfoItem>
            <S.InfoLabel>{t('payment.success.name')}</S.InfoLabel>
            <S.InfoValue>{userInfo.name}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>{t('payment.success.email')}</S.InfoLabel>
            <S.InfoValue>{userInfo.email}</S.InfoValue>
          </S.InfoItem>
        </S.InfoList>
      </S.Section>

      <S.ActionsContainer>
        <Button filled={true} onClick={() => navigate('/')}>
          {t('common.goHome')}
        </Button>
      </S.ActionsContainer>
    </PageLayout>
  );
}

export default PaymentSuccess;
