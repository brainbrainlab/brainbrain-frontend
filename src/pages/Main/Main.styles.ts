import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.color.black[100]}; */
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleTextAndImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const TitleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
