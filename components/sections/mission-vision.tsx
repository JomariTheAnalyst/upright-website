"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export function MissionVisionSection() {
  return (
    <section className="relative w-full mx-auto overflow-hidden bg-gray-50 dark:bg-gray-900 px-6 py-16 md:px-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission & Vision
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10 max-w-2xl space-y-8"
          >
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses across the Philippines with innovative IT solutions that drive growth,
                efficiency, and digital transformation. We bridge the gap between technology and business success,
                delivering tailored solutions that meet the unique needs of each client.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading IT solutions provider in Southeast Asia, recognized for our innovation,
                reliability, and commitment to client success. We envision a future where every business,
                regardless of size, has access to world-class technology solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full max-w-lg lg:max-w-xl"
          >
            <Globe className="absolute inset-0 scale-110" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.8, 0.8, 0.8],
  markerColor: [251 / 255, 191 / 255, 36 / 255], // Yellow markers
  glowColor: [1, 1, 1],
  markers: [
    // Philippines (Main office)
    { location: [14.5995, 120.9842], size: 0.08 },
    // Major cities in Southeast Asia
    { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
    { location: [13.7563, 100.5018], size: 0.05 }, // Bangkok
    { location: [21.0285, 105.8542], size: 0.05 }, // Hanoi
    { location: [10.8231, 106.6297], size: 0.05 }, // Ho Chi Minh
    { location: [-6.2088, 106.8456], size: 0.06 }, // Jakarta
    { location: [3.139, 101.6869], size: 0.05 }, // Kuala Lumpur
    // Other key locations
    { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
    { location: [37.5665, 126.9780], size: 0.04 }, // Seoul
    { location: [22.3193, 114.1694], size: 0.04 }, // Hong Kong
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r]
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender,
      })

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1"
        }
      }, 100)

      return () => globe.destroy()
    }
  }, [config, onRender])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
