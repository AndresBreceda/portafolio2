function Projects({ t }) {
  return (
    <section id="projects" className="py-xxl px-gutter max-w-container-max mx-auto space-y-xxl">
      <header className="max-w-3xl space-y-md">
        <h2 className="font-display-lg text-4xl md:text-display-lg text-primary font-bold">
          {t.projects.title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {t.projects.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        {/* Project 1: Quantum Lexis Engine */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              src="./logipack.jpeg"
              alt="Logipack"
            ></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
            <div className="absolute top-md right-md">
              <span className="bg-primary/20 text-primary border border-primary/30 px-sm py-1 rounded-lg font-label-sm text-label-sm backdrop-blur-md font-bold">
                {t.projects.featured}
              </span>
            </div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">React</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">C#</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Mongo DB</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project1.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project1.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">

              <a href="https://github.com/AndresBreceda/Sistema-de-paqueteria" target="_blank" rel="noopener noreferrer" className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                {t.projects.github}
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: LinguaMetrics */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              src="./primera-plus.jpeg"
              alt="Primera Plus"
            ></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">API Rest</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Tailwind CSS</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold font-semibold">JavaScript</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project2.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project2.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">
              <a href="https://primera-plus.netlify.app/" target="_blank" className="star-gradient text-white px-lg py-sm rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  {t.projects.try}
                </a>
              <button className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                {t.projects.github}
              </button>
            </div>
          </div>
        </div>

        {/* Project 3: CloudNexus API */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              src="./Servidor.jpg"
              alt="Home Lab"
            ></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">DCHP</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">VLAN</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">TCP/IP</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project3.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project3.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">
              <button className="star-gradient text-white px-lg py-sm rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">dns</span>
                {t.projects.doc}
              </button>
            </div>
          </div>
        </div>

        {/* Project 4: Synthetix AI Helper */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              src="./carros.jpeg"
              alt="Naorobi"
            ></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Vite</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">OAuth </span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Node.js</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project4.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project4.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">
              <a href="https://github.com/AndresBreceda/Carros" target="_blank" rel="noopener noreferrer" className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                {t.projects.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
