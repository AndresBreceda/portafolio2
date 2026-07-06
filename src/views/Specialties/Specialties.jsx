function Specialties({ t }) {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto">
      <div className="text-center mb-xxl">
        <h2 className="font-headline-lg text-headline-lg mb-md text-on-surface font-bold">
          {t.specialties.title}
        </h2>
        <div className="w-24 h-1 star-gradient mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Fullstack Card */}
        <div className="feature-card-border p-xl rounded-3xl group hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl star-gradient flex items-center justify-center mb-lg shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white dark:text-on-primary-fixed">stack</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-md font-bold">{t.specialties.fullstackTitle}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
            {t.specialties.fullstackDesc}
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-sm py-1 bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm rounded-full font-semibold">React</span>
            <span className="px-sm py-1 bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm rounded-full font-semibold">TypeScript</span>
            <span className="px-sm py-1 bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm rounded-full font-semibold">Docker</span>
          </div>
        </div>

        {/* Language Master Card */}
        <div className="feature-card-border p-xl rounded-3xl group hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-lg shadow-lg shadow-secondary/20">
            <span className="material-symbols-outlined text-white">language</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-md font-bold">{t.specialties.languageTitle}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
            {t.specialties.languageDesc}
          </p>
          <div className="flex items-center gap-md">
            <div className="flex-1 h-1 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full star-gradient w-[95%]"></div>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-bold">C2 Level</span>
          </div>
        </div>

        {/* UI/UX Design Card */}
        <div className="feature-card-border p-xl rounded-3xl group hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-lg shadow-lg shadow-tertiary/10">
            <span className="material-symbols-outlined text-tertiary">draw</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-md font-bold">{t.specialties.uiuxTitle}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
            {t.specialties.uiuxDesc}
          </p>
          <div className="flex gap-sm">
            <span className="w-6 h-6 rounded-full bg-[#3B82F6] opacity-40 shadow-sm"></span>
            <span className="w-6 h-6 rounded-full bg-[#A855F7] opacity-40 shadow-sm"></span>
            <span className="w-6 h-6 rounded-full bg-surface border border-outline shadow-sm"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialties;
