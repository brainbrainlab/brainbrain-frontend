import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import textLogo from '@/assets/images/logo_text.svg';
import logoImage from '@/assets/images/logo_with_dot.svg';

import * as S from './Footer.styles';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.LogoSection
          onClick={() => {
            navigate('/');
          }}
        >
          <S.Logo src={logoImage} alt="BrainBrain Logo" />
          <S.LogoText src={textLogo} alt="BrainBrain" />
        </S.LogoSection>

        <S.MenuLinks>
          <S.MenuItem href="/test">IQ Test</S.MenuItem>
          <S.MenuItem href="/privacy">Privacy Policy</S.MenuItem>
          <S.MenuItem href="/terms">Terms of Service</S.MenuItem>
          <S.MenuItem href="/contact">Contact</S.MenuItem>
          <S.MenuItem href="/business">Business Information</S.MenuItem>
        </S.MenuLinks>

        <S.Copyright>© {currentYear} BrainBrain. All Rights Reserved.</S.Copyright>
      </S.Content>
    </S.Container>
  );
}

export default Footer;
