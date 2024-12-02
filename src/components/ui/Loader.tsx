"use client";
import React from "react";
import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
} 