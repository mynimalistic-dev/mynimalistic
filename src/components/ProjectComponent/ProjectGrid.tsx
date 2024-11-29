"use client";
import { Project } from "./type";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: index * 0.1
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
} 