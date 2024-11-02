"use client";
import React from "react";
import { motion } from "framer-motion";

interface SpotlightButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function SpotlightButton({ 
  children, 
  className = "",
  variant = "primary"
}: SpotlightButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group px-6 py-3 rounded-full overflow-hidden font-medium
        ${variant === "primary" ? `
          bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600
          dark:from-sky-400 dark:via-blue-500 dark:to-sky-500
          hover:from-blue-700 hover:via-sky-700 hover:to-blue-700
          dark:hover:from-sky-500 dark:hover:via-blue-600 dark:hover:to-sky-600
          text-white shadow-lg shadow-blue-500/25 dark:shadow-sky-400/25
          hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-sky-400/30
          border border-blue-400/20 dark:border-sky-300/20
        ` : `
          bg-gradient-to-r from-slate-100 via-white to-slate-100
          dark:from-slate-800 dark:via-slate-900 dark:to-slate-800
          hover:from-slate-200 hover:via-slate-100 hover:to-slate-200
          dark:hover:from-slate-700 dark:hover:via-slate-800 dark:hover:to-slate-700
          text-blue-900 dark:text-sky-300
          shadow-md shadow-slate-200/50 dark:shadow-slate-900/50
          hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60
          border border-slate-200 dark:border-slate-700
        `}
        transition-all duration-300
        ${className}
      `}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      {/* Content */}
      {children}
    </motion.button>
  );
} 