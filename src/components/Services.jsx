import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import '../styles/services.css';
import { useLang } from '../i18n.jsx';

const Services = () => {
  const { t } = useLang();
  const v = t.services;
  return (
    <>
      <section className="services-section section" id="services">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="section-title-wrap text-center"
          >
            <h2 className="section-title">{v.title}</h2>
            <span className="section-subtitle">{v.sub}</span>
          </motion.div>

          <div className="services-grid">
            {v.items.map(([title, desc], index) => { const service = { title, desc, delay: index * 0.1 }; return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="service-card glass-panel"
              >
                <div className="service-number">0{index + 1}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="objective-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="objective-content glass-panel"
          >
            <Quote size={40} className="quote-icon" />
            <h2 className="objective-title">{v.objTitle}</h2>
            <p className="objective-text">{v.obj}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
