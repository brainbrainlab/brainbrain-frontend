import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from '../../pages/Main/Main.styles';
import ScoreTable, { ScoreLevelType } from '../ScoreTable/ScoreTable';

const ScoreSection: React.FC = () => {
  const [hoveredLevel, setHoveredLevel] = useState<ScoreLevelType | null>(null);
  const { t } = useTranslation();

  return (
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
  );
};

export default ScoreSection;
