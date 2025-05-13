import styled from 'styled-components';

export const MainIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};

  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  cursor: pointer;
`;

export const Icon = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  background-color: ${({ theme, isActive }) => (isActive ? theme.color.primary[50] : 'transparent')};

  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[50]};
  }
`;

export const Tooltip = styled.div<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};

  position: absolute;
  top: 100%;
  left: 50%;

  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background-color: ${({ theme }) => theme.color.black[900]};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  white-space: nowrap;

  transform: translateX(-50%);
  transition: all ${({ theme }) => theme.transitions.default};
`;
