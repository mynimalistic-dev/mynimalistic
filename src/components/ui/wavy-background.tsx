"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#2563eb33", "#3b82f633", "#60a5fa33"],
  blur = 10,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  blur?: number;
  [key: string]: any;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn("relative flex flex-col", containerClassName)}
      ref={containerRef}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        {colors.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 transform"
            style={{
              background: `radial-gradient(circle at ${50 + index * 10}% ${50 + index * 10}%, ${color} 0%, transparent 70%)`,
              filter: `blur(${blur}px)`,
              animation: `wave-${index} 8s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
      <style jsx global>{`
        @keyframes wave-0 {
          0% { transform: translateX(-5%) translateY(-5%); }
          100% { transform: translateX(5%) translateY(5%); }
        }
        @keyframes wave-1 {
          0% { transform: translateX(5%) translateY(5%); }
          100% { transform: translateX(-5%) translateY(-5%); }
        }
        @keyframes wave-2 {
          0% { transform: translateX(-3%) translateY(3%); }
          100% { transform: translateX(3%) translateY(-3%); }
        }
      `}</style>
    </div>
  );
}; 