"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30",
  ry = "30",
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 blur-sm" />
        <svg
          className="absolute scale-[1.02]"
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: duration / 1000, repeat: Infinity }}
            x="0"
            y="0"
            width="400"
            height="400"
            rx={rx}
            ry={ry}
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative">{children}</div>
      </motion.div>
    </div>
  );
}; 