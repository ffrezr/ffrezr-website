type BrandLogoProps = {
  className?: string
  showWordmark?: boolean
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function BrandMark({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={joinClasses('h-8 w-auto shrink-0', className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <rect x="0" y="0" width="200" height="12" />
        <rect x="0" y="0" width="12" height="200" />
        <rect x="0" y="188" width="200" height="12" />
        <rect x="188" y="0" width="12" height="45" />
        <rect x="188" y="155" width="12" height="45" />

        <g transform="translate(100 100)">
          <g transform="scale(0.82)">
            <g transform="translate(-100 -100)">
              <rect x="50" y="40" width="14" height="95" />
              <rect x="50" y="40" width="60" height="12" />
              <rect x="50" y="80" width="40" height="12" />

              <rect x="90" y="65" width="14" height="95" />
              <rect x="90" y="65" width="60" height="12" />
              <rect x="90" y="110" width="45" height="12" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default function BrandLogo({
  className,
  showWordmark = true,
}: BrandLogoProps) {
  if (!showWordmark) {
    return <BrandMark className={className} />
  }

  return (
    <svg
      viewBox="0 0 600 360"
      className={joinClasses('h-10 w-auto shrink-0', className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <rect x="200" y="80" width="200" height="12" />
        <rect x="200" y="80" width="12" height="200" />
        <rect x="200" y="268" width="200" height="12" />
        <rect x="388" y="80" width="12" height="45" />
        <rect x="388" y="235" width="12" height="45" />

        <g transform="translate(300 180)">
          <g transform="scale(0.82)">
            <g transform="translate(-300 -180)">
              <rect x="250" y="120" width="14" height="95" />
              <rect x="250" y="120" width="60" height="12" />
              <rect x="250" y="160" width="40" height="12" />

              <rect x="290" y="145" width="14" height="95" />
              <rect x="290" y="145" width="60" height="12" />
              <rect x="290" y="190" width="45" height="12" />
            </g>
          </g>
        </g>
      </g>

      <text
        x="300"
        y="335"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="2"
      >
        FRANCISCO FREZ
      </text>
    </svg>
  )
}
