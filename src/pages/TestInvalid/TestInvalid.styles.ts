import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 200px);

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

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.6;
  white-space: pre-line;
`;

export const AdditionalInfo = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.color.black[400]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.5;
  white-space: pre-line;
`;

export const ContactLink = styled.span`
  color: ${({ theme }) => theme.color.primary[500]};
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary[600]};
  }
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
