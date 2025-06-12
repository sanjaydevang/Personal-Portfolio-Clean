'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium">The George Washington University</h4>
                  <p className="text-gray-600 dark:text-gray-300">Master of Science, Information Systems Technology</p>
                  <p className="text-gray-500 dark:text-gray-400">GPA: 3.9 | Expected December 2025</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Visvesvaraya Technological University</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bachelor of Technology, Computer Science and Engineering</p>
                  <p className="text-gray-500 dark:text-gray-400">September 2018</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Experienced Technical Analyst with a strong background in cloud computing, automation, and full-stack development.
                Proven track record in improving system efficiency and reducing downtime through innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Cloud Computing', 'Python', 'JavaScript', 'DevOps', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 