"use client";

import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    company: "Ayala Corporation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&q=80",
    quote:
      '"Our Upright Systems app serves as a single source of truth for customer relationships, helping us deliver faster, better service."',
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    bgColor: "bg-pink-50",
    size: "large",
  },
  {
    id: 2,
    company: "SM Investments Corporation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&q=80",
    quote:
      '"The enterprise management system we built with Upright Systems has reduced our IT spend by 40%—and saves us dozens of hours each week."',
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    bgColor: "bg-gray-700",
    textColor: "text-white",
    size: "large",
  },
  {
    id: 3,
    company: "Jollibee Foods Corporation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&q=80",
    quote:
      '"Since adopting Upright Systems, we doubled our carrier capacity and generated ₱50 million in new sales."',
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    bgColor: "bg-orange-50",
    size: "small",
  },
];

export function ClientTestimonialsSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Meet the top Philippine companies working more efficiently with
            Upright.
          </h2>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
            See why they chose Upright
          </button>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Testimonial - Top (spans full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${testimonials[0].bgColor} rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[400px] lg:col-span-2 grid lg:grid-cols-2 gap-8 items-center`}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-semibold text-black">
                  {testimonials[0].company}
                </span>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                {testimonials[0].quote}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].company}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Second Testimonial - Bottom Left (with background image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between"
          >
            <Image
              src={testimonials[1].image}
              alt={testimonials[1].company}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">S</span>
                </div>
                <span className="font-semibold text-white">
                  {testimonials[1].company}
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {testimonials[1].quote}
              </p>
            </div>
          </motion.div>

          {/* Third Testimonial - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 min-h-[400px] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <span className="font-semibold text-black">
                  {testimonials[2].company}
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-black leading-tight">
                {testimonials[2].quote}
              </p>
              <button className="px-6 py-2 bg-gray-100 text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300">
                Read their story
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
