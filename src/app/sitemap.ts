import { MetadataRoute } from 'next';

const baseUrl = 'https://grandprixindia.in';
const languages = ['en', 'es', 'fr', 'de', 'ar'];
const pages = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: 'about', priority: 0.8, changefreq: 'monthly' },
  { path: 'projects', priority: 0.9, changefreq: 'weekly' },
  { path: 'media', priority: 0.7, changefreq: 'weekly' },
  { path: 'contact', priority: 0.6, changefreq: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate URLs for all pages and languages
  pages.forEach((page) => {
    languages.forEach((lang) => {
      // Build URL correctly
      let url: string;
      if (page.path === '') {
        // Homepage
        url = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;
      } else {
        // Other pages
        url = lang === 'en' 
          ? `${baseUrl}/${page.path}` 
          : `${baseUrl}/${lang}/${page.path}`;
      }
      
      // Build alternates for all languages
      const alternates: Record<string, string> = {};
      languages.forEach((l) => {
        let altUrl: string;
        if (page.path === '') {
          altUrl = l === 'en' ? baseUrl : `${baseUrl}/${l}`;
        } else {
          altUrl = l === 'en' 
            ? `${baseUrl}/${page.path}` 
            : `${baseUrl}/${l}/${page.path}`;
        }
        alternates[l] = altUrl;
      });
      
      urls.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changefreq as 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'daily' | 'never',
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  // Ensure homepage is first
  return urls.sort((a, b) => {
    if (a.url === baseUrl) return -1;
    if (b.url === baseUrl) return 1;
    return 0;
  });
}

