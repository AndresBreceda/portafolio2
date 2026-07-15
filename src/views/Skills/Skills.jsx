function Skills({ t }) {
  return (
    <section id="skills" className="py-xxl px-gutter max-w-container-max mx-auto space-y-xxl">
      <div className="text-center space-y-md">
        <h2 className="font-display-lg text-4xl md:text-display-lg star-gradient-text font-bold">
          {t.skills.title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Technical Skills Bento Grid */}
      <div className="space-y-xl">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
          <h3 className="font-headline-lg text-headline-lg font-bold">{t.skills.technical}</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-lg">
          {/* C# */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md feature-card-border">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold">C#</h4>
              <span className="bg-primary/10 border border-primary/20 text-primary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Backend</span>
            </div>
          </div>

          {/* JS */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>javascript</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold">JavaScript</h4>
              <span className="bg-secondary/10 border border-secondary/20 text-secondary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Fullstack</span>
            </div>
          </div>

          {/* React */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>widgets</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold">React</h4>
              <span className="bg-primary/10 border border-primary/20 text-primary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Frontend</span>
            </div>
          </div>

          {/* Python */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold">Python</h4>
              <span className="bg-secondary/10 border border-secondary/20 text-secondary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold font-semibold">Data/AI</span>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold">PostgreSQL</h4>
              <span className="bg-primary/10 border border-primary/20 text-primary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">SQL DB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="space-y-xl">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary text-3xl">translate</span>
          <h3 className="font-headline-lg text-headline-lg font-bold">{t.skills.languages}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Spanish */}
          <div className="glass-card p-lg rounded-xl flex items-center gap-xl">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-surface-container-high">
              <img src="/flags/mx.svg" alt="Bandera de México" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-sm">
              <h4 className="font-headline-md text-headline-md font-bold">Español</h4>
              <p className="font-label-md text-label-md text-primary font-bold">{t.skills.langNative}</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-normal">{t.skills.langSpDesc}</p>
            </div>
          </div>

          {/* English */}
          <div className="glass-card p-lg rounded-xl flex items-center gap-xl">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-surface-container-high">
              <img src="/flags/us.svg" alt="Bandera de Estados Unidos" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-sm">
              <h4 className="font-headline-md text-headline-md font-bold">Inglés C1</h4>
              <p className="font-label-md text-label-md text-secondary font-bold">{t.skills.langToefl}</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-normal">{t.skills.langEnDesc}</p>
            </div>
          </div>

          {/* Portuguese */}
          <div className="glass-card p-lg rounded-xl flex items-center gap-xl">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-surface-container-high">
              <img src="/flags/br.svg" alt="Bandera de Brasil" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-sm">
              <h4 className="font-headline-md text-headline-md font-bold">Portugués C1</h4>
              <p className="font-label-md text-label-md text-primary font-bold">{t.skills.langCelpe}</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-normal">{t.skills.langPtDesc}</p>
            </div>
          </div>

          {/* French */}
          <div className="glass-card p-lg rounded-xl flex items-center gap-xl">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-surface-container-high">
              <img src="/flags/fr.svg" alt="Bandera de Francia" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-sm">
              <h4 className="font-headline-md text-headline-md font-bold">Francés B1</h4>
              <p className="font-label-md text-label-md text-on-surface-variant font-bold">{t.skills.langIntermediate}</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-normal">{t.skills.langFrDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ethereal Mindset Banner */}
      <div className="w-full h-64 glass-card rounded-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 via-secondary-container/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center p-xl">
          <div className="text-center space-y-sm">
            <img src="/logo_sin_fondo.svg" alt="Logo" className="h-20 w-auto mx-auto animate-pulse" />
            <h4 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface font-bold">
              {t.skills.visualTitle}
            </h4>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-semibold">
              {t.skills.visualSubtitle}
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      </div>
    </section>
  );
}

export default Skills;
