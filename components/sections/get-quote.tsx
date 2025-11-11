"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Link from "next/link";

interface LetterProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Letter: FC<LetterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]);

  return (
    <span className="relative inline-block">
      <span className="absolute opacity-20 blur-[0.5px]">{children}</span>
      <motion.span style={{ opacity, scale }} className="text-black">
        {children}
      </motion.span>
    </span>
  );
};

export function GetQuoteSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.6", "start 0.1"],
  });

  const text =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const words = text.split(" ");

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Slanted Striped Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            #ffffff,
            #ffffff 80px,
            #f5f5f5 80px,
            #f5f5f5 160px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Text Block */}
        <div ref={targetRef} className="relative z-0 max-w-5xl">
          <p
            className="text-justify text-3xl font-bold text-black/20 md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
            style={{ textAlignLast: "left" }}
          >
            {words.map((word, wordIndex) => {
              const letters = word.split("");
              const totalWords = words.length;

              return (
                <span key={wordIndex} className="inline-flex mr-2 lg:mr-3">
                  {letters.map((letter, letterIndex) => {
                    const totalLettersInWord = letters.length;
                    const letterProgress = letterIndex / totalLettersInWord;
                    const wordProgress = wordIndex / totalWords;

                    const overallProgress =
                      wordProgress + letterProgress / totalWords;

                    const start = Math.max(0, overallProgress - 0.1);
                    const end = Math.min(1, overallProgress + 0.1);

                    return (
                      <Letter
                        key={letterIndex}
                        progress={scrollYProgress}
                        range={[start, end]}
                      >
                        {letter}
                      </Letter>
                    );
                  })}
                </span>
              );
            })}
          </p>
        </div>

        {/* Button - Below text with closer spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-5xl"
        >
          <Link href="/contact/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 text-lg"
            >
              Get a Quote
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
