import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import * as S from './NotFound.styles';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Content>
        <S.Title>404</S.Title>
        <S.Description>{t('error.pageNotFound')}</S.Description>
        <S.Button onClick={() => navigate('/')}>{t('common.goToHome')}</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default NotFound;
