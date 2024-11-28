"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextAnimation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden flex flex-wrap justify-center", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="relative inline-block whitespace-pre"
          variants={child}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <span className="relative">
            {word}&nbsp;
            
            <motion.span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
            />
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
}; 