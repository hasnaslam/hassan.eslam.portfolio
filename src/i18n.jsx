import React, { createContext, useContext, useEffect, useState } from 'react';

export const dict = {
  en: {
    skip: 'Skip to projects',
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', services: 'Services', contact: 'Contact', toggle: 'العربية', toggleLabel: 'Switch to Arabic' },
    hero: {
      badge: 'Visual Design & Motion', hello: "Hello, I'm", first: 'Hassan', last: 'Eslam',
      roles: ['Creative Designer', 'Brand Identity', 'Motion Graphics'],
      desc: 'I design brand identities, social media campaigns, advertising visuals and motion graphics, and I use AI tools as part of my production workflow.',
      resume: 'Resume', projects: 'View Projects', scroll: 'Scroll',
    },
    about: {
      title: 'About Me', sub: 'My professional journey', alt: 'Portrait of Hassan Eslam, creative designer',
      locTitle: 'Location', loc: 'Assiut, Egypt',
      headline: 'Turning ideas into meaningful visual stories.',
      p1: "I'm Hassan Eslam, a Creative Designer focused on visual identities and advertising design. My work covers brand identity, motion graphics, social media design, product advertising and AI-assisted creative production. I combine creativity, strategy and modern tools to build visuals that help brands connect with their audience.",
      p2: 'I care about clear ideas, attention to detail and a clean, modern finish in every project.',
    },
    skills: {
      title: 'Specializations & Skills', sub: 'My technical expertise',
      items: [
        ['Brand Identity', 'Crafting unique visual systems.'], ['Logo Design', 'Memorable and timeless marks.'],
        ['Motion Graphics', 'Bringing designs to life.'], ['Social Media', 'Engaging digital content.'],
        ['Advertising', 'Campaign and ad visuals.'], ['Creative Direction', 'Leading visual strategies.'],
        ['Visual Storytelling', 'Narrative-driven design.'], ['AI Production', 'Next-gen visual tools.'],
      ],
    },
    projects: {
      title: 'Featured Projects', sub: 'Selected work', view: 'View Project', cover: 'project cover',
      items: [
        ['Motion Graphics', 'A showcase of animated brand identities, bringing logos to life through motion graphics.'],
        ['Advertising', 'Visual identity and social media campaign for a fresh juice brand, including advertising creatives.'],
        ['Animation', 'Motion graphics designed for social media and advertising campaigns.'],
        ['Social Media', 'Social media advertising campaign and promotional materials for a food delivery service.'],
        ['Branding', 'Social media campaign for a dental clinic, focused on elegant typography, polished visuals and brand consistency.'],
        ['Video Production', 'A marketing and promotional video.'],
      ],
    },
    services: {
      title: 'What I Do', sub: 'My core services',
      items: [
        ['Brand Identity & Logo', 'Visual identities, logo systems and brand guidelines for startups and established businesses.'],
        ['Motion Graphics', 'Motion graphics for social media and commercial advertising.'],
        ['Advertising Campaign', 'Advertising design and product visualization.'],
        ['Social Media Design', 'Social media content and promotional materials for a range of industries.'],
      ],
      objTitle: 'Career Objective',
      obj: '"To create strong visual identities and advertising experiences that help brands stand out, through strategic creativity, careful design and AI-assisted production."',
    },
    contact: {
      title: 'Get In Touch', sub: "Let's work together", head: "Let's talk about your next project",
      text: 'Currently available for freelance opportunities and new projects.', loc: 'Assiut, Egypt',
      name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Message on WhatsApp',
      hello: "Hello Hassan, I'm", subjectLbl: 'Subject',
      be: 'Behance profile', fb: 'Facebook profile', wa: 'WhatsApp',
    },
    modal: {
      label: 'Resume', role: 'CREATIVE DESIGNER', who: 'Who I Am',
      whoText: 'I create visual work that helps brands stand out and connect with their audience through thoughtful design and modern tools.',
      skills: 'Skills', skillList: ['Brand Identity Design', 'Logo Design', 'Social Media Design', 'Advertising Design', 'Motion Graphics', 'Visual Storytelling'],
      tools: 'Tools', style: 'Work Style', styleList: ['Strategic Thinking', 'Clean & Modern', 'Detail Oriented', 'Deadline Driven'],
      contact: 'Contact', close: 'Close',
    },
    title: 'Hassan Eslam | Graphic & Motion Graphics Designer in Egypt',
    desc: 'Portfolio of Hassan Eslam, a graphic and motion graphics designer in Assiut, Egypt. Brand identity, social media campaigns, advertising and motion graphics.',
  },
  ar: {
    skip: 'انتقل إلى المشاريع',
    nav: { about: 'من أنا', skills: 'المهارات', projects: 'الأعمال', services: 'الخدمات', contact: 'تواصل', toggle: 'English', toggleLabel: 'التبديل إلى الإنجليزية' },
    hero: {
      badge: 'تصميم بصري وموشن', hello: 'أهلًا، أنا', first: 'حسن', last: 'إسلام',
      roles: ['مصمم إبداعي', 'هوية بصرية', 'موشن جرافيك'],
      desc: 'أصمم هويات بصرية وحملات سوشيال ميديا ومواد إعلانية وموشن جرافيك، وأستخدم أدوات الذكاء الاصطناعي ضمن مراحل الإنتاج.',
      resume: 'السيرة الذاتية', projects: 'شاهد الأعمال', scroll: 'مرر',
    },
    about: {
      title: 'من أنا', sub: 'رحلتي المهنية', alt: 'صورة حسن إسلام، مصمم إبداعي',
      locTitle: 'الموقع', loc: 'أسيوط، مصر',
      headline: 'أحوّل الأفكار إلى قصص بصرية ذات معنى.',
      p1: 'أنا حسن إسلام، مصمم إبداعي أركز على الهويات البصرية والتصميم الإعلاني. يشمل عملي الهوية البصرية والموشن جرافيك وتصميم السوشيال ميديا والإعلانات للمنتجات والإنتاج الإبداعي بمساعدة الذكاء الاصطناعي. أجمع بين الإبداع والاستراتيجية والأدوات الحديثة لأقدم تصاميم تساعد العلامات التجارية على التواصل مع جمهورها.',
      p2: 'أهتم بوضوح الفكرة والتفاصيل ولمسة نهائية نظيفة وعصرية في كل مشروع.',
    },
    skills: {
      title: 'التخصصات والمهارات', sub: 'خبراتي التقنية',
      items: [
        ['الهوية البصرية', 'بناء أنظمة بصرية مميزة.'], ['تصميم الشعارات', 'علامات لا تُنسى.'],
        ['موشن جرافيك', 'إحياء التصاميم بالحركة.'], ['سوشيال ميديا', 'محتوى رقمي جذاب.'],
        ['الإعلانات', 'تصاميم الحملات والإعلانات.'], ['الإدارة الإبداعية', 'قيادة التوجه البصري.'],
        ['السرد البصري', 'تصميم قائم على الحكاية.'], ['الإنتاج بالذكاء الاصطناعي', 'أدوات بصرية حديثة.'],
      ],
    },
    projects: {
      title: 'أبرز الأعمال', sub: 'أعمال مختارة', view: 'عرض المشروع', cover: 'غلاف المشروع',
      items: [
        ['موشن جرافيك', 'عرض لهويات بصرية متحركة تُظهر الشعارات بالحركة.'],
        ['إعلانات', 'هوية بصرية وحملة سوشيال ميديا لعلامة عصائر طازجة، تشمل التصاميم الإعلانية.'],
        ['رسوم متحركة', 'موشن جرافيك لحملات السوشيال ميديا والإعلانات.'],
        ['سوشيال ميديا', 'حملة إعلانية على السوشيال ميديا ومواد ترويجية لخدمة توصيل طعام.'],
        ['هوية بصرية', 'حملة سوشيال ميديا لعيادة أسنان، بتركيز على الخطوط الأنيقة والاتساق البصري.'],
        ['إنتاج فيديو', 'فيديو تسويقي وترويجي.'],
      ],
    },
    services: {
      title: 'ماذا أقدم', sub: 'خدماتي الأساسية',
      items: [
        ['الهوية البصرية والشعارات', 'هويات بصرية وأنظمة شعارات ودلائل استخدام للشركات الناشئة والقائمة.'],
        ['موشن جرافيك', 'موشن جرافيك للسوشيال ميديا والإعلانات التجارية.'],
        ['الحملات الإعلانية', 'تصميم إعلاني وتجسيد بصري للمنتجات.'],
        ['تصميم السوشيال ميديا', 'محتوى ومواد ترويجية للسوشيال ميديا في مجالات متنوعة.'],
      ],
      objTitle: 'الهدف المهني',
      obj: '"أن أصنع هويات بصرية وتجارب إعلانية قوية تساعد العلامات على التميز، بإبداع استراتيجي وتصميم دقيق وإنتاج مدعوم بالذكاء الاصطناعي."',
    },
    contact: {
      title: 'تواصل معي', sub: 'لنعمل معًا', head: 'لنتحدث عن مشروعك القادم',
      text: 'متاح حاليًا للعمل الحر والمشاريع الجديدة.', loc: 'أسيوط، مصر',
      name: 'الاسم', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', send: 'راسلني على واتساب',
      hello: 'مرحبًا حسن، أنا', subjectLbl: 'الموضوع',
      be: 'صفحتي على بيهانس', fb: 'صفحتي على فيسبوك', wa: 'واتساب',
    },
    modal: {
      label: 'السيرة الذاتية', role: 'مصمم إبداعي', who: 'من أنا',
      whoText: 'أصنع أعمالًا بصرية تساعد العلامات على التميز والتواصل مع جمهورها عبر تصميم مدروس وأدوات حديثة.',
      skills: 'المهارات', skillList: ['تصميم الهوية البصرية', 'تصميم الشعارات', 'تصميم السوشيال ميديا', 'التصميم الإعلاني', 'موشن جرافيك', 'السرد البصري'],
      tools: 'الأدوات', style: 'أسلوب العمل', styleList: ['تفكير استراتيجي', 'نظيف وعصري', 'اهتمام بالتفاصيل', 'التزام بالمواعيد'],
      contact: 'التواصل', close: 'إغلاق',
    },
    title: 'حسن إسلام | مصمم جرافيك وموشن جرافيك في مصر',
    desc: 'معرض أعمال حسن إسلام، مصمم جرافيك وموشن جرافيك في أسيوط، مصر. هوية بصرية، حملات سوشيال ميديا، إعلانات وموشن جرافيك.',
  },
};

const Ctx = createContext({ lang: 'en', t: dict.en, toggle: () => {} });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'ar' || q === 'en') return q;
      return localStorage.getItem('lang') === 'ar' ? 'ar' : 'en';
    } catch { return 'en'; }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = dict[lang].title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', dict[lang].desc);
    try { localStorage.setItem('lang', lang); } catch { /* storage unavailable */ }
  }, [lang]);
  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));
  return <Ctx.Provider value={{ lang, t: dict[lang], toggle }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);
