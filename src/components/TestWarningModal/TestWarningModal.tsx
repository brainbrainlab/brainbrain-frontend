import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import { Button } from '../Modal/Modal.styles';
import * as S from './TestWarningModal.styles';

interface TestWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestWarningModal: React.FC<TestWarningModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="테스트 주의사항"
      width="600px"
      footer={
        <Button variant="primary" onClick={onClose}>
          테스트 시작하기
        </Button>
      }
    >
      <S.WarningContent>
        <S.WarningTitle>테스트를 시작하기 전에 다음 사항을 확인해 주세요.</S.WarningTitle>
        <S.WarningList>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>테스트는 총 42문제로 구성되어 있으며, 제한 시간은 40분입니다.</span>
          </S.WarningItem>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>모든 문제에 답변해야 결과를 확인할 수 있습니다.</span>
          </S.WarningItem>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>페이지를 나가면 테스트가 중단되며, 진행 상황은 저장되지 않습니다.</span>
          </S.WarningItem>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>테스트 중에는 브라우저를 닫거나 새로고침하지 마세요.</span>
          </S.WarningItem>
        </S.WarningList>
      </S.WarningContent>
    </Modal>
  );
};

export default TestWarningModal;
