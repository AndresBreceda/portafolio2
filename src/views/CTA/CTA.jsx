function CTA({ t, scrollToSection }) {
  return (
    <section className="py-xxl px-gutter">
      <div className="max-w-container-max mx-auto glass-card p-xxl rounded-[32px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 star-gradient opacity-10 blur-[80px] -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-xl text-center md:text-left">
          <div className="space-y-sm">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg font-bold text-on-surface">
              {t.cta.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t.cta.subtitle}
            </p>
          </div>
          <button
            onClick={() => scrollToSection('experience')}
            className="star-gradient text-white px-xl py-md rounded-xl font-label-md text-label-md font-bold whitespace-nowrap active:scale-95 transition-all shadow-xl hover:shadow-primary/30 cursor-pointer"
          >
            {t.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
