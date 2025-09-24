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

export const StyledChoiceButton = styled(Button)<{ isSelected: boolean }>`
  overflow: hidden;

  position: relative;

  padding: 0;
  border: ${({ isSelected, theme }) => (isSelected ? `0.6rem solid ${theme.color.primary[400]}` : `none`)};

  background-color: #ececec;
  box-shadow: 0.8rem 0.8rem 8px rgb(0 0 0 / 10%);

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgb(0 0 0 / 20%); /* 어둡게 만들 색상과 투명도 */
    opacity: 0; /* 평소에는 완전히 투명하게 */

    transition: opacity 0.3s ease; /* 부드러운 전환 효과 */
  }

  /* 버튼에 hover하면 가상 요소가 나타나도록(어둡게) 변경 */
  &:hover::before {
    opacity: 1;
  }
`;
