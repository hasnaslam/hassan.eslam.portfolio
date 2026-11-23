import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import '../styles/hero.css';
import { useLang } from '../i18n.jsx';

const Particles = () => {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = useMemo(() => [...Array(reduce ? 0 : 12)].map(() => ({ s: Math.random() * 4 + 1, t: Math.random() * 100, l: Math.random() * 100, dy: -100 - Math.random() * 100, dx: Math.random() * 50 - 25, d: Math.random() * 10 + 10, de: Math.random() * 10 })), [reduce]);
  return (
    <div className="particles-container" aria-hidden="true">
      {items.map((p, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            width: p.s + 'px', height: p.s + 'px', top: p.t + '%', left: p.l + '%',
          }}
          animate={{
            y: [0, p.dy],
            x: p.dx,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            ease: "linear",
            delay: p.de,
          }}
        />
      ))}
    </div>
  );
};

const Hero = ({ onOpenResume }) => {
  const { t } = useLang();
  const h = t.hero;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="hero-section section" id="hero">
      <Particles />
      
      <motion.div style={{ y, opacity }} className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel hero-badge"
        >
          <span className="text-gradient-blue">{h.badge}</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="hero-greeting"
        >
          {h.hello}
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="hero-title"
        >
          {h.first} <span className="text-gradient-blue">{h.last}</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-roles"
        >
          {h.roles.map((r, i) => (<React.Fragment key={r}>{i > 0 && <span className="dot">•</span>} {r} </React.Fragment>))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hero-description"
        >
          {h.desc}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hero-buttons"
        >
          <button onClick={onOpenResume} className="btn btn-primary interactive group">
            <FileText size={20} className="icon-transition" />
            {h.resume}
          </button>
          <a href="#projects" className="btn btn-secondary interactive group">
            {h.projects}
            <ArrowRight size={20} className="icon-transition-right" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="scroll-indicator"
      >
        <span>{h.scroll}</span>
        <div className="scroll-line">
          <motion.div 
            className="scroll-dot"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
