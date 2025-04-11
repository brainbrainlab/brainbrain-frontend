import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const Message = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: 600;
  color: ${({ theme }) => theme.color.black[900]};
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.black[600]};
  text-align: center;
  margin: 0;
  line-height: 1.5;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;
