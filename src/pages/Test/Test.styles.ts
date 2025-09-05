import { HiMiniListBullet } from 'react-icons/hi2';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import styled, { css, keyframes } from 'styled-components';

import Button from '@/components/common/Button/Button';

const createBlinkKeyframes = (theme: any) => keyframes`
  0% {
    background-color: ${theme.color.primary[500]};
  }
  30% {
    background-color: ${theme.color.error[500]};
  }
  100% {
    background-color: ${theme.color.primary[500]};
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: calc(100vh - 7rem);
  padding: 0 6rem;

  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 4rem;

  width: 100%;

  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const QuestionText = styled.h1`
  display: flex;

  width: 5rem;
  height: 100%;

  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: 600;
  text-align: start;
`;

export const QuestionImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26vw;
  height: 26vw;

  @media (width <= ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    height: max-content;
  }

  /* border-radius: 1rem; */
`;

export const QuestionImage = styled.img`
  width: 40vw;
  height: 40vw;
  @media (width <= ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
    height: 100%;
  }
`;

export const ChoiceContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  gap: 0.5rem;

  width: 40vw;
  aspect-ratio: 2;

  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    width: 50%;
  }
  @media (width <= ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`;

export const QuestionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  position: relative;

  width: 100%;
  @media (width <= ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: space-between;
    padding: 0 4rem;
  }
`;

export const NextButton = styled(IoArrowForwardOutline)`
  width: 3rem;
  height: 3rem;

  opacity: 0.5;
  color: ${({ theme }) => theme.color.black[900]};

  transition: opacity 0.2s ease;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const PreviousButton = styled(IoArrowBackOutline)`
  width: 3rem;
  height: 3rem;

  opacity: 0.5;
  color: ${({ theme }) => theme.color.black[900]};

  transition: opacity 0.2s ease;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const QuestionButtonContainer = styled.div<{ $showUnsolved: boolean }>`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 2rem;
  visibility: hidden;

  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 100;

  width: max-content;
  height: 12rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 3rem;

  background-color: ${({ theme }) => theme.color.black[100]};
  opacity: 0;

  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  &:hover {
    visibility: visible;

    top: -50%;

    opacity: 1;
  }

  ${({ $showUnsolved }) =>
    $showUnsolved &&
    css`
      visibility: visible;

      top: -50%;

      opacity: 1;
    `}
  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const ToggleButton = styled(HiMiniListBullet)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  color: ${({ theme }) => theme.color.black[600]};
  font-size: 1.4rem;

  cursor: pointer;

  &:hover + ${QuestionButtonContainer} {
    visibility: visible;

    opacity: 1;
  }
  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const QuestionButton = styled(Button)<{ $solved: boolean; $current: boolean; $showUnsolved: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  border: ${({ theme, $current, $solved }) =>
    $current ? `3px solid ${$solved ? theme.color.black[600] : theme.color.primary[700]}` : 'none'};
  border-radius: 3rem;

  background-color: ${({ theme, $solved }) => ($solved ? theme.color.black[400] : theme.color.primary[500])};
  font-size: 1.4rem;

  animation-name: ${({ theme, $showUnsolved }) => $showUnsolved && createBlinkKeyframes(theme)};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: 3;

  &:hover {
    border: ${({ theme, $current, $solved }) =>
      $current ? `3px solid ${$solved ? theme.color.black[600] : theme.color.primary[700]}` : 'none'};

    background-color: ${({ theme, $solved }) => ($solved ? theme.color.black[500] : theme.color.primary[600])};
  }

  &:active {
    border: ${({ theme, $current, $solved }) =>
      $current ? `3px solid ${$solved ? theme.color.black[600] : theme.color.primary[700]}` : 'none'};

    background-color: ${({ theme, $solved }) => ($solved ? theme.color.black[600] : theme.color.primary[700])};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};

  animation: ${slideDown} 1000ms ease-out;
`;
