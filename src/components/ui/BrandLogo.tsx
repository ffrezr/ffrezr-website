type BrandLogoProps = {
  className?: string
  markClassName?: string
  showWordmark?: boolean
  wordmarkClassName?: string
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 48"
      className={joinClasses('h-8 w-auto shrink-0', className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="6" width="6" height="36" rx="1.5" fill="currentColor" />
      <rect x="6" y="6" width="28" height="6" rx="1.5" fill="currentColor" />
      <rect x="6" y="21" width="20" height="6" rx="1.5" fill="currentColor" />
      <rect x="26" y="12" width="6" height="30" rx="1.5" fill="currentColor" />
      <rect x="26" y="12" width="24" height="6" rx="1.5" fill="currentColor" />
      <rect x="26" y="27" width="16" height="6" rx="1.5" fill="currentColor" />
    </svg>
  )
}

export default function BrandLogo({
  className,
  markClassName,
  showWordmark = true,
  wordmarkClassName,
}: BrandLogoProps) {
  return (
    <span className={joinClasses('inline-flex items-center gap-3', className)}>
      <BrandMark className={markClassName} />

      {showWordmark ? (
        <span className={joinClasses('flex flex-col gap-[0.2rem] leading-none', wordmarkClassName)}>
          <span className="type-label font-semibold tracking-[0.18em] text-current">
            Francisco
          </span>
          <span className="type-label font-semibold tracking-[0.18em] text-current">
            Frez
          </span>
        </span>
      ) : null}
    </span>
  )
}
