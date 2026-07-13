function Hero({ t, scrollToSection }) {
  return (
    <section id="home" className="relative pt-xxl pb-xxl px-gutter max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-xxl min-h-[calc(100vh-80px)]">
      <div className="w-full md:w-1/2 space-y-xl z-10">
        <div className="space-y-md">
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-display-lg star-gradient-text leading-tight font-extrabold">
            {t.hero.greeting}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem] leading-relaxed">
            {t.hero.description.split('Universidad Cuauhtémoc')[0]}
            <span className="text-primary font-semibold">Universidad Cuauhtémoc</span>
            {t.hero.description.split('Universidad Cuauhtémoc')[1]}
          </p>
        </div>

        <div className="flex flex-wrap gap-md">
          <button
            onClick={() => scrollToSection('projects')}
            className="star-gradient text-white dark:text-on-primary-fixed px-xl py-md rounded-xl font-label-md text-label-md font-bold active:scale-95 transition-all shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            {t.hero.viewProjects}
          </button>
          <a
            href="mailto:a.e.breceda@gmail.com"
            className="bg-transparent border border-outline-variant/40 hover:border-primary/60 text-on-surface px-xl py-md rounded-xl font-label-md text-label-md font-bold active:scale-95 transition-all cursor-pointer"
          >
            {t.hero.contact}
          </a>
        </div>

        <div className="flex items-center gap-md pt-md">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-primary">terminal</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-secondary">translate</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-tertiary">palette</span>
            </div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant italic">
            {t.hero.experienceText}
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="feature-card-border overflow-hidden rounded-3xl shadow-2xl">
          <img
            className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            src="./Foto.JPG"
            alt="Workspace"
          />
        </div>

        {/* Interactive Floating Indicator */}
        <div className="absolute -bottom-6 -left-6 bg-surface dark:bg-surface/80 border border-outline-variant/20 backdrop-blur-xl p-md rounded-xl shadow-2xl hidden lg:block border-primary/20 animate-bounce-subtle">
          <div className="flex items-center gap-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-label-sm text-label-sm text-on-surface font-medium">
              {t.hero.available}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
