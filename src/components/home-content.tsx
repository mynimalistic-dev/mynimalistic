"use client";
import React, { useEffect, useState } from "react";
import { SpotlightButton } from "./ui/spotlight-button";
import { FloatingNavbar } from "./ui/floating-navbar";
import { AnimatedText } from "./ui/animated-text";
import { motion } from "framer-motion";
import { AnimatedShape } from "./ui/animated-shape";

export function HomeContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen bg-black/95 overflow-hidden">
      <FloatingNavbar />
      
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-sky-950/20 to-black" />
        <div className="absolute inset-0 bg-grid" />
        <div 
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black"
          style={{
            maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
          }}
        />
      </div>

      <main className="relative z-10 pt-0 md:pt-16 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: flex-row, Mobile: flex-col */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-auto lg:flex-1 space-y-4 lg:space-y-10 order-2 lg:order-none">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-sky-500/10 border border-sky-500/20 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-xs md:text-sm text-sky-400 font-medium tracking-wide">
                  INNOVATIVE SOLUTIONS
                </span>
              </motion.div>
              
              {/* Main Heading and Description */}
              <div className="space-y-6 lg:space-y-8">
                <AnimatedText
                  text="Building Digital Future Together"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                />
                
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative p-3 lg:p-4 rounded-xl bg-sky-500/5 border border-sky-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent animate-gradient" />
                  <p className="text-gray-400 text-base md:text-lg relative z-10">
                    Transforming ideas into scalable solutions with cutting-edge technology
                    and innovative development.
                  </p>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 lg:gap-4"
              >
                <SpotlightButton className="relative group text-sm md:text-base">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Project
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: 5 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse",
                        duration: 0.6 
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full" />
                </SpotlightButton>
                
                <SpotlightButton className="bg-white/5 hover:bg-sky-900/20 relative overflow-hidden group text-sm md:text-base">
                  <span className="relative z-10">Our Services</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear",
                    }}
                  />
                </SpotlightButton>
              </motion.div>
            </div>

            {/* Animated Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-[450px] md:h-auto md:w-3/4 lg:w-auto lg:flex-1 order-1 lg:order-none"
            >
              <div className="scale-75 md:scale-100">
                <AnimatedShape />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
} 