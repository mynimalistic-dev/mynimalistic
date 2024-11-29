"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group relative p-8 rounded-2xl overflow-hidden",
        "bg-slate-900/40 hover:bg-slate-800/40",
        "border border-slate-800 hover:border-blue-500/20",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Bubble Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-xl" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col gap-6">
        {/* Icon */}
        <div className="relative">
          <div className="p-3 rounded-xl bg-blue-500/10 w-fit group-hover:bg-blue-500/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-500" />
          </div>
          {/* Icon glow */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl"
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Corner Bubble */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-blue-500/5"
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
    </motion.div>
  );
}; 