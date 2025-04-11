import styled from 'styled-components';

export const MainIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IconProps {
  isActive: boolean;
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  transform: ${props => (props.isActive ? 'scale(1.1)' : 'scale(1)')};
  z-index: 2;
  cursor: help;
`;

interface TooltipProps {
  isActive: boolean;
}

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%) ${props => (props.isActive ? 'translateY(0)' : 'translateY(-1rem)')};
  color: ${({ theme }) => theme.color.black[0]};
  background-color: ${({ theme }) => theme.color.black[600]};
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  white-space: nowrap;
  z-index: 10;
  opacity: ${props => (props.isActive ? 1 : 0)};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: all 0.5s ease-in-out;
`;
