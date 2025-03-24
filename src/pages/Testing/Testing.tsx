import { useState } from 'react';
import * as S from './Testing.styles';
import Choice from '../../components/Choice/Choice';
import { useNavigate } from 'react-router-dom';
import Timer from '../../components/Timer/Timer';
import { FaCheck } from 'react-icons/fa';

function Testing() {
  const navigate = useNavigate();
  const TIME_LIMIT = 2400;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [solvedQuestions, setSolvedQuestions] = useState<number[]>(Array(36).fill(null));
  const [showUnsolved, setShowUnsolved] = useState(false);

  const handleSolveQuestion = (index: number, choiceIndex: number) => {
    setSolvedQuestions(prev => {
      const newSolved = [...prev];
      newSolved[index] = choiceIndex;
      return newSolved;
    });

    if (questionIndex === 35) {
      setSolvedQuestions(prev => {
        const allSolved = prev.every(solved => solved !== null);
        if (allSolved) {
          navigate('/result');
        } else {
          setShowUnsolved(true);
          setTimeout(() => {
            setShowUnsolved(false);
          }, 3000);
        }
        return prev;
      });
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  const handleChangeQuestion = (index: number) => {
    setQuestionIndex(index);
  };

  const getQuestionImage = (index: number) => {
    return `../../assets/images/questions/${index + 1}.svg`;
  };

  const handleBeforeUnload = (event: Event) => {
    event.preventDefault();
    return '페이지를 나가시면 테스트가 중지됩니다. 그래도 나가시겠습니까?';
  };
  window.addEventListener('beforeunload', handleBeforeUnload);

  return (
    <S.Layout>
      <Timer TIME_LIMIT={TIME_LIMIT} />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <S.QuestionText>Q{questionIndex + 1}.</S.QuestionText>
          <S.QuestionImageWrapper>
            <S.QuestionImage src={getQuestionImage(questionIndex)}></S.QuestionImage>
          </S.QuestionImageWrapper>
        </S.QuestionWrapper>
        <S.ChoiceContainer>
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <Choice
                key={index}
                onClick={() => handleSolveQuestion(questionIndex, index)}
                questionIndex={questionIndex}
                choiceIndex={index}
              />
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
        <S.QuestionButtonContainer showUnsolved={showUnsolved}>
          {solvedQuestions.map((solved, index) => (
            <S.QuestionButton
              solved={solved !== null}
              current={index === questionIndex}
              key={index}
              onClick={() => handleChangeQuestion(index)}
              showUnsolved={solved === null && showUnsolved}
            >
              {solved !== null ? <FaCheck color="white" /> : index + 1}
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
