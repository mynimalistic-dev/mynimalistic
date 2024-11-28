"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  gradient: string;
  icon?: string;
}

export const ServiceCard = ({ title, description, category, gradient, icon }: ServiceCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="relative group rounded-xl border border-gray-800 bg-black p-1"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${gradient},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative rounded-xl bg-black/80 p-6 backdrop-blur-sm">
        {icon && (
          <div className="mb-4 inline-flex rounded-lg bg-gray-900 p-3">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <h3 className="mb-2 text-xl font-medium text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-gray-300">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}; 