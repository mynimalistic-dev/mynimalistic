"use client";
import React from "react";
import { motion } from "framer-motion";

export const MovingGradient = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        background: 
          "radial-gradient(circle at center, rgba(100, 100, 255, 0.1) 0%, transparent 70%)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}; 