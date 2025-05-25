import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import PageLayout from '@/components/common/PageLayout/PageLayout';
import { Heading3, List, ListItem, OrderedList, Paragraph } from '@/pages/Info/Typography.styles';

import * as S from './Info.styles';

type InfoType = 'privacy' | 'terms' | 'business';

function Info() {
  const { t } = useTranslation();
  const location = useLocation();
  const [infoType, setInfoType] = useState<InfoType>('privacy');

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('privacy')) {
      setInfoType('privacy');
    } else if (path.includes('terms')) {
      setInfoType('terms');
    } else if (path.includes('business')) {
      setInfoType('business');
    }
  }, [location.pathname]);

  const getTitle = () => {
    switch (infoType) {
      case 'privacy':
        return t('terms.privacy.title');
      case 'terms':
        return t('terms.service.title');
      case 'business':
        return t('common.businessInfo');
      default:
        return '';
    }
  };

  const getContent = () => {
    switch (infoType) {
      case 'privacy':
        return (
          <div>
            <Paragraph>{t('terms.privacy.introduction')}</Paragraph>
            <Heading3>{t('terms.privacy.article1.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article1.description')}</Paragraph>
            <OrderedList>
              <ListItem>{t('terms.privacy.article1.items.title')}</ListItem>
              <List>
                <ListItem>{t('terms.privacy.article1.items.personalInfo')}</ListItem>
                <ListItem>{t('terms.privacy.article1.items.testResult')}</ListItem>
                <ListItem>{t('terms.privacy.article1.items.payment')}</ListItem>
              </List>
              <ListItem>{t('terms.privacy.article1.methods.title')}</ListItem>
              <List>
                <ListItem>{t('terms.privacy.article1.methods.directInput')}</ListItem>
                <ListItem>{t('terms.privacy.article1.methods.paymentInfo')}</ListItem>
              </List>
            </OrderedList>
            <Heading3>{t('terms.privacy.article2.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article2.description')}</Paragraph>
            <OrderedList>
              <ListItem>{t('terms.privacy.article2.purposes.certificate')}</ListItem>
              <ListItem>{t('terms.privacy.article2.purposes.email')}</ListItem>
              <ListItem>{t('terms.privacy.article2.purposes.support')}</ListItem>
            </OrderedList>
            <Heading3>{t('terms.privacy.article3.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article3.description')}</Paragraph>
            <List>
              <ListItem>{t('terms.privacy.article3.retention.items')}</ListItem>
              <ListItem>{t('terms.privacy.article3.retention.period')}</ListItem>
            </List>
            <Heading3>{t('terms.privacy.article4.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article4.description')}</Paragraph>
            <Heading3>{t('terms.privacy.article5.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article5.description')}</Paragraph>
            <S.StyledTable>
              <thead>
                <tr>
                  <S.StyledTh>{t('terms.privacy.article5.table.company')}</S.StyledTh>
                  <S.StyledTh>{t('terms.privacy.article5.table.task')}</S.StyledTh>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.StyledTd>Google LLC</S.StyledTd>
                  <S.StyledTd>{t('terms.privacy.article5.table.emailTask')}</S.StyledTd>
                </tr>
              </tbody>
            </S.StyledTable>
            <Heading3>{t('terms.privacy.article6.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article6.description')}</Paragraph>
            <OrderedList>
              <ListItem>{t('terms.privacy.article6.rights.access')}</ListItem>
              <ListItem>{t('terms.privacy.article6.rights.correction')}</ListItem>
              <ListItem>{t('terms.privacy.article6.rights.deletion')}</ListItem>
              <ListItem>{t('terms.privacy.article6.rights.suspension')}</ListItem>
            </OrderedList>
            <Paragraph>{t('terms.privacy.article6.contact')}</Paragraph>
            <Heading3>{t('terms.privacy.article7.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article7.description')}</Paragraph>
            <Heading3>{t('terms.privacy.article8.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article8.description')}</Paragraph>
            <List>
              <ListItem>{t('terms.privacy.article8.measures.access')}</ListItem>
              <ListItem>{t('terms.privacy.article8.measures.encryption')}</ListItem>
              <ListItem>{t('terms.privacy.article8.measures.security')}</ListItem>
            </List>
            <Heading3>{t('terms.privacy.article9.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article9.description')}</Paragraph>
            <Paragraph>
              <strong>{t('terms.privacy.article9.officer.title')}</strong>: {t('terms.privacy.article9.officer.name')}
            </Paragraph>
            <Paragraph>
              <strong>{t('terms.privacy.article9.officer.email')}</strong>:{' '}
              {t('terms.privacy.article9.officer.address')}
            </Paragraph>
            <Heading3>{t('terms.privacy.article10.title')}</Heading3>
            <Paragraph>{t('terms.privacy.article10.description')}</Paragraph>
            <Paragraph>
              <strong>{t('terms.privacy.article10.effectiveDate')}</strong>: {t('terms.privacy.article10.date')}
            </Paragraph>
          </div>
        );
      case 'terms':
        return (
          <div>
            <Paragraph>{t('terms.service.introduction')}</Paragraph>
            <Heading3>{t('terms.service.article1.title')}</Heading3>
            <Paragraph>{t('terms.service.article1.description')}</Paragraph>
            <Heading3>{t('terms.service.article2.title')}</Heading3>
            <OrderedList>
              <ListItem>{t('terms.service.article2.definitions.user')}</ListItem>
              <ListItem>{t('terms.service.article2.definitions.payment')}</ListItem>
              <ListItem>{t('terms.service.article2.definitions.content')}</ListItem>
            </OrderedList>
            <Heading3>{t('terms.service.article3.title')}</Heading3>
            <OrderedList>
              <ListItem>{t('terms.service.article3.effectiveness.notice')}</ListItem>
              <ListItem>{t('terms.service.article3.effectiveness.changes')}</ListItem>
              <ListItem>{t('terms.service.article3.effectiveness.disagreement')}</ListItem>
            </OrderedList>
            <Heading3>{t('terms.service.article4.title')}</Heading3>
            <OrderedList>
              <ListItem>{t('terms.service.article4.services.title')}</ListItem>
              <List>
                <ListItem>{t('terms.service.article4.services.test')}</ListItem>
                <ListItem>{t('terms.service.article4.services.score')}</ListItem>
                <ListItem>{t('terms.service.article4.services.report')}</ListItem>
              </List>
            </OrderedList>
            <Heading3>{t('terms.service.article5.title')}</Heading3>
            <OrderedList>
              <ListItem>{t('terms.service.article5.payment.paidContent')}</ListItem>
              <ListItem>{t('terms.service.article5.payment.process')}</ListItem>
              <ListItem>{t('terms.service.article5.payment.refund')}</ListItem>
            </OrderedList>
          </div>
        );
      case 'business':
        return (
          <div>
            <Paragraph>{t('terms.business.description')}</Paragraph>
            <S.StyledTable>
              <thead>
                <tr>
                  <S.StyledTh>{t('terms.business.table.item')}</S.StyledTh>
                  <S.StyledTh>{t('terms.business.table.content')}</S.StyledTh>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.StyledTd>{t('terms.business.table.company')}</S.StyledTd>
                  <S.StyledTd>{t('terms.business.table.companyName')}</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTd>{t('terms.business.table.ceo')}</S.StyledTd>
                  <S.StyledTd>{t('terms.business.table.ceoName')}</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTd>{t('terms.business.table.address')}</S.StyledTd>
                  <S.StyledTd>{t('terms.business.table.companyAddress')}</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTd>{t('terms.business.table.email')}</S.StyledTd>
                  <S.StyledTd>{t('terms.business.table.companyEmail')}</S.StyledTd>
                </tr>
              </tbody>
            </S.StyledTable>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageLayout>
      <S.Container>
        <S.Title>{getTitle()}</S.Title>
        <S.Content>{getContent()}</S.Content>
      </S.Container>
    </PageLayout>
  );
}

export default Info;
