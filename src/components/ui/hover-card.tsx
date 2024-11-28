"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const HoverCard = ({
  items,
  className,
  children,
}: {
  items: any[];
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative overflow-hidden rounded-xl p-px",
        "before:absolute before:inset-0 before:bg-[length:200%_200%] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-[shimmer_2s_infinite]",
        className
      )}
    >
      <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-xl p-2">
        {children}
      </div>
    </motion.div>
  );
}; 