"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function JoinUsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2Fc7867a4062de4657bd723d616e0a69d8"
          alt="Join us background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-yellow-200 font-bold leading-tight">
              Take us on your next adventure!
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Partner with us to transform your business with innovative IT
              solutions — your ultimate technology companion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-lg"
              >
                Become a Partner
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Phone Mockup (Optional) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            {/* You can add a phone mockup or other visual element here */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for future content */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
