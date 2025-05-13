import styled, { keyframes } from 'styled-components';

import IqGraph from '../../assets/images/iq_graph.svg?component';

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

const pulseAnimation = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.2;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.color.primary[50]};
`;

export const DotAnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 50rem;
  height: 50rem;
`;

export const BackgroundImage = styled.img`
  position: absolute;

  width: 40rem;
  height: 40rem;
  object-fit: fill;
  mix-blend-mode: darken;

  animation: ${pulseAnimation} 7s infinite;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.fontSize.h2});
  padding-right: 5rem;
`;

export const TitleTextAndImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 14rem;

  position: relative;

  width: fit-content;
`;

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.base};

  width: 100%;
`;

export const TextLogo = styled.img`
  z-index: 2;

  width: 34rem;
  padding-bottom: ${({ theme }) => theme.spacing.base};

  text-align: right;
`;

export const SubTitle = styled.h2`
  z-index: 2;

  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.base};

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-align: end;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  width: 100%;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: left;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  z-index: 2;

  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxl};

  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  padding: 0 ${({ theme }) => theme.spacing.xxxl};
`;
export const Section1Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const Section1Subtitle = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  width: 80%;
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.color.black[500]};
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.7;
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Section1DescriptionWrapper = styled.div`
  display: grid;
  align-items: stretch;
  gap: 2rem;
  grid-auto-flow: column;
  grid-auto-columns: 34rem;
`;

export const Section1DescriptionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  width: 34rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 3px solid ${({ theme }) => theme.color.primary[400]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  background-color: ${({ theme }) => theme.color.black[0]};

  transition: all 0.2s ease-in-out;

  &:hover {
    border: 3px solid ${({ theme }) => theme.color.primary[500]};

    box-shadow: 0 10px 20px rgb(0 0 0 / 10%);

    transform: translateY(-5px);
  }
`;

export const Section1DescriptionTitle = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) => theme.color.black[800]};
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Section1DescriptionTitleIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Section1Description = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.6;
  text-align: start;
  white-space: pre-wrap;
`;

export const Section2TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const Section2Title = styled.h2`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Section2SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.black[400]};
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.7;
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Section2DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl};

  width: 100%;
`;

export const Section2Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledIqGraph = styled(IqGraph)<{ $hoveredLevel: string | null }>`
  width: 50%;

  path {
    opacity: ${({ $hoveredLevel }) => ($hoveredLevel ? 0.5 : 1)};

    transition: opacity 0.3s ease;
    will-change: transform, opacity;
  }

  .iq_graph_svg__${({ $hoveredLevel }) => $hoveredLevel} {
    opacity: 1;
    filter: brightness(1.2);
    fill: ${({ $hoveredLevel }) => $hoveredLevel && scoreColors[$hoveredLevel as keyof typeof scoreColors]};

    transform: scale(1.2);
    transform-box: fill-box;
    transform-origin: 50% 50%;

    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
