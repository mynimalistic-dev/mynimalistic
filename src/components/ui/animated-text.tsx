"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false);
  const letters = Array.from(text);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      <div className="relative overflow-hidden">
        {/* Main glowing background */}
        <motion.div
          className="absolute -inset-x-4 -inset-y-2 bg-sky-500/20 blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Text container */}
        <div className="relative flex flex-wrap">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="relative inline-block whitespace-pre text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-sky-300"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: i * 0.05,
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
              
              {/* Individual letter glow effect */}
              <motion.span
                className="absolute inset-0 bg-sky-400/40 blur-lg"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />

              {/* Floating particles */}
              {letter !== " " && i % 3 === 0 && (
                <motion.span
                  className="absolute -top-2 left-1/2 w-1 h-1 rounded-full bg-sky-400"
                  animate={{
                    y: [-20, -40],
                    x: [-10, 10],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              )}
            </motion.span>
          ))}
        </div>

        {/* Animated gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          style={{
            maskImage: 'linear-gradient(to right, transparent, white, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, white, transparent)',
          }}
        />
      </div>
    </div>
  );
} 