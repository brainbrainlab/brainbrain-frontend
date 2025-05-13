import styled from 'styled-components';

export const Heading1 = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

export const Heading2 = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  color: ${({ theme }) => theme.color.black[800]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;

export const Heading3 = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  color: ${({ theme }) => theme.color.black[800]};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const SmallText = styled.span`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.5;
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.color.black[900]};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const List = styled.ul`
  list-style-type: disc;

  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-left: ${({ theme }) => theme.spacing.xxxl};

  color: ${({ theme }) => theme.color.black[700]};
`;

export const OrderedList = styled.ol`
  list-style-type: decimal;

  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-left: ${({ theme }) => theme.spacing.xxxl};

  color: ${({ theme }) => theme.color.black[700]};
`;

export const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  line-height: 1.6;
`;
