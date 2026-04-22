import { profile, skills, experiences, education, certifications, awards, aboutHeroImage, hobbyImages, universityImages } from '../data/profile'

export default function AboutPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-24 pt-40 space-y-32">
      {/* Personal Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="type-display-large font-headline text-primary">
            {profile.aboutTagline}
          </h1>
          <p className="type-body-large text-on-surface-variant max-w-2xl">
            {profile.aboutSummary}
          </p>
          <div className="pt-8">
            <span className="inline-block px-4 py-2 rounded-full bg-surface-container-low text-secondary type-label">
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
            <h2 className="type-headline-large font-headline text-primary">
              Skills
            </h2>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="type-skill-category font-label text-secondary mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3 type-skill-item text-on-surface-variant">
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
        <h2 className="type-headline-large font-headline text-primary mb-16">
          Professional Journey
        </h2>
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.company} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3">
                <span className="type-experience-period font-label text-secondary">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9 space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="type-headline-medium font-headline text-primary">{exp.role}</h3>
                  <span className="type-body-large text-secondary">
                    {exp.company}
                    {exp.client && ` · ${exp.client}`}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="type-body-medium text-on-surface-variant max-w-3xl">
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
          <h2 className="type-headline-large font-headline text-primary mb-8">
            Academic
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-8 bg-surface-container-lowest rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)] outline outline-1 outline-outline-variant/15"
              >
                <span className="type-label text-secondary mb-2 block">
                  {edu.date}
                </span>
                <h3 className="type-headline-small font-headline text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="type-body-medium text-on-surface-variant">{edu.institution}</p>
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
          <h2 className="type-headline-large font-headline text-primary mb-8">
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
                  <h4 className="type-headline-xsmall font-headline text-primary">{cert.name}</h4>
                  <span className="type-body-small text-secondary">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 border-t border-surface-container-high">
        <div className="text-center max-w-3xl mx-auto space-y-12">
          <span className="type-label text-secondary">
            Key Milestones
          </span>
          <h2 className="type-display-medium font-headline text-primary mt-14">
            A few things I'm proud of —{' '}
            <span className="text-secondary">in the nerdiest way possible</span>.
          </h2>
          <div className="flex justify-center gap-8 text-on-surface-variant">
            <div className="text-center">
              <span className="block type-headline-large font-bold text-primary mb-2">$100M+</span>
              <span className="type-label text-secondary">
                Revenue Impact
              </span>
            </div>
            <div className="text-center">
              <span className="block type-headline-large font-bold text-primary mb-2">13.8B</span>
              <span className="type-label text-secondary">Records/Day</span>
            </div>
            <div className="text-center">
              <span className="block type-headline-large font-bold text-primary mb-2">11.82 TB</span>
              <span className="type-label text-secondary">Data/Day</span>
            </div>
            <div className="text-center">
              <span className="block type-headline-large font-bold text-primary mb-2">Days<span className="inline-block scale-y-75">→</span>Hrs</span>
              <span className="type-label text-secondary">SLA Reduction</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 pt-8">
            <span className="type-label text-secondary">
              {awards[0]}
            </span>
            <div className="flex flex-wrap justify-center gap-x-8">
              {awards.slice(1).map((award) => (
                <span
                  key={award}
                  className="type-label text-secondary"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code */}
      <section>
        <h2 className="type-headline-large font-headline text-primary mb-6">
          Beyond the Code
        </h2>
        <p className="type-body-medium text-on-surface-variant max-w-2xl mb-12">
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
              <span className="absolute bottom-0 left-0 right-0 py-3 px-4 type-label text-white bg-gradient-to-t from-black/60 to-transparent">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
