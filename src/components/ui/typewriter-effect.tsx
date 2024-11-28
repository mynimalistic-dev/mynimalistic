"use client";
import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}`}
              className={cn("opacity-0", word.className)}
            >
              {word.text}
              {idx < words.length - 1 ? " " : ""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-4 -mb-1 mx-1 bg-blue-500", cursorClassName)}
      />
    </div>
  );
}; 