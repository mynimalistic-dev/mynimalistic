"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Card {
  title: string;
  description: string;
  icon: string;
}

export const MovingCards = ({ items }: { items: Card[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div
            className={`relative w-64 p-6 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700
              transform transition-all duration-300 ${
                hoveredIndex === idx
                  ? "scale-105 shadow-2xl shadow-neutral-900/50"
                  : "scale-100"
              }`}
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold text-neutral-200 mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-400">{item.description}</p>
            </div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 