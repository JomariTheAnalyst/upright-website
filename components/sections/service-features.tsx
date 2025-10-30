"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface ServiceFeaturesProps {
  features: Feature[]
  ctaText: string
}

export function ServiceFeatures({ features, ctaText }: ServiceFeaturesProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      // If no contact section on page, go to home page contact
      window.location.href = "/#contact"
    }
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your specific business needs
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-3xl bg-gradient-to-br from-yellow-400/10 to-amber-500/10 border border-yellow-400/20">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Let's discuss how we can help transform your business with our solutions
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {ctaText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
