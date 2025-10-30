"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
    title: "Team Collaboration",
    description: "Building strong partnerships and fostering innovation through teamwork",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
    title: "Digital Innovation",
    description: "Leveraging cutting-edge technology to drive business transformation",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=675&fit=crop",
    title: "Strategic Planning",
    description: "Developing comprehensive solutions tailored to client needs",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop",
    title: "Client Success",
    description: "Delivering exceptional results and exceeding expectations",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop",
    title: "Growth & Excellence",
    description: "Continuous improvement and commitment to quality service",
  },
]

export function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const currentAchievement = achievements[currentIndex]

  return (
    <section className="relative w-full bg-yellow-400 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            A decade of excellence, innovation, and client success
          </p>
        </motion.div>

        {/* Carousel Container - 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img
                src={currentAchievement.image}
                alt={currentAchievement.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-4"
                >
                  {currentAchievement.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-200 max-w-3xl"
                >
                  {currentAchievement.description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </Button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {achievements.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-900 font-medium">
            {currentIndex + 1} / {achievements.length}
          </p>
        </div>
      </div>
    </section>
  )
}
