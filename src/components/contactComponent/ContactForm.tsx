import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formEle = e.target as HTMLFormElement;
    const formData = new FormData(formEle);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby6GFzwGYlBwExoIntk8WopQHhAPSVS_Z0UKebOspxMACQZaG1c6jRcXKELXQH9js-J/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        formEle.reset();
        toast.success('Message sent successfully!', {
          style: {
            border: '1px solid #38bdf8',
            padding: '16px',
            color: '#38bdf8',
            background: '#020617',
            zIndex: 9999999,
          },
          iconTheme: {
            primary: '#38bdf8',
            secondary: '#020617',
          },
        });
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        style: {
          border: '1px solid #ff4b4b',
          padding: '16px',
          color: '#ff4b4b',
          background: '#020617',
          zIndex: 9999999,
        },
        iconTheme: {
          primary: '#ff4b4b',
          secondary: '#020617',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#020617] text-gray-900 dark:text-gray-100">
      <Toaster position="bottom-right" reverseOrder={false} containerStyle={{ zIndex: 10000000 }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-5xl font-extrabold text-center mb-16"
        >
          Let's <span className="text-[#0387ca] dark:text-[#38bdf8]">talk.</span>
        </motion.h2>

        <motion.form
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="block w-full px-4 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#1a358d] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="block w-full px-4 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#1a358d] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
              required
            />
          </div>
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            className="block w-full px-4 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#1a358d] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
            required
          />
          <textarea
            name="Message"
            placeholder="Message"
            rows={5}
            className="block w-full px-4 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#1a358d] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 text-white bg-[#0387ca] dark:bg-[#38bdf8] rounded-md hover:bg-[#026396] dark:hover:bg-[#0387ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0387ca] dark:focus:ring-[#38bdf8] transition duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <span className="mr-2">Send</span>
                <BsArrowRight className="text-lg" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
