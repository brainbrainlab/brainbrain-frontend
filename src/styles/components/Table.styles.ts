import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.color.black[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.base};
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[900]};
  background: ${({ theme }) => theme.color.black[50]};
  border-bottom: 1.5px solid ${({ theme }) => theme.color.black[200]};
  text-align: left;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.color.black[100]};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.color.black[700]};
  background: ${({ theme }) => theme.color.black[0]};
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};
  transition: background-color ${({ theme }) => theme.transitions.default};

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
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;
