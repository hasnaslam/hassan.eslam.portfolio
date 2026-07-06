import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import '../styles/services.css';

const Services = () => {
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
            <h2 className="section-title">What I Do</h2>
            <span className="section-subtitle">My core services</span>
          </motion.div>

          <div className="services-grid">
            {[
              { title: 'Brand Identity & Logo', desc: 'Crafting complete visual identities, logo systems, and brand guidelines for startups and established businesses.', delay: 0 },
              { title: 'Motion Graphics', desc: 'Producing engaging motion graphics tailored for social media and commercial advertising.', delay: 0.1 },
              { title: 'Advertising Campaign', desc: 'High-end advertising design and product visualization delivering measurable business value.', delay: 0.2 },
              { title: 'Social Media Design', desc: 'Designing high-performing social media content and promotional materials for various industries.', delay: 0.3 }
            ].map((service, index) => (
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
            ))}
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
            <h2 className="objective-title">Career Objective</h2>
            <p className="objective-text">
              "To craft world-class visual identities and advertising experiences that empower brands to stand out in competitive markets through strategic creativity, premium design, and innovative AI-powered production."
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
