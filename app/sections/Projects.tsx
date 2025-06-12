'use client';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Loyalty, Rewards, and Referral System",
      description: "Designed and implemented a comprehensive loyalty and referral program for GW University Store",
      technologies: ["SQL", "Scrum", "Database Design"],
      achievements: [
        "Created tiered loyalty program with increasing rewards",
        "Developed SQL workflow for efficient data management",
        "Implemented Scrum methodologies for iterative development"
      ]
    },
    {
      title: "Food Insecurity Analysis in DMV",
      description: "Machine learning project analyzing food insecurity patterns in the DMV region",
      technologies: ["Python", "Machine Learning", "Data Visualization"],
      achievements: [
        "Applied K-means clustering for socioeconomic profiling",
        "Implemented linear regression and decision trees",
        "Created advanced data visualizations for insights"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.achievements.map((achievement, i) => (
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

export default Projects; 