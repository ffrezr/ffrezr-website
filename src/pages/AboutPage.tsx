import { profile, skills, experiences, education, certifications, heroImage } from '../data/profile'

export default function AboutPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-24 pt-40 space-y-32">
      {/* Personal Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-tight font-headline font-light tracking-tight text-primary">
            {profile.tagline}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
            {profile.summary}
          </p>
          <div className="pt-8">
            <span className="inline-block px-4 py-2 rounded-full bg-surface-container-low text-secondary font-label text-xs tracking-widest uppercase">
              {profile.role}
            </span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-sm bg-surface-container-low overflow-hidden relative shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
            <img
              alt="Professional portrait"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-16 bg-surface-container-low rounded-xl px-8 lg:px-16 -mx-8 lg:-mx-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-headline font-light text-primary tracking-tight">
              Technical Arsenal
            </h2>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-label uppercase tracking-widest text-secondary mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3 text-on-surface-variant">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-headline font-light text-primary tracking-tight mb-16">
          Professional Journey
        </h2>
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.company} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3">
                <span className="text-sm font-label uppercase tracking-widest text-secondary">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9 space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-2xl font-headline font-bold text-primary">{exp.role}</h3>
                  <span className="text-lg text-secondary">
                    {exp.company}
                    {exp.client && ` · ${exp.client}`}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-on-surface-variant leading-relaxed max-w-3xl">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-headline font-light text-primary tracking-tight mb-8">
            Academic
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-8 bg-surface-container-lowest rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)] outline outline-1 outline-outline-variant/15"
              >
                <span className="text-xs font-label uppercase tracking-widest text-secondary mb-2 block">
                  {edu.date}
                </span>
                <h3 className="text-xl font-headline font-bold text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-on-surface-variant">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-headline font-light text-primary tracking-tight mb-8">
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 p-6 bg-surface-container-low rounded-sm group hover:bg-surface-container-highest transition-colors"
              >
                <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
                  workspace_premium
                </span>
                <div>
                  <h4 className="font-headline font-bold text-primary">{cert.name}</h4>
                  <span className="text-sm text-secondary">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 border-t border-surface-container-high">
        <div className="text-center max-w-3xl mx-auto space-y-12">
          <span className="text-xs font-label uppercase tracking-widest text-secondary">
            Key Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-light text-primary tracking-tight leading-tight">
            Contributed to{' '}
            <span className="text-secondary">several million USD in cost savings</span>{' '}
            at LATAM Airlines.
          </h2>
          <div className="flex justify-center gap-8 text-on-surface-variant">
            <div className="text-center">
              <span className="block text-3xl font-bold text-primary mb-2">−30%</span>
              <span className="text-sm uppercase tracking-wider text-secondary">
                Customer Complaints
              </span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-primary mb-2">3d→24h</span>
              <span className="text-sm uppercase tracking-wider text-secondary">SLA Reduction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
