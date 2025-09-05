import styled from 'styled-components';

import Button from '../common/Button/Button';

export const ChoiceImage = styled.img`
  width: 8vw;
  height: 8vw;
  object-fit: cover;

  background-color: ${({ theme }) => theme.color.black[0]};

  @media (width <= ${({ theme }) => theme.breakpoints.sm}) {
    width: 14vw;
    height: 14vw;
  }
`;

export const StyledChoiceButton = styled(Button)`
  background-color: #ececec;
  padding: 0;
  box-shadow: 0.8rem 0.8rem 8px rgba(0, 0, 0, 0.1);

  /* 가상 요소의 위치 기준점을 잡아주기 위해 필요합니다. */
  position: relative;
  /* 둥근 모서리 밖으로 튀어나가지 않게 합니다. */
  overflow: hidden;

  /* 검은색 오버레이 역할을 할 가상 요소 정의 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.2); /* 어둡게 만들 색상과 투명도 */

    opacity: 0; /* 평소에는 완전히 투명하게 */
    transition: opacity 0.3s ease; /* 부드러운 전환 효과 */
  }

  /* 버튼에 hover하면 가상 요소가 나타나도록(어둡게) 변경 */
  &:hover::before {
    opacity: 1;
  }
`;
