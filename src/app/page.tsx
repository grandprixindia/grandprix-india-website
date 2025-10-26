'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { useCurrentLocale } from '@/lib/locale-utils';
import { projects } from '@/data/projects';
import Reveal from '@/components/Reveal';
import Card3D from '@/components/Card3D';
import MagneticButton from '@/components/MagneticButton';
import ParallaxSection from '@/components/ParallaxSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  const locale = useCurrentLocale();
  const t = getTranslations(locale);
  const baseUrl = locale === 'en' ? '' : `/${locale}`;

  return (
    <div>
      <Header locale={locale} t={t} />
      
      <main id="main-content">
        <Hero locale={locale} t={t} />

        {/* About Section */}
        <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/assets/placeholders/about-company.jpg)' }}
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      About GPI
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-dark mb-6 leading-tight drop-shadow-sm">
                      {t.home.about_title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-gold mb-6" />
                    <p className="text-dark text-lg mb-8 leading-relaxed drop-shadow-sm">
                      {t.home.about_snippet}
                    </p>
                    <MagneticButton href={`${baseUrl}/about/`} variant="secondary">
                      {t.common.learn_more}
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </MagneticButton>
                  </motion.div>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="relative h-[500px] group">
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
                    style={{ backgroundImage: 'url(/assets/placeholders/about-preview.jpg)' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent" />
                  </motion.div>
                  {/* Floating decoration */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/30 rounded-2xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl backdrop-blur-sm"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4.5, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative py-32 bg-dark text-white overflow-hidden">
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(182,152,73,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(182,152,73,0.2) 0%, transparent 50%)'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                Our Work
              </span>
              <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white drop-shadow-lg">
                {t.home.projects_title}
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto drop-shadow">
                {t.home.projects_subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {projects.slice(0, 3).map((project, idx) => (
                <Reveal key={project.id} delay={idx * 0.1}>
                  <Card3D>
                    <Link
                      href={`${baseUrl}/projects/`}
                      className="group block h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 glow-gold-hover flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden flex-shrink-0">
                        <motion.div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.imageUrl})` }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-serif text-xl text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 drop-shadow-sm">
                          {project.title}
                        </h3>
                        <p className="text-white text-sm line-clamp-3 leading-relaxed mb-4 flex-grow drop-shadow-sm">
                          {project.description}
                        </p>
                        <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                          <span className="text-sm font-medium">Explore</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </Card3D>
                </Reveal>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MagneticButton href={`${baseUrl}/projects/`} variant="primary">
                View All Projects
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </motion.div>
          </div>
        </section>


        {/* Contact CTA Section */}
        <section className="relative py-32 bg-gradient-to-br from-dark via-dark to-dark/95 text-white overflow-hidden">
          {/* Animated background patterns */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white drop-shadow-lg">
                {t.home.contact_title}
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
              <p className="text-white text-lg mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">
                {t.home.contact_subtitle}
              </p>
              <MagneticButton href={`${baseUrl}/contact/`} variant="primary" className="text-lg px-12 py-5">
                {t.nav.contact}
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer locale={locale} t={t} />
    </div>
  );
}

