import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import '../styles/projects.css';
import { useLang } from '../i18n.jsx';

const projectsData = [
  {
    title: 'Logo Motion Reel 2025',
    image: 'img/Logo Motion Reel 2025.webp',
    link: 'https://www.behance.net/gallery/232436101/Logo-Motion-Reel-2025-Animated-Brand-Identities',
  },
  {
    title: 'Juice Ads Campaign',
    image: 'img/Juice Ads Campaign.webp',
    link: 'https://www.behance.net/gallery/160257979/Juice-Ads-Campaign',
  },
  {
    title: 'Motion Graphic',
    image: 'img/Motion Graphic.webp',
    link: 'https://www.behance.net/gallery/173491673/Motion-Graphic-',
  },
  {
    title: 'Food Delivery Campaign',
    image: 'img/Food Delivery Campaign.webp',
    link: 'https://www.behance.net/gallery/244156813/-Food-Delivery-Campaign',
  },
  {
    title: 'Luxury Dental Campaign',
    image: 'img/Luxury Dental Campaign.webp',
    link: 'https://www.behance.net/gallery/247586163/Luxury-Dental-Social-Media-Campaign',
  },
  {
    title: 'Marketing Video',
    image: 'img/Marketing Video.webp',
    link: 'https://www.behance.net/gallery/147901493/Marketing-video',
  }
];

const Projects = () => {
  const { t } = useLang();
  const p = t.projects;
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
          <h2 className="section-title">{p.title}</h2>
          <span className="section-subtitle">{p.sub}</span>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((base, index) => {
            const project = { ...base, category: p.items[index][0], description: p.items[index][1] };
            return (
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
                <img src={project.image} alt={`${project.title} (${project.category}) ${p.cover}`} className="project-img" loading="lazy" decoding="async" />
                <div className="project-overlay">
                  <div className="project-view-btn">
                    <span>{p.view}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
