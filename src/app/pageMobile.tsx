'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroMobile from '@/components/HeroMobile';
import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { useCurrentLocale } from '@/lib/locale-utils';
import { projects } from '@/data/projects';

export default function HomePageMobile() {
  const locale = useCurrentLocale();
  const t = getTranslations(locale);
  const baseUrl = locale === 'en' ? '' : `/${locale}`;

  return (
    <div>
      <Header locale={locale} t={t} />
      
      <main id="main-content">
        <HeroMobile locale={locale} t={t} />

        {/* About Section - Mobile Optimized */}
        <section className="relative py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  About GPI
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6 leading-tight">
                  {t.home.about_title}
                </h2>
                <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6" />
                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                  {t.home.about_snippet}
                </p>
                <Link 
                  href={`${baseUrl}/about/`}
                  className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  {t.common.learn_more}
                </Link>
              </div>
              
              <div className="relative h-[300px] group">
                <div className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl"
                  style={{ backgroundImage: 'url(/assets/placeholders/about-preview.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Mobile Optimized */}
        <section className="relative py-16 bg-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                Our Work
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">
                {t.home.projects_title}
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {t.home.projects_subtitle}
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {projects.slice(0, 3).map((project) => (
                <Link
                  key={project.id}
                  href={`${baseUrl}/projects/`}
                  className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-white mb-3 hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href={`${baseUrl}/projects/`}
                className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA Section - Mobile Optimized */}
        <section className="relative py-16 bg-gradient-to-br from-dark via-dark to-dark/95 text-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">
              {t.home.contact_title}
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.home.contact_subtitle}
            </p>
            <Link 
              href={`${baseUrl}/contact/`}
              className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-lg"
            >
              {t.nav.contact}
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} t={t} />
    </div>
  );
}
