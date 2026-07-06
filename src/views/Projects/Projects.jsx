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
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBj8kV6nMBKhRjORcolvCQ4aLMrCTGJ2a2L5qC0BtOeE4EUPRsuSfaY_r5zGzRHpyySt6HZVLWcFDBVHs1U1NSg80MkDfR9j2pOjQ48jP9N2VgbG98KaO9yi5bnqwp_jtI7k_7j5wX3u5WPh-kxWGOp2n-vzTXONwYlPJIJiqhvVTAmsk9hdYdPA-5K5iaAs2NH1dYdnz6_B0jlBAUS6VT1an-ZO6VRi8i6hOlfgdqfRUbE4lJzkCO')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
            <div className="absolute top-md right-md">
              <span className="bg-primary/20 text-primary border border-primary/30 px-sm py-1 rounded-lg font-label-sm text-label-sm backdrop-blur-md font-bold">
                {t.projects.featured}
              </span>
            </div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Rust</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">WebAssembly</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">NLP</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project1.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project1.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">
              <button className="star-gradient text-white px-lg py-sm rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                {t.projects.demo}
              </button>
              <button className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                {t.projects.github}
              </button>
            </div>
          </div>
        </div>

        {/* Project 2: LinguaMetrics */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcTzx_pX0N8Uo_zlrT6oYT_yfiScAmgc7Pc16RzT7zn5dwSxMCywjhU4KzX1dKdMWpSdz7esThyNDfP8V4Ky7cDA9LpXaJREE-AkNBVdHXMzqYihjIRKcN8zCuMWn3E1wf3FvG24sAg8En3cc6w5IWsfUzLP59pq1t5mJuIOba4-BZ7waRRm9BgEmk-WiUTHe8RbDaJBNL8p6WYLmRtAbyikNZV0o9Q6Y56En-Vml008i-m9rcmn-2')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Python</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">TensorFlow</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold font-semibold">D3.js</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project2.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project2.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">
              <button className="star-gradient text-white px-lg py-sm rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">visibility</span>
                {t.projects.demo}
              </button>
              <button className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                {t.projects.github}
              </button>
            </div>
          </div>
        </div>

        {/* Project 3: CloudNexus API */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnoOZxKxZPpI0YoZQOrztSKGtVuvPmPLeLZIqcJpkwEK7TDTCZ-Irr44C5knYGsLd-NDb88qSwZ0T4OAlV_F8RkT95nrCyYoA4ORkBQ4MJUQEis7u69mk34VCaH3eKyTdrh1AQq8H-k2xnUn2CYqhBhVLJThxzJfDG5VNL89S9N_-pWmHiYCTgzzP4KaCUc0125TWpg3hF7e4BDtPDTLtSg6PQaqtpcbhqSdkoe2dYzvxjC1BljOez')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Go</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">gRPC</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Kubernetes</span>
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
              <button className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                {t.projects.github}
              </button>
            </div>
          </div>
        </div>

        {/* Project 4: Synthetix AI Helper */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSfXCyqEq9cELU5f0I8DUefEFLxWrHd31VdjS0LcSUmhgLSN4mcqCzpDjAlDMTUnRJJe1oo2z_6iWC6p7enlrnZ2idOlSFOLsVWKw5te0--hzMV0bRVQlZCIKYIB6J30i8BIUiOqe4kjicxS0o6IR_1sIDHKtWpC8q4zVyQZsr_U2_OgcABklz2rYgY4ACgewAhN5vHc2wYL6zsHl4AdlMPre1LQHBoRdPpMDZwufg-jaRkfiSw98C')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent opacity-60"></div>
          </div>
          <div className="p-lg flex flex-col flex-grow space-y-md">
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">TypeScript</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">OpenAI API</span>
              <span className="bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm px-sm py-0.5 rounded-full font-semibold">Next.js</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {t.projects.project4.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {t.projects.project4.desc}
            </p>
            <div className="flex flex-wrap items-center gap-md pt-md border-t border-outline-variant/20">
              <button className="star-gradient text-white px-lg py-sm rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                {t.projects.try}
              </button>
              <button className="border border-outline-variant text-on-surface hover:bg-surface-container-highest/50 px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center gap-xs cursor-pointer font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                {t.projects.github}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
