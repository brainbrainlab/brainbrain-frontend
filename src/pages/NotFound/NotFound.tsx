import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button/Button';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import * as S from './NotFound.styles';

function NotFound() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <S.Title>404</S.Title>
      <S.Description>페이지를 찾을 수 없습니다.</S.Description>
      <Button onClick={() => navigate('/')}>홈으로 돌아가기</Button>
    </PageLayout>
  );
}

export default NotFound;
