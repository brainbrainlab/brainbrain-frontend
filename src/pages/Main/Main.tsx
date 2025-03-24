import React from 'react';
import * as S from './Main.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import DotAnimation from '../../components/DotAnimation/DotAnimation';
import { useTranslation } from 'react-i18next';
import textLogo from '../../assets/images/logo_text.svg';
import { MdCircle } from 'react-icons/md';
const SubTitle = React.memo(() => {
  const { t } = useTranslation();
  return <S.SubTitle>{t('main.subtitle')}</S.SubTitle>;
});

const Description1 = React.memo(() => {
  const { t } = useTranslation();
  return (
    <S.Description>
      <MdCircle size={7} />
      {t('main.description1')}
    </S.Description>
  );
});

const Description2 = React.memo(() => {
  const { t } = useTranslation();
  return (
    <S.Description>
      <MdCircle size={7} />
      {t('main.description2')}
    </S.Description>
  );
});

const Description3 = React.memo(() => {
  const { t } = useTranslation();
  return (
    <S.Description>
      <MdCircle size={7} />
      {t('main.description3')}
    </S.Description>
  );
});

const Description4 = React.memo(() => {
  const { t } = useTranslation();
  return (
    <S.Description>
      <MdCircle size={7} />
      {t('main.description4')}
    </S.Description>
  );
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

const Section1Description1Title = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1DescriptionTitle>{t('main.section1.description1.title')}</S.Section1DescriptionTitle>;
});

const Section1Description1 = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Description>{t('main.section1.description1.content')}</S.Section1Description>;
});

const Section1Description2Title = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1DescriptionTitle>{t('main.section1.description2.title')}</S.Section1DescriptionTitle>;
});

const Section1Description2 = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Description>{t('main.section1.description2.content')}</S.Section1Description>;
});

const Section1Description3Title = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1DescriptionTitle>{t('main.section1.description3.title')}</S.Section1DescriptionTitle>;
});

const Section1Description3 = React.memo(() => {
  const { t } = useTranslation();
  return <S.Section1Description>{t('main.section1.description3.content')}</S.Section1Description>;
});

function Main() {
  return (
    <S.Layout>
      <S.TitleSection>
        <S.TitleTextAndImageWrapper>
          <S.TitleTextContainer>
            <S.TextLogo src={textLogo} />
            <SubTitle />
            <Description1 />
            <Description2 />
            <Description3 />
            <Description4 />
          </S.TitleTextContainer>
          <DotAnimation />
        </S.TitleTextAndImageWrapper>
        <MainButton />
      </S.TitleSection>
      <S.Section1>
        <Section1Title />
        <Section1Subtitle />
        <S.Section1DescriptionWrapper>
          <S.Section1DescriptionBoxWrapper>
            <Section1Description1Title />
            <Section1Description1 />
          </S.Section1DescriptionBoxWrapper>
          <S.Section1DescriptionDivider />
          <S.Section1DescriptionBoxWrapper>
            <Section1Description2Title />
            <Section1Description2 />
          </S.Section1DescriptionBoxWrapper>
          <S.Section1DescriptionDivider />
          <S.Section1DescriptionBoxWrapper>
            <Section1Description3Title />
            <Section1Description3 />
          </S.Section1DescriptionBoxWrapper>
        </S.Section1DescriptionWrapper>
      </S.Section1>
    </S.Layout>
  );
}

export default Main;
