import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import brain from '../../assets/images/logo.svg';
import textLogo from '../../assets/images/logo_text.svg';
import * as S from '../../pages/Main/Main.styles';
import Button from '../Button/Button';
import DotAnimation from '../DotAnimation/DotAnimation';
import MainIcons from '../MainIcons/MainIcons';

const SubTitle: React.FC = () => {
  const { t } = useTranslation();
  return <S.SubTitle>{t('main.subtitle')}</S.SubTitle>;
};

const MainButton: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Button fontWeight="extraBold" style={{ zIndex: 2 }} onClick={() => navigate('/test')}>
      {t('main.button')}
    </Button>
  );
};

const TitleSection: React.FC = () => {
  return (
    <S.TitleSection>
      <S.DotAnimationWrapper>
        <DotAnimation />
        <S.BackgroundImage src={brain} alt="brain" />
      </S.DotAnimationWrapper>
      <S.TitleTextAndImageWrapper>
        <S.TitleTextContainer>
          <S.TextLogo src={textLogo} alt="Text Logo" />
          <SubTitle />
          <MainIcons />
        </S.TitleTextContainer>
        <MainButton />
      </S.TitleTextAndImageWrapper>
    </S.TitleSection>
  );
};

export default TitleSection;
