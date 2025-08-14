import styled from 'styled-components';

export const ChoiceImage = styled.img`
  width: 8vw;
  height: 8vw;
  object-fit: cover;

  background-color: ${({ theme }) => theme.color.black[0]};
  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    width: 16vw;
    height: 16vw;
  }
`;
