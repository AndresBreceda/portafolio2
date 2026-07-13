import { useState } from 'react';

function Experience({ t }) {
  const [selected, setSelected] = useState('job2');

  const nodeClass = (key) =>
    `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
      selected === key
        ? 'star-gradient shadow-[0_0_15px_rgba(173,198,255,0.4)]'
        : 'bg-surface-container border-2 border-outline-variant shadow-md'
    }`;

  const iconClass = (key) =>
    `material-symbols-outlined text-[20px] ${selected === key ? 'text-white' : 'text-primary'}`;

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
              <div className={nodeClass('job2')}>
                <span className={iconClass('job2')}>Terminal</span>
              </div>
              {/* Node 2 */}
              <div className={nodeClass('job1')}>
                <span className={iconClass('job1')}>Code</span>
              </div>
              {/* Node 3 */}
              <div className={nodeClass('job3')}>
                <span className={iconClass('job3')}>translate</span>
              </div>
              {/* Node 4 */}
              <div className={nodeClass('education')}>
                <span className={iconClass('education')}>school</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Cards List */}
        <div className="flex flex-col gap-xl">


          {/* Job 2 */}
          <article
            onClick={() => setSelected('job2')}
            className="glass-card p-lg rounded-xl transform transition-transform hover:scale-[1.01] duration-300 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-sm">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t.experience.job2.title}</h3>
                <p className="font-label-md text-label-md text-secondary font-bold">
                  {t.experience.job2.company} • {t.experience.job2.period}
                </p>
              </div>
              <span className="px-md py-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400 font-label-sm text-label-sm font-bold">
                {t.experience.current}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-lg">
              {t.experience.job2.desc}
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="px-md py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full border  border-yellow-500/20 rounded-full text-yellow-600 dark:text-yellow-400  text-[12px] font-semibold">Python</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Automation</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">IT Service Mgmt</span>
            </div>
          </article>

          {/* Job 1 */}
          <article
            onClick={() => setSelected('job1')}
            className="glass-card star-gradient-border p-lg rounded-xl transform transition-transform hover:scale-[1.01] duration-300 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-sm">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t.experience.job1.title}</h3>
                <p className="font-label-md text-label-md text-primary font-bold">
                  {t.experience.job1.company} • {t.experience.job1.period}
                </p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-lg">
              {t.experience.job1.desc}
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="px-md py-1 bg-blue-500/10 border border-blue-500/20 rounded-full border  border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400  text-[12px] font-semibold">React.js</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Node.js</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">PostgreSQL</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">REST APIs</span>
            </div>
          </article>

          {/* Job 3 */}
          <article
            onClick={() => setSelected('job3')}
            className="glass-card p-lg rounded-xl transform transition-transform hover:scale-[1.01] duration-300 cursor-pointer"
          >
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
              <span className="px-md py-1 bg-green-500/10 border border-green-500/20 rounded-full border  border-green-500/20 rounded-full text-green-600 dark:text-green-400  text-[12px] font-semibold">Linguistics</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Leadership</span>
              <span className="px-md py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant text-[12px] font-semibold">Pedagogy</span>
            </div>
          </article>

          {/* Education */}
          <article
            onClick={() => setSelected('education')}
            className="glass-card p-lg rounded-xl bg-primary-container/5 border-dashed border-primary/30 flex items-center gap-md cursor-pointer"
          >
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

    </section>
  );
}

export default Experience;
