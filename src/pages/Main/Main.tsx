import React from 'react';
import * as S from './Main.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import DotAnimation from '../../components/DotAnimation/DotAnimation';
import { useTranslation } from 'react-i18next';
import textLogo from '../../assets/images/logo_text.svg';
const SubTitle = React.memo(() => {
  const { t } = useTranslation();
  return <S.SubTitle>{t('main.subtitle')}</S.SubTitle>;
});

const Description = React.memo(() => {
  const { t } = useTranslation();
  return <S.Description>{t('main.description')}</S.Description>;
});

const MainButton = React.memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Button fontWeight="extraBold" onClick={() => navigate('/testing')}>
      {t('main.button')}
    </Button>
  );
});

const Section1Title = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Title>{t('main.section1.title')}</S.Section1Title>;
});

const Section1Subtitle = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Subtitle>{t('main.section1.subtitle')}</S.Section1Subtitle>;
});

const Section1Description1 = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Description>{t('main.section1.description1')}</S.Section1Description>;
});

const Section1Description2 = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Description>{t('main.section1.description2')}</S.Section1Description>;
});

const Section1Description3 = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Description>{t('main.section1.description3')}</S.Section1Description>;
});

function Main() {
  return (
    <S.Layout>
      <S.TitleSection>
        <S.TitleTextAndImageWrapper>
          <S.TitleTextContainer>
            <S.TextLogo src={textLogo} />
            <SubTitle />
            <Description />
          </S.TitleTextContainer>
          <DotAnimation />
        </S.TitleTextAndImageWrapper>
        <MainButton />
      </S.TitleSection>
      <S.Section1>
        <Section1Title />
        <Section1Subtitle />
        <S.Section1DescriptionWrapper>
          <Section1Description1 />
          <Section1Description2 />
          <Section1Description3 />
        </S.Section1DescriptionWrapper>
      </S.Section1>
    </S.Layout>
  );
}

export default Main;
