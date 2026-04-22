import { useState } from 'react'
import { Link } from 'react-router'
import ArticleCard from '../components/ui/ArticleCard'
import { getAllArticles, getArticleCategories } from '../lib/content'

export default function BlogPage() {
  const articles = getAllArticles()
  const categories = getArticleCategories()
  const [activeFilter, setActiveFilter] = useState('All')
  const featured = articles.find((a) => a.featured)
  const gridArticles = articles.filter((a) => !a.featured)
  const filtered =
    activeFilter === 'All'
      ? gridArticles
      : gridArticles.filter((a) => a.category === activeFilter)

  return (
    <div className="pt-32 w-full">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-20 flex flex-col gap-24 md:gap-32">
        {/* Header */}
        <section className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="font-headline type-display-large text-primary">
              Journal &amp;
              <br className="hidden md:block" />
              Insights
            </h1>
          </div>
          <div className="w-full md:w-1/3 pb-1 md:pb-3">
            <p className="font-body type-body-medium text-on-surface-variant max-w-sm">
              Exploring the intersection of data engineering, architecture, and the digital canvas. Thoughts on building robust systems.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-t border-surface-container-highest border-b border-surface-container-highest py-5 -mt-12 md:-mt-16">
          <div className="flex gap-10 overflow-x-auto whitespace-nowrap scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`type-label ${
                  activeFilter === cat
                    ? 'text-primary font-bold'
                    : 'text-secondary hover:text-primary transition-colors font-medium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center border-b border-surface-container-highest pb-24">
            <div className="w-full md:w-7/12 overflow-hidden bg-surface-container-low aspect-[4/5] md:aspect-auto">
              <img
                alt={featured.title}
                className="w-full h-[512px] md:h-[760px] object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
                src={featured.image}
              />
            </div>
            <div className="w-full md:w-5/12 flex flex-col justify-center gap-8">
              <div className="flex items-center gap-3 type-article-meta-grid text-secondary">
                <span>{featured.category}</span>
                <span className="text-surface-container-highest">/</span>
                <span>{featured.date}</span>
              </div>
              <h2 className="font-headline type-display-small text-primary">
                {featured.title}
              </h2>
              <p className="font-body type-body-medium text-on-surface-variant max-w-md">
                {featured.excerpt}
              </p>
              <Link
                to={`/blog/${featured.slug}`}
                className="group inline-flex items-center gap-3 text-primary type-button-editorial border-b border-primary/20 pb-2 w-fit mt-4 hover:border-primary transition-all duration-300"
              >
                Read Article
                <span className="material-symbols-outlined icon-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 mb-32">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      </div>
    </div>
  )
}
