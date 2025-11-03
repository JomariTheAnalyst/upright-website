"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function CareersSection() {
  return (
    <section id="careers" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Career
            </span>{" "}
            With Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a team of passionate professionals dedicated to delivering innovative IT solutions. 
            We offer competitive benefits, growth opportunities, and a collaborative work environment.
          </p>
        </motion.div>

        {/* Large Career Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl group cursor-pointer"
        >
          {/* Background Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
              alt="Join Upright Systems Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                We're Hiring!
              </h3>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Be part of a dynamic team that's transforming the IT landscape in the Philippines. 
                We're looking for talented individuals who are passionate about technology, innovation, 
                and making a real impact in government and enterprise sectors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/careers">
                  <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    Apply Now
                  </button>
                </a>
                <a href="/careers">
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border-2 border-white/30 transition-all duration-300">
                    View Open Positions
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Questions about careers at Upright Systems?{" "}
            <a href="#contact" className="text-yellow-400 hover:text-yellow-500 font-semibold transition-colors">
              Contact our HR team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
