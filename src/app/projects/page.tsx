"use client";
import { ProjectGrid } from "@/components/ProjectComponent/ProjectGrid";
import { ProjectHero } from "@/components/ProjectComponent/ProjectHero";
import { Project } from "@/components/ProjectComponent/type";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FloatingNavbar } from "@/components/Menubars/floating-navbar";
import { motion } from "framer-motion";
import { Footer } from "@/components/Menubars/Footer";
import { ProjectCTA } from "@/components/ProjectComponent/ProjectCTA";
import { AcertimityFAQ } from "@/components/ProjectComponent/AcertimityFAQ";

const projects: Project[] = [
  {
    id: "1",
    title: "HealthFit ",
    description: "Your all-in-one app for achieve your health goals with ease!",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732952957/d6c80df2-826c-48c6-8199-a707a70bee02.png",
    technologies: ["Flutter", "Dart", "C++", "Swift"],
    liveUrl: "https://github.com/AgnivaMaiti/fitness-app",
    githubUrl: "https://github.com/AgnivaMaiti/fitness-app",
    category: "Mobile App",
    featured: true,
    stats: {
      stars: 128,
      views: 3240,
      likes: 423
    }
  },
  {
    id: "2",
    title: "Mynimalistic Website",
    description: "Modern company website with minimalist design, dark mode, and smooth animations.",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732953982/39adbd4d-408f-4893-a900-a4f86238c272.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.mynimalistic.tech",
    githubUrl: "https://www.mynimalistic.tech",
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
    title: "Personal Portfolio",
    description: "A personal animated portfolio website with smooth animations and a minimalist design.",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732954812/e6e95a95-b7a5-4cce-9e65-a9a9d90118b2.png",
    technologies: ["Next.js", "Framer Motion", "Three.js"],
    liveUrl: "https://www.soumyadip.tech",
    githubUrl: "https://wwww.soumyadip.tech",
    category: "Web",
    featured: true,
    stats: {
      stars: 70,
      views: 2000,
      likes: 250
    }
  },
  {
    id: "4",
    title: "Geeti: Lyrics Generator",
    description: "An AI-powered lyrics generator tailored to your preferred genre, language, and song.",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732955344/bf101284-1145-42d1-a984-58e46da4f54f.png",
    technologies: ["Flutter", "Dart", "CMake", "Swift"],
    liveUrl: "https://github.com/AgnivaMaiti/Geeti",
    githubUrl: "https://github.com/AgnivaMaiti/Geeti",
    category: "Mobile App",
    featured: true,
    stats: {
      stars: 90,
      views: 3500,
      likes: 350
    }
  },
  {
    id: "5",
    title: "Tatvani",
    description: "A platform for creating and sharing blogs, story, poems, and more.",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732955677/6373954d-d25f-4852-b608-535c0cc1639e.png",
    technologies: ["Vite.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://tatvani-web.vercel.app",
    githubUrl: "https://tatvani-web.vercel.app",
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
    title: "Pacemakerz",
    description: "A platform that measure your heart rate and provide you with a detailed report.",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1732956373/60bf37b9-15fc-452c-a4ec-6f7ad75ab5ed.png",
    technologies: ["Flutter", "Dart", "CMake", "Swift"],
    liveUrl: "https://github.com/Aarshm26/Pacemakerz",
    githubUrl: "https://github.com/Aarshm26/Pacemakerz",
    category: "Mobile App",
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
        <FloatingNavbar />
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
      <ProjectCTA />
      <AcertimityFAQ />
      <Footer />
    </main>
  );
}
