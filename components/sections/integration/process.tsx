"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Wrench } from "lucide-react"

export function IntegrationProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Assessment",
      description: "Analyze your current systems, identify integration points, and define objectives"
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      description: "Create integration architecture, data flow diagrams, and technical specifications"
    },
    {
      number: "03",
      icon: Code,
      title: "Implementation",
      description: "Develop APIs, connectors, and middleware to link your systems seamlessly"
    },
    {
      number: "04",
      icon: TestTube,
      title: "Testing",
      description: "Rigorous quality assurance to ensure data integrity and system reliability"
    },
    {
      number: "05",
      icon: Wrench,
      title: "Maintenance",
      description: "Ongoing support, monitoring, and optimization for peak performance"
    }
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Integration{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Framework
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful system integration every time
          </p>
        </motion.div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Circle Node */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl">
                  <div className="text-5xl font-bold text-blue-500/20 mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-500/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
