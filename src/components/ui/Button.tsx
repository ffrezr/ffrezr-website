import { Link } from 'react-router'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'bg-primary text-on-primary rounded-[2px] px-10 py-5 font-label font-bold text-[0.75rem] uppercase tracking-[0.1em] hover:bg-primary-container transition-colors inline-flex items-center justify-center gap-3'
      : 'text-primary font-label font-bold text-[0.75rem] uppercase tracking-[0.1em] border-b border-primary pb-2 hover:text-primary/70 transition-all inline-flex items-center gap-3'

  const classes = `${base} ${className}`

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>
  return <button type={type} className={classes} onClick={onClick}>{children}</button>
}
