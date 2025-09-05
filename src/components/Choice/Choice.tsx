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
    <S.StyledChoiceButton
      width="max-content"
      height="max-content"
      color="#ECECEC"
      borderRadius="0"
      onClick={onClick}
      animation={true}
    >
      <S.ChoiceImage src={getChoiceImage(questionIndex, choiceIndex)} />
    </S.StyledChoiceButton>
  );
}

export default Choice;
