"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative flex items-center justify-center w-24 h-24 bg-slate-800/80 
                     backdrop-blur-sm rounded-xl border-2 border-slate-700/50 cursor-pointer
                     group-hover:border-slate-500/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-4xl">{item.image}</span>
          </motion.div>

          {hoveredIndex === idx && (
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-slate-800 
                       text-white rounded-lg text-sm whitespace-nowrap z-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-bold">{item.name}</div>
              <div className="text-slate-400 text-xs">{item.designation}</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="border-solid border-t-slate-800 border-t-8 border-x-transparent border-x-8 border-b-0" />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}; 