import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 6rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const SolvedText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  font-weight: 600;
`;

export const SolvedCount = styled.p`
  width: max-content;

  color: ${({ theme }) => theme.color.primary[400]};
  font-size: 3rem;
  font-weight: 600;
`;

export const TimerBar = styled.progress`
  width: 100%;
  height: 1rem;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.black[200]};
  appearance: none;

  &::-webkit-progress-bar {
    border-radius: 10px;

    background-color: ${({ theme }) => theme.color.black[200]};
  }

  &::-webkit-progress-value {
    border-radius: 10px;

    background-color: ${({ theme }) => theme.color.primary[500]};

    transition: width 0.3s ease-in-out;
  }

  &::-moz-progress-bar {
    border-radius: 10px;

    background-color: ${({ theme }) => theme.color.primary[500]};
  }

  &::-ms-fill {
    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.color.primary[500]};
  }
`;

export const TimerText = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
