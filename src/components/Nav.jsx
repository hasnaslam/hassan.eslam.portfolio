import React from 'react';
import { useLang } from '../i18n.jsx';

const Nav = () => {
  const { t, toggle } = useLang();
  const n = t.nav;
  const links = [[n.about, '#about'], [n.skills, '#skills'], [n.projects, '#projects'], [n.services, '#services'], [n.contact, '#contact']];
  return (
    <header className="site-nav">
      <a href="#hero" className="site-nav-brand">{t.hero.first} {t.hero.last}</a>
      <nav aria-label="Primary">
        <ul>
          {links.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
          <li><button type="button" className="lang-toggle" onClick={toggle} aria-label={n.toggleLabel}>{n.toggle}</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
