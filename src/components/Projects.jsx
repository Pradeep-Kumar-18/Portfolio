import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HEMO AI",
      description: "A specialized AI-powered application developed for hemoglobin analysis and health monitoring, serving as a comprehensive final year project.",
      tags: ["React", "AI/ML", "HealthTech", "Vercel"],
      link: "https://finalyr-project.vercel.app/"
    },
    {
      id: 2,
      title: "Aptitude Test Portal",
      description: "A robust digital examination platform designed for aptitude testing, featuring a seamless user interface for test-taking and evaluation.",
      tags: ["React", "Web App", "Education", "Vercel"],
      link: "https://aptitude-flax.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="project-card reveal-scale"
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
