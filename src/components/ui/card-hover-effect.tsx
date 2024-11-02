"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: string;
    color?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-full mx-auto",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group/item block w-full p-2 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-500/50 via-blue-500/50 to-sky-500/50 opacity-0 group-hover/item:opacity-100 blur-xl transition-all duration-500"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.2,
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  transition: {
                    duration: 0.2,
                  }
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <motion.div
              initial={false}
              animate={hoveredIndex === idx ? { y: -10 } : { y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <CardContent>
                <div className="flex flex-col gap-4">
                  <span className="text-4xl p-2 w-16 h-16 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 dark:from-sky-400 dark:via-blue-500 dark:to-sky-500 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 tracking-wide leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative h-full rounded-2xl p-px overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-500/20 before:via-blue-500/20 before:to-sky-500/20 before:opacity-0 group-hover/item:before:opacity-100 before:transition-all before:duration-500",
        "after:absolute after:inset-[1px] after:rounded-2xl after:bg-white dark:after:bg-black",
        className
      )}
    >
      <div className="relative z-10 h-full rounded-2xl bg-gradient-to-r from-white to-white/90 dark:from-black dark:to-black/90 p-1">
        {children}
      </div>
    </div>
  );
};

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("relative z-20 p-4 sm:p-5", className)}>
      {children}
    </div>
  );
}; 