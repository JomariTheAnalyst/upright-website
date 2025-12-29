"use client";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { usePreloader } from ".";
import WordLoader from "@/components/word-loader";
import { LumaSpin } from "@/components/ui/luma-spin";

const steps = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export default function Index() {
  const { isLoading, loadingPercent, isFirstVisit } = usePreloader();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == steps.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-10">
            <motion.div
              variants={opacity}
              initial="initial"
              animate="enter"
              className="flex flex-col items-center px-4"
            >
              {isFirstVisit ? (
                <WordLoader
                  words={["Vision", "Code", "Design", "Impact", "Upright"]}
                />
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <LumaSpin />
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10"
          >
            <p className="text-4xl md:text-6xl font-black text-black">
              {(loadingPercent - (loadingPercent % 5)).toFixed(0)}%
            </p>
          </motion.div>

          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
