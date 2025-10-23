'use client';

import { Locale } from '@/lib/i18n';
import Link from 'next/link';

interface HeroMobileProps {
  locale: Locale;
  t: any;
  imageUrl?: string;
}

export default function HeroMobile({ locale, t, imageUrl = '/racetrack.jpg' }: HeroMobileProps) {
  const baseUrl = locale === 'en' ? '' : `/${locale}`;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Static Background for Mobile Performance */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
      </div>

      {/* Static Content for Mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 bg-white/10 rounded-lg border border-white/10">
          {/* Eyebrow */}
          <p className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium">
            {t.hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-[1.1]">
            {t.hero.headline}
          </h1>

          {/* Subhead */}
          <p className="text-white/90 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
            {t.hero.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
