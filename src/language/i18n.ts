import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko.json';
import en from './en.json';
import cn from './cn.json';

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      translation: ko,
    },
    en: {
      translation: en,
    },
    cn: {
      translation: cn,
    },
  },
  lng: 'ko-KR',
  fallbackLng: {
    'ko-KR': ['ko-KR'],
    'en-US': ['en-US'],
    'cn-CN': ['cn-CN'],
    default: ['ko-KR'],
  },
  debug: true,
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

export default i18n;
