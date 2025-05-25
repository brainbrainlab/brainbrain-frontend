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

export const PaymentInfo = styled.div`
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

export const PaymentInfoTitle = styled.h2`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: 1.25rem;
  font-weight: 600;
`;

export const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.span`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: 0.875rem;
`;

export const InfoValue = styled.span`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
`;
