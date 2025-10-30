"use client"

import { motion } from "framer-motion"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export function CompanyVideoSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Upright Systems has been transforming businesses through innovative IT solutions since 2015
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
            thumbnailSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&auto=format&fit=crop&q=80"
            thumbnailAlt="Upright Systems Company Video"
          />
        </motion.div>
      </div>
    </section>
  )
}
