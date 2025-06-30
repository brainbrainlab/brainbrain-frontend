import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Timer.styles';

interface TimerProps {
  TIME_LIMIT: number;
  startTime: Date | null;
  handleSubmit: () => void;
}

const Timer = memo(({ TIME_LIMIT, startTime, handleSubmit }: TimerProps) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (startTime) {
      intervalRef.current = setInterval(() => {
        const elapsed = (new Date().getTime() - startTime.getTime()) / 1000;
        if (TIME_LIMIT - elapsed <= 0) {
          clearInterval(intervalRef.current);
          handleSubmit();
        } else {
          setTimeLeft(TIME_LIMIT - elapsed);
        }
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTime, TIME_LIMIT, navigate]);

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
