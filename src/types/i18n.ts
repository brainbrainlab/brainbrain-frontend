export type SupportedLanguage = 'ko' | 'en' | 'zh_cn' | 'zh_tw';

export type LanguageMapping = {
  [key in SupportedLanguage]: string;
};

export interface I18nConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: SupportedLanguage[];
  languageMapping: LanguageMapping;
}
