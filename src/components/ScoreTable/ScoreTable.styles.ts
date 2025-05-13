import styled from 'styled-components';

const scoreColors = {
  highest: '#39BCF5',
  higher: '#3FB0E4',
  high: '#45A4D3',
  aboveAverage: '#4B98C2',
  belowAverage: '#5780A0',
  low: '#5D748F',
  lower: '#565761',
  lowest: '#4E4E4E',
} as const;

export const ScoreTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.xs};

  width: 100%;
  max-width: 30rem;
`;

export const ScoreRow = styled.div<{ $level: keyof typeof scoreColors }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};

  background-color: ${({ $level }) => scoreColors[$level]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.base};

  transition: all 0.3s ease;

  cursor: default;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.sm};

    transform: translateX(${({ theme }) => theme.spacing.xxs});
    filter: brightness(1.1);
  }
`;

export const ScoreRange = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ScoreDescription = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const RedAsterisk = styled.span`
  color: ${({ theme }) => theme.color.error[500]};
`;

export const ScoreNote = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};

  margin-top: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: right;
`;
