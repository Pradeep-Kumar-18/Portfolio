import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Code, Zap } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: '10+', icon: <Layers size={24} /> },
    { label: 'Technologies Mastered', value: '10+', icon: <Code size={24} /> },
    { label: 'AI Integrations', value: '10+', icon: <Zap size={24} /> },
    { label: 'Global Reach', value: '5K+', icon: <Globe size={24} /> },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="stat-card glass"
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
