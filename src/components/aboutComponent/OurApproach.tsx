'use client'
import React from 'react';
import { OurApproachProps } from './type';
import { motion } from 'framer-motion';

const OurApproach: React.FC<OurApproachProps> = ({ title, content }) => {
  return (
    <div className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black/90 dark:to-black">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 dark:bg-purple-900 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200"
          >
            {title}
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-black/50 backdrop-blur-xl 
                border-2 border-gray-200/80 dark:border-sky-500/10 rounded-2xl p-10 
                hover:border-blue-500/50 dark:hover:border-sky-400/30 transition-all duration-300 
                shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)]
                dark:shadow-none
                before:absolute before:inset-0 before:rounded-2xl before:p-[2px] 
                before:bg-gradient-to-b before:from-gray-100 before:to-gray-300/40 
                dark:before:from-sky-500/5 dark:before:to-purple-500/5 before:-z-10"
            >
              {/* Improved number badge */}
              <div className="absolute -top-6 left-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl rotate-[10deg] 
                  flex items-center justify-center text-2xl font-bold group-hover:rotate-0 transition-all duration-300
                  shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                  {index + 1}
                </div>
              </div>

              {/* Card content */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white 
                  group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-neutral-300 leading-relaxed
                  group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {item.content}
                </p>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 
                border-blue-600/30 dark:border-sky-500/30 rounded-br-xl opacity-0 
                group-hover:opacity-100 transition-opacity" />
              
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-blue-50/30 to-indigo-50/30 
                dark:via-sky-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurApproach; 