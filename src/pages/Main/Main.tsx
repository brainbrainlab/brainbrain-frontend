import ScrollIcon, { TargetSection } from '@/components/common/ScrollIcon/ScrollIcon';
import DescriptionSection from '@/components/Main/DescriptionSection';
import ScoreSection from '@/components/Main/ScoreSection';
import TitleSection from '@/components/Main/TitleSection';

import * as S from './Main.styles';

const targetSections: TargetSection[] = [
  { id: 'title', position: 'top' },
  { id: 'description', position: 'bottom' },
  { id: 'score', position: 'bottom' },
];

const Main = () => {
  return (
    <>
      <S.Layout>
        <TitleSection />
        <DescriptionSection />
        <ScoreSection />
      </S.Layout>
      <ScrollIcon targetSections={targetSections} />
    </>
  );
};

export default Main;
