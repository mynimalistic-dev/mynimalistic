"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const GlowingText = ({
  children,
  className,
  glowColor = "rgba(96, 165, 250, 0.4)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) => {
  return (
    <motion.div
      className={cn("relative", className)}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="absolute inset-0 blur-2xl"
        style={{
          background: glowColor,
          opacity: 0.4,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}; 