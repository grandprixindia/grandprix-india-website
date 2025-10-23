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
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 50);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const baseUrl = locale === 'en' ? '' : `/${locale}`;
  
  // Get current path without locale
  const getCurrentPath = () => {
    let path = pathname;
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
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        style={{ zIndex: 9999 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.nav 
            className={`relative rounded-full transition-all duration-700 ${
              scrolled
                ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-200/50'
                : 'bg-white/80 backdrop-blur-xl shadow-xl border border-white/60'
            }`}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 1 }}
          >
            {/* Beautiful progress indicator */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/30 via-primary/20 to-primary/10 rounded-full"
              style={{ 
                width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                background: "linear-gradient(90deg, rgba(182,152,73,0.3) 0%, rgba(182,152,73,0.2) 50%, rgba(182,152,73,0.1) 100%)"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            
            <div className="relative flex items-center justify-between px-6 py-3">
              {/* Logo */}
              <Link href={`${baseUrl}/`} className="flex items-center z-10">
                <motion.img
                  src="/logo.svg"
                  alt="Grand Prix India"
                  className="h-9 w-auto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 group"
                    >
                      {link.label}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right section: Language + CTA */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Language Selector */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-gray-50"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
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
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <Link href={`${baseUrl}/contact/`}>
                    <motion.button
                      className="px-6 py-2 bg-gradient-to-r from-primary via-primary to-primary/90 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 15px 35px rgba(182,152,73,0.4)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                          backgroundSize: "200% 100%",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text"
                        }}
                      >
                        Get In Touch
                      </motion.span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-full hover:bg-gray-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-700 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <nav className="flex flex-col space-y-8 text-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="relative text-center">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center justify-center text-gray-700 hover:text-primary transition-colors font-medium mx-auto"
                >
                  {localeNames[locale]}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langMenuOpen && (
                  <div className="mt-4 w-36 bg-gray-100 rounded-md shadow-lg py-1 mx-auto">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={getLocaleUrl(loc)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        onClick={() => {
                          setLangMenuOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href={`${baseUrl}/contact/`}>
                <button className="mt-8 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors text-xl">
                  Get In Touch
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}