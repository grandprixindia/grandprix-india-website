'use client';

import { useRef } from 'react';
import { Locale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import AnimatedText from './AnimatedText';

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

  // Simplified parallax for better mobile performance
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            scale
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
        
        {/* Static gradient orb for mobile performance */}
        <div
          className="absolute top-1/4 left-1/4 w-[200px] h-[200px] rounded-full blur-2xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(182,152,73,0.4) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(182,152,73,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(182,152,73,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        {/* Particles removed for mobile performance */}

        <div className="filigree-corner p-8 md:p-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
          {/* Eyebrow */}
          <motion.p 
            className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline with animated text */}
          <AnimatedText
            text={t.hero.headline}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-[1.1]"
            delay={0.2}
          />

          {/* Subhead */}
          <motion.p
            className="text-white/90 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            {t.hero.subhead}
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButton 
              href={`${baseUrl}/projects/`}
              variant="primary"
              className="min-w-[220px]"
            >
              {t.hero.cta_primary}
            </MagneticButton>
            <MagneticButton 
              href={`${baseUrl}/about/`}
              variant="ghost"
              className="min-w-[220px]"
            >
              {t.hero.cta_secondary}
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Modern scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
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

