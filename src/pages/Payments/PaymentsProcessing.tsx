import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePaymentsStore } from '@/stores/paymentsStore';

import PageLayout from '@/components/common/PageLayout/PageLayout';

import { paymentsApi } from '@/api/payments';

function PaymentsProcessing() {
  const navigate = useNavigate();
  // 스토어에서 필요한 액션들을 가져옵니다.
  const { getPaymentsResults, reset } = usePaymentsStore(state => state.actions);

  useEffect(() => {
    const completePayment = async () => {
      const paymentsData = getPaymentsResults();

      // 1. 스토어 데이터 유효성 검사
      if (!paymentsData.orderId || !paymentsData.userInfoRequest) {
        navigate('/404', { replace: true });
        return;
      }
      try {
        // 2. 백엔드에 최종 결제 완료 요청
        await paymentsApi.completePayments({
          orderId: paymentsData.orderId,
          userInfoRequest: paymentsData.userInfoRequest,
          answers: paymentsData.answers,
          shippingInfoRequest: paymentsData.shippingInfoRequest,
        });
      } catch (error) {
        if (error instanceof SyntaxError && error.message.includes('Unexpected end of JSON input')) {
          console.log('Payment completion successful with empty server response.');
          navigate('/payments/success', { replace: true });
        } else {
          console.error('Failed to complete payment:', error);
          reset();
          navigate('/payments/fail', {
            state: { error: { message: 'An unexpected error occurred. Please try again later.' } },
          });
        }
      }
    };

    completePayment();
  }, []);

  return <PageLayout>결제 정보를 처리 중입니다. 잠시만 기다려 주세요.</PageLayout>;
}

export default PaymentsProcessing;
