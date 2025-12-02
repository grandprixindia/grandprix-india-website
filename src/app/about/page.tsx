'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n';
import { useCurrentLocale } from '@/lib/locale-utils';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import AnimatedText from '@/components/AnimatedText';
import AboutPageSchemas from '@/components/AboutPageSchemas';

export default function AboutPage() {
  const locale = useCurrentLocale();
  const t = getTranslations(locale);

  const timelineItems = [
    { year: '2006', description: t.about.timeline_2006 },
    { year: '2010-2020', description: t.about.timeline_growth },
    { year: 'MSV Partnership', description: t.about.timeline_msv },
    { year: '2025 & Beyond', description: t.about.timeline_future },
  ];

  return (
    <div>
      <AboutPageSchemas />
      <Header locale={locale} t={t} />
      
      <main id="main-content">
        {/* Page Header */}
        <section className="relative py-32 bg-gradient-to-br from-dark via-dark/95 to-dark text-white overflow-hidden">
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/assets/placeholders/about-company.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <AnimatedText
                text={t.about.page_title}
                className="font-serif text-5xl md:text-7xl mb-8"
              />
              <div className="w-24 h-1 bg-gradient-gold mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Inception
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6">
                    {t.about.company_title}
                  </h2>
                  <div className="w-20 h-1 bg-gradient-gold mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t.about.company_description}
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="relative h-[500px] flex items-center justify-center">
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/logo.svg"
                      alt="Grand Prix India logo"
                      className="max-h-72 w-auto"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/30 rounded-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full backdrop-blur-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-32 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">
                {t.about.founder_title}
              </h2>
            </motion.div>
            
            <Reveal>
              <motion.div 
                className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="md:flex">
                  <motion.div 
                    className="md:w-2/5 relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div 
                      className="h-80 md:h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(/assets/placeholders/founder.jpg)' }}
                      aria-label="Bharat Sadanand Shetty, Founder and Managing Director of Grand Prix India"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/20" />
                  </motion.div>
                  <motion.div 
                    className="md:w-3/5 p-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="font-serif text-3xl text-white mb-2">
                      {t.about.founder_name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-gold mb-6" />
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {t.about.founder_bio}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6">
                {t.about.timeline_title}
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto" />
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Animated timeline line */}
                <motion.div
                  className="absolute left-[23px] top-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
                
                <div className="space-y-12">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-8 relative"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="relative w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center z-10 shadow-lg"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-white" />
                          {/* Pulse effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          />
                        </motion.div>
                        {index < timelineItems.length - 1 && (
                          <div className="w-0.5 flex-1 mt-2" />
                        )}
                      </div>
                      <motion.div
                        className="flex-1 pb-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <h3 className="font-serif text-3xl text-dark mb-4 text-gradient">
                          {item.year}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-gold mb-4" />
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} t={t} />
    </div>
  );
}

