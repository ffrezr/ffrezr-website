import { Link } from 'react-router'
import { socialLinks } from '../../data/profile'
import BrandLogo from '../ui/BrandLogo'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white w-full font-body text-[10px] uppercase tracking-[0.2em]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-8 md:px-20 py-20 gap-10">
        <Link
          to="/"
          aria-label="Francisco Frez home"
          className="text-white transition-opacity duration-300 hover:opacity-75"
        >
          <BrandLogo markClassName="h-9" />
        </Link>
        <div className="flex flex-wrap justify-center gap-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ACABAB] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="text-[#555555]">
          &copy; {new Date().getFullYear()} Francisco Frez.
        </span>
      </div>
    </footer>
  )
}
