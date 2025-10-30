"use client"

import { motion } from "motion/react"
import { Timeline } from "@/components/ui/timeline"
import { Building2, Rocket, TrendingUp, Network, Target } from "lucide-react"

export function AboutSection() {
  const timelineData = [
    {
      title: "2015",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Foundation
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Upright Systems Inc. was established, formerly known as <span className="font-semibold text-yellow-600 dark:text-yellow-400">Upright Maritime Learning and Review Center Corp</span>. Started with a vision to provide online learning solutions for students preparing for professional license board examinations.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 italic">
              "Beginning our journey in educational technology with a focus on empowering future professionals."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2016-2018",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Early Growth & Innovation
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Evolved from educational services to developing <span className="font-semibold text-blue-600 dark:text-blue-400">integrated information systems</span> for sister companies. Began showcasing IT solutions that impressed various industries with their quality and innovation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Developed first enterprise-level information systems</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recognition</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gained industry attention for solution quality</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019-2020",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Industry Expansion
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Transformed into a comprehensive <span className="font-semibold text-purple-600 dark:text-purple-400">IT system integration, professional service, and software development company</span>. Expanded services to Government agencies, Financial Services, Telecommunications, and more.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Government", "Finance", "Telecom", "Healthcare"].map((industry) => (
              <div key={industry} className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg text-center border border-purple-200 dark:border-purple-800">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Service Diversification
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Provided <span className="font-semibold text-green-600 dark:text-green-400">IT integration and consultancy, software design and development, professional services, and hardware deployment</span> across Energy, Mining, Maritime, Healthcare, Manufacturing, Hospitality, Logistics, and Education sectors.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Service Portfolio</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                IT Integration & Consultancy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Software Design & Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Professional Services
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Hardware Deployment
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2024-Present",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Client-Centric Excellence
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Committed to being in front of client needs, deeply understanding business requirements, and delivering <span className="font-semibold text-orange-600 dark:text-orange-400">optimized IT solutions from scoping to delivery, maintenance, and continuous upgrades</span>.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Our Commitment</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Understanding</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Deep business requirement analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Optimization</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Tailored IT solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Delivery</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">End-to-end implementation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Support</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Continuous maintenance & upgrades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-4 sm:mb-6 px-4 leading-tight">
            Get to know{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Upright Systems
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-body font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed">
            A decade of innovation, transforming from educational technology to enterprise-scale IT solutions across multiple industries.
          </p>
        </motion.div>
      </div>

      {/* Timeline Component */}
      <Timeline data={timelineData} />
    </section>
  )
}
