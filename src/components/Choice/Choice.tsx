import Button from '@/components/common/Button/Button';

import * as S from './Choice.styles';

interface ChoiceProps {
  onClick: () => void;
  questionIndex: number;
  choiceIndex: number;
}

function Choice({ onClick, questionIndex, choiceIndex }: ChoiceProps) {
  const getChoiceImage = (questionIndex: number, choiceIndex: number) => {
    return `../../assets/images/choices/question_${questionIndex + 1}/${choiceIndex + 1}.svg`;
  };

  return (
    <Button width="7.5vw" height="7.5vw" color="#ECECEC" borderRadius="0" onClick={onClick} animation={false}>
      <S.ChoiceImage src={getChoiceImage(questionIndex, choiceIndex)} />
    </Button>
  );
}

export default Choice;
