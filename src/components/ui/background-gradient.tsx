"use client";
import { cn } from "@/utils/cn";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative group/bg",
        className
      )}
    >
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-400 dark:from-sky-500 dark:to-blue-500 rounded-lg blur opacity-20 group-hover/bg:opacity-40 transition duration-1000 group-hover:duration-200"
      />
      <div className="relative bg-white/95 dark:bg-black/95 rounded-[20px] p-4">
        {children}
      </div>
    </div>
  );
}; 