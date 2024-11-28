"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesCore } from "../ui/sparkles";
import { BackgroundBeams } from "../ui/background-beams";
import { MovingBorder } from "../ui/moving-border";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Link from 'next/link';

const ServicesHero = () => {
  const testimonials = [
    {
      quote: "Transform Your Digital Vision",
      name: "Web Development",
      title: "Custom Solutions"
    },
    {
      quote: "Innovate with Technology",
      name: "Mobile Apps",
      title: "Cross-Platform"
    },
    {
      quote: "Scale Your Business",
      name: "Cloud Solutions",
      title: "Enterprise Grade"
    },
    {
      quote: "Secure Your Future",
      name: "Cybersecurity",
      title: "Advanced Protection"
    },
  ];

  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <BackgroundBeams className="absolute inset-0" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4">
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4"
        >
          Transform Your Digital Vision
        </motion.h1>

        {/* Moving Cards */}
        <div className="relative min-h-[12rem] w-full max-w-5xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Updated CTA Button with dark blue background */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative flex items-center divide-x divide-gray-600 px-7 py-4 bg-blue-950 rounded-lg leading-none">
                <span className="flex items-center space-x-2 pr-6">
                  <span className="text-gray-100 text-lg">Explore Services</span>
                </span>
                
                <motion.span 
                  className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.span>
              </div>

              {/* Animated particles around button */}
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-blue-400"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos(i * Math.PI * 2 / 3) * 50],
                    y: [0, Math.sin(i * Math.PI * 2 / 3) * 50],
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 rounded-full border-2 border-blue-500 flex justify-center p-1"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-blue-500"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesHero; 