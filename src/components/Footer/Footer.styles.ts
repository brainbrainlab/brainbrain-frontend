import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  background-color: ${({ theme }) => theme.color.black[50]};
  border-top: 1px solid ${({ theme }) => theme.color.black[100]};
`;

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const LogoText = styled.img`
  height: 20px;
  width: auto;
`;

export const MenuLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.black[400]};
`;
