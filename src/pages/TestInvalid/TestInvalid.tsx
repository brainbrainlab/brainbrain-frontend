import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaExclamationTriangle } from 'react-icons/fa';
import * as S from './TestInvalid.styles';

const TestInvalid: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetakeTest = () => {
    navigate('/test');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <FaExclamationTriangle />
        </S.IconWrapper>
        <S.Title>{t('error.testInvalid')}</S.Title>
        <S.Description>{t('error.testInvalidDescription')}</S.Description>
        <S.Button onClick={handleRetakeTest}>{t('error.retakeTest')}</S.Button>
        <S.AdditionalInfo>
          정상적으로 테스트를 진행했는데도 같은 문제가 반복된다면{' '}
          <S.ContactLink onClick={handleContactClick}>문의하기</S.ContactLink>를 이용해 주세요.
        </S.AdditionalInfo>
      </S.Content>
    </S.Container>
  );
};

export default TestInvalid;
