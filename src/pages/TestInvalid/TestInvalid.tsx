import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import PageLayout from '../../components/common/PageLayout/PageLayout';

const TestInvalid = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Wrapper>
        <Title>{t('error.testInvalid')}</Title>
        <Description>{t('error.testInvalidDescription')}</Description>
        <Button onClick={() => navigate('/test')}>{t('error.retakeTest')}</Button>
        <ContactText>
          {t('test.invalid.contactMessage')}
          <ContactLink href="mailto:support@brainbrain.com">{t('test.invalid.contactLink')}</ContactLink>
        </ContactText>
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  min-height: 100vh;

  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: 2.4rem;
  font-weight: 700;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: 1.6rem;
  text-align: center;
  white-space: pre-line;
`;

const ContactText = styled.p`
  margin-top: 2rem;

  color: ${({ theme }) => theme.color.black[600]};
  font-size: 1.4rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: underline;
`;

export default TestInvalid;
