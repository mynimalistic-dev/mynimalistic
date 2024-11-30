"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TracingBeam } from '../ui/tracing-beam';
import { TechStack } from './WebDevelopmentSections/TechStack';
import { Expertise } from './WebDevelopmentSections/Expertise';

export const WebDevelopment = () => {
  return (
    <TracingBeam>
      <div className="space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="lg:text-5xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
              Web Development
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
            <p className="dark:text-blue-200/80 text-blue-900 text-lg leading-relaxed max-w-3xl mx-auto">
              Transform your digital presence with cutting-edge web solutions combining aesthetic excellence 
              and powerful functionality. We craft responsive, scalable, and user-centric websites.
            </p>
          </div>
        </motion.div>

        <section className="relative">
          <div className="container mx-auto px-4 relative">
            <TechStack />
          </div>
        </section>

        <section className="container mx-auto px-4">
          <Expertise />
        </section>
      </div>
    </TracingBeam>
  );
}; 