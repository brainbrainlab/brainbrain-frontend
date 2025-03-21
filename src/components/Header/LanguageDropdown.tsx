import React, { forwardRef } from 'react';
import i18n from '../../language/i18n';
import * as S from './LanguageDropdown.styles';

const LanguageDropdown = forwardRef<HTMLDivElement>((props, ref) => {
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <S.Dropdown ref={ref}>
      <S.DropdownItem onClick={() => changeLanguage('ko')}>한국어</S.DropdownItem>
      <S.DropdownItem onClick={() => changeLanguage('en')}>English</S.DropdownItem>
      <S.DropdownItem onClick={() => changeLanguage('cn')}>中文</S.DropdownItem>
    </S.Dropdown>
  );
});

export default LanguageDropdown;
