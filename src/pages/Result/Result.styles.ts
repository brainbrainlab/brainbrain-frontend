import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const ResultContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  padding: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[600]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ScoreSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.color.black[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const ScoreLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[600]};
`;

export const ScoreValue = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[600]};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.color.black[700]};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  white-space: pre-line;
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.fontSize.lg};
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
