import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Mail, MapPin, Globe, Beaker, Layers, Palette, MonitorPlay, Focus, CheckCircle, Target, Clock, Trophy } from 'lucide-react';
import '../styles/modal.css';
import { useLang } from '../i18n.jsx';

const ResumeModal = ({ isOpen, onClose }) => {
  const { t } = useLang();
  const m = t.modal;
  const h = t.hero;
  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
  }, [isOpen]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      filter: 'blur(10px)',
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div role="dialog" aria-modal="true" aria-label={m.label}
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <div className="modal-scroll-container">
            <motion.div 
              className="modal-content glass-panel"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button className="modal-close interactive" onClick={onClose}>
                <X size={24} />
              </button>

              <div className="modal-body">
                {/* Header Profile Section */}
                <div className="modal-header">
                  <div className="modal-portrait-wrapper">
                    <img src="img/profile.webp" alt={t.about.alt} className="modal-portrait" />
                    <div className="portrait-scanner"></div>
                  </div>
                  <div className="modal-title-area">
                    <motion.h1 
                      variants={contentVariants}
                      transition={{ delay: 0.2 }}
                      className="modal-name"
                    >
                      {h.first.toUpperCase()} <span className="text-gradient-blue">{h.last.toUpperCase()}</span>
                    </motion.h1>
                    <motion.p 
                      variants={contentVariants}
                      transition={{ delay: 0.3 }}
                      className="modal-role text-gradient"
                    >
                      {m.role}
                    </motion.p>
                  </div>
                </div>

                <div className="modal-grid">
                  {/* Left Column */}
                  <div className="modal-col">
                    <motion.div variants={contentVariants} transition={{ delay: 0.4 }} className="modal-card">
                      <h3 className="modal-card-title"><Focus size={18} className="mr-2" /> {m.who}</h3>
                      <p className="modal-text">{m.whoText}</p>
                    </motion.div>

                    <motion.div variants={contentVariants} transition={{ delay: 0.5 }} className="modal-card">
                      <h3 className="modal-card-title"><Palette size={18} className="mr-2" /> {m.skills}</h3>
                      <ul className="modal-list">{m.skillList.map((x) => <li key={x}>{x}</li>)}</ul>
                    </motion.div>

                    <motion.div variants={contentVariants} transition={{ delay: 0.6 }} className="modal-card">
                      <h3 className="modal-card-title"><Layers size={18} className="mr-2" /> {m.tools}</h3>
                      <div className="tools-grid">
                        <div className="tool-badge">Ps</div>
                        <div className="tool-badge ai">Ai</div>
                        <div className="tool-badge ae">Ae</div>
                        <div className="tool-badge pr">Pr</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div className="modal-col">

                    <motion.div variants={contentVariants} transition={{ delay: 0.5 }} className="modal-card">
                      <h3 className="modal-card-title"><Target size={18} className="mr-2" /> {m.style}</h3>
                      <ul className="modal-list-grid">{m.styleList.map((x) => <li key={x}><CheckCircle size={14} className="text-blue-500 mr-2 inline" /> {x}</li>)}</ul>
                    </motion.div>
                    
                    <motion.div variants={contentVariants} transition={{ delay: 0.6 }} className="modal-card">
                      <h3 className="modal-card-title"><Mail size={18} className="mr-2" /> {m.contact}</h3>
                      <div className="modal-contact-links">
                        <a href="mailto:hasneslamhasn@gmail.com" className="modal-link">hasneslamhasn@gmail.com</a>
                        <a href="tel:+201033879807" className="modal-link">+20 103 387 9807</a>
                        <a href="https://behance.net/HassanEslam70" target="_blank" rel="noreferrer" className="modal-link">Behance</a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div 
                  variants={contentVariants} 
                  transition={{ delay: 0.7 }}
                  className="modal-footer"
                >
                  <button className="btn btn-secondary interactive" onClick={onClose}>
                    {m.close}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
