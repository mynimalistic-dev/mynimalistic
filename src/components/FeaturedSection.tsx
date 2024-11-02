"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTheme } from "next-themes";

export function FeaturedSection() {
  const { theme } = useTheme();

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate and optimize your workflow",
      icon: "🤖",
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful analytics dashboard",
      icon: "📊",
    },
    {
      title: "Secure Infrastructure",
      description: "Enterprise-grade security with end-to-end encryption",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert support to help you succeed",
      icon: "💬",
    },
    {
      title: "Seamless Integration",
      description: "Easy integration with your favorite tools and platforms",
      icon: "🔄",
    },
    {
      title: "Custom Solutions",
      description: "Tailored solutions to meet your specific business needs",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50/20 to-sky-50 dark:from-black dark:to-black">
      {/* Refined Sparkles Effect */}
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

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 dark:from-blue-500/10 dark:to-indigo-500/10 border border-blue-200/50 dark:border-blue-500/20 shadow-[0_2px_20px_rgba(14,165,233,0.15)] dark:shadow-none mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700 dark:bg-sky-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-900 to-sky-800 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              FEATURED SOLUTIONS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
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