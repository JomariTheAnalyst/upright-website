"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.6", "start 0.1"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative z-0 min-h-[70vh] flex items-center py-16",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="flex flex-wrap justify-center text-center text-4xl font-bold text-black/20 md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          {words.map((word, wordIndex) => {
            const letters = word.split("");
            const totalWords = words.length;

            return (
              <span key={wordIndex} className="inline-flex mr-3 lg:mr-5">
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
    </div>
  );
};

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

export { TextRevealByWord };
