'use client'
import React from 'react';
import { ExpertiseSectionProps } from './type';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud } from 'lucide-react';

const Expertise: React.FC<ExpertiseSectionProps> = ({ expertiseItems }) => {
  return (
    <div className="py-24 px-4 bg-gray-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-neutral-50 dark:to-neutral-400">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 shadow-lg dark:shadow-none"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {item.category === 'Web Development' && <Code2 className="w-8 h-8 text-white" />}
                  {item.category === 'Mobile Development' && <Smartphone className="w-8 h-8 text-white" />}
                  {item.category === 'DevOps' && <Cloud className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.category}</h3>
                <p className="text-gray-600 dark:text-neutral-300">{item.technology}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise; 