import { useParams, Link } from 'react-router'
import { getArticleBySlug } from '../lib/content'
import MarkdownRenderer from '../components/ui/MarkdownRenderer'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug!)

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
    <div className="pt-[88px] flex flex-col items-center pb-32 bg-surface-container-lowest">
      {/* Article Header */}
      <header className="w-full max-w-5xl px-6 md:px-12 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="w-full max-w-[44rem] flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8 type-label text-secondary">
            <span className="type-article-category text-primary">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
            <span>{article.readTime}</span>
          </div>
          <h1 className="type-display-large font-headline text-primary mb-8 md:text-7xl">
            {article.title}
          </h1>
          <p className="type-body-large text-on-surface-variant">
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full max-w-7xl px-6 md:px-12 mb-24">
        <div className="aspect-[21/9] w-full rounded-sm bg-surface-container-low overflow-hidden relative shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
          <img alt={article.title} className="w-full h-full object-cover" src={article.image} />
        </div>
      </div>

      {/* Article Content */}
      <article className="w-full max-w-[44rem] px-6 md:px-0 font-body">
        {article.content && article.display !== false ? (
          <>
            <MarkdownRenderer content={article.content} />
            <div className="flex justify-center mb-16 pt-8">
              <button className="bg-transparent border-b border-primary pb-1 text-primary font-bold uppercase tracking-wide text-sm hover:border-b-2 transition-all duration-200">
                Share this article
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-5xl text-secondary/30 mb-6 block">edit_note</span>
            <p className="text-lg text-on-surface-variant font-light mb-2">
              This article is coming soon.
            </p>
            <p className="text-sm text-secondary">
              Stay tuned — I'm writing this one.
            </p>
          </div>
        )}
      </article>

      {/* Back link */}
      <div className="mt-16">
        <Link
          to="/blog"
          className="text-primary font-label text-[0.7rem] uppercase tracking-[0.2em] hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          All Articles
        </Link>
      </div>
    </div>
  )
}
