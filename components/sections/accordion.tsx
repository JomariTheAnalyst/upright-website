"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

interface AccordionItemData {
  id: number;
  title: string;
  heading: string;
  description: string;
  imageUrl: string;
  videoId?: string;
}

// --- Data for the image accordion ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Mission',
    heading: 'Our Mission',
    description: 'To deliver innovative IT solutions that empower businesses to achieve their full potential through cutting-edge technology, exceptional service, and unwavering commitment to client success. We strive to be the trusted partner that transforms challenges into opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
  },
  {
    id: 2,
    title: 'Vision',
    heading: 'Our Vision',
    description: 'To be the leading IT solutions provider in the Philippines and beyond, recognized for excellence in system integration, software development, and professional services. We envision a future where technology seamlessly enhances every aspect of business operations.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
  },
  {
    id: 3,
    title: 'Core Values',
    heading: 'Our Core Values',
    description: 'Innovation drives our solutions. Excellence defines our delivery. Integrity guides our relationships. Collaboration strengthens our partnerships. We believe in continuous learning, client-centric approaches, and sustainable growth that benefits all stakeholders.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
  },
  {
    id: 4,
    title: 'Leadership',
    heading: 'Leadership Team',
    description: 'Our leadership team brings decades of combined experience in IT solutions, system integration, and business transformation. With deep industry knowledge and a passion for innovation, they guide Upright Systems toward continued excellence and growth.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
  },
  {
    id: 5,
    title: 'Case Studies',
    heading: 'Success Stories',
    description: 'From government agencies to financial institutions, telecommunications to healthcare, we have delivered transformative IT solutions across diverse industries. Our portfolio showcases successful implementations in energy, mining, maritime, manufacturing, hospitality, logistics, and education sectors.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onVideoClick: () => void;
}

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter, onVideoClick }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer group
        transition-all duration-700 ease-in-out shadow-lg hover:shadow-2xl
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop';
        }}
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

      {/* Play Button - Only visible when active */}
      {isActive && item.videoId && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={(e) => {
            e.stopPropagation();
            onVideoClick();
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                     w-16 h-16 bg-yellow-500 hover:bg-yellow-600 rounded-full
                     flex items-center justify-center shadow-2xl
                     transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
        </motion.button>
      )}

      {/* Caption Text with better styling */}
      <span
        className={`
          absolute text-white font-semibold font-ui whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${isActive
            ? 'text-lg md:text-xl bottom-6 left-1/2 -translate-x-1/2 rotate-0 opacity-100' 
            : 'text-base bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-90'
          }
        `}
        style={{
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Video Modal Component ---
interface VideoModalProps {
  videoId: string;
  title: string;
  onClose: () => void;
}

const VideoModal = ({ videoId, title, onClose }: VideoModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* YouTube Embed */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>
      </motion.div>

      {/* ESC hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-ui"
      >
        Press <kbd className="px-2 py-1 bg-white/20 rounded mx-1">ESC</kbd> or click outside to close
      </motion.div>
    </motion.div>
  );
};

// --- Main App Component ---
export function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % accordionItems.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + accordionItems.length) % accordionItems.length);
  };

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  const activeItem = accordionItems[activeIndex];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Side: Dynamic Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-xs md:text-sm font-semibold font-ui rounded-full uppercase tracking-wider">
                    {activeItem.title}
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white leading-tight mb-6"
                >
                  {activeItem.heading}
                </motion.h2>

                {/* Description with justified text and subtle animation */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="text-base sm:text-lg md:text-xl font-body font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify"
                >
                  {activeItem.description}
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mt-8 mx-auto lg:mx-0"
                />

                {/* Mobile Navigation Buttons - Below Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="lg:hidden flex items-center justify-center gap-4 mt-8"
                >
                  <motion.button
                    onClick={handlePrevious}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="font-semibold font-ui text-sm">Previous</span>
                  </motion.button>

                  {/* Page Indicator */}
                  <div className="flex items-center gap-2">
                    {accordionItems.map((_, index) => (
                      <motion.div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                          index === activeIndex
                            ? 'w-8 bg-gradient-to-r from-yellow-400 to-amber-500'
                            : 'w-2 bg-gray-300 dark:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="font-semibold font-ui text-sm">Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Accordion - Hidden on mobile */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 md:gap-4 overflow-x-auto p-4 scrollbar-hide">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  onVideoClick={() => item.videoId && handleVideoClick(item.videoId)}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Single Image Display with Video */}
          <div className="lg:hidden w-full mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => activeItem.videoId && handleVideoClick(activeItem.videoId)}
              >
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Play Button */}
                {activeItem.videoId && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                               w-20 h-20 bg-yellow-500 hover:bg-yellow-600 rounded-full
                               flex items-center justify-center shadow-2xl
                               transition-all duration-300"
                  >
                    <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                  </motion.div>
                )}
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white text-2xl font-bold font-heading">
                    {activeItem.title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <VideoModal
            videoId={playingVideo}
            title={accordionItems.find(item => item.videoId === playingVideo)?.title || ''}
            onClose={handleCloseVideo}
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
