interface TagProps {
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'px-3 py-1 type-project-card-tag',
  md: 'px-4 py-1.5 type-experience-tag',
  lg: 'px-4 py-1.5 text-[0.65rem] uppercase tracking-widest',
  xl: 'px-4 py-1.5 text-xs uppercase tracking-widest',
}

export default function Tag({ label, size = 'sm' }: TagProps) {
  return (
    <span
      className={`bg-surface-container-low text-secondary font-label hover:bg-accent-violet hover:text-white transition-colors ${sizeClasses[size]}`}
    >
      {label}
    </span>
  )
}
