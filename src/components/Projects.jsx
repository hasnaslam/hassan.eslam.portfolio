import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import '../styles/projects.css';

const projectsData = [
  {
    title: 'Logo Motion Reel 2025',
    category: 'Motion Graphics',
    image: 'img/Logo Motion Reel 2025.jpg',
    link: 'https://www.behance.net/gallery/232436101/Logo-Motion-Reel-2025-Animated-Brand-Identities',
    description: 'A showcase of animated brand identities, bringing logos to life through premium and cinematic motion graphics.'
  },
  {
    title: 'Juice Ads Campaign',
    category: 'Advertising',
    image: 'img/Juice Ads Campaign.jpg',
    link: 'https://www.behance.net/gallery/160257979/Juice-Ads-Campaign',
    description: 'Complete visual identity and social media campaign for a fresh juice brand, including advertising creatives and marketing visuals.'
  },
  {
    title: 'Motion Graphic',
    category: 'Animation',
    image: 'img/Motion Graphic.jpg',
    link: 'https://www.behance.net/gallery/173491673/Motion-Graphic-',
    description: 'Engaging and dynamic motion graphics designed for social media and commercial advertising campaigns.'
  },
  {
    title: 'Food Delivery Campaign',
    category: 'Social Media',
    image: 'img/Food Delivery Campaign.jpg',
    link: 'https://www.behance.net/gallery/244156813/-Food-Delivery-Campaign',
    description: 'Creative social media advertising campaign and promotional materials tailored for a modern food delivery service.'
  },
  {
    title: 'Luxury Dental Campaign',
    category: 'Branding',
    image: 'img/Luxury Dental Campaign.jpg',
    link: 'https://www.behance.net/gallery/247586163/Luxury-Dental-Social-Media-Campaign',
    description: 'Premium social media campaign for a luxury dental clinic, focusing on elegant typography, high-end visuals, and brand consistency.'
  },
  {
    title: 'Marketing Video',
    category: 'Video Production',
    image: 'img/Marketing Video.jpg',
    link: 'https://www.behance.net/gallery/147901493/Marketing-video',
    description: 'A high-performing marketing and promotional video designed to increase engagement and deliver measurable business value.'
  }
];

const Projects = () => {
  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-title-wrap text-center"
        >
          <h2 className="section-title">Featured Projects</h2>
          <span className="section-subtitle">My recent premium works</span>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              className="project-card glass-panel interactive"
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-view-btn">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
