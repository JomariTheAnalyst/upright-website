"use client";

import * as React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function CompaniesPoweredSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftTopRef = useRef<HTMLDivElement>(null);
  const leftMiddleRef = useRef<HTMLDivElement>(null);
  const leftBottomRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightMiddleRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#fbf9ef" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4">
            Companies Powered by Upright
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across the Philippines to drive
            digital transformation and innovation.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative mx-auto flex max-w-5xl items-center justify-between mb-20 h-[500px]"
        >
          {/* Left Side Companies */}
          <div className="space-y-12 z-10">
            <CompanyCard ref={leftTopRef}>
              <Image
                src="/images/logo/capgreg-businesses/CREATV-LOGO.png"
                alt="Creatv"
                width={96}
                height={96}
                className="object-contain"
              />
            </CompanyCard>
            <CompanyCard ref={leftMiddleRef}>
              <Image
                src="/images/logo/capgreg-businesses/NARICA-LOGO.png"
                alt="Narica"
                width={96}
                height={96}
                className="object-contain"
              />
            </CompanyCard>
            <CompanyCard ref={leftBottomRef}>
              <Image
                src="/images/logo/capgreg-businesses/OCEANSKIPPER-LOGO.png"
                alt="Ocean Skipper"
                width={96}
                height={96}
                className="object-contain"
              />
            </CompanyCard>
          </div>

          {/* Center - Upright Logo */}
          <div className="mx-auto my-2 flex w-fit justify-center gap-2 z-10">
            <div className="relative rounded-3xl border-4 border-black/10 bg-white p-6 shadow-2xl">
              <CompanyCard
                ref={centerRef}
                className="size-40 border-none shadow-none bg-white"
              >
                <Image
                  src="/images/timeline/Upright Logo1.png"
                  alt="Upright Systems"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </CompanyCard>
            </div>
          </div>

          {/* Connection Lines Background */}
          <div
            role="presentation"
            className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-30 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          ></div>

          {/* Right Side Companies */}
          <div className="space-y-12 z-10">
            <CompanyCard ref={rightTopRef}>
              <Image
                src="/images/logo/capgreg-businesses/OCEANWIDE-MARITIME-LOGO.png"
                alt="Oceanwide Maritime"
                width={96}
                height={96}
                className="object-contain"
              />
            </CompanyCard>
            <CompanyCard ref={rightMiddleRef}>
              <Image
                src="/images/logo/capgreg-businesses/OPANDI-LOGO.png"
                alt="Opandi"
                width={96}
                height={96}
                className="object-contain"
              />
            </CompanyCard>
            <CompanyCard ref={rightBottomRef}>
              <Image
                src="/images/logo/capgreg-businesses/oceanwide-GROUP-WORD-white-768x179.png"
                alt="Oceanwide Group"
                width={96}
                height={96}
                className="object-contain bg-black/90 rounded-lg p-2"
              />
            </CompanyCard>
          </div>

          {/* Animated Beams - Left Side */}
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={centerRef as React.RefObject<HTMLElement>}
            toRef={leftTopRef as React.RefObject<HTMLElement>}
            curvature={-75}
            pathColor="#ffd700"
            pathWidth={4}
            pathOpacity={0.3}
            gradientStartColor="#ffe419"
            gradientStopColor="#ffc107"
            duration={3}
            delay={0}
          />
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={centerRef as React.RefObject<HTMLElement>}
            toRef={leftMiddleRef as React.RefObject<HTMLElement>}
            curvature={0}
            pathColor="#ffd700"
            pathWidth={4}
            pathOpacity={0.3}
            gradientStartColor="#ffe419"
            gradientStopColor="#ffc107"
            duration={3}
            delay={0.5}
          />
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={centerRef as React.RefObject<HTMLElement>}
            toRef={leftBottomRef as React.RefObject<HTMLElement>}
            curvature={75}
            pathColor="#ffd700"
            pathWidth={4}
            pathOpacity={0.3}
            gradientStartColor="#ffe419"
            gradientStopColor="#ffc107"
            duration={3}
            delay={1}
          />

          {/* Animated Beams - Right Side */}
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={centerRef as React.RefObject<HTMLElement>}
            toRef={rightTopRef as React.RefObject<HTMLElement>}
            curvature={-75}
            pathColor="#ffd700"
            pathWidth={4}
            pathOpacity={0.3}
            gradientStartColor="#ffe419"
            gradientStopColor="#ffc107"
            duration={3}
            delay={1.5}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={centerRef as React.RefObject<HTMLElement>}
            toRef={rightMiddleRef as React.RefObject<HTMLElement>}
            curvature={0}
            pathColor="#ffd700"
            pathWidth={4}
            pathOpacity={0.3}
            gradientStartColor="#ffe419"
            gradientStopColor="#ffc107"
            duration={3}
            delay={2}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={centerRef as React.RefObject<HTMLElement>}
            toRef={rightBottomRef as React.RefObject<HTMLElement>}
            curvature={75}
            pathColor="#ffd700"
            pathWidth={4}
            pathOpacity={0.3}
            gradientStartColor="#ffe419"
            gradientStopColor="#ffc107"
            duration={3}
            delay={2.5}
            reverse
          />
        </div>

        {/* Two Column Text Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-black">
              Empowering Maritime Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From maritime training platforms to logistics management systems,
              Upright Systems delivers cutting-edge solutions that help
              companies navigate the complexities of modern business operations.
              Our technology powers some of the Philippines' most innovative
              maritime and logistics enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-black">
              Trusted Partnership, Proven Results
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our clients trust us to transform their digital infrastructure,
              streamline operations, and drive growth through innovative IT
              solutions. With decades of combined expertise, we've become the
              go-to technology partner for businesses ready to scale and
              succeed.
            </p>
          </motion.div>
        </div>

        {/* Let's Work Together Marquee - Full Width */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-12">
          {/* Top Row - Moving Right (Continuous) */}
          <div className="flex mb-8">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap"
            >
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-black/20 px-8"
                >
                  Let's Work Together
                </span>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Moving Left (Mirror Reflection) */}
          <div className="flex" style={{ transform: "scaleY(-1)" }}>
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap"
            >
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-black/10 px-8"
                  style={{ transform: "scaleY(-1)" }}
                >
                  Let's Work Together
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CompanyCard = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex size-32 rounded-3xl border-4 border-gray-200 bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110",
        className
      )}
    >
      <div className="relative z-20 m-auto size-fit p-3">{children}</div>
    </motion.div>
  );
});

CompanyCard.displayName = "CompanyCard";
