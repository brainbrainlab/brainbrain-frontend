import Button from '../Button/Button';
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
    <Button width="12.5rem" height="12.5rem" color="#ECECEC" onClick={onClick}>
      <S.ChoiceImage src={getChoiceImage(questionIndex, choiceIndex)} />
    </Button>
  );
}

export default Choice;
