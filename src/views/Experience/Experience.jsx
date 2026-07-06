function Experience({ t }) {
  return (
    <section id="experience" className="py-xxl px-gutter max-w-container-max mx-auto space-y-xxl">
      <div className="space-y-md">
        <p className="font-label-md text-label-md text-primary tracking-widest uppercase font-bold">
          {t.experience.tag}
        </p>
        <h2 className="font-display-lg text-4xl md:text-display-lg text-on-background font-extrabold">
          {t.experience.title}
        </h2>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {t.experience.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-xxl relative">
        {/* Left Vertical Line Column */}
        <aside className="relative hidden lg:block">
          <div className="sticky top-32 flex flex-col items-center">
            <div className="w-[2px] h-[550px] bg-outline-variant/30 absolute top-4 left-1/2 -translate-x-1/2"></div>
            <div className="flex flex-col gap-[155px] relative z-10">
              {/* Node 1 */}
              <div className="w-10 h-10 rounded-full star-gradient flex items-center justify-center shadow-[0_0_15px_rgba(173,198,255,0.4)]">
                <span className="material-symbols-outlined text-white text-[20px]">code</span>
              </div>
              {/* Node 2 */}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant shadow-md">
                <span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
              </div>
              {/* Node 3 */}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant shadow-md">
                <span className="material-symbols-outlined text-primary text-[20px]">translate</span>
              </div>
              {/* Node 4 */}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant shadow-md">
                <span className="material-symbols-outlined text-primary text-[20px]">school</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Cards List */}
        <div className="flex flex-col gap-xl">
          {/* Job 1 */}
          <article className="glass-card star-gradient-border p-lg rounded-xl transform transition-transform hover:scale-[1.01] duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-sm">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t.experience.job1.title}</h3>
                <p className="font-label-md text-label-md text-primary font-bold">
                  {t.experience.job1.company} • {t.experience.job1.period}
                </p>
              </div>
              <span className="px-md py-sm bg-primary/10 border border-primary/20 rounded-full text-primary font-label-sm text-label-sm font-bold">
                {t.experience.current}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-lg">
              {t.experience.job1.desc}
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">React.js</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Node.js</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">PostgreSQL</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">REST APIs</span>
            </div>
          </article>

          {/* Job 2 */}
          <article className="glass-card p-lg rounded-xl transform transition-transform hover:scale-[1.01] duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-sm">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t.experience.job2.title}</h3>
                <p className="font-label-md text-label-md text-secondary font-bold">
                  {t.experience.job2.company} • {t.experience.job2.period}
                </p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-lg">
              {t.experience.job2.desc}
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Python</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Automation</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">IT Service Mgmt</span>
            </div>
          </article>

          {/* Job 3 */}
          <article className="glass-card p-lg rounded-xl transform transition-transform hover:scale-[1.01] duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-sm">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t.experience.job3.title}</h3>
                <p className="font-label-md text-label-md text-secondary font-bold">
                  {t.experience.job3.company} • {t.experience.job3.period}
                </p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-lg">
              {t.experience.job3.desc}
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Linguistics</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Leadership</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Pedagogy</span>
            </div>
          </article>

          {/* Education */}
          <article className="glass-card p-lg rounded-xl bg-primary-container/5 border-dashed border-primary/30 flex items-center gap-md">
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-2xl">school</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t.experience.education.title}</h3>
              <p className="font-label-md text-label-md text-primary font-semibold">{t.experience.education.school}</p>
            </div>
          </article>
        </div>
      </div>

      {/* Interactive Skills Ecosystem Sub-Grid */}
      <div className="mt-xxl">
        <h2 className="font-headline-lg text-headline-lg text-on-background font-bold mb-xl text-center">
          {t.experience.ecosystem}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">

          {/* Technical Core */}
          <div className="glass-card p-lg rounded-xl group hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl mb-md">terminal</span>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-md">
              {t.experience.devCore}
            </h4>
            <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-center gap-sm">
                <div className="w-1.5 h-1.5 rounded-full star-gradient"></div>
                JavaScript / TypeScript
              </li>
              <li className="flex items-center gap-sm">
                <div className="w-1.5 h-1.5 rounded-full star-gradient"></div>
                Python (Backend)
              </li>
              <li className="flex items-center gap-sm">
                <div className="w-1.5 h-1.5 rounded-full star-gradient"></div>
                React &amp; Next.js Eco
              </li>
            </ul>
          </div>

          {/* Data & Cloud */}
          <div className="glass-card p-lg rounded-xl group hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl mb-md">database</span>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-md">
              {t.experience.dataCloud}
            </h4>
            <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-center gap-sm">
                <div className="w-1.5 h-1.5 rounded-full star-gradient"></div>
                PostgreSQL &amp; MongoDB
              </li>
              <li className="flex items-center gap-sm">
                <div className="w-1.5 h-1.5 rounded-full star-gradient"></div>
                Docker Containers
              </li>
              <li className="flex items-center gap-sm">
                <div className="w-1.5 h-1.5 rounded-full star-gradient"></div>
                gRPC &amp; Microservices
              </li>
            </ul>
          </div>

          {/* Language Proficiency */}
          <div className="glass-card p-lg rounded-xl col-span-1 md:col-span-2 space-y-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-3xl">language</span>
              <h4 className="font-label-md text-label-md text-on-surface font-bold">
                {t.experience.domains}
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg pt-sm">
              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-xs">
                  <span>Español</span>
                  <span className="font-bold">{t.experience.current}</span>
                </div>
                <div className="h-1 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full star-gradient w-[100%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-xs">
                  <span>Inglés</span>
                  <span className="font-bold">C1 / {t.experience.advanced}</span>
                </div>
                <div className="h-1 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full star-gradient w-[92%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-xs">
                  <span>Portugués</span>
                  <span className="font-bold">C1 / {t.experience.advanced}</span>
                </div>
                <div className="h-1 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full star-gradient w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
