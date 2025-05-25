import useScrollIcon from '@/hooks/Landing/useScrollIcon';

import * as S from './ScrollIcon.styles';

export interface TargetSection {
  id: string;
  position: 'top' | 'bottom';
}

interface ScrollIconProps {
  targetSections?: TargetSection[];
}

const ScrollIcon = ({ targetSections }: ScrollIconProps) => {
  const { currentSection, handleClick } = useScrollIcon({ targetSections });

  const isBottom = targetSections ? currentSection === 'bottom' : false;

  return (
    <S.Layout>
      <S.ScrollIcon
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-label={isBottom ? '위로 스크롤' : '아래로 스크롤'}
        size="3rem"
        $isBottom={isBottom}
      />
    </S.Layout>
  );
};

export default ScrollIcon;
