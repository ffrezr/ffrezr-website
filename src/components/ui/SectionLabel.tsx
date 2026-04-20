interface SectionLabelProps {
  children: React.ReactNode
  centered?: boolean
}

export default function SectionLabel({ children, centered }: SectionLabelProps) {
  return (
    <span
      className={`font-label text-[0.7rem] uppercase tracking-[0.2em] text-secondary flex items-center gap-3 mb-6 ${
        centered ? 'justify-center' : ''
      }`}
    >
      <span className="w-1 h-1 bg-secondary rounded-full" />
      {children}
    </span>
  )
}
