import { useParams, Link } from 'react-router'
import { getProjectBySlug } from '../lib/content'
import MarkdownRenderer from '../components/ui/MarkdownRenderer'
import Tag from '../components/ui/Tag'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug!)

  if (!project) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl font-headline font-light text-primary mb-4">Project not found</h1>
        <Link to="/projects" className="text-primary underline">
          Back to projects
        </Link>
      </div>
    )
  }

  const typeLabel = project.type === 'venture' ? 'Venture' : project.type === 'side-project' ? 'Side Project' : 'Project'

  return (
    <div className="pt-[88px] flex flex-col items-center pb-32">
      {/* Header */}
      <header className="w-full max-w-5xl px-6 md:px-12 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-8 text-[0.75rem] uppercase tracking-[0.05em] text-secondary font-bold font-label">
          <span className="text-primary">{typeLabel}</span>
          <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
          <span>{project.role}</span>
          <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
          <span>{project.period}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-primary mb-8 max-w-4xl leading-tight font-headline">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-3xl leading-relaxed">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} size="lg" />
            ))}
          </div>
        )}
      </header>

      {/* Hero Image */}
      {project.image && (
        <div className="w-full max-w-7xl px-6 md:px-12 mb-24">
          <div className="aspect-[21/9] w-full rounded-sm bg-surface-container-low overflow-hidden relative shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
            <img alt={project.title} className="w-full h-full object-cover" src={project.image} />
          </div>
        </div>
      )}

      {/* Story Content */}
      <article className="w-full max-w-3xl px-6 md:px-0 font-body">
        {project.content ? (
          <MarkdownRenderer content={project.content} />
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-5xl text-secondary/30 mb-6 block">edit_note</span>
            <p className="text-lg text-on-surface-variant font-light mb-2">
              The full story behind this project is coming soon.
            </p>
            <p className="text-sm text-secondary">
              Stay tuned — I'm writing about this experience.
            </p>
          </div>
        )}
      </article>

      {/* Back link */}
      <div className="mt-16">
        <Link
          to="/projects"
          className="text-primary font-label text-[0.7rem] uppercase tracking-[0.2em] hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          All Projects
        </Link>
      </div>
    </div>
  )
}
