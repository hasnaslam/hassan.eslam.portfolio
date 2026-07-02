document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    // Active Navigation Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };
    
    window.addEventListener('scroll', scrollActive);

    // Form Submission (Prevent Default for Demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sent Successfully! <i class="fa-solid fa-check"></i>';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.color = 'white';
            
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 3000);
        });
    }

    // ================= PREMIUM FEATURES JS =================

    // 1. Scroll Progress Bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress-container');
    progressBar.innerHTML = '<div class="scroll-progress-bar" id="scroll-progress-bar"></div>';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scroll-progress-bar').style.width = scrolled + '%';
    });

    // 2. Custom Cursor & Magnetic Buttons
    if (window.innerWidth >= 1024) {
        const cursorDot = document.createElement('div');
        cursorDot.classList.add('cursor-dot');
        const cursorOutline = document.createElement('div');
        cursorOutline.classList.add('cursor-outline');
        
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

            cursorOutline.animate({
                left: `${mouseX}px`,
                top: `${mouseY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover Effect
        const hoverElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skills-content');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
        });

        // Magnetic Buttons using GSAP
        const magneticButtons = document.querySelectorAll('.btn, .social-link, .lang-toggle, .theme-toggle, .nav-toggle');
        
        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const h = rect.width / 2;
                const v = rect.height / 2;
                
                const x = e.clientX - rect.left - h;
                const y = e.clientY - rect.top - v;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }

    // 3. Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP with Lenis
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 4. GSAP ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade-up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    ScrollTrigger.create({
        start: "top -50",
        onUpdate: (self) => {
            if (self.direction === 1) { // Scrolling down
                header.classList.add('scroll-header');
            } else if (self.scroll() <= 50) {
                header.classList.remove('scroll-header');
            }
        }
    });

    // 5. Particles.js Initialization
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#d4af37" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "bubble" },
                    "onclick": { "enable": false },
                    "resize": true
                },
                "modes": {
                    "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.8, "speed": 3 }
                }
            },
            "retina_detect": true
        });
    }

});

// 6. Preloader Cinematic Transition
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Wait 1.5s for premium feeling, then animate out
        setTimeout(() => {
            gsap.to(preloader, {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut",
                onComplete: () => {
                    preloader.style.display = 'none';
                }
            });

            // Animate Hero Content Immediately After Preloader
            const tl = gsap.timeline();
            tl.from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
              .from(".hero-titles", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
              .from(".hero-description", { opacity: 0, duration: 0.8 }, "-=0.4")
              .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");

        }, 1500);
    }
});
