import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Flask', 'Django', 'Go']
    },
    {
      title: 'AI & ML',
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'LangChain', 'Scikit-learn', 'NLTK']
    },
    {
      title: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical <span className="text-gradient">Stack</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="skill-category glass"
            >
              <h3>{category.title}</h3>
              <div className="skill-pills">
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      borderColor: 'var(--primary)',
                      color: 'var(--text-primary)'
                    }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
