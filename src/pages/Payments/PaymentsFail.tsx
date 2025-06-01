import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import PageLayout from '@/components/common/PageLayout/PageLayout';

import * as S from './PaymentsFail.styles';

function PaymentsFail() {
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

  const { error } = location.state;

  return (
    <PageLayout>
      <S.Title>{t('payments.fail.title')}</S.Title>
      <S.ErrorMessage>{error}</S.ErrorMessage>
      <S.ActionsContainer>
        <Button filled={false} onClick={() => navigate(-1)}>
          {t('common.goBack')}
        </Button>
        <Button filled={true} onClick={() => navigate('/')}>
          {t('common.goHome')}
        </Button>
      </S.ActionsContainer>
    </PageLayout>
  );
}

export default PaymentsFail;
