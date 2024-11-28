"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent",
        "before:animate-[shimmer_2s_infinite]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </motion.div>
  );
}; 