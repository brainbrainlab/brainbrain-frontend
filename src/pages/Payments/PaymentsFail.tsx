import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import PageLayout from '@/components/common/PageLayout/PageLayout';

import * as S from './PaymentsFail.styles';

function PaymentsFail() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <PageLayout>
      <S.Title>{t('payments.fail.title')}</S.Title>
      <S.ErrorMessage>{t('payments.fail.description')}</S.ErrorMessage>
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
