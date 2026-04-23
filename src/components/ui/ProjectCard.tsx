import { Link } from 'react-router'
import type { Project } from '../../types'
import Tag from './Tag'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const typeLabel = project.type === 'venture' ? 'Venture' : project.type === 'side-project' ? 'Side Project' : 'Project'

  return (
    <Link to={`/projects/${project.slug}`} className="group cursor-pointer">
      <article className="flex flex-col gap-6">
        <div className="hero-image-frame overflow-hidden w-full aspect-[1.91/1] bg-surface-container-low">
          {project.image ? (
            <img
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
              src={project.image}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <span className="material-symbols-outlined type-display-small text-secondary/20">rocket_launch</span>
              <span className="font-label type-project-card-placeholder text-secondary/40">{typeLabel}</span>
            </div>
          )}
        </div>
        <div className="type-hero-terminal text-secondary">
          <span>{project.period}</span>
        </div>
        <h3 className="font-headline type-project-card-title text-primary group-hover:text-accent-violet transition-colors">
          {project.title}
        </h3>
        <p className="font-body type-project-card-description text-on-surface-variant line-clamp-3">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} size="sm" />
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}
