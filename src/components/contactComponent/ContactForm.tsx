"use client";
import { useState } from "react";
import { ContactFormData } from "./type";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-slate-800 dark:border-slate-800
                     text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500
                     focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                     transition-colors duration-200`;

  return (
    <div className="w-full max-w-3xl mx-auto bg-slate-100/50 dark:bg-slate-900/50 border border-slate-800 dark:border-slate-800 rounded-xl p-8">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Send us a message</h2>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <input
              id="name"
              type="text"
              required
              className={inputClasses}
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <input
              id="email"
              type="email"
              required
              className={inputClasses}
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <input
            id="subject"
            type="text"
            required
            className={inputClasses}
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            required
            rows={5}
            className={inputClasses}
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 
                   text-black dark:text-white font-medium transition-colors duration-200"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}; 