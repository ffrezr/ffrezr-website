import { useState } from 'react'
import ArticleCard from '../components/ui/ArticleCard'
import { getAllArticles, getArticleCategories } from '../lib/content'

export default function BlogPage() {
  const articles = getAllArticles()
  const categories = getArticleCategories()
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered =
    activeFilter === 'All'
      ? articles
      : articles.filter((a) => a.category === activeFilter)

  return (
    <div className="pt-40 w-full">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-24 md:gap-32">
        {/* Header */}
        <section className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="w-full md:w-2/3 space-y-6">
            <div className="hero-index-row inline-flex items-center gap-4">
              <span className="hero-index-marker" aria-hidden="true" />
              <span className="type-hero-terminal hero-index-text">
                ls blog/
              </span>
            </div>
            <h1 className="font-headline type-display-large text-primary">
              Journal &amp;
              <br className="hidden md:block" />
              <span className="hero-name-accent">Insights</span>
            </h1>
          </div>
          <div className="w-full md:w-1/3 pb-1 md:pb-3">
            <p className="font-body type-body-medium text-on-surface-variant max-w-sm">
              Exploring the intersection of data engineering, architecture, and the digital canvas. Thoughts on building robust systems.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="hairline-t hairline-b py-5 -mt-12 md:-mt-16">
          <div className="flex gap-10 overflow-x-auto whitespace-nowrap scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`type-label transition-colors ${
                  activeFilter === cat
                    ? 'text-accent-violet'
                    : 'text-secondary hover:text-accent-violet'
                }`}
                style={{ fontWeight: activeFilter === cat ? 700 : undefined }}
                onMouseEnter={(e) => { if (activeFilter !== cat) e.currentTarget.style.fontWeight = '700' }}
                onMouseLeave={(e) => { if (activeFilter !== cat) e.currentTarget.style.fontWeight = '' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="-mt-12 md:-mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 mb-32">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      </div>
    </div>
  )
}
