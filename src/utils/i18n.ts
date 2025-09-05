import { I18nConfig, SupportedLanguage } from '@/types/i18n';

export const i18nConfig: I18nConfig = {
  defaultLanguage: 'ko',
  supportedLanguages: ['ko', 'en', 'zh_cn', 'zh_tw'],
  languageMapping: {
    ko: 'ko-KR',
    en: 'en-US',
    zh_cn: 'zh-CN',
    zh_tw: 'zh_TW',
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
