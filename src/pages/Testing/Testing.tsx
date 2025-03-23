import { useState } from 'react';
import * as S from './Testing.styles';
import Choice from '../../components/Choice/Choice';
import { useNavigate } from 'react-router-dom';
import Timer from '../../components/Timer/Timer';

function Testing() {
  const navigate = useNavigate();
  const TIME_LIMIT = 2400;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [solvedQuestions, setSolvedQuestions] = useState<boolean[]>(Array(36).fill(false));

  const handleSolveQuestion = (index: number) => {
    setSolvedQuestions(prev => {
      const newSolved = [...prev];
      newSolved[index] = true;
      return newSolved;
    });

    if (questionIndex === 35) {
      const allSolved = solvedQuestions.every((solved, i) => (i === index ? true : solved));
      if (allSolved) {
        navigate('/result');
      } else {
        alert(
          `${solvedQuestions
            .map((solved, i) => (i === index || solved ? null : i + 1))
            .filter(num => num !== null)
            .join(', ')}번 문제를 풀어주세요.`,
        );
      }
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
                onClick={() => handleSolveQuestion(questionIndex)}
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
