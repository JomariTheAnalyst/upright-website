"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

interface ErrorPageProps {
  errorCode: number;
  title: string;
  message: string;
  imageSrc?: string;
  showBackButton?: boolean;
}

export function ErrorPage({
  errorCode,
  title,
  message,
  imageSrc = "/images/error-illustration.svg",
  showBackButton = true,
}: ErrorPageProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#faf8ed" }}
    >
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Error Code */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-500 leading-none">
                {errorCode}
              </h1>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {title}
            </motion.h2>

            {/* Message */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl font-body text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {message}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Home Button */}
              <Link href="/">
                <motion.button
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-gray-900 font-ui font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </motion.button>
              </Link>

              {/* Back Button */}
              {showBackButton && (
                <motion.button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-ui font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </motion.button>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Fallback SVG Illustration */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="currentColor"
                  className="text-yellow-100 dark:text-yellow-900/30"
                  opacity="0.3"
                />

                {/* Character Body */}
                <ellipse
                  cx="250"
                  cy="320"
                  rx="80"
                  ry="100"
                  fill="currentColor"
                  className="text-yellow-400 dark:text-yellow-500"
                />

                {/* Character Head */}
                <circle
                  cx="250"
                  cy="200"
                  r="60"
                  fill="currentColor"
                  className="text-yellow-400 dark:text-yellow-500"
                />

                {/* Eyes */}
                <circle
                  cx="235"
                  cy="195"
                  r="8"
                  fill="currentColor"
                  className="text-gray-800 dark:text-gray-900"
                />
                <circle
                  cx="265"
                  cy="195"
                  r="8"
                  fill="currentColor"
                  className="text-gray-800 dark:text-gray-900"
                />

                {/* Sad Mouth */}
                <path
                  d="M 230 220 Q 250 210 270 220"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="text-gray-800 dark:text-gray-900"
                />

                {/* Arms */}
                <ellipse
                  cx="180"
                  cy="300"
                  rx="15"
                  ry="50"
                  fill="currentColor"
                  className="text-yellow-400 dark:text-yellow-500"
                  transform="rotate(-30 180 300)"
                />
                <ellipse
                  cx="320"
                  cy="300"
                  rx="15"
                  ry="50"
                  fill="currentColor"
                  className="text-yellow-400 dark:text-yellow-500"
                  transform="rotate(30 320 300)"
                />

                {/* Floating Question Marks */}
                <motion.text
                  x="150"
                  y="150"
                  fontSize="40"
                  fill="currentColor"
                  className="text-gray-400 dark:text-gray-600"
                  animate={{ y: [150, 140, 150], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ?
                </motion.text>
                <motion.text
                  x="340"
                  y="180"
                  fontSize="35"
                  fill="currentColor"
                  className="text-gray-400 dark:text-gray-600"
                  animate={{ y: [180, 170, 180], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  ?
                </motion.text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
