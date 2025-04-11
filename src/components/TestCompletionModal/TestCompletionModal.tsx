import React from 'react';
import Modal from '../Modal/Modal';
import { Button } from '../Modal/Modal.styles';
import * as S from './TestCompletionModal.styles';

interface TestCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onReview: () => void;
}

const TestCompletionModal: React.FC<TestCompletionModalProps> = ({ isOpen, onClose, onSubmit, onReview }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="테스트 완료"
      width="500px"
      footer={
        <S.ButtonContainer>
          <Button variant="secondary" onClick={onReview}>
            수정하기
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            제출하기
          </Button>
        </S.ButtonContainer>
      }
    >
      <S.Content>
        <S.Message>모든 문제를 풀었습니다!</S.Message>
        <S.Description>답안을 다시 검토하시겠습니까? 아니면 바로 제출하시겠습니까?</S.Description>
      </S.Content>
    </Modal>
  );
};

export default TestCompletionModal;
