import { useState } from 'react'
import { Link } from 'react-router'
import ArticleCard from '../components/ui/ArticleCard'
import { articles } from '../data/profile'

const categories = ['All', 'Design Theory', 'Typography', 'Layout', 'Case Studies']

export default function BlogPage() {
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
            <h1 className="font-headline text-[3rem] md:text-[5.5rem] font-light tracking-[-0.03em] text-primary leading-[0.95]">
              Journal &amp;
              <br className="hidden md:block" />
              Insights
            </h1>
          </div>
          <div className="w-full md:w-1/3 pb-1 md:pb-3">
            <p className="text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed font-body font-normal max-w-sm">
              Exploring the intersection of data engineering, architecture, and the digital canvas. Thoughts on building robust systems.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-t border-[#E2E2E2] border-b border-[#E2E2E2] py-5 -mt-12 md:-mt-16">
          <div className="flex gap-10 overflow-x-auto whitespace-nowrap scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[11px] tracking-[0.12em] uppercase ${
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
          <section className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center border-b border-[#E2E2E2] pb-24">
            <div className="w-full md:w-7/12 overflow-hidden bg-surface-container-low aspect-[4/5] md:aspect-auto">
              <img
                alt={featured.title}
                className="w-full h-[512px] md:h-[760px] object-cover grayscale hover:scale-105 transition-transform duration-1000 ease-in-out"
                src={featured.image}
              />
            </div>
            <div className="w-full md:w-5/12 flex flex-col justify-center gap-8">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5E5E5E]">
                <span>{featured.category}</span>
                <span className="text-[#E2E2E2]">/</span>
                <span>{featured.date}</span>
              </div>
              <h2 className="font-headline text-3xl md:text-[42px] font-semibold tracking-tight text-primary leading-[1.1]">
                {featured.title}
              </h2>
              <p className="text-on-surface-variant text-[14px] leading-[1.7] font-body max-w-md">
                {featured.excerpt}
              </p>
              <Link
                to={`/blog/${featured.slug}`}
                className="group inline-flex items-center gap-3 text-primary text-[12px] font-bold tracking-[0.1em] uppercase border-b border-primary/20 pb-2 w-fit mt-4 hover:border-primary transition-all duration-300"
              >
                Read Article
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
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
