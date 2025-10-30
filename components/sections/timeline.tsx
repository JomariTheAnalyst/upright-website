"use client"

import { motion } from "motion/react"
import { TextReveal } from "@/components/ui/text-reveal"

const timelineContent = [
  {
    title: "2015 - The Foundation",
    description:
      "Upright Systems Inc. was established, formerly known as Upright Maritime Learning and Review Center Corp. We began with a focused vision: to revolutionize online learning for students preparing for professional license board examinations. Our commitment to educational excellence laid the groundwork for what would become a comprehensive IT solutions powerhouse.",
    content: (
      <div className="h-full w-full overflow-hidden">
        <img
          src="/images/timeline/1.jpg"
          alt="2015 - The Foundation"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "2020 - Strategic Evolution",
    description:
      "Recognizing the evolving needs of the Philippine market, we strategically expanded beyond educational technology into comprehensive IT solutions. This pivotal transformation saw us delivering enterprise-grade system integration, custom software development, and professional IT services to government agencies, financial institutions, and telecommunications companies. Our team grew, our expertise deepened, and our impact multiplied.",
    content: (
      <div className="h-full w-full overflow-hidden">
        <img
          src="/images/timeline/2.jpg"
          alt="2020 - Strategic Evolution"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "2023 - 2025 - Industry Leadership",
    description:
      "Today, Upright Systems stands as a recognized leader in IT solutions across the Philippines. With 50+ successful projects spanning 15+ industries—from healthcare and energy to maritime and manufacturing—we've proven our ability to deliver transformative technology solutions. Our decade of experience, combined with our commitment to innovation and excellence, positions us as the trusted partner for organizations seeking to leverage technology for competitive advantage.",
    content: (
      <div className="h-full w-full overflow-hidden">
        <img
          src="/images/timeline/3.jpg"
          alt="2023-2025 - Industry Leadership"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
]

export function TimelineSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* About Us Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Mini Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-6"
            >
              About Upright
            </motion.p>

            {/* Tagline - Professional Size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight mb-12 text-gray-700 dark:text-gray-300"
            >
              Technology You Can Trust,
              <br />
              Innovation You Can Measure.
            </motion.h1>

            {/* Company Overview - Professional Size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500 leading-relaxed opacity-75">
                Upright Systems Inc. is a Filipino technology company redefining how industries connect, integrate, and grow.
                We deliver trusted, innovative IT solutions that transform complex operations into seamless, intelligent systems.
              </p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Our Journey Section - Clean White Background */}
      <div className="relative bg-white dark:bg-gray-900 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-5">
                Our Journey Through the Years
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Scroll to explore our evolution from a learning platform to an industry-leading IT solutions provider
              </p>
            </div>

            {/* Timeline Items - Alternating Layout */}
            <div className="space-y-20">
              {timelineContent.map((item, index) => {
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-12 lg:gap-16 items-center`}
                  >
                    {/* Text Content - Clean on White Background */}
                    <div className="w-full lg:w-2/5">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-5">
                          {item.title}
                        </h3>
                        <TextReveal
                          text={item.description}
                          className="text-sm md:text-base lg:text-lg leading-relaxed text-justify"
                        />
                      </motion.div>
                    </div>

                    {/* Image Content - Clean Rounded Design */}
                    <div className="w-full lg:w-3/5">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Clean Image with Rounded Corners */}
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                          {item.content}
                        </div>

                        {/* Professional Shadow */}
                        <div className="absolute -bottom-3 left-6 right-6 h-4 bg-gray-900/10 dark:bg-black/30 blur-xl rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
