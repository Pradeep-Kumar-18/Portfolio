import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
          >
            <Sparkles size={16} className="sparkle-icon" />
            <span>Available for new projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences</span> that <br />
            Define the Future.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-description"
          >
            I'm a full-stack developer specializing in building exceptional digital products. 
            From AI-driven applications to high-performance SaaS platforms, I turn 
            complex ideas into seamless user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-btns"
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download="Pradeep_Kumar_Resume.pdf">
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-visual"
        >
          <div className="visual-card glass">
            <div className="card-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="path">/portfolio/home.js</div>
            </div>
            <div className="card-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123; <br />
                  &nbsp;&nbsp;name: <span className="code-string">'Pradeep Kumar'</span>, <br />
                  &nbsp;&nbsp;role: <span className="code-string">'Full Stack Developer'</span>, <br />
                  &nbsp;&nbsp;focus: <span className="code-string">'AI & SaaS Architecture'</span>, <br />
                  &nbsp;&nbsp;passion: <span className="code-string">'Clean Code & UX'</span> <br />
                  &#125;;
                </code>
              </pre>
            </div>
            <div className="floating-elements">
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-grid-pattern"></div>
    </section>
  );
};

export default Hero;
