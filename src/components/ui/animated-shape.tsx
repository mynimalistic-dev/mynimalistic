"use client";
import React from "react";
import { motion } from "framer-motion";

export function AnimatedShape() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-sky-300/30 dark:bg-sky-500/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated M Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
          {/* M shape with gradient stroke */}
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Glowing background for M */}
            <motion.path
              d="M20 80 L20 20 L40 50 L50 30 L60 50 L80 20 L80 80"
              fill="none"
              stroke="url(#glowGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="blur-sm opacity-50"
              animate={{
                strokeDasharray: ["0 1000", "1000 0"],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            
            {/* Main M shape */}
            <motion.path
              d="M20 80 L20 20 L40 50 L50 30 L60 50 L80 20 L80 80"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                strokeDasharray: ["0 1000", "1000 0"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  offset="0%"
                  className="text-blue-900 dark:text-sky-400"
                  animate={{
                    stopColor: ["currentColor", "rgb(30 58 138)", "currentColor"], // blue-900
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  className="text-sky-900 dark:text-sky-500"
                  animate={{
                    stopColor: ["currentColor", "rgb(12 74 110)", "currentColor"], // sky-900
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="text-blue-900/50 dark:text-sky-400/50" stopOpacity="0.5" />
                <stop offset="100%" className="text-sky-900/50 dark:text-sky-500/50" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Floating particles around M */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1.5 h-1.5 bg-sky-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, Math.cos(i * 30) * 100],
                y: [0, Math.sin(i * 30) * 100],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Rotating rings around M */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/30"
              style={{
                width: `${300 + i * 40}px`,
                height: `${300 + i * 40}px`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-1/2 left-1/2 h-[2px] bg-gradient-to-r from-sky-500/50 to-transparent"
          style={{
            width: '200px',
            rotate: `${i * 45}deg`,
            transformOrigin: '0 50%',
          }}
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 