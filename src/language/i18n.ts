import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import cn from './cn.json';
import en from './en.json';
import ko from './ko.json';
import type { TranslationKeys } from '../types/i18n.types';

// Language codes
export const LANGUAGE_CODES = {
  KOREAN: 'ko',
  ENGLISH: 'en',
  CHINESE: 'cn',
} as const;

export type LanguageCode = (typeof LANGUAGE_CODES)[keyof typeof LANGUAGE_CODES];

// Resources type
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
  [LANGUAGE_CODES.CHINESE]: {
    translation: cn as TranslationKeys,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGE_CODES.KOREAN,
  fallbackLng: LANGUAGE_CODES.ENGLISH,

  // Enable debug only in development
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

// Type augmentation for useTranslation hook
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationKeys;
    };
  }
}

export default i18n;
