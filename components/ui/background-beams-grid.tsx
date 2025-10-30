"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React, { useRef } from "react"

export const BackgroundBeamsGrid = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const beams = [
    // Vertical beams moving down
    {
      initialX: 100,
      translateX: 120,
      translateY: 1200,
      duration: 5,
      repeatDelay: 2,
      delay: 0,
      direction: "vertical",
    },
    {
      initialX: 300,
      translateX: 280,
      translateY: 1200,
      duration: 5,
      repeatDelay: 3,
      delay: 1,
      direction: "vertical",
    },
    {
      initialX: 500,
      translateX: 520,
      translateY: 1200,
      duration: 5,
      repeatDelay: 2.5,
      delay: 2,
      direction: "vertical",
    },
    {
      initialX: 700,
      translateX: 680,
      translateY: 1200,
      duration: 5,
      repeatDelay: 3,
      delay: 1.5,
      direction: "vertical",
    },
    {
      initialX: 900,
      translateX: 920,
      translateY: 1200,
      duration: 5,
      repeatDelay: 2,
      delay: 0.5,
      direction: "vertical",
    },
    // Horizontal beams moving right
    {
      initialY: 150,
      translateX: 1200,
      translateY: 170,
      duration: 5,
      repeatDelay: 3,
      delay: 1,
      direction: "horizontal",
    },
    {
      initialY: 350,
      translateX: 1200,
      translateY: 330,
      duration: 5,
      repeatDelay: 2.5,
      delay: 2,
      direction: "horizontal",
    },
    {
      initialY: 550,
      translateX: 1200,
      translateY: 570,
      duration: 5,
      repeatDelay: 3,
      delay: 0.5,
      direction: "horizontal",
    },
  ]

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 pointer-events-none z-0",
        className
      )}
    >
      {beams.map((beam, idx) => (
        <BeamLine
          key={`beam-${idx}`}
          beamOptions={beam}
        />
      ))}
      {children}
    </div>
  )
}

const BeamLine = ({
  beamOptions,
}: {
  beamOptions: {
    initialX?: number
    initialY?: number
    translateX?: number
    translateY?: number
    duration?: number
    delay?: number
    repeatDelay?: number
    direction?: string
  }
}) => {
  const isVertical = beamOptions.direction === "vertical"

  return (
    <motion.div
      animate="animate"
      initial={{
        translateY: beamOptions.initialY || "-100px",
        translateX: beamOptions.initialX || "-100px",
      }}
      variants={{
        animate: {
          translateY: beamOptions.translateY || "0px",
          translateX: beamOptions.translateX || "0px",
        },
      }}
      transition={{
        duration: beamOptions.duration || 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: beamOptions.delay || 0,
        repeatDelay: beamOptions.repeatDelay || 0,
      }}
      className={cn(
        "absolute m-auto rounded-full",
        isVertical ? "h-16 w-[3px]" : "w-16 h-[3px]"
      )}
      style={{
        background: "#eaf294",
        boxShadow:
          "0 0 15px #eaf294, 0 0 30px #eaf294, 0 0 45px rgba(234, 242, 148, 0.8), 0 0 60px rgba(234, 242, 148, 0.6)",
        filter: "blur(1px)",
      }}
    />
  )
}
