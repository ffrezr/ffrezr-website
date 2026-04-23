import { Link } from 'react-router'

export interface ButtonActionProps {
  to?: string
  href?: string
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

interface ButtonProps extends ButtonActionProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'inline'
}

interface PatternButtonProps extends ButtonActionProps {
  children: React.ReactNode
  symbol?: React.ReactNode
  symbolClassName?: string
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
  const variantClasses = {
    primary: 'type-button-editorial button-editorial-primary',
    secondary: 'type-hero-terminal button-editorial-secondary',
    inline: 'type-hero-terminal button-editorial-inline',
  }

  const classes = `${variantClasses[variant]} ${className}`.trim()

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>
  return <button type={type} className={classes} onClick={onClick}>{children}</button>
}

export function InlineTerminalButton({
  children,
  symbol = '→',
  symbolClassName = 'button-symbol-inline',
  ...buttonProps
}: PatternButtonProps) {
  return (
    <Button {...buttonProps} variant="inline">
      <span>{children}</span>
      <span aria-hidden="true" className={symbolClassName}>
        {symbol}
      </span>
    </Button>
  )
}

export function TerminalCommandButton({
  children,
  symbol = '>',
  symbolClassName = 'button-symbol-command',
  ...buttonProps
}: PatternButtonProps) {
  return (
    <Button {...buttonProps} variant="secondary">
      <span aria-hidden="true" className={symbolClassName}>
        {symbol}
      </span>
      <span>{children}</span>
    </Button>
  )
}

export function ExternalTerminalButton({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-secondary hover:text-accent-violet transition-colors flex items-center gap-2 group ${className}`.trim()}
    >
      <span className="type-hero-terminal uppercase">{children}</span>
      <span className="material-symbols-outlined icon-md group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
        arrow_outward
      </span>
    </a>
  )
}

export function PrimaryCTAButton({
  children,
  symbol = '→',
  symbolClassName = 'button-symbol-cta',
  ...buttonProps
}: PatternButtonProps) {
  return (
    <Button {...buttonProps} variant="primary">
      <span>{children}</span>
      <span aria-hidden="true" className={symbolClassName}>
        {symbol}
      </span>
    </Button>
  )
}
