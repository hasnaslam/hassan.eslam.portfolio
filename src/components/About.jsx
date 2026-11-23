import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import { useLang } from '../i18n.jsx';

const About = () => {
  const { t } = useLang();
  const a = t.about;
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-title-wrap text-center"
        >
          <h2 className="section-title">{a.title}</h2>
          <span className="section-subtitle">{a.sub}</span>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper glass-panel"
          >
            <div className="image-inner">
              <img src="img/profile.webp" alt={a.alt} width="600" height="600" loading="lazy" decoding="async" className="about-img" />
              <div className="image-overlay"></div>
            </div>
            <div className="about-location glass-panel">
              <div className="location-dot"></div>
              <div>
                <p className="location-title">{a.locTitle}</p>
                <p className="location-text">{a.loc}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-content"
          >
            <h3 className="about-headline">{a.headline}</h3>
            
            <p className="about-text">{a.p1}</p>
            <p className="about-text">{a.p2}</p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
