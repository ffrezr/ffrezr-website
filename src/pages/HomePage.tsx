import {
  InlineTerminalButton,
  PrimaryCTAButton,
  TerminalCommandButton,
} from '../components/ui/Button'
import ExperienceRow from '../components/ui/ExperienceRow'
import ArticleCard from '../components/ui/ArticleCard'
import ProjectCard from '../components/ui/ProjectCard'
import { profile, experiences, heroImage, skills } from '../data/profile'
import { getAllArticles, getFeaturedProjects } from '../lib/content'

const heroSkillLogos: Record<string, string> = {
  Python: '/img/logos/python.svg',
  SQL: '/img/logos/sql-database.png',
  'Google Cloud Platform': '/img/logos/gcp.png',
}

function HeroSkillLogo({ skill }: { skill: string }) {
  const src = heroSkillLogos[skill]
  if (!src) return null

  return (
    <img
      alt=""
      aria-hidden="true"
      className="hero-skill-logo h-5 w-5 shrink-0 object-contain"
      src={src}
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
                Initial commit
              </span>
            </div>
            <h1 className="font-headline type-display-large text-primary">
              Hey! I&apos;m{' '}
              <span className="hero-name-accent">Francisco</span>
              <span className="hero-wave ml-3 inline-block text-[0.78em]" aria-hidden="true">
                👋
              </span>
              .
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
      <section className="mb-56 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5">
          <div className="hero-image-frame aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover"
              src="/img/me/latam-hangar-visit.jpeg"
            />
          </div>
        </div>
        <div className="md:col-span-7 space-y-10">
          <div className="space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                README.md
              </span>
            </div>
            <h2 className="font-headline type-display-medium text-primary">
              A Bit About <span className="hero-name-accent">Me</span>.
            </h2>
          </div>
          <p className="font-body type-body-medium text-on-surface-variant max-w-xl">
            I studied Electronic Engineering, got hooked on data, co-founded a few startups along the way, and somehow ended up collaborating with LATAM Airlines. These days I lead a data team — but I'm just as likely to find me gaming, playing guitar at church, or running somewhere outdoors.
          </p>
          <div className="space-y-5 pt-6">
            <div className="hero-skills-label-row inline-flex items-center gap-4">
              <span className="hero-skills-rule" aria-hidden="true" />
              <span className="type-hero-terminal hero-skills-label">
                Highlights
              </span>
            </div>
            <div className="hero-skills-inline">
              <div className="hero-skill-inline inline-flex items-center gap-4">
                <span className="block font-headline type-headline-large hero-name-accent">+5y</span>
                <span className="type-tech-pill hero-skill-name text-primary">Experience</span>
              </div>
              <div className="hero-skill-inline inline-flex items-center gap-4">
                <span className="block font-headline type-headline-large hero-name-accent">5</span>
                <span className="type-tech-pill hero-skill-name text-primary">Businesses Founded</span>
              </div>
              <div className="hero-skill-inline inline-flex items-center gap-4">
                <span className="block font-headline type-headline-large hero-name-accent">1st</span>
                <span className="type-tech-pill hero-skill-name text-primary">Marathon Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                git log
              </span>
            </div>
            <h2 className="font-headline type-display-medium text-primary max-w-md">
              Explore My Data <span className="hero-name-accent">Journey</span>.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body type-body-medium text-on-surface-variant mb-8">
              Banks, airlines, research labs, my own startups — each chapter taught me something different about building things that deliver value.
            </p>
            <InlineTerminalButton to="/contact">SAY HELLO</InlineTerminalButton>
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
          <div className="flex flex-col items-center mb-24 space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                ls projects/
              </span>
            </div>
            <h2 className="font-headline type-display-medium text-primary">
              Things I&apos;ve <span className="hero-name-accent">Built</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-24">
            <TerminalCommandButton to="/projects">EXPLORE ALL</TerminalCommandButton>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-24 space-y-6">
          <div className="hero-index-row inline-flex items-center gap-4">
            <span className="hero-index-marker" aria-hidden="true" />
            <span className="type-hero-terminal hero-index-text">
              cat BLOG.md
            </span>
          </div>
          <h2 className="font-headline type-display-medium text-primary">
            What I&apos;ve Been <span className="hero-name-accent">Learning</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
        <div className="text-center mt-24">
          <TerminalCommandButton to="/blog">READ ALL ARTICLES</TerminalCommandButton>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-24 text-center bg-white py-40 mx-8 hairline-border">
        <div className="flex flex-col items-center mb-8 space-y-6">
          <div className="hero-index-row inline-flex items-center gap-4">
            <span className="hero-index-marker" aria-hidden="true" />
            <span className="type-hero-terminal hero-index-text">
              ping
            </span>
          </div>
          <h2 className="font-headline type-display-medium text-primary">
            What Are You <span className="hero-name-accent">Working On</span>?
          </h2>
        </div>
        <p className="font-body type-body-medium text-on-surface-variant max-w-lg mx-auto mb-16">
          I like hearing about interesting problems. If you're building something, wrestling with data, or just want to swap ideas — reach out.
        </p>
        <PrimaryCTAButton to="/contact">Let&apos;s Talk</PrimaryCTAButton>
      </section>
    </div>
  )
}
