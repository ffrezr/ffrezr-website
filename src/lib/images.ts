const RASTER_EXT = /\.(png|jpe?g)$/i

export function deriveImageSiblings(src: string | undefined): { avif?: string; webp?: string } {
  if (!src) return {}
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return {}
  if (!RASTER_EXT.test(src)) return {}
  return {
    avif: src.replace(RASTER_EXT, '.avif'),
    webp: src.replace(RASTER_EXT, '.webp'),
  }
}
