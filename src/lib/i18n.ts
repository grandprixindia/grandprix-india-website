import en from '../../locales/en.json';
import es from '../../locales/es.json';
import fr from '../../locales/fr.json';
import de from '../../locales/de.json';
import ar from '../../locales/ar.json';

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ar';

export const locales: Locale[] = ['en', 'es', 'fr', 'de', 'ar'];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ar: 'العربية',
};

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  es: 'ltr',
  fr: 'ltr',
  de: 'ltr',
  ar: 'rtl',
};

const translations = {
  en,
  es,
  fr,
  de,
  ar,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

