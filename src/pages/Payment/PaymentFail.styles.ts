import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.color.error[500]};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.color.black[900]};
  text-align: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
