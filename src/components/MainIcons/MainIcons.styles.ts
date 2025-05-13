import styled from 'styled-components';

export const MainIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
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

  border-radius: ${({ theme }) => theme.borderRadius.lg};

  color: ${({ isActive, theme }) => (isActive ? theme.color.black[700] : theme.color.black[400])};

  transition: all ${({ theme }) => theme.transitions.default};

  svg {
    transition: all ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.color.black[700]};
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

  background-color: ${({ theme }) => theme.color.black[700]};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  white-space: nowrap;

  transform: translateX(-50%);
  transition: all ${({ theme }) => theme.transitions.default};
`;
