import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.black[800]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.black[100]};
`;
