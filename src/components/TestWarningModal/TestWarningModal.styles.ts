import styled from 'styled-components';

export const WarningContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WarningTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const WarningList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WarningItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;

  svg {
    margin-top: 0.25rem;

    color: ${({ theme }) => theme.color.primary[500]};
    flex-shrink: 0;
  }
`;
