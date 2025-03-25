import { I18nConfig, LanguageMapping, SupportedLanguage } from '../types/i18n';

export const i18nConfig: I18nConfig = {
  defaultLanguage: 'ko',
  supportedLanguages: ['ko', 'en', 'cn'],
  languageMapping: {
    ko: 'ko-KR',
    en: 'en-US',
    cn: 'zh-CN',
  },
};

export const updateHtmlLang = (language: string): void => {
  const mapping = i18nConfig.languageMapping;
  document.documentElement.lang = mapping[language as SupportedLanguage] || language;
};

export const getDefaultLanguage = (): SupportedLanguage => {
  return i18nConfig.defaultLanguage;
};

export const isSupportedLanguage = (lang: string): lang is SupportedLanguage => {
  return i18nConfig.supportedLanguages.includes(lang as SupportedLanguage);
};
