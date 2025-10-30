"use client"

import { FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.3"],
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <p className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mr-2 lg:mr-3">
      <span className="absolute opacity-20 dark:opacity-10">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-gray-800 dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  )
}
