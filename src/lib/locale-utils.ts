'use client';

import { usePathname } from 'next/navigation';
import { Locale, locales, defaultLocale, isValidLocale } from './i18n';

export function useCurrentLocale(): Locale {
  try {
    const pathname = usePathname();
    
    // Extract locale from pathname
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    
    // Check if first segment is a valid locale
    if (isValidLocale(firstSegment)) {
      return firstSegment;
    }
    
    // Default to English if no locale in URL
    return defaultLocale;
  } catch (error) {
    // Fallback to default locale if there's any error
    return defaultLocale;
  }
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (isValidLocale(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

