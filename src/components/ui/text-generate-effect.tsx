"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [wordArray, setWordArray] = useState<string[]>([]);

  useEffect(() => {
    setWordArray(words.split(" "));
  }, [words]);

  return (
    <div className="flex flex-wrap justify-center">
      {wordArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}; 