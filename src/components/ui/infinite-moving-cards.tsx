"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([]);

  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 20;
      case "normal":
        return 40;
      case "slow":
        return 60;
      default:
        return 40;
    }
  };

  return (
    <div
      className="overflow-hidden relative"
      style={{ maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)" }}
    >
      <motion.div
        className="flex gap-4 w-fit"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: getSpeed(),
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && { whileHover: { animationPlayState: "paused" } })}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg px-8 py-6"
          >
            <p className="text-slate-300 italic mb-4">&quot;{item.quote}&quot;</p>
            <p className="text-sky-400 font-semibold">{item.name}</p>
            <p className="text-slate-400 text-sm">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 