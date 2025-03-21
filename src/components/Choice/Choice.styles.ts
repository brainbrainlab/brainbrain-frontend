import styled from 'styled-components';

export const Choice = styled.button`
  width: 12rem;
  height: 12rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.black[100]};
  padding: 1rem;
  font-size: 1.5rem;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.black[200]};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.black[300]};
  }
`;

export const ChoiceImage = styled.img`
  width: 90%;
  height: 90%;
  background-color: ${({ theme }) => theme.color.black[100]};
  border-radius: 0.6rem;
`;
