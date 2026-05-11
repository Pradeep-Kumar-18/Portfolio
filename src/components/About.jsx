import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, Cpu, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Target className="highlight-icon" />,
      title: 'Problem Solver',
      desc: 'Expert in dissecting complex challenges and architecting efficient, scalable solutions.'
    },
    {
      icon: <Cpu className="highlight-icon" />,
      title: 'AI Enthusiast',
      desc: 'Passionate about integrating machine learning models to build intelligent user experiences.'
    },
    {
      icon: <Code2 className="highlight-icon" />,
      title: 'Clean Architect',
      desc: 'Committed to writing maintainable, well-documented code following modern design patterns.'
    },
    {
      icon: <Rocket className="highlight-icon" />,
      title: 'Continuous Learner',
      desc: 'Always exploring the latest technologies to stay at the forefront of digital innovation.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text-card glass"
          >
            <h3>Full Stack Innovation</h3>
            <p>
              I am a dedicated Full Stack Developer with a strong foundation in computer science and a passion
              for creating impactful digital products. My expertise lies in building robust backends,
              interactive frontends, and seamlessly integrating AI capabilities.
            </p>
            <p>
              With experience ranging from agile startups to complex enterprise-level projects,
              I bring a unique perspective to every development cycle—prioritizing performance,
              security, and user-centric design above all else.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
            </div>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="highlight-card glass"
              >
                <div className="highlight-icon-wrapper">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
