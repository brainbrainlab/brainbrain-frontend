import * as S from './Main.styles';
import DescriptionSection from '../../components/Main/DescriptionSection';
import ScoreSection from '../../components/Main/ScoreSection';
import TitleSection from '../../components/Main/TitleSection';

const Main = () => {
  return (
    <S.Layout>
      <TitleSection />
      <DescriptionSection />
      <ScoreSection />
    </S.Layout>
  );
};

export default Main;
