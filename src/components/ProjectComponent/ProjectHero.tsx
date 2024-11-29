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
//   subtitle = "Portfolio & Showcase",
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
      {/* Innovative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 8px)`,
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
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-500/30 rounded-full"
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
          {/* Innovative Badge
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-blue-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </motion.div> */}

          {/* Innovative Title Animation */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Building
              </motion.span>{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Digital
              </motion.span>{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Excellence
              </motion.span>
            </motion.h1>

            {/* Subtitle text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-bold md:text-2xl text-blue-400/80 mt-4"
            >
              Through Innovation & Expertise
            </motion.p>
            
            {/* Animated highlight */}
            <motion.div
              className="absolute -inset-x-20 -inset-y-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.1, 0],
                backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)'
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          {/* Description with more professional tone */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            We specialize in delivering enterprise-grade digital solutions that drive business growth. 
            Our portfolio showcases our expertise in creating scalable, innovative, and impactful 
            digital experiences that transform businesses.
          </motion.p>
        </div>

        {/* Feature Cards with 3D Perspective */}
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
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.label}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

     
      </motion.div>
    </motion.section>
  );
}