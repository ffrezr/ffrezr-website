import { Link } from 'react-router'
import Button from '../components/ui/Button'
import SectionLabel from '../components/ui/SectionLabel'
import ExperienceRow from '../components/ui/ExperienceRow'
import ArticleCard from '../components/ui/ArticleCard'
import { profile, experiences, articles, heroImage, projectImages } from '../data/profile'

export default function HomePage() {
  return (
    <div className="pt-40 w-full">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-56">
        <div className="lg:col-span-7 space-y-10">
          <h1 className="font-headline font-light text-[4rem] leading-[1.05] tracking-[-0.03em] text-primary">
            {profile.tagline}
          </h1>
          <p className="font-body text-[1.125rem] leading-relaxed text-on-surface-variant max-w-xl font-light">
            {profile.heroSummary}
          </p>
          <div className="flex items-center gap-8 pt-6">
            <Button to="/about">Get to Know Me</Button>
            <Button to="/blog" variant="secondary">Read Blog</Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              alt="Professional portrait"
              className="w-full h-full object-cover grayscale"
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
          <h2 className="font-headline font-light text-[2.5rem] tracking-tight text-primary">
            A Bit About Me
          </h2>
          <p className="font-body text-[0.9375rem] text-on-surface-variant leading-relaxed font-light">
            I studied Electronic Engineering, got hooked on data, co-founded a few startups along the way, and somehow ended up collaborating with LATAM Airlines. These days I lead a data team — but I'm just as likely to find me gaming, playing guitar at church, or running somewhere outdoors.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <span className="block font-headline font-light text-3xl text-primary tracking-tight">+5y</span>
              <span className="font-body text-[0.7rem] text-on-surface-variant uppercase tracking-widest">Experience</span>
            </div>
            <div>
              <span className="block font-headline font-light text-3xl text-primary tracking-tight">5</span>
              <span className="font-body text-[0.7rem] text-on-surface-variant uppercase tracking-widest">New Businesses Founded</span>
            </div>
            <div>
              <span className="block font-headline font-light text-3xl text-primary tracking-tight">1st</span>
              <span className="font-body text-[0.7rem] text-on-surface-variant uppercase tracking-widest">Marathon Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-headline font-light text-[3.5rem] tracking-tight text-primary leading-none max-w-md">
              Explore My Journey
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-[0.9375rem] text-on-surface-variant leading-relaxed mb-8 font-light">
              Banks, airlines, research labs, my own startups — each chapter taught me something different about building things that deliver value.
            </p>
            <Button to="/contact" variant="secondary">
              Say Hello
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Button>
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
            <SectionLabel centered>Portfolio</SectionLabel>
            <h2 className="font-headline font-light text-[3.5rem] tracking-tight text-primary">
              Things I've Built
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projectImages.map((img, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-8 bg-surface-container-low hairline-border">
                  <img
                    alt={`Project ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out grayscale"
                    src={img}
                  />
                </div>
                <h3 className="font-headline text-[0.9375rem] font-medium text-primary text-center uppercase tracking-widest">
                  {['Kings League — Big Data King', 'Mundo Colegios — EdTech'][i] ?? 'Omniduc — Education'}
                </h3>
              </div>
            ))}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-surface-container-low hairline-border flex items-center justify-center relative">
                <div className="absolute inset-0 bg-neutral-100" />
                <span className="relative z-10 text-[0.65rem] uppercase tracking-[0.3em] text-neutral-400">
                  More Projects
                </span>
              </div>
              <h3 className="font-headline text-[0.9375rem] font-medium text-primary text-center uppercase tracking-widest">
                Omniduc — Education
              </h3>
            </div>
          </div>
          <div className="text-center mt-24">
            <Link
              to="/projects"
              className="text-primary font-label text-[0.7rem] uppercase tracking-[0.2em] hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
            >
              Explore All
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="mb-56 max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <SectionLabel centered>Journal</SectionLabel>
          <h2 className="font-headline font-light text-[3.5rem] tracking-tight text-primary">
            Things I Think About
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-24 text-center bg-white py-40 mx-8 hairline-border">
        <h2 className="font-headline font-light text-[3rem] text-primary mb-8 tracking-tight">
          Want to Connect?
        </h2>
        <p className="font-body text-[1rem] text-on-surface-variant max-w-lg mx-auto mb-16 leading-relaxed font-light">
          Whether it's about data, coffee, startups, or just to say hi — I'm always happy to meet new people.
        </p>
        <Button to="/contact">Say Hello</Button>
      </section>
    </div>
  )
}
