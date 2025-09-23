import * as S from './Choice.styles';

interface ChoiceProps {
  onClick: () => void;
  questionIndex: number;
  choiceIndex: number;
  isSelected: boolean;
}

function Choice({ onClick, questionIndex, choiceIndex, isSelected }: ChoiceProps) {
  const getChoiceImage = (questionIndex: number, choiceIndex: number) => {
    return `../../assets/images/choices/question_${questionIndex + 1}/${choiceIndex + 1}.png`;
  };

  return (
    <S.StyledChoiceButton
      width="max-content"
      height="max-content"
      color="#ECECEC"
      borderRadius="0"
      onClick={onClick}
      animation={true}
      isSelected={isSelected}
    >
      <S.ChoiceImage src={getChoiceImage(questionIndex, choiceIndex)} />
    </S.StyledChoiceButton>
  );
}

export default Choice;
