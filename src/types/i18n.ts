export type SupportedLanguage = 'ko' | 'en' | 'cn';

export type LanguageMapping = {
  [key in SupportedLanguage]: string;
};

export interface I18nConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: SupportedLanguage[];
  languageMapping: LanguageMapping;
}
