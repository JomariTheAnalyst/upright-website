"use client"

import Image from "next/image"
import React from "react"
import { motion } from "motion/react"
import { Timeline } from "@/components/ui/timeline"

export function TimelineAceternitySection() {
  const data = [
    {
      title: "2015",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-body font-light mb-8 leading-relaxed text-justify">
            Upright Systems Inc. was established, formerly known as Upright Maritime Learning and Review Center Corp. 
            Started with a vision to provide online learning solutions for students preparing for professional license board examinations.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/1.jpg"
              alt="Foundation"
              width={1200}
              height={675}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2016-2018",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-body font-light mb-8 leading-relaxed text-justify">
            Evolved from educational services to developing integrated information systems for sister companies. 
            Began showcasing IT solutions that impressed various industries with their quality and innovation.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/2.jpg"
              alt="Early Growth"
              width={1200}
              height={675}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2019-2020",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-body font-light mb-8 leading-relaxed text-justify">
            Transformed into a comprehensive IT system integration, professional service, and software development company. 
            Expanded services to Government agencies, Financial Services, Telecommunications, and more.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/3.jpg"
              alt="Industry Reach"
              width={1200}
              height={675}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-body font-light mb-4 leading-relaxed text-justify">
            Provided IT integration and consultancy, software design and development, professional services, 
            and hardware deployment across multiple sectors.
          </p>
          <div className="mb-8 space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex gap-3 items-center text-gray-700 dark:text-gray-300 text-sm md:text-base font-body"
            >
              <span className="text-yellow-500 dark:text-yellow-400">✓</span> Energy & Mining Solutions
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex gap-3 items-center text-gray-700 dark:text-gray-300 text-sm md:text-base font-body"
            >
              <span className="text-yellow-500 dark:text-yellow-400">✓</span> Maritime & Healthcare Systems
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex gap-3 items-center text-gray-700 dark:text-gray-300 text-sm md:text-base font-body"
            >
              <span className="text-yellow-500 dark:text-yellow-400">✓</span> Manufacturing & Hospitality
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex gap-3 items-center text-gray-700 dark:text-gray-300 text-sm md:text-base font-body"
            >
              <span className="text-yellow-500 dark:text-yellow-400">✓</span> Logistics & Education Platforms
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/4.jpg"
              alt="Service Growth"
              width={1200}
              height={675}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2024-Present",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-body font-light mb-8 leading-relaxed text-justify">
            Committed to being in front of client needs, deeply understanding business requirements, 
            and delivering optimized IT solutions from scoping to delivery, maintenance, and continuous upgrades.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/5.jpg"
              alt="Client-Centric Excellence"
              width={1200}
              height={675}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      ),
    },
  ]

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-white via-gray-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-bold font-heading text-gray-900 dark:text-white max-w-4xl">
          Our{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-body font-light max-w-2xl mb-12">
          A decade of innovation, transforming from educational technology to enterprise-scale IT solutions across multiple industries.
        </p>
      </div>
      <Timeline data={data} />
    </section>
  )
}
