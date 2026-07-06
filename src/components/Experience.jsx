import React from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';

const experienceData = [
  {
    role: 'Creative Designer',
    company: 'Freelance',
    period: 'Present',
    description: 'Developed premium brand identities for multiple businesses. Produced advertising campaigns across various industries. Designed high-performing social media content and motion graphics.',
  },
  {
    role: 'Graphic & Motion Graphics Designer',
    company: 'Agency',
    period: 'Previous',
    description: 'Worked on branding, advertising, and digital marketing projects, creating visual systems, campaign assets, and engaging motion graphics tailored for social media and commercial advertising.',
  },
  {
    role: 'Brand Identity Designer',
    company: 'Studio',
    period: 'Past',
    description: 'Specialized in creating complete visual identities, logo systems, brand guidelines, packaging concepts, and marketing materials for startups and established businesses.',
  }
];

const Experience = () => {
  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-title-wrap text-center"
        >
          <h2 className="section-title">Professional Experience</h2>
          <span className="section-subtitle">My career path</span>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
