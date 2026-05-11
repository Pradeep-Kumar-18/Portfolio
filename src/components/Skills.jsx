import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Python", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "Vercel/Netlify", level: 85 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI Design", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Accessibility", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal">Technical Expertise</h2>
        <div className="skills-wrapper">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
