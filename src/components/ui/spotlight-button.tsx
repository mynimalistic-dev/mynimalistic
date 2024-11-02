"use client";
import React from "react";
import { motion } from "framer-motion";

interface SpotlightButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightButton({ children, className = "" }: SpotlightButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-full bg-purple-500 text-white font-medium ${className}`}
    >
      {children}
    </motion.button>
  );
} 