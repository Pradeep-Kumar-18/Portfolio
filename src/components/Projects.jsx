import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Brain, Shield, Zap } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 'hemoai',
      title: 'HemoAI - Intelligent Diagnostics',
      featured: true,
      desc: 'A revolutionary healthcare platform utilizing sequential AI models to predict hemoglobin levels with clinical-grade accuracy. Built with a robust production-stable architecture.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'Python', 'Flask', 'TensorFlow', 'Redis'],
      features: ['Sequential AI inference', 'Global request queuing', 'Real-time diagnostic dashboard'],
      github: 'https://github.com/Pradeep-Kumar-18',
      live: 'https://finalyr-project.vercel.app/'
    },
    {
      id: 'aptitude',
      title: 'Aptitude Portal',
      featured: false,
      desc: 'A comprehensive evaluation system for educational institutions with real-time proctoring and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
      features: ['Automated grading', 'Live activity monitoring', 'Dynamic question generation'],
      github: 'https://github.com/Pradeep-Kumar-18',
      live: 'https://aptitude-flax.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Selected <span className="text-gradient">Work</span>
        </motion.h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`project-card glass ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer" className="action-btn"><Github size={20} /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="action-btn"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <ul className="project-features">
                  {project.features.map(feat => (
                    <li key={feat}><ArrowRight size={14} className="feat-icon" /> {feat}</li>
                  ))}
                </ul>

                <div className="project-footer">
                  <a href={project.github} className="btn btn-outline">Learn More</a>
                  {project.featured && (
                    <div className="featured-badge">
                      <Brain size={16} /> Featured Project
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
