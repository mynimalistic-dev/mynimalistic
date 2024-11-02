"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "next-themes";

export function ServicesSection() {
  const { theme } = useTheme();
  
  const services = [
    {
      title: "App Development",
      description: "Modern applications with scalable architecture",
      icon: "🚀",
      technologies: ["React", "Node", "AWS"],
    },
    {
      title: "API Integration",
      description: "Seamless RESTful & microservices integration",
      icon: "🔄",
      technologies: ["REST", "GraphQL", "Docker"],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure & deployment",
      icon: "☁️",
      technologies: ["AWS", "Azure", "GCP"],
    },
    {
      title: "DevOps Services",
      description: "CI/CD pipelines & automation solutions",
      icon: "⚙️",
      technologies: ["Jenkins", "Docker", "K8s"],
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-black dark:via-black dark:to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesservices"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={10}
          className="w-full h-full"
          particleColor={theme === "dark" ? "#60A5FA" : "#0369a1"}
          speed={0.2}
          particleSize={1}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-500/10 dark:to-blue-500/10 border border-sky-200 dark:border-sky-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 dark:bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-700 dark:bg-sky-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-sky-900 to-blue-800 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-900 via-blue-800 to-sky-900 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent"
          >
            Development Solutions
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-px rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-blue-200 dark:from-sky-500/20 dark:to-blue-500/20 animate-pulse" />
              <div className="relative h-full bg-white dark:bg-black rounded-xl p-5">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="relative mb-3">
                    <span className="text-3xl relative z-10">{service.icon}</span>
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-500/10 to-blue-500/10 dark:from-sky-400/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-sky-800 to-blue-800 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sky-900/80 dark:text-gray-400 text-sm mb-3">
                    {service.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-800 dark:text-sky-300 border border-sky-200/50 dark:border-sky-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}