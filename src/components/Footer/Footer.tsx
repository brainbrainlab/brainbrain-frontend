import * as S from './Footer.styles';
import { useTranslation } from 'react-i18next';
import logoImage from '../../assets/images/logo_with_dot.svg';
import textLogo from '../../assets/images/logo_text.svg';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.Content>
        <S.LogoSection>
          <S.Logo src={logoImage} alt="BrainBrain Logo" />
          <S.LogoText src={textLogo} alt="BrainBrain" />
        </S.LogoSection>

        <S.MenuLinks>
          <S.MenuItem href="/testing">IQ Test</S.MenuItem>
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
