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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary[50]};
`;

export const DotAnimationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.fontSize.h2});
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding-right: 5rem;
`;

export const TitleTextAndImageWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 14rem;
  position: relative;
`;

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.base};
  width: 100%;
`;

export const TextLogo = styled.img`
  width: 34rem;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  text-align: right;
  z-index: 2;
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.color.black[600]};
  width: 100%;
  text-align: end;
  margin-bottom: ${({ theme }) => theme.spacing.base};
  z-index: 2;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.black[900]};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.spacing.xs};
  text-align: left;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Section1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.color.black[0]};
  padding: ${({ theme }) => theme.spacing.xxl};
  z-index: 2;
`;

export const Section2 = styled.div`
  display: flex;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: 0 ${({ theme }) => theme.spacing.xxxl};
`;
export const Section1Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[600]};
  width: 100%;
`;

export const Section1Subtitle = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black[500]};
  width: 80%;
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

export const Section1DescriptionWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 34rem;
  gap: 2rem;
  align-items: stretch;
`;

export const Section1DescriptionBoxWrapper = styled.div`
  display: flex;
  width: 34rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 3px solid ${({ theme }) => theme.color.primary[400]};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    border: 3px solid ${({ theme }) => theme.color.primary[500]};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Section1DescriptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[800]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Section1DescriptionTitleIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Section1Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black[700]};
  width: 100%;
  text-align: start;
  line-height: 1.6;
  white-space: pre-wrap;
`;

export const Section2TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Section2Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[600]};
`;

export const Section2SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black[400]};
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.7;
`;

export const Section2DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xxxl};
`;

export const Section2Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledIqGraph = styled(IqGraph)<{ $hoveredLevel: string | null }>`
  width: 50%;

  path {
    transition: opacity 0.3s ease;
    opacity: ${({ $hoveredLevel }) => ($hoveredLevel ? 0.5 : 1)};
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
