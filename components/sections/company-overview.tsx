"use client"

import { motion } from "motion/react"
import { Building2, Target, Heart, Users } from "lucide-react"

export function CompanyOverview() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Dominating Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-sm font-bold rounded-full uppercase tracking-wider shadow-lg">
                About Upright Systems
              </span>
            </motion.div>

            {/* Massive Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading text-gray-900 dark:text-white leading-[0.95] tracking-tight"
            >
              Transforming
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Businesses
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full origin-left"
                />
              </span>
              <br />
              Through Innovation
            </motion.h1>

            {/* Powerful Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-5xl mx-auto font-light"
            >
              A decade of excellence in delivering{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                integrated IT solutions
              </span>{" "}
              across the Philippines and beyond
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full"
            />
          </motion.div>
        </div>

        {/* Company Story */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="text-lg">
                  Upright Systems Inc. was established in 2015, formerly known as <span className="font-semibold text-yellow-600 dark:text-yellow-400">Upright Maritime Learning and Review Center Corp</span>. We began with a clear vision: to provide innovative online learning solutions for students preparing for professional license board examinations.
                </p>
                <p className="text-lg">
                  What started as an educational technology initiative quickly evolved into something much greater. Recognizing the growing demand for comprehensive IT solutions across various industries, we expanded our expertise and transformed into a full-service IT solutions provider.
                </p>
                <p className="text-lg">
                  Today, Upright Systems Inc. stands as a trusted partner for organizations across government, financial services, telecommunications, healthcare, energy, maritime, manufacturing, hospitality, and education sectors. Our journey from a specialized learning platform to a comprehensive IT solutions provider reflects our commitment to growth, innovation, and excellence.
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Over the past decade, we've successfully delivered 50+ projects, served 15+ industries, and built lasting partnerships with clients who trust us to transform their operations through technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To deliver innovative IT solutions that empower businesses to achieve their full potential through cutting-edge technology, exceptional service, and unwavering commitment to client success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To be the leading IT solutions provider in the Philippines and beyond, recognized for excellence in system integration, software development, and professional services.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Core Values
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
                <span>Innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
                <span>Excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
                <span>Integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
                <span>Collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
                <span>Client-Centric</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-sm md:text-base text-gray-800 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-800 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-800 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-800 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
