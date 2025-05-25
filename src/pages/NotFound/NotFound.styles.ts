import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 20rem);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  max-width: 60rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const Content = styled.div`
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing.xl};

  text-align: center;
`;

export const IconWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.color.error[500]};
  font-size: 4rem;
`;

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.color.primary[600]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};
`;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.6;
  white-space: pre-line;
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.base} ${theme.spacing.lg}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }
`;
