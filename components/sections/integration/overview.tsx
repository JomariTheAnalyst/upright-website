"use client"

import { motion } from "framer-motion"
import { Network, Zap, Shield, TrendingUp } from "lucide-react"

export function IntegrationOverview() {
  const benefits = [
    {
      icon: Network,
      title: "Unified Systems",
      description: "Connect disparate platforms into one cohesive ecosystem"
    },
    {
      icon: Zap,
      title: "Increased Performance",
      description: "Eliminate bottlenecks and streamline workflows"
    },
    {
      icon: Shield,
      title: "Reduced Redundancy",
      description: "Minimize data duplication and manual processes"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scale operations efficiently with integrated systems"
    }
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Do
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Upright Systems, we specialize in connecting your business technologies, 
              platforms, and processes into a unified, intelligent ecosystem. Our integration 
              solutions eliminate silos, reduce operational costs, and empower your organization 
              to work smarter, not harder.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're modernizing legacy systems, implementing new enterprise software, 
              or connecting cloud services, we ensure seamless data flow and process automation 
              across your entire technology stack.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                alt="System Integration Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-border"
            >
              <div className="text-4xl font-bold text-blue-500 mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Systems Integrated</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-border"
            >
              <div className="text-4xl font-bold text-cyan-500 mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
