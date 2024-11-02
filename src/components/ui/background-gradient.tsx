"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}: BackgroundGradientProps) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={`relative group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "300% 300%",
        }}
        className={`absolute inset-0 rounded-3xl blur-xl transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 ${className}`}
      />
      <div className="relative">{children}</div>
    </div>
  );
}; 