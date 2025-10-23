'use client';

import { Locale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import MagneticButtonMobile from './MagneticButtonMobile';
import AnimatedTextMobile from './AnimatedTextMobile';

interface HeroMobileProps {
  locale: Locale;
  t: any;
  imageUrl?: string;
}

export default function HeroMobile({ locale, t, imageUrl = '/racetrack.jpg' }: HeroMobileProps) {
  const baseUrl = locale === 'en' ? '' : `/${locale}`;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Simplified Background - No parallax on mobile */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
        
        {/* Single static gradient orb instead of animated ones */}
        <div
          className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(182,152,73,0.6) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Simplified Grid Pattern - No animation */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(182,152,73,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(182,152,73,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="filigree-corner p-6 md:p-12 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
          {/* Eyebrow */}
          <motion.p 
            className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4 md:mb-6 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline with simplified animation */}
          <AnimatedTextMobile
            text={t.hero.headline}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-tight leading-[1.1]"
            delay={0.2}
          />

          {/* Subhead */}
          <motion.p
            className="text-white/90 text-base md:text-xl max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            {t.hero.subhead}
          </motion.p>

          {/* CTAs with simplified layout */}
          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButtonMobile 
              href={`${baseUrl}/projects/`}
              variant="primary"
              className="w-full max-w-[280px]"
            >
              {t.hero.cta_primary}
            </MagneticButtonMobile>
            <MagneticButtonMobile 
              href={`${baseUrl}/about/`}
              variant="ghost"
              className="w-full max-w-[280px]"
            >
              {t.hero.cta_secondary}
            </MagneticButtonMobile>
          </motion.div>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1.5">
          <motion.div
            className="w-1 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
