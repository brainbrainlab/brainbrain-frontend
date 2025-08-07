import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} 0;

  background-color: ${({ theme }) => theme.color.black[0]};
  border-top: 1px solid ${({ theme }) => theme.color.black[100]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};

  max-width: 120rem;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};

  cursor: pointer;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

export const LogoText = styled.img`
  width: auto;
  height: 15px;
`;

export const MenuLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  margin: ${({ theme }) => theme.spacing.xxs} 0;

  @media (width <= ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-decoration: none;

  transition: color 0.2s ease;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.color.black[400]};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;
