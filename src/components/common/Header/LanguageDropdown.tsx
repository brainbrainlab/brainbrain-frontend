import { forwardRef } from 'react';

import i18n, { LANGUAGE_CODES, LanguageCode } from '@/languages/i18n';

import * as S from './LanguageDropdown.styles';

interface LanguageOption {
  code: LanguageCode;
  label: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: LANGUAGE_CODES.KOREAN, label: '한국어' },
  { code: LANGUAGE_CODES.ENGLISH, label: 'English' },
  { code: LANGUAGE_CODES.CHINESE_SIMPLIFIED, label: '简体中文' },
  { code: LANGUAGE_CODES.CHINESE_TRADITIONAL, label: '繁體中文' },
];

const LanguageDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const changeLanguage = (lang: LanguageCode) => {
    i18n.changeLanguage(lang);
  };

  return (
    <S.Dropdown ref={ref}>
      {LANGUAGE_OPTIONS.map(({ code, label }) => (
        <S.DropdownItem key={code} onClick={() => changeLanguage(code)}>
          {label}
        </S.DropdownItem>
      ))}
    </S.Dropdown>
  );
});

export default LanguageDropdown;
