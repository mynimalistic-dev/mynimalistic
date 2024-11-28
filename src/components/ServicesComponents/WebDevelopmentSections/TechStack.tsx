import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode,
  Paintbrush,
  FileJson,
  Blocks,
  LayoutGrid,
  Box,
  Layers,
  Server,
  Database,
  Workflow,
  KeyRound,
  Globe,
  Cpu
} from 'lucide-react';

export const TechStack = () => {
  const frontendTech = [
    { 
      name: "HTML5", 
      icon: Globe, 
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20" 
    },
    { 
      name: "CSS3", 
      icon: Paintbrush, 
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"  
    },
    { 
      name: "JavaScript", 
      icon: FileCode, 
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"  
    },
    { 
      name: "TypeScript", 
      icon: Code2, 
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20"  
    },
    { 
      name: "React.js", 
      icon: Blocks, 
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20"  
    },
    { 
      name: "Next.js", 
      icon: Box, 
      color: "text-white",
      bgColor: "bg-white/5",
      borderColor: "border-white/10"  
    },
    { 
      name: "Vue.js", 
      icon: Layers, 
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"  
    },
    { 
      name: "Tailwind CSS", 
      icon: LayoutGrid, 
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20"  
    }
  ];

  const backendTech = [
    { 
      name: "Node.js", 
      icon: Server, 
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"  
    },
    { 
      name: "Express.js", 
      icon: Workflow, 
      color: "text-gray-300",
      bgColor: "bg-gray-300/10",
      borderColor: "border-gray-300/20"  
    },
    { 
      name: "MongoDB", 
      icon: Database, 
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"  
    },
    { 
      name: "MySQL", 
      icon: Database, 
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"  
    },
    { 
      name: "REST APIs", 
      icon: FileJson, 
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"  
    },
    { 
      name: "GraphQL", 
      icon: Blocks, 
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"  
    },
    { 
      name: "PHP", 
      icon: FileCode, 
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"  
    },
    { 
      name: "CodeIgniter", 
      icon: Cpu, 
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"  
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-20"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Our Technology Stack
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-blue-400 to-transparent" />
          <Code2 className="w-5 h-5 text-blue-400" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-blue-400 to-transparent" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Frontend Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <LayoutGrid className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Frontend Technologies
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontendTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-4 hover:scale-105 transition-all duration-300 hover:border-blue-400/30">
                  <div className="flex items-center gap-3">
                    <tech.icon className="text-2xl text-blue-400" />
                    <span className="text-blue-200/80 group-hover:text-blue-100 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Server className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Backend Technologies
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {backendTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-4 hover:scale-105 transition-all duration-300 hover:border-blue-400/30">
                  <div className="flex items-center gap-3">
                    <tech.icon className="text-2xl text-blue-400" />
                    <span className="text-blue-200/80 group-hover:text-blue-100 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 