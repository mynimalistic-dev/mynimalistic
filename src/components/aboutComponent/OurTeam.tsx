'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from './type';

const teamMembers: TeamMember[] = [
  {
    name: "Agniva Maity",
    role: "CEO",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1733089921/96b645d9-4341-419e-85cc-2cf60f3fa338.png",
    bio: "",
    social: {
      twitter: "",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/"
    }
  },
  {
    name: "Aarsh Muley",
    role: "CTO",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1733090097/e52c52da-14f5-4e8b-ab0e-cf479185b499.png",
    bio: "",
    social: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/"
    }
  },
  {
    name: "Shivam",
    role: "COO",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1733210315/6cace281-39d6-4ae0-b940-c044813d0b89.png",
    bio: "",
    social: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/"
    }
  },
  {
    name: "Soumyadip Maity",
    role: "Web Lead",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1733090861/soumyadipmaity_uwc6jg_oxokhw.svg",
    bio: "",
    social: {
      linkedin: "https://www.linkedin.com/in/soumyadip-maity-a77b41282/",
      github: "https://github.com/soumyadipmaity1",
    }
  },
  {
    name: "Abhay Rathore",
    role: "App Lead",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1733128802/ee764e19-1934-46cc-b39a-ef1df992b2ae.png",
    bio: "",
    social: {
      github: "https://github.com/appcreatorabhay",
      linkedin: "https://www.linkedin.com/in/abhay-rathore-74b409286/"
    }
  }, 
  {
    name: "Neeladri",
    role: "Non-tech Manager",
    image: "https://res.cloudinary.com/drwdoxbls/image/upload/v1733208994/3f0dc6b6-4e32-4112-8916-0ac45ef2b7ed.png",
    bio: "",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/"
    }
  }
];


export const OurTeam = () => {
  return (
      <div className="py-24 px-4 relative overflow-hidden">
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-blue-300/30 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-cyan-300/30 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-full mix-blend-multiply blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Our Amazing Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
              Meet the Experts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate innovators committed to transforming your digital vision into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Container with Glass Effect */}
                <div className="relative bg-white/80 dark:bg-black/50 backdrop-blur-xl rounded-2xl 
                  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-gray-200/50 dark:border-white/10">
                  
                  {/* Image Container */}
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-900/20 dark:to-blue-900/20 z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  </div>
                  
                  {/* Content Container */}
                  <div className="relative p-6 bg-gradient-to-b from-white/80 to-white/95 
                    dark:from-black/80 dark:to-black/95 -mt-12 z-30">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" 
                             className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400
                             transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                             className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500
                             transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                             className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                             transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                       
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default OurTeam; 