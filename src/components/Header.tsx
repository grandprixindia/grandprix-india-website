'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, locales, localeNames } from '@/lib/i18n';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {
  locale: Locale;
  t: any;
}

export default function Header({ locale, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseUrl = locale === 'en' ? '' : `/${locale}`;
  
  // Get current path without locale
  const getCurrentPath = () => {
    let path = pathname;
    // Remove locale prefix if present
    for (const loc of locales) {
      if (path.startsWith(`/${loc}`)) {
        path = path.replace(`/${loc}`, '');
        break;
      }
    }
    return path || '/';
  };
  
  const currentPath = getCurrentPath();
  
  // Function to get URL for a specific locale while maintaining current page
  const getLocaleUrl = (newLocale: Locale) => {
    const path = currentPath === '/' ? '/' : currentPath;
    return newLocale === 'en' ? path : `/${newLocale}${path}`;
  };

  const navLinks = [
    { href: `${baseUrl}/`, label: t.nav.home },
    { href: `${baseUrl}/about/`, label: t.nav.about },
    { href: `${baseUrl}/projects/`, label: t.nav.projects },
    { href: `${baseUrl}/contact/`, label: t.nav.contact },
  ];

  return (
    <>
      {/* Modern Floating Header */}
      <motion.header 
        className="fixed top-4 left-0 right-0 z-50 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.nav 
            className={`relative rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-200/50'
                : 'bg-white/80 backdrop-blur-xl shadow-xl border border-white/60'
            }`}
            style={{ opacity: scrolled ? 1 : headerOpacity }}
          >
            {/* Subtle progress indicator */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/20 to-primary/5 rounded-full"
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
            
            <div className="relative flex items-center justify-between px-6 py-3">
              {/* Logo */}
              <Link href={`${baseUrl}/`} className="flex items-center z-10">
                <motion.img
                  src="/logo.svg"
                  alt="Grand Prix India"
                  className="h-9 w-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>
                ))}
              </div>

              {/* Right section: Language + CTA */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Language Selector */}
                <div className="relative">
                  <motion.button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-gray-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="text-xs font-medium">{localeNames[locale].slice(0, 2).toUpperCase()}</span>
                    <motion.svg 
                      className="w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: langMenuOpen ? 180 : 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  
                  <AnimatePresence>
                    {langMenuOpen && (
                      <motion.div 
                        className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 overflow-hidden"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={getLocaleUrl(loc)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setLangMenuOpen(false)}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA Button */}
                <Link href={`${baseUrl}/contact/`}>
                  <motion.button
                    className="px-5 py-2 bg-gradient-to-r from-primary to-primary/90 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(182,152,73,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-full hover:bg-gray-50"
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocaleUrl(loc)}
                      className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                        loc === locale
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {localeNames[loc]}
                    </Link>
                  ))}
                </div>
                
                <Link href={`${baseUrl}/contact/`} onClick={() => setMobileMenuOpen(false)}>
                  <motion.button
                    className="w-full px-5 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
