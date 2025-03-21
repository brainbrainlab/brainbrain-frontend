import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { HiMiniListBullet } from 'react-icons/hi2';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

export const Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 8rem);
  padding: 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const TimerContainer = styled.div`
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

export const QuestionContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const QuestionText = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: 600;
  text-align: start;
`;

export const QuestionImage = styled.img`
  width: 36rem;
  height: 36rem;
`;

export const ChoiceContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
`;

export const QuestionButtonWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const NextButton = styled(IoArrowForwardOutline)`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.color.black[900]};
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;
export const PreviousButton = styled(IoArrowBackOutline)`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.color.black[900]};
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;

export const QuestionButtonContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: 12rem;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.color.black[100]};
  gap: 1.2rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    top: -50%;
    visibility: visible;
  }
  z-index: 100;
`;

export const ToggleButton = styled(HiMiniListBullet)`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.color.black[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover + ${QuestionButtonContainer} {
    opacity: 1;
    visibility: visible;
  }
`;

export const QuestionButton = styled(Button)<{ solved: boolean; current: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 3rem;
  font-size: 1.5rem;
  border: ${({ theme, current, solved }) =>
    current ? `3px solid ${solved ? theme.color.black[600] : theme.color.primary[700]}` : 'none'};
  background-color: ${({ theme, solved }) => (solved ? theme.color.black[400] : theme.color.primary[500])};

  &:hover {
    background-color: ${({ theme, solved }) => (solved ? theme.color.black[500] : theme.color.primary[600])};
    border: ${({ theme, current, solved }) =>
      current ? `3px solid ${solved ? theme.color.black[600] : theme.color.primary[700]}` : 'none'};
  }
  &:active {
    background-color: ${({ theme, solved }) => (solved ? theme.color.black[600] : theme.color.primary[700])};
    border: ${({ theme, current, solved }) =>
      current ? `3px solid ${solved ? theme.color.black[600] : theme.color.primary[700]}` : 'none'};
  }
`;
