import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../pages/Main/Main.styles';
import checkGreen from '../../assets/images/check_green.svg';
import graph from '../../assets/images/graph.svg';
import globeWithHuman from '../../assets/images/globe_with_human.svg';

interface DescriptionBoxProps {
  index: number;
}

const DescriptionBox: React.FC<DescriptionBoxProps> = ({ index }) => {
  const { t } = useTranslation();
  const icons = {
    1: checkGreen,
    2: graph,
    3: globeWithHuman,
  };

  return (
    <S.Section1DescriptionBoxWrapper>
      <S.Section1DescriptionTitle>
        <S.Section1DescriptionTitleIcon src={icons[index as keyof typeof icons]} alt={`icon_${index}`} />
        {t(`main.section1.description${index}.title`)}
      </S.Section1DescriptionTitle>
      <S.Section1Description>{t(`main.section1.description${index}.content`)}</S.Section1Description>
    </S.Section1DescriptionBoxWrapper>
  );
};

const DescriptionSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Section1>
      <S.Section1Title>{t('main.section1.title')}</S.Section1Title>
      <S.Section1Subtitle>{t('main.section1.subtitle')}</S.Section1Subtitle>
      <S.Section1DescriptionWrapper>
        <DescriptionBox index={1} />
        <DescriptionBox index={2} />
        <DescriptionBox index={3} />
      </S.Section1DescriptionWrapper>
    </S.Section1>
  );
};

export default DescriptionSection;
