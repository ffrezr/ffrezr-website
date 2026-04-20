import type { Experience } from '../../types'

interface ExperienceRowProps {
  experience: Experience
}

export default function ExperienceRow({ experience }: ExperienceRowProps) {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5">
        <h3 className="font-headline font-medium text-[1.125rem] text-primary">
          {experience.company}
          {experience.client && ` (${experience.client})`}
        </h3>
        <p className="font-body text-[0.7rem] uppercase tracking-widest text-secondary mt-2">
          {experience.period}
        </p>
      </div>
      <div className="md:col-span-4">
        <p className="font-body text-[0.875rem] text-on-surface-variant font-light">
          {experience.role}
        </p>
      </div>
      <div className="md:col-span-3 flex gap-4 justify-start md:justify-end flex-wrap">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 hairline-border rounded-[2px] text-[0.65rem] font-label uppercase tracking-widest text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
