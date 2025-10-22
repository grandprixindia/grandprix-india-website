'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Modal from '@/components/Modal';
import { getTranslations } from '@/lib/i18n';
import { useCurrentLocale } from '@/lib/locale-utils';
import { projects, Project } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function ProjectsPage() {
  const locale = useCurrentLocale();
  const t = getTranslations(locale);
  const [filter, setFilter] = useState<'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects;

  const getStatusLabel = (status: 'Planned' | 'In Development') => {
    return status === 'Planned' ? t.projects.status_planned : t.projects.status_development;
  };

  return (
    <div>
      <Header locale={locale} t={t} />
      
      <main id="main-content">
        {/* Page Header */}
        <section className="relative py-32 bg-gradient-to-br from-dark via-dark/95 to-dark text-white overflow-hidden">
          {/* Animated background grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(182,152,73,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(182,152,73,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Portfolio
              </span>
              <AnimatedText
                text={t.projects.page_title}
                className="font-serif text-5xl md:text-7xl mb-8"
              />
              <div className="w-24 h-1 bg-gradient-gold mx-auto" />
            </motion.div>
            
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Project count indicator */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg">
                Showing <span className="font-bold text-primary">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </motion.div>

            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -50 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      layout: { duration: 0.3 }
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      status={project.status}
                      location={project.location}
                      imageUrl={project.imageUrl}
                      onClick={() => setSelectedProject(project)}
                      statusLabel={getStatusLabel(project.status)}
                      viewLabel={t.projects.view_details}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different filter</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div>
            <div className="relative h-96 mb-6 rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.imageUrl})` }}
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{selectedProject.location}</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {selectedProject.fullDescription}
            </p>
          </div>
        )}
      </Modal>

      <Footer locale={locale} t={t} />
    </div>
  );
}

