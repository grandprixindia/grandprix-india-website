'use client';

import { useRef } from 'react';
import { Locale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  locale: Locale;
  t: any;
  imageUrl?: string;
}

export default function Hero({ locale, t, imageUrl = '/racetrack.jpg' }: HeroProps) {
  const baseUrl = locale === 'en' ? '' : `/${locale}`;
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Optimized transforms with reduced complexity for better performance
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <div className="p-8 md:p-16 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
          {/* Eyebrow */}
          <motion.p 
            className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-white/90 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            {t.hero.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <Link 
              href={`${baseUrl}/projects/`}
              className="px-8 py-4 text-lg font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-colors min-w-[220px] text-center"
            >
              {t.hero.cta_primary}
            </Link>
            
            <Link 
              href={`${baseUrl}/about/`}
              className="px-8 py-4 text-lg font-semibold rounded-full border border-white/70 text-white hover:bg-white hover:text-dark transition-colors min-w-[220px] text-center"
            >
              {t.hero.cta_secondary}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}