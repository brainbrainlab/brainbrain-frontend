import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Score = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.black[700]};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  white-space: pre-line;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.base} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[0]};
  background-color: ${({ theme }) => theme.color.primary[500]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }
`;
