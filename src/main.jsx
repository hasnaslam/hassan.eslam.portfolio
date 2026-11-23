import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LangProvider } from './i18n.jsx'
import './styles/globals.css'
// Smooth scrolling loads after the page is interactive, so it does not delay first paint.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const start = () => import('lenis').then(({ default: Lenis }) => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical' })
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  })
  window.addEventListener('load', () => (window.requestIdleCallback ? requestIdleCallback(start) : setTimeout(start, 500)), { once: true })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider><App /></LangProvider>
  </React.StrictMode>,
)
