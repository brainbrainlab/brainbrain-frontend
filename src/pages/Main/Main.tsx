import * as S from './Main.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <Button fontWeight="extraBold" onClick={() => navigate('/testing')}>
        테스트하러 가기
      </Button>
    </S.Layout>
  );
}

export default Main;
