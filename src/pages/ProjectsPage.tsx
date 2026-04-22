import ProjectCard from '../components/ui/ProjectCard'
import { getAllProjects } from '../lib/content'

export default function ProjectsPage() {
  const projects = getAllProjects()
  const ventures = projects.filter((p) => p.type === 'venture')
  const projectsAndProducts = projects.filter((p) => p.type === 'project' || p.type === 'product' || !p.type)
  const sideProjects = projects.filter((p) => p.type === 'side-project')

  return (
    <div className="pt-32 w-full">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-20 flex flex-col gap-24 md:gap-32">
        {/* Header */}
        <section className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="font-headline type-display-large text-primary">
              Projects &amp;
              <br className="hidden md:block" />
              Entrepreneurship
            </h1>
          </div>
          <div className="w-full md:w-1/3 pb-1 md:pb-3">
            <p className="font-body type-body-medium text-on-surface-variant max-w-sm">
              From startups and side projects to collaborations — here's what I've been building along the way.
            </p>
          </div>
        </section>

        {/* Ventures */}
        <section>
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label type-label tracking-[0.1em] text-secondary">01 / Entrepreneurship</span>
              <h2 className="font-headline type-display-small text-primary mt-4 mb-6">The Founder Era</h2>
              <p className="font-body type-body-medium text-on-surface-variant">Building from zero to scale. A focus on product-market fit and full-stack strategic execution.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {ventures.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Projects & Products */}
        {projectsAndProducts.length > 0 && (
          <section>
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <span className="font-label type-label tracking-[0.1em] text-secondary">02 / Projects</span>
                <h2 className="font-headline type-display-small text-primary mt-4 mb-6">Ideas Worth Testing</h2>
                <p className="font-body type-body-medium text-on-surface-variant">Not every project needed to become a business. Some started as a hunch, a technical challenge, or simply something I wanted to try for myself.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
              {projectsAndProducts.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Side Projects */}
        {sideProjects.length > 0 && (
          <section className="mb-32">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <span className="font-label type-label tracking-[0.1em] text-secondary">03 / Side Projects</span>
                <h2 className="font-headline type-display-small text-primary mt-4 mb-6">From Idea to Value</h2>
                <p className="font-body type-body-medium text-on-surface-variant">Digital products and technical projects designed to solve real problems and deliver value, or simply something that surprises.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
              {sideProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
