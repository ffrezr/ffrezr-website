import type { Experience } from '../../types'
import Tag from './Tag'

interface ExperienceRowProps {
  experience: Experience
}

export default function ExperienceRow({ experience }: ExperienceRowProps) {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5">
        <h3 className="font-headline type-experience-title text-primary">
          {experience.company}
          {experience.location && `, ${experience.location}`}
        </h3>
        <p className="font-body type-experience-meta text-secondary mt-2">
          {experience.period}
        </p>
      </div>
      <div className="md:col-span-3 text-left">
        <p className="font-body type-experience-role text-on-surface-variant">
          {experience.role}
        </p>
      </div>
      <div className="md:col-span-4 flex gap-3 justify-start md:justify-end flex-wrap">
        {experience.tags.map((tag) => (
          <Tag key={tag} label={tag} size="md" />
        ))}
      </div>
    </div>
  )
}
