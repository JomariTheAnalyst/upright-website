"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CloseButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-0 right-0 z-50"
    >
      <Link
        href="/"
        className="block bg-[#ffdf20] hover:bg-[#ffe319] text-black transition-colors duration-300"
      >
        <div className="px-8 py-6 md:px-12 md:py-8 flex items-center justify-center">
            <span 
                className="text-lg md:text-xl font-bold uppercase tracking-widest"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
            >
                back to main page   
            </span>
        </div>
      </Link>
    </motion.div>
  );
}
