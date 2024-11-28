'use client'
import React from 'react';
import { SectionProps } from './type';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Lightbulb, Users, ArrowRight } from 'lucide-react';

const WelcomeSection: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className=" mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="relative flex flex-col lg:flex-row items-center gap-8 bg-white/80 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg dark:shadow-none border border-gray-200/20 dark:border-white/10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] relative order-2 lg:order-1"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-blue-100 dark:via-blue-400 dark:to-blue-100">
              {title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-blue-200 leading-relaxed">
              {content}
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: Code2, text: "Modern Tech Stack" },
                { icon: Sparkles, text: "Clean Design" },
                { icon: Lightbulb, text: "Innovative Solutions" },
                { icon: Users, text: "Client Focused" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-blue-300"
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image - Now full width on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[30%] relative order-1 lg:order-2"
          >
            <div className="relative max-w-[200px] lg:max-w-[250px] mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur-xl animate-pulse" />
              
              {/* Main image container */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 bg-[url('/company.webp')] bg-cover bg-center transform hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-[1px]" />
              </div>

              {/* Stats overlay - Adjusted for better mobile visibility */}
              <div className="absolute -right-2 bottom-4 bg-white dark:bg-gray-900 rounded-lg p-3 shadow-lg">
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">
                  Our Impact
                </div>
                <div className="mt-1 flex gap-3">
                  <div>
                    <div className="text-lg font-bold text-blue-600">100+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeSection; 