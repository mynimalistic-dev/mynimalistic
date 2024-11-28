"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/service-card';
import { TracingBeam } from '../ui/tracing-beam';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building scalable, modern web applications with cutting-edge technologies",
      category: "Development",
      gradient: "rgba(59, 130, 246, 0.2)",
      icon: "🌐",
    },
    {
      title: "Mobile Solutions",
      description: "Cross-platform mobile apps that deliver exceptional user experiences",
      category: "Development",
      gradient: "rgba(236, 72, 153, 0.2)",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that convert",
      category: "Design",
      gradient: "rgba(16, 185, 129, 0.2)",
      icon: "🎨",
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions engineered for performance and reliability",
      category: "Infrastructure",
      gradient: "rgba(245, 158, 11, 0.2)",
      icon: "☁️",
    },
  ];

  return (
    <TracingBeam className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </TracingBeam>
  );
}; 