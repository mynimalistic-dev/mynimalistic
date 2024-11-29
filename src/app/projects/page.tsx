"use client";
import { ProjectGrid } from "@/components/ProjectComponent/ProjectGrid";
import { ProjectHero } from "@/components/ProjectComponent/ProjectHero";
import { Project } from "@/components/ProjectComponent/type";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FloatingNavbar } from "@/components/Menubars/floating-navbar";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Mynimalistic Website",
    description: "Modern company website with minimalist design, dark mode, and smooth animations.",
    image: "/projects/mynimalistic.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://mynimalistic.com",
    githubUrl: "https://github.com/mynimalistic/website",
    category: "web",
    featured: true,
    stats: {
      stars: 128,
      views: 3240,
      likes: 423
    }
  },
  {
    id: "2",
    title: "Digital Portfolio Platform",
    description: "A platform for creatives to showcase their work with beautiful, customizable portfolios.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
    liveUrl: "https://portfolios.mynimalistic.com",
    githubUrl: "https://github.com/mynimalistic/portfolio-platform",
    category: "web",
    featured: true,
    stats: {
      stars: 80,
      views: 2500,
      likes: 300
    }
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Minimalist task management application with real-time collaboration features.",
    image: "/projects/tasks.jpg",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    liveUrl: "https://tasks.mynimalistic.com",
    githubUrl: "https://github.com/mynimalistic/task-app",
    category: "mobile",
    featured: true,
    stats: {
      stars: 70,
      views: 2000,
      likes: 250
    }
  },
  {
    id: "4",
    title: "Design System",
    description: "A comprehensive design system with reusable components and documentation.",
    image: "/projects/design.jpg",
    technologies: ["Storybook", "React", "Styled Components", "Jest"],
    liveUrl: "https://design.mynimalistic.com",
    githubUrl: "https://github.com/mynimalistic/design-system",
    category: "web",
    featured: true,
    stats: {
      stars: 90,
      views: 3500,
      likes: 350
    }
  },
  {
    id: "5",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets and data visualization.",
    image: "/projects/analytics.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "https://analytics.mynimalistic.com",
    githubUrl: "https://github.com/mynimalistic/analytics",
    category: "web",
    featured: true,
    stats: {
      stars: 100,
      views: 4000,
      likes: 400
    }
  },
  {
    id: "6",
    title: "E-learning Platform",
    description: "Interactive learning platform with video courses and progress tracking.",
    image: "/projects/elearning.jpg",
    technologies: ["Next.js", "Django", "Redis", "Docker"],
    liveUrl: "https://learn.mynimalistic.com",
    githubUrl: "https://github.com/mynimalistic/elearning",
    category: "web",
    featured: true,
    stats: {
      stars: 110,
      views: 4500,
      likes: 450
    }
  }
];

export default function ProjectPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Floating Navigation */}
      <div className="fixed top-4 inset-x-0 z-50 max-w-2xl mx-auto px-4">
        <FloatingNavbar navItems={navItems} />
      </div>

      {/* Hero Section with TracingBeam wrapper */}
      <TracingBeam className="w-full">
        <section className="relative">
          <ProjectHero />
        </section>

        {/* Projects Grid Section */}
        <section className="relative bg-slate-50/50 dark:bg-slate-900/50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500 mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                Explore our portfolio of minimalist designs and innovative solutions
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProjectGrid projects={projects} />
            </motion.div>
          </div>
        </section>
      </TracingBeam>
    </main>
  );
}
