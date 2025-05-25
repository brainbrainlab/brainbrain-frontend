import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

import Modal from '../Modal/Modal';
import { Button } from '../Modal/Modal.styles';
import * as S from './TestWarningModal.styles';

interface TestWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestWarningModal = ({ isOpen, onClose }: TestWarningModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('test.warning.title')}
      width="600px"
      footer={
        <Button variant="primary" onClick={onClose}>
          {t('test.warning.startButton')}
        </Button>
      }
    >
      <S.WarningContent>
        <S.WarningTitle>{t('test.warning.description')}</S.WarningTitle>
        <S.WarningList>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>{t('test.warning.rules.timeLimit')}</span>
          </S.WarningItem>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>{t('test.warning.rules.allQuestions')}</span>
          </S.WarningItem>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>{t('test.warning.rules.noPageLeave')}</span>
          </S.WarningItem>
          <S.WarningItem>
            <FaCheck size={16} />
            <span>{t('test.warning.rules.noRefresh')}</span>
          </S.WarningItem>
        </S.WarningList>
      </S.WarningContent>
    </Modal>
  );
};

export default TestWarningModal;
