"use client";
import React from "react";
import { SpotlightButton } from "./ui/spotlight-button";
import { FloatingNavbar } from "./Menubars/floating-navbar";
import { AnimatedText } from "./ui/animated-text";
import { motion } from "framer-motion";
import { MinimalAnimatedShape } from "./ui/minimal-animated-shape";
import Link from "next/link";
import Image from "next/image";

export function HomeContent() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-50 via-blue-50/30 to-sky-50 dark:from-black dark:via-gray-900/50 dark:to-black overflow-hidden">
      <FloatingNavbar />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] dark:bg-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/80 via-sky-100/80 to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent rounded-full blur-3xl"
        />
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full lg:w-[45%] space-y-6 lg:space-y-8 order-2 lg:order-none"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 dark:from-blue-500/10 dark:to-indigo-500/10 border border-blue-200/50 dark:border-blue-500/20 shadow-[0_2px_20px_rgba(14,165,233,0.15)] dark:shadow-none backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700 dark:bg-sky-500"></span>
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-blue-900 to-sky-800 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  INNOVATIVE SOLUTIONS
                </span>
              </motion.div>
              
              {/* Main Content */}
              <div className="space-y-6">
                <div className="flex flex-col">
                  <AnimatedText
                    text="Simplicity Drives"
                    className="text-[35px] sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent"
                  />
                  <AnimatedText
                    text="Innovation"
                    className="text-[35px] sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent"
                  />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto">
                  We create digital experiences that are simple, impactful, and innovative, driving your business forward.
                </p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link href="/contact">
                  <SpotlightButton
                    variant="primary"
                    className="min-w-[160px] group"
                  >
                    <span className="relative flex items-center gap-2">
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact Us
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
                    </span>
                  </SpotlightButton>
                </Link>
                
                <Link href="/about">
                  <SpotlightButton
                    variant="secondary"
                    className="min-w-[160px] group"
                  >
                    <span className="relative flex items-center gap-2">
                      Learn More
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </SpotlightButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-[320px] sm:h-[350px] lg:h-[500px] lg:w-[55%] order-1 lg:order-none mt-24 sm:mt-36"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-sky-100/80 to-transparent dark:from-blue-500/10 dark:via-transparent dark:to-transparent rounded-full blur-3xl" />
              <div className="scale-[0.65] sm:scale-75 lg:scale-100 relative">
                <MinimalAnimatedShape />
                <Image
                  src="https://res.cloudinary.com/drwdoxbls/image/upload/v1732967226/Mynimalistic_szmlcx.png"
                  alt="Company Logo"
                  width={170}
                  height={170}
                  className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
} 