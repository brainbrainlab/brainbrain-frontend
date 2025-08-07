import styled from 'styled-components';

export const Table = styled.table`
  overflow: hidden;

  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  border: 1px solid ${({ theme }) => theme.color.black[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  background: ${({ theme }) => theme.color.black[0]};
  box-shadow: ${({ theme }) => theme.shadow.base};
  font-size: ${({ theme }) => theme.fontSize.base};
  border-collapse: separate;
  border-spacing: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  background: ${({ theme }) => theme.color.black[50]};
  color: ${({ theme }) => theme.color.black[900]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: left;

  transition: background-color ${({ theme }) => theme.transitions.default};
  border-bottom: 1.5px solid ${({ theme }) => theme.color.black[200]};

  &:hover {
    background: ${({ theme }) => theme.color.black[100]};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  background: ${({ theme }) => theme.color.black[0]};
  color: ${({ theme }) => theme.color.black[700]};

  transition: background-color ${({ theme }) => theme.transitions.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};

  &:hover {
    background: ${({ theme }) => theme.color.black[50]};
  }
`;

export const TableRow = styled.tr`
  &:last-child ${TableCell} {
    border-bottom: none;
  }

  &:hover ${TableCell} {
    background: ${({ theme }) => theme.color.black[50]};
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;

  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  -webkit-overflow-scrolling: touch;
`;
