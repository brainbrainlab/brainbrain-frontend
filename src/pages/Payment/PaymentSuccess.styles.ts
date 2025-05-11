import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.black[600]};
`;

export const InfoValue = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
