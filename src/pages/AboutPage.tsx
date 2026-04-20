import { profile, skills, experiences, education, certifications, awards, aboutHeroImage, hobbyImages, universityImages, entrepreneurshipImages } from '../data/profile'

export default function AboutPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-24 pt-40 space-y-32">
      {/* Personal Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-tight font-headline font-light tracking-tight text-primary">
            {profile.aboutTagline}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
            {profile.aboutSummary}
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
              src={aboutHeroImage}
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

      {/* Beyond the Code */}
      <section>
        <h2 className="text-3xl font-headline font-light text-primary tracking-tight mb-6">
          Beyond the Code
        </h2>
        <p className="text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12">
          {profile.aboutPersonal}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hobbyImages.map((img) => (
            <div key={img.label} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
                <img
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                  src={img.src}
                />
              </div>
              <span className="absolute bottom-0 left-0 right-0 py-3 px-4 text-xs font-label uppercase tracking-widest text-white bg-gradient-to-t from-black/60 to-transparent">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Entrepreneurship */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-6">
          <span className="text-xs font-label uppercase tracking-widest text-secondary">
            Side Project
          </span>
          <h2 className="text-3xl font-headline font-light text-primary tracking-tight">
            Astro Cold Brew
          </h2>
          <p className="text-on-surface-variant font-light leading-relaxed">
            Specialty cold brew coffee crafted with 100% Arabica beans from El Salvador and Colombia. A passion project blending entrepreneurship with my love for great coffee.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          {entrepreneurshipImages.map((img) => (
            <div key={img.src} className="aspect-[4/5] overflow-hidden bg-surface-container-low">
              <img
                alt={img.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={img.src}
              />
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

          <div className="grid grid-cols-3 gap-3 mt-8">
            {universityImages.map((img) => (
              <div key={img.src} className="aspect-[3/4] overflow-hidden bg-surface-container-low">
                <img
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src={img.src}
                />
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
            Building systems that process{' '}
            <span className="text-secondary">millions of records daily</span>{' '}
            with near-zero margin for error.
          </h2>
          <div className="flex justify-center gap-8 text-on-surface-variant">
            <div className="text-center">
              <span className="block text-3xl font-bold text-primary mb-2">5M+</span>
              <span className="text-sm uppercase tracking-wider text-secondary">
                Records / Day
              </span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-primary mb-2">450+</span>
              <span className="text-sm uppercase tracking-wider text-secondary">Tables Managed</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-primary mb-2">~0%</span>
              <span className="text-sm uppercase tracking-wider text-secondary">False Positives</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8">
            {awards.map((award) => (
              <span
                key={award}
                className="text-xs uppercase tracking-widest text-secondary"
              >
                {award}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
