import { useState, useEffect } from 'react';
import * as S from './Testing.styles';
import Choice from '../../components/Choice/Choice';
import { useNavigate } from 'react-router-dom';
import Timer from '../../components/Timer/Timer';
import { FaCheck } from 'react-icons/fa';
import { validateTest } from '../../utils/testValidation';

// Constants
const TOTAL_QUESTIONS = 42;
const LAST_QUESTION_INDEX = TOTAL_QUESTIONS - 1;
const CHOICES_PER_QUESTION = 8;
const TIME_LIMIT_SECONDS = 2400;
const UNSOLVED_NOTIFICATION_DURATION = 3000;

// Types
type QuestionIndex = number;
type ChoiceIndex = number;
type SolvedQuestions = (number | null)[];

function Testing() {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState<QuestionIndex>(0);
  const [solvedQuestions, setSolvedQuestions] = useState<SolvedQuestions>(Array(TOTAL_QUESTIONS).fill(null));
  const [showUnsolved, setShowUnsolved] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [answers, setAnswers] = useState<SolvedQuestions>(Array(TOTAL_QUESTIONS).fill(null));

  const handleSolveQuestion = (index: QuestionIndex, choiceIndex: ChoiceIndex) => {
    setSolvedQuestions(prev => {
      const newSolved = [...prev];
      newSolved[index] = choiceIndex;
      return newSolved;
    });

    if (questionIndex === LAST_QUESTION_INDEX) {
      setSolvedQuestions(prev => {
        const allSolved = prev.every(solved => solved !== null);
        if (allSolved) {
          handleSubmit();
        } else {
          setShowUnsolved(true);
          setTimeout(() => {
            setShowUnsolved(false);
          }, UNSOLVED_NOTIFICATION_DURATION);
        }
        return prev;
      });
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  const handleChangeQuestion = (index: QuestionIndex) => {
    setQuestionIndex(index);
  };

  const getQuestionImage = (index: QuestionIndex) => {
    return `../../assets/images/questions/${index + 1}.svg`;
  };

  const handleBeforeUnload = (event: Event) => {
    event.preventDefault();
    return '페이지를 나가시면 테스트가 중지됩니다. 그래도 나가시겠습니까?';
  };

  const handleSubmit = () => {
    const validationResult = validateTest(
      startTime,
      new Date(),
      answers.filter((answer): answer is number => answer !== null),
    );

    if (!validationResult.isValid) {
      navigate('/test-invalid', { state: { reasons: validationResult.reasons } });
      return;
    }

    // Calculate result based on answers
    const result = {
      type:
        answers.filter(answer => answer !== null).reduce((acc, curr) => acc + curr, 0) > TOTAL_QUESTIONS * 2
          ? 'A'
          : 'B',
      answers: answers,
    };

    navigate('/result', { state: { result } });
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array since handleBeforeUnload doesn't depend on any props or state

  return (
    <S.Layout>
      <Timer TIME_LIMIT={TIME_LIMIT_SECONDS} />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <S.QuestionText>Q{questionIndex + 1}.</S.QuestionText>
          <S.QuestionImageWrapper>
            <S.QuestionImage src={getQuestionImage(questionIndex)}></S.QuestionImage>
          </S.QuestionImageWrapper>
        </S.QuestionWrapper>
        <S.ChoiceContainer>
          {Array(CHOICES_PER_QUESTION)
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
        {questionIndex !== LAST_QUESTION_INDEX ? (
          <S.NextButton onClick={() => handleChangeQuestion(questionIndex + 1)} />
        ) : (
          <div style={{ width: '3rem' }}></div>
        )}
      </S.QuestionButtonWrapper>
    </S.Layout>
  );
}

export default Testing;
