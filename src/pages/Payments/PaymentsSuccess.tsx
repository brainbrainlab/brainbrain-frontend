import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { usePaymentsStore } from '@/stores/paymentsStore';

import Button from '@/components/common/Button/Button';
import PageLayout from '@/components/common/PageLayout/PageLayout';

function PaymentsSuccess() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userInfo } = usePaymentsStore();

  useEffect(() => {
    if (!userInfo || !userInfo.email) {
      navigate('/payments/fail', { replace: true });
    }
  }, [navigate, userInfo]);

  const handleButtonClick = () => {
    navigate('/', { replace: true });
  };

  if (!userInfo) {
    navigate('/payments/fail', { replace: true });
    return null;
  }

  return (
    <PageLayout>
      모두 완료되었습니다! 당신의 IQ 테스트 결과는 {userInfo.email}로 전송되었습니다.
      <br />
      만약 10분 후에도 메일이 오지 않는다면 스팸 메일함을 확인해주세요.
      <br /> 그래도 메일을 확인할 수 없다면 문의하기를 통해 이름, 이메일을 포함한 문의를 남겨 주세요.
      <Button filled={true} onClick={handleButtonClick}>
        {t('common.goHome')}
      </Button>
    </PageLayout>
  );
}

export default PaymentsSuccess;
