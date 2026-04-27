import { useLocation } from 'react-router'
import { PrimaryCTAButton, TerminalCommandButton } from '../components/ui/Button'

export default function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <div className="pt-40 pb-32 w-full">
      <section className="max-w-3xl mx-auto px-8 flex flex-col items-center text-center gap-12">
        <div className="space-y-6 flex flex-col items-center">
          <div className="hero-index-row inline-flex items-center gap-4">
            <span className="hero-index-marker" aria-hidden="true" />
            <span className="type-hero-terminal hero-index-text">
              fatal: path not found
            </span>
          </div>
          <h1 className="font-headline type-display-large text-primary">
            <span className="hero-name-accent">404</span> — Page not found.
          </h1>
        </div>

        <p className="font-body type-body-large text-on-surface-variant max-w-xl">
          The route you&apos;re looking for doesn&apos;t exist — at least, not here. It might have moved, been renamed, or maybe it never shipped.
        </p>

        <div className="hairline-border bg-surface-container-low px-6 py-5 text-left max-w-xl w-full">
          <code className="type-hero-terminal block text-primary break-all">
            <span className="hero-name-accent">$</span> cd {pathname}
          </code>
          <code className="type-hero-terminal block text-on-surface-variant break-all mt-2">
            cd: no such file or directory
          </code>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-10 pt-2">
          <PrimaryCTAButton to="/">Back to Home</PrimaryCTAButton>
          <TerminalCommandButton to="/contact">REPORT A BROKEN LINK</TerminalCommandButton>
        </div>
      </section>
    </div>
  )
}
