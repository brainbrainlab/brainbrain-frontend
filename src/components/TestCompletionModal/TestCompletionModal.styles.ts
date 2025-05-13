import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
`;

export const Message = styled.h4`
  margin: 0;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: 600;
`;

export const Description = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  width: 100%;
`;
