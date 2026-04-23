import { Link } from 'react-router'
import type { Article } from '../../types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/blog/${article.slug}`} className="group cursor-pointer">
      <article className="flex flex-col gap-6">
        <div className="hero-image-frame overflow-hidden w-full aspect-[1.91/1] bg-surface-container-low">
          <img
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
            src={article.image}
          />
        </div>
        <div className="flex items-center gap-3 type-article-meta-grid text-outline">
          <span>{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />
          <span>{article.date}</span>
        </div>
        <h3 className="font-headline type-article-title-grid text-primary group-hover:text-accent-violet transition-colors">
          {article.title}
        </h3>
        <p className="text-on-surface-variant type-article-excerpt font-body line-clamp-3">
          {article.excerpt}
        </p>
      </article>
    </Link>
  )
}
