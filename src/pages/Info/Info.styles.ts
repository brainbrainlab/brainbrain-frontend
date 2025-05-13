import styled from 'styled-components';

import { Table, TableCell, TableContainer, TableHeader, TableRow } from '../../styles/components/Table.styles';
import {
  Heading1,
  Heading2,
  Heading3,
  List,
  ListItem,
  OrderedList,
  Paragraph,
} from '../../styles/components/Typography.styles';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: ${({ theme }) => theme.shadow.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoTitle = styled(Heading1)`
  width: 100%;
  max-width: 800px;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  text-align: start;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    padding-bottom: ${({ theme }) => theme.spacing.lg};

    font-size: ${({ theme }) => theme.fontSize.h2};
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
    color: ${({ theme }) => theme.color.black[900]};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
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
