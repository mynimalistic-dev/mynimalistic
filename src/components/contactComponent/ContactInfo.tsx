"use client";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaTumblr } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContactInfoItem } from "./type";
import { motion } from "framer-motion";

const contactInfo: ContactInfoItem[] = [
  {
    icon: <FiMail className="w-7 h-7" />,
    title: "Email Us",
    details: ["hello@company.com", "24/7 Online Support"],
  },
  {
    icon: <FiPhone className="w-7 h-7" />,
    title: "Call Us",
    details: ["+91 9876543210", "Available 24/7"],
  },
  {
    icon: <FiGithub className="w-7 h-7" />,
    title: "Open Source",
    details: ["github.com/yourcompany", "Check Our Latest Projects"],
  }
];

const socialLinks = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    url: "https://github.com/yourcompany",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    url: "https://linkedin.com/company/yourcompany",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter className="w-5 h-5" />,
    url: "https://x.com/yourcompany",
    label: "X (Twitter)",
  },
  {
    icon: <FiInstagram className="w-5 h-5" />,
    url: "https://instagram.com/yourcompany",
    label: "Instagram",
  },
  {
    icon: <FaTumblr className="w-5 h-5" />,
    url: "https://yourcompany.tumblr.com",
    label: "Tumblr",
  }
];

export const ContactInfo = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl 
                          blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 rounded-3xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-800 dark:border-slate-800 
                          backdrop-blur-sm hover:border-slate-800 dark:hover:border-slate-700 transition-colors duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                             text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 
                             transition-colors duration-300">
                  {info.title}
                </h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300 
                                        transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Media Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center space-y-6"
      >
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Connect With Us</h3>
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-100/50 dark:bg-slate-900/50 border border-slate-800 dark:border-slate-800 
                       hover:border-slate-800 dark:hover:border-slate-700 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300
                       text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {social.icon}
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}; 