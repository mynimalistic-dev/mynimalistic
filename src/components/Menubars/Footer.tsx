"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { name: "Web Design", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "App Development", href: "#" },
  { name: "Digital Solutions", href: "#" },
  { name: "Branding", href: "#" },
];

const company = [
  { name: "About Us", href: "#" },
  { name: "Our Process", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
];

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mynimalistic/about/",
    icon: function LinkedInIcon({ className, ...props }: IconProps) {
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    }
  },
  {
    name: "Tumblr",
    href: "https://www.tumblr.com/mynimalistic",
    icon: function TumblrIcon({ className, ...props }: IconProps) {
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/>
        </svg>
      );
    }
  },
  {
    name: "X",
    href: "https://x.com/mynimalist_dev",
    icon: function XIcon({ className, ...props }: IconProps) {
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    }
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mynimalistic.dev/",
    icon: function InstagramIcon({ className, ...props }: IconProps) {
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    }
  }
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-blue-300 dark:border-blue-900/60 px-4">
      {/* Unique Border & Background Treatment */}
      
      <div className="absolute inset-0">
        {/* Top decorative border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-[1px] inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 border-l-2 border-t-2 border-blue-500/20 rounded-tl-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 border-l border-t border-blue-400/20 rounded-tl-xl"
          />
        </div>
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />
      <div className="absolute inset-x-0 top-[1px] h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-40" />
      
      {/* Corner Accents */}
      <div className="absolute left-0 top-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 border-l-2 border-t-2 border-blue-500/30 rounded-tl-xl"
        />
      </div>
      <div className="absolute right-0 top-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 border-r-2 border-t-2 border-blue-500/30 rounded-tr-xl"
        />
      </div>

        <div className="absolute top-0 right-0 w-24 h-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 border-r-2 border-t-2 border-blue-500/20 rounded-tr-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 border-r border-t border-blue-400/20 rounded-tr-xl"
          />
        </div>

        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(59,130,246,0)_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.2),rgba(59,130,246,0)_50%)]" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        {/* Content backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/95 to-white/80 dark:from-gray-950/80 dark:via-gray-950/95 dark:to-gray-950/80 backdrop-blur-[2px]" />
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-[10%] w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-[10%] w-32 h-32 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center relative group">
                  <div className="absolute inset-0 rounded-lg bg-blue-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <span className="relative text-white font-bold text-xl">M</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent">
                  Mynimalistic
                </h3>
              </div>
              <p className="text-blue-950/80 dark:text-gray-300 max-w-md leading-relaxed">
                Crafting digital experiences with minimalist design philosophy. 
                We transform complex challenges into clean, efficient solutions 
                that drive real business growth.
              </p>
              
              {/* Contact Info with enhanced styling */}
              <div className="space-y-3 pt-4">
                <p className="flex items-center space-x-3 text-blue-950/80 dark:text-gray-300 group">
                  <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </span>
                  <span className="group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    contact@mynimalistic.com
                  </span>
                </p>
              </div>
            </div>

            {/* Social Links with enhanced hover effects */}
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-blue-500/5 dark:to-indigo-500/5 border border-blue-100/50 dark:border-blue-500/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 text-blue-950 dark:text-sky-300 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity" />
                  {React.createElement(item.icon, {
                    className: "w-5 h-5 transition-transform group-hover:scale-110 relative z-10"
                  })}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-950/80 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 dark:from-sky-300 dark:via-sky-400 dark:to-sky-300 bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-950/80 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative border-t border-blue-200 dark:border-blue-900/50 py-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-blue-950/70 dark:text-gray-400">
            © {new Date().getFullYear()} Mynimalistic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-950/70 dark:text-gray-400">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
