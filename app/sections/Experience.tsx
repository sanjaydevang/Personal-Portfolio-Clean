'use client';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Sabre Corporation",
      role: "Technical Analyst",
      period: "June 2022 – January 2024",
      location: "Bangalore, India",
      achievements: [
        "Developed new performance metrics and analytical tools, achieving 90% SLA compliance",
        "Designed AWS solutions using EC2, S3, EBS, ELB, improving deployment success rate by 20%",
        "Maintained 99.9% uptime for all applications in Linux environment",
        "Reduced incident resolution time by 30% through effective management"
      ]
    },
    {
      company: "London Stock Exchange",
      role: "Associate Application Engineer",
      period: "January 2019 – May 2022",
      location: "Bangalore, India",
      achievements: [
        "Reduced downtime by 40% through effective application support",
        "Implemented ITIL best practices, reducing system downtime by 25%",
        "Enhanced knowledge base, reducing support tickets by 25%",
        "Increased production speed by 25% through innovative changes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.company}</h3>
                    <p className="text-blue-600">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                    <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 