import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const TitleSection = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const TitleTextAndImageWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.2rem;
  width: 50rem;
`;

export const TextLogo = styled.img`
  width: 34rem;
  padding-bottom: 1.8rem;
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black[600]};
  width: 100%;
  text-align: left;
  padding-bottom: 4.6rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black[900]};
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: start;
  gap: 0.8rem;
  text-align: left;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Section1 = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 16rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  padding: 0 12rem;
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
  color: ${({ theme }) => theme.color.black[400]};
  width: 80%;
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

export const Section1DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 10rem;
`;

export const Section1DescriptionDivider = styled.div`
  width: 0.4rem;
  height: 30%;
  transform: translateY(8rem);
  background-color: ${({ theme }) => theme.color.black[200]};
  border-radius: 1rem;
`;

export const Section1DescriptionBoxWrapper = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
`;
export const Section1DescriptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[600]};
`;

export const Section1Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black[600]};
  width: 100%;
  text-align: start;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
