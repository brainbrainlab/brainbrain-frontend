import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoLanguage } from 'react-icons/io5';

import * as S from './Header.styles';
import LanguageDropdown from './LanguageDropdown';
import logoWithDot from '../../assets/images/logo_with_dot.svg';
import Button from '../Button/Button';

const TestButton = React.memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Button width="12rem" size="sm" fontWeight="extraBold" onClick={() => navigate('/test')}>
      {t('main.button')}
    </Button>
  );
});

const Header = React.memo(() => {
  const { t } = useTranslation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const isTestingPage = useLocation().pathname === '/test';
  const navigate = useNavigate();

  return (
    <S.Layout>
      <S.Logo>
        <S.LogoImage src={logoWithDot} alt="logo" onClick={() => navigate('/')} />
      </S.Logo>
      <S.ButtonContainer>
        <S.LanguageButton onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
          <S.LanguageButtonText>
            <IoLanguage size={20} />
            {t('header.language')}
          </S.LanguageButtonText>
          {isDropdownVisible && <LanguageDropdown />}
        </S.LanguageButton>
        {!isTestingPage && <TestButton />}
      </S.ButtonContainer>
    </S.Layout>
  );
});

export default Header;
