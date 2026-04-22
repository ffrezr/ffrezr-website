import { Link } from 'react-router'
import type { Article } from '../../types'

interface ArticleCardProps {
  article: Article
  variant?: 'grid' | 'compact'
}

export default function ArticleCard({ article, variant = 'grid' }: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <Link to={`/blog/${article.slug}`} className="group cursor-pointer">
        <article>
          <div className="hero-image-frame aspect-[16/10] overflow-hidden mb-10 bg-surface-container-low">
            <img
              alt={article.title}
              className="w-full h-full object-cover"
              src={article.image}
            />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="type-article-category font-label text-primary">
              {article.category}
            </span>
            <span className="w-1 h-1 bg-secondary-fixed-dim rounded-full" />
            <span className="type-article-meta text-secondary font-body">
              {article.readTime}
            </span>
          </div>
          <h3 className="font-headline type-article-title-compact text-primary group-hover:underline decoration-1 underline-offset-8 transition-all">
            {article.title}
          </h3>
        </article>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${article.slug}`} className="group cursor-pointer">
      <article className="flex flex-col gap-6">
        <div className="overflow-hidden w-full h-[480px] bg-white border border-surface-container-highest/30">
          <img
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            src={article.image}
          />
        </div>
        <div className="flex items-center gap-3 type-article-meta-grid text-outline">
          <span>{article.category}</span>
          <span className="text-surface-container-highest">/</span>
          <span>{article.date}</span>
        </div>
        <h3 className="font-headline type-article-title-grid text-primary group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-on-surface-variant type-article-excerpt font-body line-clamp-3">
          {article.excerpt}
        </p>
      </article>
    </Link>
  )
}
