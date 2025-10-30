"use client"

import { motion } from "motion/react"

const features = [
  {
    id: 1,
    title: "10+ Years",
    description: "Proven IT expertise",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop",
    delay: 0.1
  },
  {
    id: 2,
    title: "End-to-End Solutions",
    description: "Design to deployment",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    delay: 0.2
  },
  {
    id: 3,
    title: "Innovation Driven",
    description: "Powering the future",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    delay: 0.3
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Always-on assistance",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    delay: 0.4
  },
  {
    id: 5,
    title: "Client-Focused",
    description: "Your success, our goal",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2087&auto=format&fit=crop",
    delay: 0.5
  },
  {
    id: 6,
    title: "Built on Trust",
    description: "Integrity & collaboration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    delay: 0.6
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4"
          >
            Built on Vision. Driven by People. Powered by Technology.
          </motion.h2>
          {/* Hand-drawn swoosh underline - 2 lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mt-3"
          >
            <svg
              width="900"
              height="60"
              viewBox="0 0 900 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-4xl"
            >
              {/* Top swoosh line */}
              <motion.path
                d="M 50 20 Q 200 12 350 18 Q 500 24 650 15 Q 750 10 850 18"
                stroke="#000000"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.3, ease: "easeInOut" }}
              />
              
              {/* Bottom swoosh line */}
              <motion.path
                d="M 30 38 Q 180 45 330 40 Q 480 35 630 42 Q 730 48 850 40"
                stroke="#000000"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Compact 2x3 Grid - No Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((feature, index) => {
            // Determine which corners need radius
            const isTopLeft = index === 0
            const isTopRight = index === 2
            const isBottomLeft = index === 3
            const isBottomRight = index === 5
            
            let cornerClass = ""
            if (isTopLeft) cornerClass = "rounded-tl-3xl"
            else if (isTopRight) cornerClass = "rounded-tr-3xl"
            else if (isBottomLeft) cornerClass = "rounded-bl-3xl"
            else if (isBottomRight) cornerClass = "rounded-br-3xl"
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: feature.delay,
                  ease: "easeOut"
                }}
                className={`group relative overflow-hidden ${cornerClass}`}
              >
              {/* Background Image - Taller */}
              <div className="relative h-[450px] md:h-[500px]">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Subtle Dark Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Content - Smaller Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: feature.delay + 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
