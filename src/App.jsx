import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useLang } from './i18n.jsx';
import Nav from './components/Nav';
import Services from './components/Services';
import Contact from './components/Contact';
const ResumeModal = lazy(() => import('./components/ResumeModal'));

function useResumeLoaded(open) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { if (open) setLoaded(true); }, [open]);
  return loaded;
}

function App() {
  const { t } = useLang();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeLoaded = useResumeLoaded(isResumeOpen);

  return (
    <>
      <a href="#projects" className="skip-link">{t.skip}</a>
      <div className="noise-overlay"></div>
      <div className="bg-gradient"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <CustomCursor />
      <Nav />
      
      <main id="main">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      {resumeLoaded && <Suspense fallback={null}><ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} /></Suspense>}
    </>
  );
}

export default App;
