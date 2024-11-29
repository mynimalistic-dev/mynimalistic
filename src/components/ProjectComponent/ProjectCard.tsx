"use client";
import { Project } from "./type";
import { motion } from "framer-motion";
import { Github, ExternalLink, Rocket, Code2 } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var min-h-[500px] sm:h-[500px] w-full">
      <CardBody className="relative h-full bg-white dark:bg-zinc-900 rounded-[22px] p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 group">
        {/* Gradient Overlay - Optimized for performance */}
        <div 
          className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
          <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="absolute inset-y-0 -left-px w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          <div className="absolute inset-y-0 -right-px w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Image Container with Enhanced Hover Effect */}
        <CardItem
          translateZ="100"
          className="relative w-full overflow-hidden rounded-xl group/image aspect-video sm:aspect-[16/9]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10" />
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transform transition-all duration-500 group-hover/image:scale-110 will-change-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              quality={85}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 z-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg transform -translate-y-2 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </CardItem>
        
        {/* Content Container - Responsive Layout */}
        <div className="flex-grow flex flex-col mt-4 sm:mt-6 space-y-4">
          {/* Title Section with Glow Effect */}
          <CardItem
            translateZ="50"
            className="flex items-center gap-2"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 line-clamp-1">
              {project.title}
            </h3>
          </CardItem>

          {/* Description with Subtle Animation */}
          <CardItem
            translateZ="40"
            className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2"
          >
            {project.description}
          </CardItem>
          
          {/* Technologies with Enhanced Style */}
          <CardItem
            translateZ="30"
            className="flex-grow"
          >
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium 
                           bg-gradient-to-r from-blue-50 to-blue-100/80 
                           dark:from-blue-900/20 dark:to-blue-800/20 
                           text-blue-600 dark:text-blue-300 rounded-full
                           border border-blue-200/50 dark:border-blue-700/50
                           shadow-sm shadow-blue-200/20 dark:shadow-blue-900/20
                           transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
          
          {/* Actions with Glass Effect - Mobile Optimized */}
          <CardItem
            translateZ="20"
            className="flex justify-between items-center pt-4 border-t border-zinc-200 dark:border-zinc-800/50"
          >
            <div className="flex gap-2 sm:gap-3">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 
                           backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50
                           text-zinc-600 hover:text-blue-500 
                           dark:text-zinc-400 dark:hover:text-blue-400
                           transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20
                           active:scale-95"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 
                           backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50
                           text-zinc-600 hover:text-blue-500 
                           dark:text-zinc-400 dark:hover:text-blue-400
                           transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20
                           active:scale-95"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
            </div>
            <span className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 capitalize 
                         px-2 sm:px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 
                         border border-zinc-200 dark:border-zinc-700/50">
              {project.category}
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Shimmer effect for image loading
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str); 