import React, { useState } from 'react';
import * as S from './Main.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import DotAnimation from '../../components/DotAnimation/DotAnimation';
import { useTranslation } from 'react-i18next';
import textLogo from '../../assets/images/logo_text.svg';
import { MdCircle } from 'react-icons/md';
import ScoreTable, { ScoreLevelType } from '../../components/ScoreTable/ScoreTable';

// Types
type DescriptionProps = {
  translationKey: string;
};

// Reusable Components
const Description = React.memo<DescriptionProps>(({ translationKey }) => {
  const { t } = useTranslation();
  return (
    <S.Description>
      <MdCircle size={7} />
      {t(translationKey)}
    </S.Description>
  );
});

const Section1DescriptionBox = React.memo<{ index: number }>(({ index }) => {
  const { t } = useTranslation();
  return (
    <S.Section1DescriptionBoxWrapper>
      <S.Section1DescriptionTitle>{t(`main.section1.description${index}.title`)}</S.Section1DescriptionTitle>
      <S.Section1Description>{t(`main.section1.description${index}.content`)}</S.Section1Description>
    </S.Section1DescriptionBoxWrapper>
  );
});

const SubTitle = React.memo(() => {
  const { t } = useTranslation();
  return <S.SubTitle>{t('main.subtitle')}</S.SubTitle>;
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

function Main() {
  const [hoveredLevel, setHoveredLevel] = useState<ScoreLevelType | null>(null);
  const { t } = useTranslation();

  return (
    <S.Layout>
      <S.TitleSection>
        <S.TitleTextAndImageWrapper>
          <S.TitleTextContainer>
            <S.TextLogo src={textLogo} alt="Text Logo" />
            <SubTitle />
            <Description translationKey="main.description1" />
            <Description translationKey="main.description2" />
            <Description translationKey="main.description3" />
            <Description translationKey="main.description4" />
          </S.TitleTextContainer>
          <DotAnimation />
        </S.TitleTextAndImageWrapper>
        <MainButton />
      </S.TitleSection>
      <S.Section>
        <Section1Title />
        <Section1Subtitle />
        <S.Section1DescriptionWrapper>
          <Section1DescriptionBox index={1} />
          <S.Section1DescriptionDivider />
          <Section1DescriptionBox index={2} />
          <S.Section1DescriptionDivider />
          <Section1DescriptionBox index={3} />
        </S.Section1DescriptionWrapper>
      </S.Section>
      <S.Section>
        <S.Section2TitleContainer>
          <S.Section2Title>{t('main.section2.title')}</S.Section2Title>
          <S.Section2SubTitle>{t('main.section2.subtitle')}</S.Section2SubTitle>
        </S.Section2TitleContainer>
        <S.Section2DescriptionContainer>
          <S.StyledIqGraph $hoveredLevel={hoveredLevel} />
          <ScoreTable hoveredLevel={hoveredLevel} onHover={setHoveredLevel} />
        </S.Section2DescriptionContainer>
      </S.Section>
    </S.Layout>
  );
}

export default Main;
