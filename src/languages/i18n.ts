import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import type { TranslationKeys } from '../types/i18n.types';
import en from './en.json';
import ko from './ko.json';
import zh_cn from './zh_cn.json';

export const LANGUAGE_CODES = {
  KOREAN: 'ko',
  ENGLISH: 'en',
  CHINESE_SIMPLIFIED: 'zh_cn',
} as const;

export type LanguageCode = (typeof LANGUAGE_CODES)[keyof typeof LANGUAGE_CODES];

export type Resources = {
  [key in LanguageCode]: {
    translation: TranslationKeys;
  };
};

const resources: Resources = {
  [LANGUAGE_CODES.KOREAN]: {
    translation: ko as TranslationKeys,
  },
  [LANGUAGE_CODES.ENGLISH]: {
    translation: en as TranslationKeys,
  },
  [LANGUAGE_CODES.CHINESE_SIMPLIFIED]: {
    translation: zh_cn as TranslationKeys,
  },
};

let detectedLanguageCode: LanguageCode = LANGUAGE_CODES.ENGLISH;
if (typeof navigator !== 'undefined' && navigator.language) {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ko')) {
    detectedLanguageCode = LANGUAGE_CODES.KOREAN;
  } else if (browserLang.startsWith('zh')) {
    detectedLanguageCode = LANGUAGE_CODES.CHINESE_SIMPLIFIED;
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectedLanguageCode,
  fallbackLng: LANGUAGE_CODES.ENGLISH,

  debug: process.env.NODE_ENV === 'development',

  defaultNS: 'translation',
  ns: 'translation',
  keySeparator: '.',

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationKeys;
    };
  }
}

export default i18n;
