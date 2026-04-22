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
  symbolClassName = 'text-[1.35em] leading-none',
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
  symbolClassName = 'text-[1.7em] leading-none',
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

export function PrimaryCTAButton({
  children,
  symbol = '→',
  symbolClassName = 'text-[1.5em] leading-none',
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
