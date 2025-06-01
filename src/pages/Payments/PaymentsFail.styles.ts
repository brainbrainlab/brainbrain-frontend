import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  max-width: 60rem;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const PaymentsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[50]};
`;

export const PaymentsInfoTitle = styled.h2`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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

export const Section = styled.section`
  border-radius: 8px;
`;

export const InfoItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};
`;
