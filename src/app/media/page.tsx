'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { getTranslations, defaultLocale } from '@/lib/i18n';
import { mediaItems, MediaItem } from '@/data/media';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function MediaPage() {
  const t = getTranslations(defaultLocale);
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const filteredMedia = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter);

  return (
    <div>
      <Header locale={defaultLocale} t={t} />
      
      <main id="main-content">
        {/* Page Header */}
        <section className="relative py-32 bg-gradient-to-br from-dark via-dark/95 to-dark text-white overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Gallery
              </span>
              <AnimatedText
                text={t.media.page_title}
                className="font-serif text-5xl md:text-7xl mb-8"
              />
              <div className="w-24 h-1 bg-gradient-gold mx-auto" />
            </motion.div>
            
            {/* Animated Filter buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: 'all', label: t.media.filter_all },
                { value: 'photo', label: t.media.filter_photos },
                { value: 'video', label: t.media.filter_videos }
              ].map((item, index) => (
                <motion.button
                  key={item.value}
                  onClick={() => setFilter(item.value as any)}
                  className={`relative px-8 py-3 rounded-lg font-medium transition-all overflow-hidden ${
                    filter === item.value
                      ? 'text-white'
                      : 'border-2 border-white/30 text-white hover:border-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                >
                  {filter === item.value && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-gold"
                      layoutId="activeMediaFilter"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Media count indicator */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg">
                Viewing <span className="font-bold text-primary">{filteredMedia.length}</span> {filteredMedia.length === 1 ? 'item' : 'items'}
              </p>
            </motion.div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredMedia.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                    className="relative h-72 bg-cover bg-center rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                    onClick={() => {
                      setSelectedItem(item);
                      if (item.type === 'video') {
                        setShowVideo(true);
                      }
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-300" />
                    
                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <motion.div
                          className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0, rotate: -180 }}
                          whileHover={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      ) : (
                        <motion.div
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Type badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      {item.type === 'video' ? '🎥 Video' : '📸 Photo'}
                    </motion.div>

                    {/* Caption */}
                    {item.caption && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark via-dark/80 to-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-white font-medium line-clamp-2">{item.caption}</p>
                      </motion.div>
                    )}

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredMedia.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-gray-600 mb-2">No media found</h3>
                <p className="text-gray-500">Try selecting a different filter</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Image Lightbox Modal */}
      <Modal
        isOpen={selectedItem !== null && !showVideo}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && selectedItem.type === 'photo' && (
          <div>
            <div className="relative h-[70vh] mb-4 rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedItem.url})` }}
              />
            </div>
            {selectedItem.caption && (
              <p className="text-gray-600 text-center">{selectedItem.caption}</p>
            )}
          </div>
        )}
      </Modal>

      {/* Video Modal */}
      <Modal
        isOpen={showVideo && selectedItem?.type === 'video'}
        onClose={() => {
          setShowVideo(false);
          setSelectedItem(null);
        }}
        title={selectedItem?.caption}
      >
        {selectedItem?.videoUrl && (
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded-sm"
              src={selectedItem.videoUrl}
              title={selectedItem.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>

      <Footer locale={defaultLocale} t={t} />
    </div>
  );
}

