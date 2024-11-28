"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from "../ui/sparkles";
import { BackgroundBeams } from "../ui/background-beams";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const ServicesHero = () => {
  const testimonials = [
    {
      quote: "Modern Web Applications",
      name: "Web Development",
      title: "Full-Stack Solutions"
    },
    {
      quote: "Native & Cross-Platform",
      name: "App Development",
      title: "iOS & Android"
    },
    {
      quote: "User-Centric Design",
      name: "UI/UX Design",
      title: "Intuitive Interfaces"
    },
    {
      quote: "Tailored Solutions",
      name: "Custom Development",
      title: "Scalable Systems"
    },
    {
      quote: "E-Commerce Solutions",
      name: "Web Development",
      title: "Online Stores"
    },
    {
      quote: "Progressive Web Apps",
      name: "App Development",
      title: "Cross-Platform"
    },
    {
      quote: "Brand Experience",
      name: "UI/UX Design",
      title: "Visual Identity"
    },
    {
      quote: "Enterprise Solutions",
      name: "Custom Development",
      title: "Business Growth"
    }
  ];

  return (
    <div className="min-h-screen relative w-full top-20  bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="currentColor"
          />
        </div>
        <BackgroundBeams className="absolute inset-0 opacity-50 dark:opacity-100" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[90vh]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-12 md:space-y-16">
          {/* Updated Main Title with Subtitle */}
          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-gray-900 to-gray-600 max-w-4xl mx-auto leading-tight"
            >
Simple Smart Impactful
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We craft intuitive, user-focused digital solutions that merge simplicity with innovation, empowering your growth in the digital world.
            </motion.p>
          </div>

          {/* Moving Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative h-40 sm:h-44 md:h-48 w-full max-w-5xl mx-auto">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
                </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 rounded-full border-2 dark:border-blue-500 border-gray-600 flex justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full dark:bg-blue-500 bg-gray-600"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHero; 