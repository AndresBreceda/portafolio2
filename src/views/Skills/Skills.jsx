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
          {/* Docker */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/js.svg" alt="Javascript" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">Javascript</h4>
              <span className="bg-secondary/10 border border-secondary/20 text-secondary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">FullStack</span>
            </div>
          </div>

          {/* JS */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/html.svg" alt="HTML" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">HTML</h4>
              <span className="bg-primary/10 border border-primary/20 text-primary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Frontend</span>
            </div>
          </div>

          {/* React */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/react.svg" alt="React" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">React</h4>
              <span className="bg-primary/10 border border-primary/20 text-primary px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Frontend</span>
            </div>
          </div>

          {/* Python */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/python.svg" alt="Python" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">Python</h4>
              <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Data/AI</span>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/csharp.svg" alt="C#" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">C#</h4>
              <span className="bg-red-500/10 border border-red-500/20 text-red-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Backend</span>
            </div>
          </div>

          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/mongo.svg" alt="MongoDB" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">Mongo DB</h4>
              <span className="bg-orange-500/10 border border-orange-500/20 text-orange-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">NoSql DB</span>
            </div>
          </div>

          {/* JS */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/Postgrest.svg" alt="PostgreSQL" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">PostgreSQL</h4>
              <span className="bg-orange-500/10 border border-orange-500/20 text-orange-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">SQL DB</span>
            </div>
          </div>

          {/* React */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/docker.svg" alt="Docker" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">Docker</h4>
              <span className="bg-pink-500/10 border border-pink-500/20 text-pink-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">DevOps</span>
            </div>
          </div>

          {/* Python */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/linux.svg" alt="Linux" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">Linux</h4>
              <span className="bg-green-500/10 border border-green-500/20 text-green-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Sys Admin</span>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="glass-card p-xl rounded-xl flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src="/github.svg" alt="GitHub" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-bold mb-2">GitHub</h4>
              <span className="bg-gray-500/10 border border-gray-500/20 text-gray-500 px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Version Control</span>
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
