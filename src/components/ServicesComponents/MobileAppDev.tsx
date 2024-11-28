"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AppDevExpertise } from './MobileAppSections/AppDevExpertise';
import { AppDevTechStack } from './MobileAppSections/AppDevTechStack';
import { MinimalAnimatedShape } from '../ui/minimal-animated-shape';

export const MobileAppDev = () => {
  return (
    <div className="space-y-24">
      <section className="relative">
        <div className="container mx-auto px-4">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
              Mobile App Development
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
            <p className="dark:text-blue-200/80 text-blue-900 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mobile app development services focus on creating high-performance, 
              user-friendly applications that deliver exceptional experiences across all platforms.
              </p>
          </div>
        </motion.div>
 
        </div>
      </section>

      <section className="container mx-auto px-4">
        <AppDevTechStack />
      </section>

      <section className="container mx-auto px-4">
        <AppDevExpertise />
      </section>
    </div>
  );
}; 