import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Timer.styles';

interface TimerProps {
  TIME_LIMIT: number;
}

const Timer = React.memo(({ TIME_LIMIT }: TimerProps) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const startTime = useRef(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = (new Date().getTime() - startTime.current.getTime()) / 1000;
      if (TIME_LIMIT - elapsed <= 0) {
        clearInterval(interval);
        navigate('/result');
      } else {
        setTimeLeft(TIME_LIMIT - elapsed);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <S.TimerText>
        {timeLeft / 60 > 10
          ? `${Math.floor(timeLeft / 60)} `
          : timeLeft / 60 > 1
          ? `0${Math.floor(timeLeft / 60)} `
          : `00 `}
        :{' '}
        {timeLeft % 60 > 10
          ? `${Math.floor(timeLeft % 60)} `
          : timeLeft % 60 > 1
          ? `0${Math.floor(timeLeft % 60)} `
          : `00 `}
      </S.TimerText>
      <S.TimerBar value={timeLeft / TIME_LIMIT} />
    </S.Container>
  );
});

Timer.displayName = 'Timer';

export default Timer;
