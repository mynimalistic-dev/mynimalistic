"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ContainerScroll = ({
  titleComponent,
  users,
}: {
  titleComponent: string | React.ReactNode;
  users: any[];
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale: scaleDimensions,
        opacity: opacity,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="p-4 relative z-10">{titleComponent}</div>
    </motion.div>
  );
}; 