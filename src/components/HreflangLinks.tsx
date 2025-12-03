'use client';

import { usePathname } from 'next/navigation';

const baseUrl = 'https://grandprixindia.in';
const languages = [
  { code: 'en', path: '' },
  { code: 'es', path: '/es' },
  { code: 'fr', path: '/fr' },
  { code: 'de', path: '/de' },
  { code: 'ar', path: '/ar' },
];

export default function HreflangLinks() {
  const pathname = usePathname();
  
  // Remove language prefix from pathname to get base path
  const basePath = pathname.replace(/^\/(en|es|fr|de|ar)/, '') || '/';
  const cleanPath = basePath === '/' ? '' : basePath;
  
  // Generate hreflang links for all language versions
  const hreflangLinks = languages.map((lang) => {
    const url = lang.path === '' 
      ? `${baseUrl}${cleanPath}` 
      : `${baseUrl}${lang.path}${cleanPath}`;
    
    return (
      <link
        key={lang.code}
        rel="alternate"
        hrefLang={lang.code}
        href={url}
      />
    );
  });

  // Add x-default pointing to English
  const defaultUrl = `${baseUrl}${cleanPath}`;
  
  return (
    <>
      {hreflangLinks}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}



