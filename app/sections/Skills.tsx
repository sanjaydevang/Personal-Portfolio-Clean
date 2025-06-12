'use client';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: ["Python", "HTML/CSS", "JavaScript", "C", "Shell Scripting", "Bash"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Splunk", "ServiceNow", "JIRA", "Apache Spark", "GIT", "Linux", "VS Code"]
    },
    {
      title: "Databases & Platforms",
      skills: ["MySQL", "Oracle Database", "Salesforce", "GCP"]
    },
    {
      title: "Core Skills",
      skills: ["Performance Optimization", "Automation Scripting", "Machine Learning", "Serverless Architecture", "Containerization", "ITIL", "SDLC"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 