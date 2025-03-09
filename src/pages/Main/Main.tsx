import * as S from './Main.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import DotAnimation from '../../components/DotAnimation/DotAnimation';

function Main() {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.TitleSection>
        <S.TitleTextAndImageWrapper>
          <S.TitleTextContainer>
            <S.Title>BrainBrain</S.Title>
            <S.SubTitle>당신의 능력을 테스트해보세요.</S.SubTitle>
            <S.Description>
              브레인브레인은 당신의 뇌를 테스트하는 플랫폼입니다. <br />
              당신의 뇌를 테스트하고 싶다면 테스트하러 가기 버튼을 눌러주세요.
            </S.Description>
          </S.TitleTextContainer>
          <DotAnimation width={500} height={500} />
        </S.TitleTextAndImageWrapper>
        <Button fontWeight="extraBold" onClick={() => navigate('/testing')}>
          테스트하러 가기
        </Button>
      </S.TitleSection>
    </S.Layout>
  );
}

export default Main;
