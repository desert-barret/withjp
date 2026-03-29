import { createI18n } from 'vue-i18n';
import es from './es';
import en from './en';

const savedLang = localStorage.getItem('withjp_lang');
const browserLang = navigator.language.startsWith('en') ? 'en' : 'es';
const defaultLocale = savedLang || browserLang;

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'es',
  messages: { es, en },
});

export type Locale = 'es' | 'en';
