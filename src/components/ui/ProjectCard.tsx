import { Link } from 'react-router'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const typeLabel = project.type === 'venture' ? 'Venture' : project.type === 'side-project' ? 'Side Project' : 'Project'

  return (
    <Link to={`/projects/${project.slug}`} className="group cursor-pointer">
      <article className="flex flex-col gap-6">
        <div className="overflow-hidden w-full h-[480px] bg-surface-container-low border border-[#E2E2E2]/30">
          {project.image ? (
            <img
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              src={project.image}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <span className="material-symbols-outlined text-4xl text-secondary/20">rocket_launch</span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-secondary/40">{typeLabel}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#888888]">
          <span>{project.role}</span>
          <span className="text-[#E2E2E2]">/</span>
          <span>{project.period}</span>
        </div>
        <h3 className="font-headline text-xl font-bold tracking-tight text-primary leading-tight group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-[13px] leading-[1.7] font-body line-clamp-3">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-container-low text-secondary font-label text-[0.6rem] uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}
