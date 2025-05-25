import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  z-index: ${({ theme }) => theme.zIndex.modal};

  background-color: rgb(0 0 0 / 50%);

  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  animation-fill-mode: forwards;
`;

export const ModalContainer = styled.div<{ isOpen: boolean; width?: string; isClosing: boolean }>`
  width: ${({ width }) => width || '90%'};
  max-width: 70rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  animation-fill-mode: forwards;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
`;

export const ModalTitle = styled.h1`
  width: 100%;

  color: ${({ theme }) => theme.color.primary[900]};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  border-bottom: 1px solid ${({ theme }) => theme.color.primary[900]};
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 2rem;
  right: 2rem;

  padding: 0.5rem;
  border: none;
  border-radius: 3px;

  background-color: ${({ theme }) => theme.color.black[100]};
  color: ${({ theme }) => theme.color.black[400]};

  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.black[200]};
    color: ${({ theme }) => theme.color.black[700]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  padding-top: 1rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 6px;

  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  transition: all 0.2s ease;

  cursor: pointer;

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          border: none;

          background-color: ${theme.color.primary[500]};
          color: ${theme.color.black[0]};

          &:hover {
            background-color: ${theme.color.primary[600]};
          }

          &:active {
            background-color: ${theme.color.primary[700]};
          }
        `;
      case 'secondary':
        return css`
          border: 1.5px solid ${theme.color.black[200]};

          background-color: ${theme.color.black[0]};
          color: ${theme.color.black[700]};

          &:hover {
            border-color: ${theme.color.primary[500]};

            color: ${theme.color.primary[500]};
          }
        `;
      case 'danger':
        return css`
          border: none;

          background-color: ${theme.color.error[500]};
          color: ${theme.color.black[0]};

          &:hover {
            background-color: ${theme.color.error[600]};
          }

          &:active {
            background-color: ${theme.color.error[700]};
          }
        `;
    }
  }}
`;
