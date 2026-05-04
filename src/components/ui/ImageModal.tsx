import { useEffect, useRef, useState, useCallback } from 'react'

interface ImageModalProps {
  src: string
  alt: string
  caption?: string
  isOpen: boolean
  onClose: () => void
}

const MIN_ZOOM = 0.5
const MAX_ZOOM = 4
const ZOOM_STEP = 0.25

export default function ImageModal({ src, alt, caption, isOpen, onClose }: ImageModalProps) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const panStart = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const resetView = useCallback(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    if (!isOpen) return
    resetView()
  }, [isOpen, src, resetView])

  useEffect(() => {
    if (!isOpen) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z))

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP
    setZoom((z) => clampZoom(z + delta))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    e.preventDefault()
    isDragging.current = true
    dragStart.current = { x: e.clientX, y: e.clientY }
    panStart.current = { ...pan }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setPan({ x: panStart.current.x + dx, y: panStart.current.y + dy })
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  const zoomIn = () => setZoom((z) => clampZoom(z + ZOOM_STEP))
  const zoomOut = () => {
    setZoom((z) => {
      const next = clampZoom(z - ZOOM_STEP)
      if (next <= 1) setPan({ x: 0, y: 0 })
      return next
    })
  }

  const cursor = zoom > 1 ? (isDragging.current ? 'grabbing' : 'grab') : 'default'

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      style={{ cursor: 'default' }}
      onClick={handleOverlayClick}
    >
      {/* Image container */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor }}
        onClick={handleOverlayClick}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isDragging.current ? 'none' : 'transform 0.15s ease',
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            userSelect: 'none',
          }}
        />
      </div>

      {/* Caption */}
      {caption && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-lg text-center text-white/80 text-sm italic px-4">
          {caption}
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
        <button
          onClick={zoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="text-white p-1 hover:text-white/70 transition-colors disabled:opacity-30"
          aria-label="Zoom out"
        >
          <span className="material-symbols-outlined text-lg">remove</span>
        </button>
        <button
          onClick={resetView}
          className="text-white text-xs font-mono w-12 text-center hover:text-white/70 transition-colors"
          aria-label="Reset zoom"
        >
          {Math.round(zoom * 100)}%
        </button>
        <button
          onClick={zoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="text-white p-1 hover:text-white/70 transition-colors disabled:opacity-30"
          aria-label="Zoom in"
        >
          <span className="material-symbols-outlined text-lg">add</span>
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Close"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  )
}
