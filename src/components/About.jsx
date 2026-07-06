import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/about.css';

const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  React.useEffect(() => {
    if (!isInView) return;
    
    let start = from;
    const increment = (to - from) / (duration * 60);
    
    const animate = () => {
      start += increment;
      if (start < to) {
        if (nodeRef.current) nodeRef.current.textContent = Math.floor(start) + suffix;
        requestAnimationFrame(animate);
      } else {
        if (nodeRef.current) nodeRef.current.textContent = to + suffix;
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, from, to, duration, suffix]);

  return <span ref={nodeRef} className="counter-value">{from}{suffix}</span>;
};

const About = () => {
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
          <h2 className="section-title">About Me</h2>
          <span className="section-subtitle">My professional journey</span>
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
              <img src="img/profile.jpg" alt="Hassan Eslam" className="about-img" />
              <div className="image-overlay"></div>
            </div>
            <div className="about-location glass-panel">
              <div className="location-dot"></div>
              <div>
                <p className="location-title">Location</p>
                <p className="location-text">Assiut, Egypt</p>
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
            <h3 className="about-headline">Turning ideas into meaningful visual stories.</h3>
            
            <p className="about-text">
              I'm Hassan Eslam, a Creative Designer passionate about building impactful visual identities and advertising experiences. My expertise spans brand identity, motion graphics, social media design, product advertising, and AI-assisted creative production. I combine creativity, strategy, and modern technologies to develop visuals that strengthen brands, increase engagement, and deliver measurable business value.
            </p>
            <p className="about-text">
              Every project is driven by thoughtful design, attention to detail, and a commitment to creating premium, modern, and memorable visual solutions that leave a lasting impression.
            </p>

            <div className="stats-grid">
              <div className="stat-card glass-panel">
                <Counter to={8} suffix="+" />
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-card glass-panel">
                <Counter to={100} suffix="+" />
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-card glass-panel">
                <Counter to={50} suffix="+" />
                <p className="stat-label">Satisfied Clients</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
