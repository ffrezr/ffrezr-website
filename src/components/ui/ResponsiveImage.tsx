import type { ImgHTMLAttributes, ReactNode } from 'react'
import { deriveImageSiblings } from '../../lib/images'

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  pictureClassName?: string
  pictureStyle?: React.CSSProperties
  children?: ReactNode
}

export default function ResponsiveImage({
  src,
  alt,
  pictureClassName,
  pictureStyle,
  children,
  ...imgProps
}: ResponsiveImageProps) {
  const { avif, webp } = deriveImageSiblings(src)
  return (
    <picture className={pictureClassName} style={pictureStyle}>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} {...imgProps} />
      {children}
    </picture>
  )
}
