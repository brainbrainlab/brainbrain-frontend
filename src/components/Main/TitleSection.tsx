import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import brain from '@/assets/images/logo.svg';
import textLogo from '@/assets/images/logo_text.svg';

import * as S from '@/components/Main/Main.styles';

import Button from '@/components/common/Button/Button';
import DotAnimation from '@/components/DotAnimation/DotAnimation';
import MainIcons from '@/components/MainIcons/MainIcons';

const SubTitle = () => {
  const { t } = useTranslation();
  return <S.SubTitle>{t('main.subtitle')}</S.SubTitle>;
};

const MainButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Button size="md" fontWeight="extraBold" style={{ zIndex: 2 }} onClick={() => navigate('/test')}>
      {t('main.button')}
    </Button>
  );
};

const TitleSection = () => {
  return (
    <S.TitleSection id="title">
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
