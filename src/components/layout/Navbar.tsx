import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { socialLinks } from '../../data/profile'
import type { SocialLink } from '../../types'
import BrandLogo from '../ui/BrandLogo'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="currentColor">
        <path d="M4.98 3.5A2.48 2.48 0 1 1 .02 3.5a2.48 2.48 0 0 1 4.96 0ZM.5 8h4V23h-4V8Zm6.33 0H10.66v2.05h.06C11.25 9.06 12.55 8 14.49 8c4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.72c0-1.84-.03-4.21-2.56-4.21-2.57 0-2.97 2.01-2.97 4.08V23h-4V8Z" />
      </svg>
    )
  }

  if (icon === 'medium') {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="currentColor">
        <path d="M5.5 6a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm8.75 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm6.25 1.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.27-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.14 1.18A10.9 10.9 0 0 1 12 6.31c.98 0 1.97.13 2.89.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.74.11 3.03.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.67.41.35.78 1.04.78 2.11 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-8 py-6 w-full">
        <Link
          to="/"
          aria-label="Francisco Frez home"
          className="text-primary transition-opacity duration-300 hover:opacity-75"
        >
          <BrandLogo showWordmark={false} className="h-10 md:h-12" />
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `font-body type-nav-link pb-1 transition-colors duration-300 ${
                  isActive
                    ? 'text-primary border-b border-primary'
                    : 'text-secondary hover:text-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon-link inline-flex h-8 w-8 items-center justify-center text-secondary"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-xl border-t border-surface-container-high px-8 pb-8 pt-4 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block font-body type-nav-link ${
                  isActive ? 'text-primary' : 'text-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-3 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-icon-link inline-flex h-8 w-8 items-center justify-center text-secondary"
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
