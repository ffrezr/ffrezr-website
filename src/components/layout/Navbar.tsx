import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import BrandLogo from '../ui/BrandLogo'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

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
          <BrandLogo markClassName="h-7 md:h-8" />
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `font-['Manrope'] tracking-tight font-medium uppercase text-[0.75rem] pb-1 transition-colors duration-300 ${
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

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary rounded-[2px] px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-colors"
        >
          Get in touch
        </Link>

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
                `block font-['Manrope'] tracking-tight font-medium uppercase text-sm ${
                  isActive ? 'text-primary' : 'text-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
