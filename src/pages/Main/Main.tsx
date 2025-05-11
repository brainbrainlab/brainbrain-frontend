import React from 'react';
import * as S from './Main.styles';
import TitleSection from '../../components/Main/TitleSection';
import DescriptionSection from '../../components/Main/DescriptionSection';
import ScoreSection from '../../components/Main/ScoreSection';

const Main: React.FC = () => {
  return (
    <S.Layout>
      <TitleSection />
      <DescriptionSection />
      <ScoreSection />
    </S.Layout>
  );
};

export default Main;
