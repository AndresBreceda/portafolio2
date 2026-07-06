import MX from 'country-flag-icons/react/3x2/MX';
import US from 'country-flag-icons/react/3x2/US';

function Navbar({ t, theme, setTheme, lang, setLang, menuOpen, setMenuOpen, activeSection, scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-lg dark:shadow-black/50 transition-colors duration-300">
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <div
          onClick={() => scrollToSection('home')}
          className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface cursor-pointer hover:text-primary transition-colors"
        >
          {t.nav.name}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-xl">
          <button
            onClick={() => scrollToSection('home')}
            className={`font-label-md text-label-md transition-colors pb-1 cursor-pointer ${
              activeSection === 'home'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`font-label-md text-label-md transition-colors pb-1 cursor-pointer ${
              activeSection === 'skills'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {t.nav.skills}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`font-label-md text-label-md transition-colors pb-1 cursor-pointer ${
              activeSection === 'projects'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {t.nav.projects}
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`font-label-md text-label-md transition-colors pb-1 cursor-pointer ${
              activeSection === 'experience'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {t.nav.experience}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-surface-container transition-all cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-on-surface-variant hover:bg-surface-container-highest/50 border border-outline-variant/30 hover:text-primary transition-all duration-300 px-md py-xs rounded-lg font-label-md text-label-md cursor-pointer flex items-center gap-xs"
          >
            {lang === 'es' ? <MX className="w-5 rounded-sm" /> : <US className="w-5 rounded-sm" />}
            <span>{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex md:hidden items-center gap-md">
          {/* Theme Toggle Mobile */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-on-surface-variant p-2 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile Language Selector */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-on-surface-variant font-semibold text-sm px-2 py-1 rounded border border-outline-variant/30 cursor-pointer flex items-center gap-1"
          >
            {lang === 'es' ? <MX className="w-4 rounded-sm" /> : <US className="w-4 rounded-sm" />}
            <span>{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary p-2 cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-outline-variant/20 flex flex-col p-lg gap-md shadow-2xl transition-colors duration-300">
          <button
            onClick={() => scrollToSection('home')}
            className={`font-label-md text-label-md text-left py-sm ${activeSection === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`font-label-md text-label-md text-left py-sm ${activeSection === 'skills' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            {t.nav.skills}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`font-label-md text-label-md text-left py-sm ${activeSection === 'projects' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            {t.nav.projects}
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`font-label-md text-label-md text-left py-sm ${activeSection === 'experience' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            {t.nav.experience}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
