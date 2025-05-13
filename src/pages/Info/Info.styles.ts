import styled from 'styled-components';
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  List,
  OrderedList,
  ListItem,
} from '../../styles/components/Typography.styles';
import { Table, TableHeader, TableCell, TableRow, TableContainer } from '../../styles/components/Table.styles';

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoTitle = styled(Heading1)`
  width: 100%;
  max-width: 800px;
  text-align: start;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    padding-bottom: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoContent = styled.div`
  width: 100%;
  max-width: 800px;
  color: ${({ theme }) => theme.color.black[700]};
  line-height: 1.6;

  ${Heading1}, ${Heading2}, ${Heading3} {
    margin-top: ${({ theme }) => theme.spacing.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  ${Paragraph} {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  ${List}, ${OrderedList} {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  ${ListItem} {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.black[900]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const StyledTable = Table;
export const StyledTh = TableHeader;
export const StyledTd = TableCell;
export const StyledTr = TableRow;
export const StyledTableContainer = TableContainer;
