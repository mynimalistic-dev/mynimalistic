"use client";
import React from "react";
import { motion } from "framer-motion";

export function AnimatedMLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
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
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f" />
            <stop offset="100%" stopColor="#0ff" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
} 