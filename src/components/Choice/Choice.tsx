import Button from '../Button/Button';
import * as S from './Choice.styles';

interface ChoiceProps {
  onClick: () => void;
}

function Choice({ onClick }: ChoiceProps) {
  return (
    <Button width="12rem" height="12rem" color="#ECECEC" onClick={onClick}>
      <S.ChoiceImage></S.ChoiceImage>
    </Button>
  );
}

export default Choice;
