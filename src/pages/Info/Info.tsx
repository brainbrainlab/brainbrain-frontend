import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Heading3, List, ListItem, OrderedList, Paragraph } from '@/styles/components/Typography.styles';

import * as S from './Info.styles';

type InfoType = 'privacy' | 'terms' | 'business';

function Info() {
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
        return '개인정보처리방침';
      case 'terms':
        return '서비스 이용약관';
      case 'business':
        return '사업자 정보';
      default:
        return '';
    }
  };

  const getContent = () => {
    switch (infoType) {
      case 'privacy':
        return (
          <div>
            <Paragraph>
              브레인랩(이하 "회사"라 함)은 BrainBrain 서비스(이하 "서비스"라 함)를 운영함에 있어 이용자의 개인정보를
              소중하게 생각하며, 관련 법령에 따라 개인정보를 안전하게 보호하고 적법하게 처리하기 위하여 다음과 같은
              개인정보처리방침을 수립·공개합니다. 본 방침은 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에
              관한 법률」 등 관련 법령을 준수하며, 이용자는 언제든 본 방침을 열람하실 수 있습니다.
            </Paragraph>
            <Heading3>제1조 (수집하는 개인정보 항목 및 수집 방법)</Heading3>
            <Paragraph>회사는 아래의 항목에 해당하는 개인정보를 수집합니다.</Paragraph>
            <OrderedList>
              <ListItem>수집 항목</ListItem>
              <List>
                <ListItem>이름, 이메일 주소, 성별, 나이, 국가, 주소, 결제 내역</ListItem>
                <ListItem>아이큐 테스트 결과 및 점수</ListItem>
                <ListItem>결제 내역</ListItem>
              </List>
              <ListItem>수집 방법</ListItem>
              <List>
                <ListItem>이용자가 테스트를 진행하거나 결제 과정에서 직접 입력한 정보</ListItem>
                <ListItem>결제 시 PG사로부터 수신한 결제 정보</ListItem>
              </List>
            </OrderedList>
            <Heading3>제2조 (개인정보의 수집 및 이용 목적)</Heading3>
            <Paragraph>회사는 수집한 개인정보를 다음의 목적을 위하여 이용합니다.</Paragraph>
            <OrderedList>
              <ListItem>아이큐 테스트 결과 기반 인증서 및 보고서 작성</ListItem>
              <ListItem>이메일을 통한 결과 전달</ListItem>
              <ListItem>이용자 문의 대응 및 서비스 이용 관련 고지</ListItem>
            </OrderedList>
            <Heading3>제3조 (개인정보의 보유 및 이용 기간)</Heading3>
            <Paragraph>
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만,
              다음의 경우에는 명시한 기간 동안 보존합니다.
            </Paragraph>
            <List>
              <ListItem>보존 항목: 이름, 이메일, 성별, 나이대, 국가, 점수, 결제내역</ListItem>
              <ListItem>보존 기간: 수집일로부터 2년 또는 이용자의 삭제 요청 시까지</ListItem>
            </List>
            <Heading3>제4조 (개인정보의 제3자 제공)</Heading3>
            <Paragraph>
              회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 단, 관련 법령에 의거한 요청이 있을 경우에는 예외로
              할 수 있습니다.
            </Paragraph>
            <Heading3>제5조 (개인정보 처리의 위탁)</Heading3>
            <Paragraph>
              회사는 아래와 같이 일부 업무를 외부에 위탁하고 있으며, 위탁받은 업체가 개인정보 보호법을 준수하도록
              관리·감독하고 있습니다.
            </Paragraph>
            <S.StyledTable>
              <thead>
                <tr>
                  <S.StyledTh>수탁업체</S.StyledTh>
                  <S.StyledTh>위탁업무 내용</S.StyledTh>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.StyledTd>Google LLC</S.StyledTd>
                  <S.StyledTd>이메일 전송(사용자 정보 포함되지 않음. 인증서 및 보고서 파일만 첨부)</S.StyledTd>
                </tr>
              </tbody>
            </S.StyledTable>
            <Heading3>제6조 (이용자의 권리 및 행사 방법)</Heading3>
            <Paragraph>이용자는 언제든지 회사에 대해 아래 사항에 대한 권리를 행사할 수 있습니다.</Paragraph>
            <OrderedList>
              <ListItem>개인정보 열람 요구</ListItem>
              <ListItem>오류 등이 있을 경우 정정 요구</ListItem>
              <ListItem>삭제 요청</ListItem>
              <ListItem>처리 정지 요구</ListItem>
            </OrderedList>
            <Paragraph>
              ※ 위 권리는 이메일(📩 brainbrainsite@gmail.com)을 통해 행사하실 수 있으며, 회사는 이에 지체 없이
              조치하겠습니다.
            </Paragraph>
            <Heading3>제7조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</Heading3>
            <Paragraph>회사는 쿠키, 웹 로그 분석 도구(Google Analytics 등)를 사용하지 않습니다.</Paragraph>
            <Heading3>제8조 (개인정보의 안전성 확보 조치)</Heading3>
            <Paragraph>
              회사는 개인정보보호법 제29조에 따라 다음과 같은 안전성 확보에 필요한 조치를 하고 있습니다.
            </Paragraph>
            <List>
              <ListItem>개인정보에 대한 접근 제한</ListItem>
              <ListItem>문서 파일 및 전송 파일 암호화</ListItem>
              <ListItem>외부 접속 제어 및 보안 소프트웨어 사용</ListItem>
            </List>
            <Heading3>제9조 (개인정보 보호책임자)</Heading3>
            <Paragraph>
              회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 정보주체의 개인정보 관련 문의 및 고충 처리
              보호책임자를 지정하고 있습니다.
            </Paragraph>
            <Paragraph>
              <strong>개인정보 보호책임자</strong>: Brain Lab
            </Paragraph>
            <Paragraph>
              <strong>이메일</strong>: brainbrainsite@gmail.com
            </Paragraph>
            <Heading3>제10조 (개인정보처리방침의 변경)</Heading3>
            <Paragraph>
              이 개인정보처리방침은 법령 및 내부 운영 정책에 따라 변경될 수 있으며, 변경 시 서비스 내 공지사항 또는
              이메일을 통해 사전 공지합니다.
            </Paragraph>
            <Paragraph>
              <strong>시행일자</strong>: 2025년 5월 11일
            </Paragraph>
          </div>
        );
      case 'terms':
        return (
          <div>
            <Paragraph>
              본 약관은 브레인랩(이하 "회사")이 제공하는 BrainBrain 웹사이트(이하 "서비스")의 이용과 관련하여 회사와
              이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </Paragraph>
            <Heading3>제1조 (목적)</Heading3>
            <Paragraph>
              이 약관은 회사가 제공하는 IQ 테스트 및 그에 따른 결과 리포트·인증서 발급 서비스의 이용조건 및 절차, 기타
              필요한 사항을 규정함을 목적으로 합니다.
            </Paragraph>
            <Heading3>제2조 (용어의 정의)</Heading3>
            <OrderedList>
              <ListItem>"이용자"란 본 서비스에 접속하여 본 약관에 따라 서비스를 이용하는 자를 말합니다.</ListItem>
              <ListItem>"결제"란 이용자가 회사에 일정 금액을 지불하고 유료 서비스를 이용하는 행위를 말합니다.</ListItem>
              <ListItem>
                "콘텐츠"란 회사가 서비스 내에서 제공하는 텍스트, 이미지, 보고서, 인증서 등의 결과물을 말합니다.
              </ListItem>
            </OrderedList>
            <Heading3>제3조 (약관의 효력 및 변경)</Heading3>
            <OrderedList>
              <ListItem>본 약관은 서비스 화면에 게시하거나 기타 방법으로 공지함으로써 효력을 발생합니다.</ListItem>
              <ListItem>
                회사는 관련 법령을 위배하지 않는 범위에서 약관을 변경할 수 있으며, 변경된 약관은 적용일자와 함께
                공지합니다.
              </ListItem>
              <ListItem>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</ListItem>
            </OrderedList>
            <Heading3>제4조 (서비스의 제공)</Heading3>
            <OrderedList>
              <ListItem>회사는 아래와 같은 서비스를 제공합니다:</ListItem>
              <List>
                <ListItem>IQ 테스트 진행</ListItem>
                <ListItem>결과 기반 점수 제공</ListItem>
                <ListItem>개인화된 보고서 및 인증서 작성 및 이메일 발송</ListItem>
              </List>
            </OrderedList>
            <Heading3>제5조 (서비스 이용요금 및 결제)</Heading3>
            <OrderedList>
              <ListItem>
                본 서비스는 일부 콘텐츠에 대해 유료로 제공되며, 이용자는 결제를 통해 유료 콘텐츠를 이용할 수 있습니다.
              </ListItem>
              <ListItem>
                결제는 토스페이먼츠(PG)를 통해 진행되며, 이용자는 결제 시 제시되는 금액 및 조건을 충분히 확인해야
                합니다.
              </ListItem>
              <ListItem>
                결제 완료 후에는 원칙적으로 환불이 불가능합니다. 단, 서비스 장애나 중대한 오류가 있는 경우에는 회사가
                개별적으로 환불을 판단합니다.
              </ListItem>
            </OrderedList>
            <Heading3>제6조 (이용자의 의무)</Heading3>
            <OrderedList>
              <ListItem>이용자는 다음 행위를 해서는 안 됩니다:</ListItem>
              <List>
                <ListItem>타인의 정보 도용 또는 허위 입력</ListItem>
                <ListItem>서비스에 대한 부정 이용 시도 또는 해킹</ListItem>
                <ListItem>회사 및 제3자의 지식재산권 침해</ListItem>
                <ListItem>공공질서 및 미풍양속에 반하는 행위</ListItem>
              </List>
            </OrderedList>
            <Heading3>제7조 (저작권 및 지식재산권)</Heading3>
            <OrderedList>
              <ListItem>
                서비스 내 제공되는 모든 콘텐츠(텍스트, 디자인, 이미지 등)에 대한 저작권 및 지식재산권은 회사에
                귀속됩니다.
              </ListItem>
              <ListItem>
                이용자는 제공된 콘텐츠를 개인적 목적 외에는 복제, 배포, 전송, 게시, 수정할 수 없습니다.
              </ListItem>
            </OrderedList>
            <Heading3>제8조 (면책조항)</Heading3>
            <OrderedList>
              <ListItem>회사는 이용자의 귀책사유로 발생한 문제에 대해 책임지지 않습니다.</ListItem>
              <ListItem>
                회사는 천재지변, 네트워크 장애 등 불가항력적 사유로 인해 서비스를 제공할 수 없는 경우 책임을 지지
                않습니다.
              </ListItem>
            </OrderedList>
            <Heading3>제9조 (분쟁 해결)</Heading3>
            <Paragraph>
              본 약관은 대한민국 법률에 따르며, 서비스 이용과 관련하여 분쟁이 발생한 경우, 회사의 본사 소재지를 관할하는
              법원을 제1심 관할법원으로 합니다.
            </Paragraph>
            <Heading3>제10조 (고객지원 및 문의)</Heading3>
            <Paragraph>서비스 관련 문의는 아래 이메일로 접수받습니다.</Paragraph>
            <Paragraph>
              <strong>이메일:</strong> brainbrainsite@gmail.com
            </Paragraph>
            <Heading3>부칙</Heading3>
            <Paragraph>본 약관은 2025년 5월 11일부터 시행됩니다.</Paragraph>
          </div>
        );
      case 'business':
        return (
          <div>
            <Paragraph>브레인브레인은 사용자에게 최상의 서비스를 제공하기 위해 노력하고 있습니다.</Paragraph>
            <Heading3>사업자 정보</Heading3>
            <S.StyledTable>
              <tbody>
                <tr>
                  <S.StyledTh>상호(법인명)</S.StyledTh>
                  <S.StyledTd>브레인랩</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTh>대표자명</S.StyledTh>
                  <S.StyledTd>이예찬</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTh>사업자등록번호</S.StyledTh>
                  <S.StyledTd>205-07-97074</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTh>주소</S.StyledTh>
                  <S.StyledTd>경기도 성남시 분당구 정자일로 15 103동 1302호</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTh>대표 이메일</S.StyledTh>
                  <S.StyledTd>brainbrainsite@gmail.com</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTh>대표 전화번호</S.StyledTh>
                  <S.StyledTd>010-6818-6746</S.StyledTd>
                </tr>
                <tr>
                  <S.StyledTh>호스팅 제공자</S.StyledTh>
                  <S.StyledTd>AWS</S.StyledTd>
                </tr>
              </tbody>
            </S.StyledTable>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <S.InfoContainer>
      <S.InfoTitle>{getTitle()}</S.InfoTitle>
      <S.InfoContent>{getContent()}</S.InfoContent>
    </S.InfoContainer>
  );
}

export default Info;
