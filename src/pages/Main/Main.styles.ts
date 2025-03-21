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
  align-items: center;
  justify-content: center;
  gap: 10rem;
  width: 50rem;
`;

export const TextLogo = styled.img`
  width: 34rem;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black[900]};
  width: 100%;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black[900]};
  width: 100%;
  text-align: center;
`;

export const Section1 = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 16rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  background-color: ${({ theme }) => theme.color.primary[0]};
  padding: 0 12rem;
`;

export const Section1Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.h3};
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
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[400]};
  width: 80%;
`;

export const Section1DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 10rem;
`;

export const Section1Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[600]};
  width: 20%;
  text-align: start;
  line-height: 1.5;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
