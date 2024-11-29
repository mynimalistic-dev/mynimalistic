"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Rocket, Laptop, Blocks } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Feature, ProjectHeroProps } from "./types";
import { cn } from "@/lib/utils";
import { FeatureCard } from "../ui/feature-card";

const features: Feature[] = [
  {
    icon: Code2,
    label: "Modern Tech Stack",
    description: "Built with cutting-edge technologies and best practices"
  },
  {
    icon: Rocket,
    label: "Rapid Delivery",
    description: "Swift development cycles with optimal performance"
  },
  {
    icon: Laptop,
    label: "Cross-Platform",
    description: "Seamless experience across all devices and platforms"
  },
  {
    icon: Blocks,
    label: "Scalable Solutions",
    description: "Future-proof architecture that grows with your business"
  },
];

export function ProjectHero({
  title = "Building Digital Excellence Through Innovation",
  description = "We transform complex business challenges into elegant digital solutions. Explore our portfolio of enterprise-grade projects that demonstrate our commitment to excellence and innovation."
}: ProjectHeroProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="relative h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Enhanced Background with more visible bubbles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        {/* Enhanced grid pattern with more visible bubbles */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 8px)`,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px', '0px 0px'],
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity
          }}
        />
        {/* Enhanced floating particles with better visibility */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 bg-blue-500/50 dark:bg-blue-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y }}
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-16"
      >
        {/* Header Content */}
        <div className="text-center space-y-8 max-w-4xl">
          {/* Enhanced Title Animation */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Building
              </motion.span>{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Digital
              </motion.span>{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Excellence
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-bold md:text-2xl bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-blue-400/80 bg-clip-text text-transparent mt-4"
            >
              Through Innovation & Expertise
            </motion.p>
            
            {/* Enhanced Animated highlight */}
            <motion.div
              className="absolute -inset-x-20 -inset-y-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.08, 0],
                backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)'
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-blue-950/70 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            We specialize in delivering enterprise-grade digital solutions that drive business growth. 
            Our portfolio showcases our expertise in creating scalable, innovative, and impactful 
            digital experiences that transform businesses.
          </motion.p>
        </div>

        {/* Enhanced Feature Cards with more visual impact */}
        <div className="w-full max-w-7xl mx-auto perspective-1000">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, rotateX: -10 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: {
                      type: "spring",
                      damping: 20,
                      stiffness: 100
                    }
                  }
                }}
                className="group relative"
              >
                {/* Enhanced gradient border and glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-300 group-hover:duration-200" />
                
                {/* Card content with enhanced styling */}
                <div className="relative h-full bg-white/80 dark:bg-slate-900 rounded-xl p-6 
                  border border-blue-100 dark:border-slate-800
                  shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                  backdrop-blur-sm
                  hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]
                  transition-all duration-300
                  group-hover:translate-y-[-2px]"
                >
                  {/* Enhanced icon container */}
                  <div className="flex items-center justify-center w-14 h-14 mb-4 
                    rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 
                    dark:from-slate-800 dark:to-slate-800
                    shadow-inner border border-blue-100/50 dark:border-slate-700"
                  >
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 
                      group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Enhanced title */}
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-900 to-indigo-900 
                    dark:from-white dark:to-white bg-clip-text text-transparent mb-2 
                    group-hover:from-blue-700 group-hover:to-indigo-600 transition-all duration-300">
                    {feature.label}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="text-blue-900/70 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}