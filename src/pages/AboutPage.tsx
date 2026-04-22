import { profile, skills, experiences, education, certifications, awards, aboutHeroImage, hobbyImages, universityImages } from '../data/profile'

const certLogos: Record<string, string> = {
  Google: '/img/logos/google.svg',
  'DeepLearning.AI': '/img/logos/deeplearning-ai.png',
  Huawei: '/img/logos/huawei.svg',
  'EF SET — C2 Proficient': '/img/logos/ef-set.svg',
}

export default function AboutPage() {
  return (
    <div className="pt-40 w-full">
      {/* Personal Summary */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-56">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                whoami
              </span>
            </div>
            <h1 className="font-headline type-display-large text-primary">
              I followed my curiosity, and it led me to{' '}
              <span className="hero-name-accent">data</span>.
            </h1>
          </div>
          <p className="font-body type-body-large text-on-surface-variant max-w-2xl">
            {profile.aboutSummary}
          </p>
          <div className="pt-4">
            <span className="inline-block px-4 py-2 rounded-full bg-surface-container-low text-secondary type-label">
              {profile.role}
            </span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="hero-image-frame aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover"
              src={aboutHeroImage}
            />
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-56 py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                cat skills.yml
              </span>
            </div>
            <h2 className="font-headline type-headline-large text-primary">
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
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="space-y-6 mb-16">
          <div className="hero-index-row inline-flex items-center gap-4">
            <span className="hero-index-marker" aria-hidden="true" />
            <span className="type-hero-terminal hero-index-text">
              git log --oneline
            </span>
          </div>
          <h2 className="font-headline type-display-medium text-primary">
            Professional <span className="hero-name-accent">Journey</span>
          </h2>
        </div>
        <div>
          {experiences.map((exp) => (
            <div key={exp.company} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3">
                <span className="type-experience-period font-label text-secondary">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9 space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="font-headline type-headline-medium text-primary">{exp.role}</h3>
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
      <section className="mb-56 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="space-y-6 mb-8">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                cat credentials.yml
              </span>
            </div>
            <h2 className="font-headline type-headline-large text-primary">
              Academic
            </h2>
          </div>
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
                  className="w-full h-full object-cover"
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <div className="mb-6 invisible" aria-hidden="true">
              <span className="type-hero-terminal">&nbsp;</span>
            </div>
            <h2 className="font-headline type-headline-large text-primary">
              Certifications
            </h2>
          </div>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 p-6 bg-surface-container-low rounded-sm group hover:bg-surface-container-highest transition-colors"
              >
                <img
                  alt={cert.issuer}
                  src={certLogos[cert.issuer] ?? '/img/logos/google.svg'}
                  className="w-6 h-6 shrink-0 object-contain"
                />
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
      <section className="mb-56 hairline-t py-24">
        <div className="max-w-3xl mx-auto px-8 space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                top
              </span>
            </div>
          </div>
          <h2 className="type-display-medium font-headline text-primary text-center">
            A few things I'm proud of —{' '}
            <span className="text-secondary">in the nerdiest way possible</span>.
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
              <span className="block font-headline type-headline-large hero-name-accent">$100M+</span>
              <span className="type-tech-pill hero-skill-name text-primary">Revenue Impact</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="block font-headline type-headline-large hero-name-accent">13.8B</span>
              <span className="type-tech-pill hero-skill-name text-primary">Records/Day</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="block font-headline type-headline-large hero-name-accent">11.82 TB</span>
              <span className="type-tech-pill hero-skill-name text-primary">Data/Day</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="block font-headline type-headline-large hero-name-accent">Days→Hrs</span>
              <span className="type-tech-pill hero-skill-name text-primary">SLA Reduction</span>
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
      <section className="mb-24 max-w-7xl mx-auto px-8">
        <div className="space-y-6 mb-6">
          <div className="hero-index-row inline-flex items-center gap-4">
            <span className="hero-index-marker" aria-hidden="true" />
            <span className="type-hero-terminal hero-index-text">
              ~/life
            </span>
          </div>
          <h2 className="font-headline type-headline-large text-primary">
            Beyond the <span className="hero-name-accent">Code</span>
          </h2>
        </div>
        <p className="type-body-medium text-on-surface-variant max-w-2xl mb-12">
          {profile.aboutPersonal}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hobbyImages.map((img) => (
            <div key={img.label} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
                <img
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
