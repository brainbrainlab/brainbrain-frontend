import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePaymentsStore } from '@/stores/paymentsStore';

import PageLayout from '@/components/common/PageLayout/PageLayout';

import { paymentsApi } from '@/api/payments';

function PaymentsProcessing() {
  const navigate = useNavigate();

  const { getPaymentsResults, reset } = usePaymentsStore(state => state.actions);
  const paymentsData = getPaymentsResults();
  useEffect(() => {
    const completePayment = async () => {
      if (!paymentsData.orderId || !paymentsData.userInfoRequest) {
        navigate('/404', { replace: true });
        return;
      }

      try {
        await paymentsApi.completePayments({
          orderId: paymentsData.orderId,
          userInfoRequest: paymentsData.userInfoRequest,
          answers: paymentsData.answers,
          shippingInfoRequest: paymentsData.shippingInfoRequest,
        });

        navigate('/payments/success', { replace: true });
      } catch (error) {
        console.error('Failed to complete payment:', error);
        reset();
        navigate('/payments/fail', {
          state: { error: { message: 'An unexpected error occurred. Please try again later.' } },
        });
      }
    };

    completePayment();
  }, []);

  return (
    <PageLayout>
      {`PDF를 제작해 이메일로 전송하는 중입니다. 잠시만 기다려주세요. \n 최대 5분까지 소요됩니다. 5분이 지나도 화면이 그대로일 경우, 문의하기를 통해 이메일과 성함을 포함한 문의를 남겨주시면 최대한 빠르게 도와드리겠습니다.`}
    </PageLayout>
  );
}

export default PaymentsProcessing;
