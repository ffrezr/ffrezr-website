import { Link } from 'react-router'
import Button from '../components/ui/Button'
import SectionLabel from '../components/ui/SectionLabel'
import ExperienceRow from '../components/ui/ExperienceRow'
import ArticleCard from '../components/ui/ArticleCard'
import { profile, experiences, heroImage, skills } from '../data/profile'
import { getAllArticles, getFeaturedProjects } from '../lib/content'

function HeroSkillLogo({ skill }: { skill: string }) {
  if (skill === 'Python') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path fill="#3776AB" d="M11.9 2.2c-4.7 0-4.4 2-4.4 2v2.1h4.5v.7H5.7S2.6 6.6 2.6 12c0 5.4 2.7 5.2 2.7 5.2h1.6v-2.3s-.1-2.7 2.7-2.7h4.7s2.7 0 2.7-2.6V4.8s.4-2.6-4.9-2.6Z" />
        <circle cx="9.5" cy="4.5" r="1" fill="#F9F9F9" />
        <path fill="#FFD43B" d="M12.1 21.8c4.7 0 4.4-2 4.4-2v-2.1H12v-.7h6.3s3.1.4 3.1-5c0-5.4-2.7-5.2-2.7-5.2h-1.6v2.3s.1 2.7-2.7 2.7H9.7S7 11.8 7 14.4v4.8s-.4 2.6 5.1 2.6Z" />
        <circle cx="14.5" cy="19.5" r="1" fill="#222222" />
      </svg>
    )
  }

  if (skill === 'SQL') {
    return (
      <img
        alt=""
        aria-hidden="true"
        className="hero-skill-logo hero-skill-logo-sql"
        src="/img/logos/sql-database.png"
      />
    )
  }

  return (
    <img
      alt=""
      aria-hidden="true"
      className="hero-skill-logo hero-skill-logo-gcp"
      src="/img/logos/google-cloud-icons8.png"
    />
  )
}

export default function HomePage() {
  const articles = getAllArticles()
  const projects = getFeaturedProjects()
  const heroCoreGroup = skills.find((group) => group.category === 'Core')
  const heroToolset = heroCoreGroup?.items ?? []
  const heroSkillLabels: Record<string, string> = {
    'Google Cloud Platform': 'GCP',
  }

  return (
    <div className="pt-40 w-full">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-56">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                initial commit
              </span>
            </div>
            <h1 className="font-headline type-display-large text-primary">
              Hey! I&apos;m{' '}
              <span className="hero-name-accent">Francisco</span>
            </h1>
          </div>
          <p className="font-body type-body-large text-on-surface-variant max-w-xl">
            {profile.heroSummary}
          </p>
          <div className="space-y-5 pt-6">
            <div className="hero-skills-label-row inline-flex items-center gap-4">
              <span className="hero-skills-rule" aria-hidden="true" />
              <span className="type-hero-terminal hero-skills-label">
                {heroCoreGroup?.category ?? 'Core'} skills
              </span>
            </div>
            <div className="hero-skills-strip max-w-4xl">
              <div className="hero-skills-inline">
                {heroToolset.map((skill) => (
                  <div
                    key={skill}
                    className="hero-skill-inline inline-flex items-center gap-4"
                  >
                    <HeroSkillLogo skill={skill} />
                    <span className="type-tech-pill hero-skill-name text-primary">
                      {heroSkillLabels[skill] ?? skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="hero-image-frame aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="mb-56 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover grayscale"
              src="/img/me/latam-hangar-visit.jpeg"
            />
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          <h2 className="font-headline type-display-medium text-primary">
            A Bit About Me
          </h2>
          <p className="font-body type-body-medium text-on-surface-variant">
            I studied Electronic Engineering, got hooked on data, co-founded a few startups along the way, and somehow ended up collaborating with LATAM Airlines. These days I lead a data team — but I'm just as likely to find me gaming, playing guitar at church, or running somewhere outdoors.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <span className="block font-headline type-headline-large text-primary">+5y</span>
              <span className="font-body type-label text-on-surface-variant">Experience</span>
            </div>
            <div>
              <span className="block font-headline type-headline-large text-primary">5</span>
              <span className="font-body type-label text-on-surface-variant">New Businesses Founded</span>
            </div>
            <div>
              <span className="block font-headline type-headline-large text-primary">1st</span>
              <span className="font-body type-label text-on-surface-variant">Marathon Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-headline type-display-medium text-primary max-w-md">
              Explore My Data Journey
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body type-body-medium text-on-surface-variant mb-8">
              Banks, airlines, research labs, my own startups — each chapter taught me something different about building things that deliver value.
            </p>
            <Link
              to="/contact"
              className="text-primary font-label type-label hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
            >
              Say Hello
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 200" }}>arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="hairline-divide hairline-t">
          {experiences.slice(0, 3).map((exp) => (
            <ExperienceRow key={exp.company} experience={exp} />
          ))}
          <div className="hairline-t" />
        </div>
      </section>

      {/* Portfolio */}
      <section className="mb-56 bg-white py-40 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <SectionLabel centered>Projects</SectionLabel>
            <h2 className="font-headline type-display-medium text-primary">
              Things I've Built
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project) => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-8 bg-surface-container-low hairline-border">
                  {project.image ? (
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out grayscale"
                      src={project.image}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="type-label text-neutral-400">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-headline type-project-title text-primary text-center">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-24">
            <Link
              to="/projects"
              className="text-primary font-label type-label hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
            >
              Explore All
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 200" }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <SectionLabel centered>Blog</SectionLabel>
          <h2 className="font-headline type-display-medium text-primary">
            What I've Been Learning
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
        <div className="text-center mt-24">
          <Link
            to="/blog"
            className="text-primary font-label type-label hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
          >
            Read All Articles
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 200" }}>arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-24 text-center bg-white py-40 mx-8 hairline-border">
        <h2 className="font-headline type-display-medium text-primary mb-8">
          What Are You Working On?
        </h2>
        <p className="font-body type-body-medium text-on-surface-variant max-w-lg mx-auto mb-16">
          I like hearing about interesting problems. If you're building something, wrestling with data, or just want to swap ideas — reach out.
        </p>
        <Button to="/contact">Let's Talk</Button>
      </section>
    </div>
  )
}
