import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div<{ isClosing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${({ isClosing }) =>
    isClosing
      ? css`
          fadeOut 0.3s ease forwards
        `
      : css`
          fadeIn 0.3s ease
        `};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ModalContainer = styled.div<{ width?: string; isClosing?: boolean }>`
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
  padding: 2rem;
  width: ${({ width }) => width || '500px'};
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: ${({ isClosing }) =>
    isClosing
      ? css`
          modalFadeOut 0.3s ease forwards
        `
      : css`
          modalFadeIn 0.3s ease
        `};

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes modalFadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[700]};
  margin: 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black[400]};
  background-color: ${({ theme }) => theme.color.black[100]};
  border-radius: 3px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.color.black[700]};
    background-color: ${({ theme }) => theme.color.black[200]};
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
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.color.primary[500]};
          color: ${theme.color.black[0]};
          border: none;

          &:hover {
            background-color: ${theme.color.primary[600]};
          }

          &:active {
            background-color: ${theme.color.primary[700]};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.color.black[0]};
          color: ${theme.color.black[700]};
          border: 1.5px solid ${theme.color.black[200]};

          &:hover {
            border-color: ${theme.color.primary[500]};
            color: ${theme.color.primary[500]};
          }
        `;
      case 'danger':
        return css`
          background-color: ${theme.color.error[500]};
          color: ${theme.color.black[0]};
          border: none;

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
