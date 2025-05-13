import { useCallback, useEffect, useState } from 'react';

import { TargetSection } from '@/components/common/ScrollIcon/ScrollIcon';

const getHeaderHeight = () => {
  const header = document.querySelector('header');
  return header ? header.getBoundingClientRect().height : 0;
};

interface UseScrollIconProps {
  targetSections?: TargetSection[];
}

const useScrollIcon = ({ targetSections }: UseScrollIconProps) => {
  const [currentSection, setCurrentSection] = useState<string>('top');

  const handleScroll = useCallback(() => {
    if (!targetSections) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const headerHeight = getHeaderHeight();

    // 페이지 하단에 도달했는지 확인
    if (scrollPosition + windowHeight >= documentHeight - 100) {
      setCurrentSection('bottom');
      return;
    }

    // 각 섹션의 위치 확인
    for (const section of targetSections) {
      const element = document.getElementById(section.id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + rect.height;

      // Header 높이를 고려하여 스크롤 위치 계산
      if (scrollPosition + headerHeight >= elementTop && scrollPosition + headerHeight < elementBottom) {
        setCurrentSection(section.id);
        return;
      }
    }

    // 기본값
    setCurrentSection('top');
  }, [targetSections]);

  const handleClick = useCallback(() => {
    if (!targetSections) return;

    const currentIndex = targetSections.findIndex(section => section.id === currentSection);
    const nextSection = targetSections[currentIndex + 1];
    const headerHeight = getHeaderHeight();

    if (nextSection) {
      const element = document.getElementById(nextSection.id);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - headerHeight,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSection, targetSections]);

  useEffect(() => {
    // 초기 스크롤 위치 체크
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { currentSection, handleClick };
};

export default useScrollIcon;
