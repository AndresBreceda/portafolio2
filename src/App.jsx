import { useState, useEffect } from 'react';
import { translations } from './translations';
import Navbar from './views/Navbar/Navbar';
import Hero from './views/Hero/Hero';
import Specialties from './views/Specialties/Specialties';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import Experience from './views/Experience/Experience';
import CTA from './views/CTA/CTA';
import Footer from './views/Footer/Footer';

function App() {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[lang];

  // Theme Sync effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Mouse move effect for nebula background glows
  useEffect(() => {
    const handleMouseMove = (e) => {
      const primaryGlow = document.querySelector('.nebula-primary');
      const secondaryGlow = document.querySelector('.nebula-secondary');

      const moveX = (e.clientX / window.innerWidth - 0.5) * 40;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 40;

      if (primaryGlow) {
        primaryGlow.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      if (secondaryGlow) {
        secondaryGlow.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Section observer to set active link
  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'experience'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen text-on-surface bg-background select-none font-sans relative overflow-x-hidden transition-colors duration-300">

      {/* Background Glows */}
      <div className="nebula-glow nebula-primary"></div>
      <div className="nebula-glow nebula-secondary"></div>

      <Navbar
        t={t}
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="pt-20">
        <Hero t={t} scrollToSection={scrollToSection} />
        <Specialties t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <CTA t={t} scrollToSection={scrollToSection} />
      </main>

      <Footer t={t} scrollToSection={scrollToSection} />

    </div>
  );
}

export default App;
