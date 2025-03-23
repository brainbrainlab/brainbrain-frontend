import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 1rem;
`;

export const TimerBar = styled.progress`
  width: 100%;
  height: 1rem;
  border: none;
  border-radius: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${({ theme }) => theme.color.black[200]};

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.color.black[200]};
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.color.primary[500]};
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.color.primary[500]};
    border-radius: 10px;
  }

  &::-ms-fill {
    background-color: ${({ theme }) => theme.color.primary[500]};
    border: none;
    border-radius: 10px;
  }
`;

export const TimerText = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
