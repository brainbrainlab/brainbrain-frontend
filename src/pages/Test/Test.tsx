import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePaymentsStore } from '@/stores/paymentsStore';

import Choice from '@/components/Choice/Choice';
import PageLayout from '@/components/common/PageLayout/PageLayout';
import TestCompletionModal from '@/components/TestCompletionModal/TestCompletionModal';
import TestWarningModal from '@/components/TestWarningModal/TestWarningModal';
import Timer from '@/components/Timer/Timer';

import { validateTest } from '@/utils/testValidation';

import * as S from './Test.styles';

const TOTAL_QUESTIONS = 42;
const PRELOAD_AHEAD_COUNT = 5;
const LAST_QUESTION_INDEX = TOTAL_QUESTIONS - 1;
const CHOICES_PER_QUESTION = 8;
const TIME_LIMIT_SECONDS = 60 * 40;
const UNSOLVED_NOTIFICATION_DURATION = 3000;

type QuestionIndex = number;
type ChoiceIndex = number;
type SolvedQuestions = (number | null)[];

function Test() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState<QuestionIndex>(0);
  const [showUnsolved, setShowUnsolved] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [answers, setAnswers] = useState<SolvedQuestions>(Array(TOTAL_QUESTIONS).fill(null));
  const [isTestWarningModalOpen, setIsTestWarningModalOpen] = useState(true);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);

  useEffect(() => {
    Array.from({ length: PRELOAD_AHEAD_COUNT }).forEach((_, i) => {
      const nextQuestionIndex = questionIndex + 1 + i;

      if (nextQuestionIndex < TOTAL_QUESTIONS) {
        const questionImg = new Image();
        questionImg.src = `../../assets/images/questions/${nextQuestionIndex + 1}.png`;

        Array.from({ length: CHOICES_PER_QUESTION }).forEach((_, choiceIdx) => {
          const choiceImg = new Image();
          choiceImg.src = `../../assets/images/choices/question_${nextQuestionIndex + 1}/${choiceIdx + 1}.png`;
        });
      }
    });
  }, [questionIndex]);

  const handleSolveQuestion = (index: QuestionIndex, choiceIndex: ChoiceIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = choiceIndex;
    setAnswers(newAnswers);

    const allSolved = newAnswers.every(answer => answer !== null);
    if (allSolved) {
      setIsCompletionModalOpen(true);
    } else if (questionIndex === LAST_QUESTION_INDEX) {
      setShowUnsolved(true);
      setTimeout(() => {
        setShowUnsolved(false);
      }, UNSOLVED_NOTIFICATION_DURATION);
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  const handleChangeQuestion = (index: QuestionIndex) => {
    setQuestionIndex(index);
  };

  const getQuestionImage = (index: QuestionIndex) => {
    return `../../assets/images/questions/${index + 1}.png`;
  };

  const handleBeforeUnload = (event: Event) => {
    event.preventDefault();
    return '페이지를 나가시면 테스트가 중지됩니다. 그래도 나가시겠습니까?';
  };

  const handleSubmit = useCallback(() => {
    if (!startTime) {
      return;
    }

    const validationResult = validateTest(
      startTime,
      new Date(),
      answers.filter((answer): answer is number => answer !== null),
    );

    if (!validationResult.isValid) {
      // navigate('/test-invalid', { state: { reasons: validationResult.reasons } });
      // return;
    }

    const result = answers;
    const { setTestResults } = usePaymentsStore.getState().actions;
    setTestResults(result);

    navigate('/user-info');
  }, [answers, startTime, navigate]);

  const handleReview = () => {
    setIsCompletionModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <PageLayout innerWidth="90%" fitToHeight={true}>
      <TestWarningModal
        isOpen={isTestWarningModalOpen}
        onClose={() => {
          setIsTestWarningModalOpen(false);
          setStartTime(new Date());
        }}
      />
      <TestCompletionModal
        isOpen={isCompletionModalOpen}
        onClose={() => setIsCompletionModalOpen(false)}
        onSubmit={handleSubmit}
        onReview={handleReview}
      />
      <Timer
        TIME_LIMIT={TIME_LIMIT_SECONDS}
        TOTAL_COUNT={TOTAL_QUESTIONS}
        solvedCount={answers.filter(val => val !== null).length}
        startTime={startTime}
        handleSubmit={handleSubmit}
      />
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
                isSelected={answers[questionIndex] === index}
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
        <S.QuestionButtonContainer $showUnsolved={showUnsolved}>
          {answers.map((solved, index) => (
            <S.QuestionButton
              key={index}
              $solved={solved !== null}
              $current={index === questionIndex}
              onClick={() => handleChangeQuestion(index)}
              $showUnsolved={solved === null && showUnsolved}
            >
              {index + 1}
            </S.QuestionButton>
          ))}
        </S.QuestionButtonContainer>
        {questionIndex !== LAST_QUESTION_INDEX ? (
          <S.NextButton onClick={() => handleChangeQuestion(questionIndex + 1)} />
        ) : (
          <div style={{ width: '3rem' }}></div>
        )}
      </S.QuestionButtonWrapper>
    </PageLayout>
  );
}

export default Test;
