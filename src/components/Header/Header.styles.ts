import styled from 'styled-components';

export const Layout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100000;

  width: 100%;
  height: 7rem;
  padding: 0 6rem;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 0 1.5rem 0 rgb(0 0 0 / 10%);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const LanguageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  width: 15rem;
  height: 3rem;

  cursor: pointer;
`;

export const LanguageButtonText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
