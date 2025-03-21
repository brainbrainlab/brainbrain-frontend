import { useEffect } from 'react';
import { useRef, useState } from 'react';
import * as S from './Testing.styles';
import Logo from '../../assets/images/logo.svg';
import Choice from '../../components/Choice/Choice';
import { useNavigate } from 'react-router-dom';

function Testing() {
  const navigate = useNavigate();
  const TIME_LIMIT = 2400;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [solvedQuestions, setSolvedQuestions] = useState<boolean[]>(Array(36).fill(false));

  const startTime = useRef(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(TIME_LIMIT - (new Date().getTime() - startTime.current.getTime()) / 1000);
    }, 1000);
    if (timeLeft <= 0) {
      clearInterval(interval);
      navigate('/result');
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleSolveQuestion = (index: number) => {
    setSolvedQuestions(prev => {
      const newSolved = [...prev];
      newSolved[index] = true;
      return newSolved;
    });

    questionIndex === 35 ? null : setQuestionIndex(prev => prev + 1); //TODO: 마지막 문제 풀이 후 결과 페이지로 이동
  };

  const handleChangeQuestion = (index: number) => {
    setQuestionIndex(index);
  };

  const handleBeforeUnload = (event: Event) => {
    event.preventDefault();
    return '페이지를 나가시면 테스트가 중지됩니다. 그래도 나가시겠습니까?';
  };
  window.addEventListener('beforeunload', handleBeforeUnload);

  return (
    <S.Layout>
      <S.TimerContainer>
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
      </S.TimerContainer>

      <S.QuestionText>Q{questionIndex + 1}.</S.QuestionText>
      <S.QuestionContainer>
        <S.QuestionImage src={Logo} />

        <S.ChoiceContainer>
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <Choice key={index} onClick={() => handleSolveQuestion(questionIndex)} />
            ))}
        </S.ChoiceContainer>
      </S.QuestionContainer>
      <S.QuestionButtonWrapper>
        {questionIndex !== 0 ? (
          <S.PreviousButton onClick={() => handleChangeQuestion(questionIndex - 1)} />
        ) : (
          <div style={{ width: '3rem' }}></div>
        )}
        <S.ToggleButton />
        <S.QuestionButtonContainer>
          {solvedQuestions.map((solved, index) => (
            <S.QuestionButton
              solved={solved}
              current={index === questionIndex}
              key={index}
              onClick={() => handleChangeQuestion(index)}
            >
              {index + 1}
            </S.QuestionButton>
          ))}
        </S.QuestionButtonContainer>
        {questionIndex !== 35 ? (
          <S.NextButton onClick={() => handleChangeQuestion(questionIndex + 1)} />
        ) : (
          <div style={{ width: '3rem' }}></div>
        )}
      </S.QuestionButtonWrapper>
    </S.Layout>
  );
}

export default Testing;
