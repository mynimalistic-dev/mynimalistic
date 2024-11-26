"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import { 
  Smartphone, 
  Globe, 
  Palette, 
  Code
} from "lucide-react";

export function ServicesSection() {
  const { theme } = useTheme();
  
  const services = [
    {
      title: "Mobile Development",
      description: "Native & cross-platform apps with seamless performance and user experience",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Flutter", "React Native"],
      gradient: "from-[#61DAFB] to-[#00FF57]",
      borderGradient: "from-cyan-400 via-cyan-500 to-emerald-500",
    },
    {
      title: "Web Development",
      description: "Dynamic web apps and stunning websites with robust, scalable solutions",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React", "Next.js", "TypeScript"],
      gradient: "from-[#FF3366] to-[#CB5EEE]",
      borderGradient: "from-pink-500 via-purple-500 to-violet-500",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, clean interfaces that seamlessly blend simplicity with visual appeal.",
      icon: <Palette className="w-8 h-8" />,
      technologies: ["Figma", "Adobe XD", "Sketch"],
      gradient: "from-[#FF9933] to-[#FFCC33]",
      borderGradient: "from-orange-400 via-amber-500 to-yellow-500",
    },
    {
      title: "Custom Solutions",
      description: "Developing tailored digital solutions to tackle your unique business challenges efficiently.",
      icon: <Code className="w-8 h-8" />,
      technologies: ["GraphQL", "REST", "tRPC"],
      gradient: "from-[#6366F1] to-[#8B5CF6]",
      borderGradient: "from-indigo-400 via-indigo-500 to-purple-500",
    }
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { 
      y: -5,
      scale: 1.02,
      transition: { 
        duration: 0.2, 
        ease: "easeOut" 
      }
    },
    exit: { 
      y: -50, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-sky-50/50 dark:from-gray-950 dark:via-black dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <SparklesCore
          id="tsparticlesservices"
          background="transparent"
          minSize={0.2}
          maxSize={1}
          particleDensity={20}
          className="w-full h-full"
          particleColor={theme === "dark" ? "#60A5FA" : "#0369a1"}
          speed={0.2}
          particleSize={1}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/80 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 backdrop-blur-sm shadow-lg"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 dark:bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600 dark:bg-sky-500"></span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-sky-700 to-sky-900 dark:from-sky-400 dark:to-sky-300 bg-clip-text text-transparent">
              SERVICES & SOLUTIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent"
          >
            Development Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 dark:text-gray-400 text-lg"
          >
            Empowering your digital journey with comprehensive tech solutions and expertise
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <AnimatePresence>
            {services.map((service, index) => (
              <BackgroundGradient 
                key={service.title} 
                className="rounded-[22px] p-0.5 bg-white dark:bg-black hover:shadow-xl hover:shadow-sky-200/20 dark:hover:shadow-sky-900/20 transition-all duration-300"
              >
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  exit="exit"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-full bg-white dark:bg-gray-900 rounded-[20px] p-6 overflow-hidden
                    border border-gray-100 dark:border-gray-800
                    shadow-sm hover:shadow-md
                    transition-all duration-300"
                >
                  {/* Animated Background Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(120deg, ${service.gradient})`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="relative inline-flex p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 
                        group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      >
                        <div 
                          className="absolute inset-0 rounded-xl opacity-50 blur-sm group-hover:opacity-70 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(120deg, ${service.gradient})`,
                          }}
                        />
                        <div className="relative text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 
                      bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 
                      bg-clip-text text-transparent
                      group-hover:translate-x-1 transition-transform duration-300"
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed
                      group-hover:translate-x-1 transition-transform duration-300"
                    >
                      {service.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full 
                            bg-gray-100 dark:bg-gray-800
                            text-gray-800 dark:text-gray-200
                            border border-gray-200 dark:border-gray-700
                            group-hover:bg-gray-200 dark:group-hover:bg-gray-700
                            group-hover:translate-x-1
                            transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </BackgroundGradient>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}