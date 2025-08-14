import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';

import * as S from './TestCompletionModal.styles';

interface TestCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onReview: () => void;
}

const TestCompletionModal = ({ isOpen, onClose, onSubmit, onReview }: TestCompletionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="테스트 완료"
      width="80%"
      footer={
        <S.ButtonContainer>
          <Button color="black" onClick={onReview} size="sm">
            수정하기
          </Button>
          <Button color="primary" onClick={onSubmit} size="sm">
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
