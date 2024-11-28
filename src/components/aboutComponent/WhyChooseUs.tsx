'use client'
import React from 'react';
import { WhyChooseUsProps } from './type';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Sparkles } from 'lucide-react';

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, content, features }) => {
  return (
    <div className="py-24 px-4 bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:from-transparent dark:via-blue-950/10 dark:to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-600 dark:from-blue-100 dark:via-blue-400 dark:to-blue-100">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-3xl mx-auto">{content}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 dark:opacity-0" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-0 dark:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300 border border-sky-200/80 dark:border-white/10 shadow-lg shadow-sky-100/50 dark:shadow-none">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-200 to-blue-200 rounded-xl opacity-50 blur group-hover:blur-md transition-all duration-300 dark:opacity-0" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 dark:opacity-20 blur dark:group-hover:blur-md transition-all duration-300" />
                  
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-500 dark:to-cyan-500 p-3 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                    {index === 0 && <Target className="w-8 h-8 text-white" />}
                    {index === 1 && <Lightbulb className="w-8 h-8 text-white" />}
                    {index === 2 && <Users className="w-8 h-8 text-white" />}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/30" />
                  <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-indigo-400/30" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-blue-400/30" />
                  <div className="absolute bottom-8 left-8 w-1 h-1 rounded-full bg-indigo-400/30" />
                </div>

                <motion.div 
                  className="absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-500 dark:to-cyan-500"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-1/2 left-0 w-24 h-24 bg-sky-200/50 dark:bg-blue-500/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-0 w-32 h-32 bg-blue-200/50 dark:bg-cyan-500/5 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default WhyChooseUs; 