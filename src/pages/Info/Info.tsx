import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
            <p>
              본 개인정보처리방침은 브레인브레인(이하 "회사")이 제공하는 서비스(이하 "서비스")를 이용하는 사용자(이하
              "사용자")의 개인정보를 보호하고 개인정보와 관련한 고객의 고충을 원활하게 처리할 수 있도록 다음과 같은
              처리방침을 두어 개인정보를 관리하고 있습니다.
            </p>
            <h3>1. 개인정보의 수집 및 이용 목적</h3>
            <p>
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
              이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한
              조치를 이행할 예정입니다.
            </p>
            <h3>2. 개인정보의 처리 및 보유기간</h3>
            <p>
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보
              보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <h3>3. 개인정보의 제3자 제공</h3>
            <p>
              회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의
              동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
            <h3>4. 정보주체의 권리·의무 및 행사방법</h3>
            <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ul>
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
          </div>
        );
      case 'terms':
        return (
          <div>
            <p>
              본 약관은 브레인브레인(이하 "회사")이 제공하는 서비스(이하 "서비스")를 이용하는 사용자(이하 "사용자")와
              회사 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
            <h3>1. 서비스의 제공</h3>
            <p>회사는 다음과 같은 서비스를 제공합니다:</p>
            <ul>
              <li>두뇌 유형 테스트 서비스</li>
              <li>테스트 결과 분석 및 제공</li>
              <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
            </ul>
            <h3>2. 서비스 이용</h3>
            <p>사용자는 서비스를 이용함에 있어 다음 각 호의 행위를 하여서는 안됩니다:</p>
            <ul>
              <li>법령 또는 공서양속에 위배되는 행위</li>
              <li>회사의 서비스 제공을 방해하는 행위</li>
              <li>
                회사의 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 등을 하는 행위
              </li>
              <li>회사의 서비스에 게시된 정보를 변경하는 행위</li>
            </ul>
            <h3>3. 서비스 이용 제한</h3>
            <p>
              회사는 사용자가 본 약관을 위반하거나 서비스의 정상적인 운영을 방해하는 경우, 서비스 이용을 제한할 수
              있습니다.
            </p>
            <h3>4. 서비스 제공의 중단</h3>
            <p>회사는 다음과 같은 경우 서비스 제공을 중단할 수 있습니다:</p>
            <ul>
              <li>서비스 관련 설비의 보수, 교체, 점검, 공사 등 부득이한 경우</li>
              <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중단했을 경우</li>
              <li>기타 불가항력적 사유가 있는 경우</li>
            </ul>
          </div>
        );
      case 'business':
        return (
          <div>
            <p>브레인브레인은 사용자에게 최상의 서비스를 제공하기 위해 노력하고 있습니다.</p>
            <h3>회사 정보</h3>
            <ul>
              <li>
                <strong>회사명:</strong> 브레인브레인
              </li>
              <li>
                <strong>대표자:</strong> 홍길동
              </li>
              <li>
                <strong>사업자등록번호:</strong> 123-45-67890
              </li>
              <li>
                <strong>주소:</strong> 서울특별시 강남구 테헤란로 123
              </li>
              <li>
                <strong>전화번호:</strong> 02-1234-5678
              </li>
              <li>
                <strong>이메일:</strong> contact@brainbrain.com
              </li>
            </ul>
            <h3>사업 내용</h3>
            <p>
              브레인브레인은 두뇌 유형 테스트 및 관련 서비스를 제공하는 기업입니다. 사용자의 두뇌 유형을 분석하고, 그에
              맞는 맞춤형 정보와 서비스를 제공합니다.
            </p>
            <h3>연혁</h3>
            <ul>
              <li>2023년 1월: 회사 설립</li>
              <li>2023년 3월: 두뇌 유형 테스트 서비스 개발 시작</li>
              <li>2023년 6월: 베타 서비스 출시</li>
              <li>2023년 9월: 정식 서비스 출시</li>
              <li>2024년 1월: 사용자 10만명 돌파</li>
            </ul>
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
