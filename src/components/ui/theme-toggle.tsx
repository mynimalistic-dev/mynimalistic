"use client";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2.5 rounded-xl bg-slate-900/50 dark:bg-white/10 border border-slate-800/50 dark:border-white/20 backdrop-blur-sm hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-colors duration-300"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-sky-400 dark:text-sky-300" />
      ) : (
        <Moon className="w-5 h-5 text-sky-400 dark:text-sky-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
} 