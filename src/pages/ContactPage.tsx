import { socialLinks } from '../data/profile'
import { ExternalTerminalButton, PrimaryCTAButton } from '../components/ui/Button'

export default function ContactPage() {
  return (
    <div className="pt-48 pb-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:pr-20 mb-16 lg:mb-0">
          <div className="hero-index-row inline-flex items-center gap-4 mb-8">
            <span className="hero-index-marker" aria-hidden="true" />
            <span className="type-hero-terminal hero-index-text">
              git push
            </span>
          </div>
          <h1 className="font-headline type-display-large text-primary mb-10">
            Want to say <span className="hero-name-accent">hi</span>?
          </h1>
          <p className="font-body type-body-large text-on-surface-variant max-w-sm mb-16">
            If you're building something interesting, stuck on a data problem, or just feel like swapping ideas, send me a note.
          </p>
          <div className="space-y-10 mt-auto">
            <div className="flex gap-8 pt-4">
              {socialLinks.map((link) => (
                <ExternalTerminalButton key={link.label} href={link.url}>
                  {link.label}
                </ExternalTerminalButton>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block lg:col-span-1 border-l border-surface-container-highest h-full" />

        {/* Right Column - Form */}
        <div className="lg:col-span-6">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label
                  className="block font-label type-label tracking-[0.1em] text-secondary mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body type-body-large py-3 px-0 focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block font-label type-label tracking-[0.1em] text-secondary mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body type-body-large py-3 px-0 focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <label
                className="block font-label type-label tracking-[0.1em] text-secondary mb-2"
                htmlFor="message"
              >
                What's on your mind?
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body type-body-large py-3 px-0 focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant resize-none min-h-[120px]"
                id="message"
                name="message"
                placeholder="A question, a project, or just a hello..."
                required
              />
            </div>

            <div className="pt-6">
              <PrimaryCTAButton type="submit" className="w-full md:w-auto">
                Send Message
              </PrimaryCTAButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
