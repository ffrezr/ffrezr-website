import { profile, socialLinks } from '../data/profile'

export default function ContactPage() {
  return (
    <div className="pt-48 pb-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:pr-20 mb-16 lg:mb-0">
          <p className="font-label text-[11px] uppercase tracking-[0.2em] text-secondary mb-8">
            Inquiries & Collaborations
          </p>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-primary font-light mb-10">
            Let's create
            <br />
            something
            <br />
            extraordinary.
          </h1>
          <p className="font-body text-secondary text-lg md:text-xl max-w-sm leading-relaxed mb-16">
            Available for data engineering consulting, architecture reviews, and collaborative projects.
          </p>
          <div className="space-y-10 mt-auto">
            <div className="flex flex-col gap-3">
              <span className="font-label text-[11px] uppercase tracking-[0.2em] text-secondary">
                Direct
              </span>
              <a
                className="text-primary font-semibold text-xl border-b border-gray-200 pb-2 w-fit hover:border-primary transition-colors"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
            <div className="flex gap-8 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="font-label text-[11px] uppercase tracking-widest font-semibold">
                    {link.label}
                  </span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block lg:col-span-1 border-l border-gray-100 h-full" />

        {/* Right Column - Form */}
        <div className="lg:col-span-6">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label
                  className="block font-label text-[11px] uppercase tracking-[0.2em] text-secondary mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-gray-200 text-primary font-body text-lg py-3 px-0 focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-gray-300"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block font-label text-[11px] uppercase tracking-[0.2em] text-secondary mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-gray-200 text-primary font-body text-lg py-3 px-0 focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-gray-300"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-label text-[11px] uppercase tracking-[0.2em] text-secondary block">
                Inquiry Type
              </span>
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {['Data Engineering', 'Architecture Review', 'Consulting', 'Other'].map(
                  (option, i) => (
                    <label key={option} className="relative cursor-pointer group">
                      <input
                        className="peer sr-only"
                        defaultChecked={i === 0}
                        name="inquiry_type"
                        type="radio"
                        value={option.toLowerCase().replace(' ', '-')}
                      />
                      <span className="font-body text-sm text-secondary transition-colors group-hover:text-primary uppercase tracking-wider font-medium peer-checked:text-primary peer-checked:font-semibold">
                        {option}
                      </span>
                      <div className="absolute -bottom-2 left-0 w-full border-b-2 border-transparent opacity-0 transition-all duration-300 peer-checked:border-primary peer-checked:opacity-100" />
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label
                className="block font-label text-[11px] uppercase tracking-[0.2em] text-secondary mb-2"
                htmlFor="message"
              >
                Project Details
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-gray-200 text-primary font-body text-lg py-3 px-0 focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-gray-300 resize-none min-h-[120px]"
                id="message"
                name="message"
                placeholder="Briefly describe your project or question..."
                required
              />
            </div>

            <div className="pt-6">
              <button
                className="bg-primary text-white w-full md:w-auto px-12 py-5 rounded-[2px] font-semibold text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all duration-300 group"
                type="submit"
              >
                Send Message
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
