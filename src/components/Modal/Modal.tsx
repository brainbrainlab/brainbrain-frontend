import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import * as S from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: string;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, width, footer }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match the animation duration
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <S.ModalOverlay onClick={handleOverlayClick} isClosing={isClosing}>
      <S.ModalContainer width={width} isClosing={isClosing}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseButton onClick={handleClose} aria-label="Close modal">
            <IoMdClose />
          </S.CloseButton>
        </S.ModalHeader>
        <S.ModalContent>{children}</S.ModalContent>
        {footer && <S.ModalFooter>{footer}</S.ModalFooter>}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
