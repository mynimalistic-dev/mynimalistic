"use client";
import React from "react";
import { motion } from "framer-motion";

export function AnimatedSphere() {
  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
      {/* Background glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sphere */}
      <div className="relative">
        {/* Grid lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-purple-500/20 rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotateX(${i * 22.5}deg)`,
            }}
            animate={{
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              x: [
                Math.cos(i * Math.PI) * 150,
                Math.sin(i * Math.PI) * 150,
                Math.cos(i * Math.PI) * 150,
              ],
              y: [
                Math.sin(i * Math.PI) * 150,
                Math.cos(i * Math.PI) * 150,
                Math.sin(i * Math.PI) * 150,
              ],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
} 