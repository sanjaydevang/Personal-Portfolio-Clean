'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/sanjayvdevang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin className="text-4xl text-blue-600 mb-4" />
              <span className="text-lg font-medium">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <FaEnvelope className="text-4xl text-blue-600 mb-4" />
              <span className="text-lg font-medium">Email</span>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-lg font-medium">Resume</span>
            </motion.a>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            I&apos;m currently pursuing my Master&apos;s at The George Washington University and am open to new opportunities.
            Feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 