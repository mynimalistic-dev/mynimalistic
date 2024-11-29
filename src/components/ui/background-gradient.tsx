"use client";
import { cn } from "@/utils/cn";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative group/card w-full",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute -inset-px rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100",
          animate && "animate-gradient",
          className
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
}; 