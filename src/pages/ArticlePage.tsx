import { useParams, Link } from 'react-router'
import { articles } from '../data/profile'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl font-headline font-light text-primary mb-4">Article not found</h1>
        <Link to="/blog" className="text-primary underline">
          Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-[88px] flex flex-col items-center pb-32">
      {/* Article Header */}
      <header className="w-full max-w-5xl px-6 md:px-12 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-8 text-[0.75rem] uppercase tracking-[0.05em] text-secondary font-bold font-label">
          <span className="text-primary">{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
          <span>{article.readTime}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-primary mb-8 max-w-4xl leading-tight font-headline">
          {article.title}
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-3xl leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Hero Image */}
      <div className="w-full max-w-7xl px-6 md:px-12 mb-24">
        <div className="aspect-[21/9] w-full rounded-sm bg-surface-container-low overflow-hidden relative shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
          <img alt={article.title} className="w-full h-full object-cover" src={article.image} />
        </div>
      </div>

      {/* Article Content */}
      <article className="w-full max-w-3xl px-6 md:px-0 font-body">
        <div className="text-lg md:text-xl leading-[1.8] text-on-surface-variant mb-12 drop-cap">
          For years, designers have relied on the humble one-pixel border to define space, separate
          content, and build the scaffolding of the internet. It was a crutch, a necessity born from
          an era where screen resolutions were low, and colors were limited. But as our digital
          canvases evolved, so too did our visual language. Today, we stand on the precipice of a new
          era in UI design: the era of tonal carving.
        </div>

        <p className="text-lg md:text-xl leading-[1.8] text-on-surface-variant mb-16">
          The concept is simple but profound: instead of drawing lines around things to indicate
          containment, we use subtle shifts in background color and ambient elevation to group
          elements visually. This approach, borrowed heavily from print editorial design and
          minimalist architecture, creates interfaces that feel less like software and more like
          curated spaces.
        </p>

        <div className="w-full bg-surface-container-low p-12 md:p-16 mb-16 rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
          <blockquote className="text-2xl md:text-3xl font-bold text-primary leading-tight tracking-[-0.01em]">
            "A line is an explicit command. A tonal shift is a gentle suggestion. In modern design,
            we prefer to guide users, not confine them."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-[0.75rem] uppercase tracking-[0.05em] font-bold text-secondary">
              Elena Rostova, Lead Designer
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 tracking-[-0.02em] font-headline">
          The Mechanics of Tonal Layering
        </h2>

        <p className="text-lg md:text-xl leading-[1.8] text-on-surface-variant mb-12">
          Removing borders requires a highly disciplined color palette. You can no longer rely on
          arbitrary grays; every shade must be purposeful. We typically employ a strategy of three to
          four 'surface' levels. The base layer acts as the floor, the primary canvas. The subsequent
          layers float slightly above, creating soft distinctions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-surface-container-lowest p-8 rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-primary mb-4 tracking-[-0.01em]">
              Level 0: The Canvas
            </h3>
            <p className="text-on-surface-variant text-base">
              The deepest background layer. Usually a warm off-white or a very soft gray. It
              provides the negative space.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-primary mb-4 tracking-[-0.01em]">
              Level 1: The Container
            </h3>
            <p className="text-on-surface-variant text-base">
              A slight tonal shift upwards. Used for large groups of content to distinguish them from
              the main canvas.
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl leading-[1.8] text-on-surface-variant mb-16">
          When you combine this disciplined palette with generous negative space — what we call "The
          Breather" — the need for hard lines vanishes entirely. The resulting interface feels fluid,
          expansive, and high-contrast, ensuring the actual content remains the undisputed center of
          gravity.
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 tracking-[-0.02em] font-headline">
          The Ghost Border Exception
        </h2>

        <p className="text-lg md:text-xl leading-[1.8] text-on-surface-variant mb-12">
          Are there exceptions? Of course. Input fields, for example, sometimes require more tactile
          definition than a simple background shift can provide. Here, we introduce the "Ghost
          Border" — a border set to a highly translucent state, often just 15% opacity. It provides
          the necessary structural hint without adding the visual noise of a solid line.
        </p>

        <div className="flex justify-center mb-16 pt-8">
          <button className="bg-transparent border-b border-primary pb-1 text-primary font-bold uppercase tracking-wide text-sm hover:border-b-2 transition-all duration-200">
            Share this article
          </button>
        </div>
      </article>
    </div>
  )
}
