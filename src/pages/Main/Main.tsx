import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import DotAnimation from '../../components/DotAnimation/DotAnimation';
import { useTranslation } from 'react-i18next';
import textLogo from '../../assets/images/logo_text.svg';
import brain from '../../assets/images/logo.svg';
import checkGreen from '../../assets/images/check_green.svg';
import graph from '../../assets/images/graph.svg';
import globeWithHuman from '../../assets/images/globe_with_human.svg';
import ScoreTable, { ScoreLevelType } from '../../components/ScoreTable/ScoreTable';
import MainIcons from '../../components/MainIcons/MainIcons';
const Section1DescriptionBox = React.memo<{ index: number }>(({ index }) => {
  const { t } = useTranslation();
  return (
    <S.Section1DescriptionBoxWrapper>
      <S.Section1DescriptionTitle>
        {index === 1 && <S.Section1DescriptionTitleIcon src={checkGreen} alt="check_green" />}
        {index === 2 && <S.Section1DescriptionTitleIcon src={graph} alt="graph" />}
        {index === 3 && <S.Section1DescriptionTitleIcon src={globeWithHuman} alt="globe_with_human" />}
        {t(`main.section1.description${index}.title`)}
      </S.Section1DescriptionTitle>
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
    <Button fontWeight="extraBold" style={{ zIndex: 2 }} onClick={() => navigate('/test')}>
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
      <S.Section1>
        <Section1Title />
        <Section1Subtitle />
        <S.Section1DescriptionWrapper>
          <Section1DescriptionBox index={1} />
          <Section1DescriptionBox index={2} />
          <Section1DescriptionBox index={3} />
        </S.Section1DescriptionWrapper>
      </S.Section1>
      <S.Section2>
        <S.Section2TitleContainer>
          <S.Section2Title>{t('main.section2.title')}</S.Section2Title>
          <S.Section2SubTitle>{t('main.section2.subtitle')}</S.Section2SubTitle>
        </S.Section2TitleContainer>
        <S.Section2DescriptionContainer>
          <S.StyledIqGraph $hoveredLevel={hoveredLevel} />
          <ScoreTable hoveredLevel={hoveredLevel} onHover={setHoveredLevel} />
        </S.Section2DescriptionContainer>
      </S.Section2>
    </S.Layout>
  );
}

export default Main;
