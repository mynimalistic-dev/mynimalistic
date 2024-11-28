"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTheme } from "next-themes";
import { 
  Users,
  Code2,
  MessageSquareText,
  GitBranch,
  Timer,
  Wallet
} from 'lucide-react';
import { type ReactNode } from "react";

export function FeaturedSection() {
  const { theme } = useTheme();

  const features: {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
  }[] = [
    {
      title: "User-Centric Design",
      description: "Simplicity drives engagement with designs prioritizing clarity and ease of use",
      icon: (
        <div className="relative  group/icon">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-sky-600 rounded-lg blur opacity-20 group-hover/icon:opacity-30 transition-all"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border border-blue-200/50 dark:border-blue-800/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
            <Users className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover/icon:text-blue-500 dark:group-hover/icon:text-blue-300 transition-colors" strokeWidth={1.5} />
          </div>
        </div>
      ),
      color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
    {
      title: "Full-Stack Expertise",
      description: "Comprehensive solutions from responsive websites to scalable backends tailored to your needs",
      icon: (
        <div className="relative  group/icon">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-sky-600 rounded-lg blur opacity-20 group-hover/icon:opacity-30 transition-all"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border border-blue-200/50 dark:border-blue-800/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
            <Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover/icon:text-blue-500 dark:group-hover/icon:text-blue-300 transition-colors" strokeWidth={1.5} />
          </div>
        </div>
      ),
      color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
    {
      title: "Transparent Communication",
      description: "Clear, open updates ensure a smooth and collaborative project journey",
      icon: (
        <div className="relative  group/icon">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-sky-600 rounded-lg blur opacity-20 group-hover/icon:opacity-30 transition-all"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border border-blue-200/50 dark:border-blue-800/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
            <MessageSquareText className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover/icon:text-blue-500 dark:group-hover/icon:text-blue-300 transition-colors" strokeWidth={1.5} />
          </div>
        </div>
      ),
      color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
    {
      title: "Agile Development Process",
      description: "Flexible, iterative approach for a product perfectly aligned with your vision",
      icon: (
        <div className="relative  group/icon">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-sky-600 rounded-lg blur opacity-20 group-hover/icon:opacity-30 transition-all"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border border-blue-200/50 dark:border-blue-800/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
            <GitBranch className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover/icon:text-blue-500 dark:group-hover/icon:text-blue-300 transition-colors" strokeWidth={1.5} />
          </div>
        </div>
      ),
      color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
    {
      title: "Timely Delivery",
      description: "Reliable, high-quality solutions delivered on schedule, every time",
      icon: (
        <div className="relative  group/icon">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-sky-600 rounded-lg blur opacity-20 group-hover/icon:opacity-30 transition-all"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border border-blue-200/50 dark:border-blue-800/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
            <Timer className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover/icon:text-blue-500 dark:group-hover/icon:text-blue-300 transition-colors" strokeWidth={1.5} />
          </div>
        </div>
      ),
      color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Efficient, minimalist designs offering maximum value without added complexity",
      icon: (
        <div className="relative  group/icon">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-sky-600 rounded-lg blur opacity-20 group-hover/icon:opacity-30 transition-all"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border border-blue-200/50 dark:border-blue-800/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
            <Wallet className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover/icon:text-blue-500 dark:group-hover/icon:text-blue-300 transition-colors" strokeWidth={1.5} />
          </div>
        </div>
      ),
      color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-b border-blue-100 dark:border-blue-900/30">
      {/* Sparkles Effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfeatured"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={40}
          className="w-full h-full"
          particleColor={theme === "dark" ? "#60A5FA" : "#2563EB"}
          speed={0.2}
          particleSize={1}
        />
      </div>

      {/* Enhanced Background Effects - Made darker for light mode */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/30 via-blue-200/20 to-transparent dark:from-blue-800/20 dark:via-transparent dark:to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-100 via-blue-50 to-white dark:from-blue-900/50 dark:via-blue-900/30 dark:to-blue-900/50 border border-blue-200 dark:border-blue-700/50 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700 dark:bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              FEATURED SOLUTIONS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <div className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              <TextGenerateEffect words="Discover how our cutting-edge features can transform your business" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <HoverEffect items={features} />
        </motion.div>
      </div>
    </section>
  );
} 