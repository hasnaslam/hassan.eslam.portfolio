import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, Video, Aperture, Wand2, MonitorPlay, Zap, LayoutTemplate } from 'lucide-react';
import '../styles/skills.css';
import { useLang } from '../i18n.jsx';

const skillIcons = [Palette, LayoutTemplate, Video, MonitorPlay, Zap, PenTool, Aperture, Wand2];

const Skills = () => {
  const { t } = useLang();
  const skillsData = t.skills.items.map(([title, desc], i) => ({ icon: skillIcons[i], title, desc }));
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-title-wrap text-center"
        >
          <h2 className="section-title">{t.skills.title}</h2>
          <span className="section-subtitle">{t.skills.sub}</span>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card glass-panel interactive"
              >
                <div className="skill-icon-wrapper">
                  <Icon size={28} className="skill-icon" />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
