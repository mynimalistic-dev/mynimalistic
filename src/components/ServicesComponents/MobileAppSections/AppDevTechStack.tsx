"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Layout, TestTube2, Wrench } from 'lucide-react';

export const AppDevTechStack = () => {
  const technologies = [
    {
      category: "Native Android",
      description: "Core technologies for native Android development",
      tools: ["Kotlin", "Java", "Android SDK", "Android Studio", "Firebase"],
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      category: "Cross-Platform",
      description: "Technologies for multi-platform development",
      tools: ["React Native", "Flutter", "Ionic", "Xamarin"],
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      gradient: "from-blue-500/80 to-cyan-400/80"
    },
    {
      category: "Backend & APIs",
      description: "Server-side technologies and API frameworks",
      tools: ["Node.js", "Python", "RESTful APIs", "GraphQL"],
      icon: <Server className="w-6 h-6 text-blue-500" />,
      gradient: "from-blue-600/80 to-cyan-500/80"
    },
    {
      category: "Database",
      description: "Data storage and management solutions",
      tools: ["SQLite", "Realm", "Firebase Realtime DB", "MongoDB"],
      icon: <Database className="w-6 h-6 text-cyan-500" />,
      gradient: "from-blue-500/80 to-cyan-400/80"
    },
    {
      category: "Testing & Analytics",
      description: "Quality assurance and performance monitoring",
      tools: ["JUnit", "Espresso", "Firebase Analytics", "Crashlytics"],
      icon: <TestTube2 className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-400/80 to-cyan-300/80"
    },
    {
      category: "Development Tools",
      description: "Essential tools for efficient development",
      tools: ["Git", "JIRA", "CI/CD", "Docker"],
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      gradient: "from-blue-600/80 to-cyan-500/80"
    }
  ];

  return (
    <section className="relative py-5">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 dark:from-blue-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            Our Technology Stack
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-blue-600 dark:from-blue-400 to-transparent" />
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-blue-600 dark:from-blue-400 to-transparent" />
          </div>
        
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl 
                bg-white dark:bg-blue-500/5 
                backdrop-blur-sm 
                border border-gray-200 dark:border-blue-500/10 
                hover:border-blue-600/30 dark:hover:border-blue-400/30 
                shadow-lg hover:shadow-blue-500/10 
                transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="mb-4 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 inline-block">
                  {tech.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-blue-200/80 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors duration-300">
                  {tech.category}
                </h3>
                
                <p className="text-gray-600 dark:text-blue-200/60 mb-4 text-sm">
                  {tech.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 text-sm rounded-full 
                        bg-gray-100 dark:bg-blue-500/10 
                        text-gray-700 dark:text-blue-200/80 
                        border border-gray-200 dark:border-blue-500/20
                        hover:bg-gray-200 dark:hover:bg-blue-500/20 
                        transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div 
                className="absolute inset-0 rounded-2xl transition-opacity duration-300 
                  opacity-0 group-hover:opacity-10 
                  bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 