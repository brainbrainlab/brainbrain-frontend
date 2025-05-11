import { useState, useEffect, useRef } from 'react';
import { GoChecklist } from 'react-icons/go';
import { IoBulbOutline } from 'react-icons/io5';
import { LiaCertificateSolid } from 'react-icons/lia';
import * as S from './MainIcons.styles';
import theme from '../../styles/theme';

function MainIcons() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [autoTooltipIndex, setAutoTooltipIndex] = useState<number>(0);
  const [isAutoRotationEnabled, setIsAutoRotationEnabled] = useState<boolean>(true);
  const tooltipCount = 3;
  const autoRotationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (activeTooltip !== null || !isAutoRotationEnabled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setAutoTooltipIndex(prevIndex => (prevIndex + 1) % tooltipCount);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeTooltip, tooltipCount, isAutoRotationEnabled]);

  const handleMouseLeave = () => {
    setActiveTooltip(null);
    setIsAutoRotationEnabled(false);
    setAutoTooltipIndex(0);

    if (autoRotationTimerRef.current) {
      clearTimeout(autoRotationTimerRef.current);
    }

    autoRotationTimerRef.current = setTimeout(() => {
      setIsAutoRotationEnabled(true);
      autoRotationTimerRef.current = null;
    }, 1000);
  };

  const getActiveTooltipIndex = () => {
    if (activeTooltip !== null) {
      return activeTooltip;
    }

    return isAutoRotationEnabled ? autoTooltipIndex : -1;
  };

  return (
    <S.MainIconsWrapper>
      <S.IconWrapper onMouseEnter={() => setActiveTooltip(0)} onMouseLeave={handleMouseLeave}>
        <S.Icon isActive={getActiveTooltipIndex() === 0}>
          <IoBulbOutline size="4rem" color={theme.color.black[700]} />
        </S.Icon>
        <S.Tooltip isActive={getActiveTooltipIndex() === 0}>40분 42문항</S.Tooltip>
      </S.IconWrapper>
      <S.IconWrapper onMouseEnter={() => setActiveTooltip(1)} onMouseLeave={handleMouseLeave}>
        <S.Icon isActive={getActiveTooltipIndex() === 1}>
          <LiaCertificateSolid size="4rem" color={theme.color.black[700]} />
        </S.Icon>
        <S.Tooltip isActive={getActiveTooltipIndex() === 1}>공식 인증서 발급</S.Tooltip>
      </S.IconWrapper>
      <S.IconWrapper onMouseEnter={() => setActiveTooltip(2)} onMouseLeave={handleMouseLeave}>
        <S.Icon isActive={getActiveTooltipIndex() === 2}>
          <GoChecklist size="4rem" color={theme.color.black[700]} />
        </S.Icon>
        <S.Tooltip isActive={getActiveTooltipIndex() === 2}>다양한 문제 유형</S.Tooltip>
      </S.IconWrapper>
    </S.MainIconsWrapper>
  );
}

export default MainIcons;
