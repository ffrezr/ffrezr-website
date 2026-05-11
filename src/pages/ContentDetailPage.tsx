import React from 'react'
import { useParams, Link } from 'react-router'
import { getArticleBySlug, getProjectBySlug } from '../lib/content'
import MarkdownRenderer from '../components/ui/MarkdownRenderer'
import Tag from '../components/ui/Tag'

interface MetaItem {
  value: string
  primary?: boolean
}

interface Config {
  notFound: boolean
  notFoundMessage: string
  backRoute: string
  backLabel: string
  meta: MetaItem[]
  title: string
  subtitle: string
  tags?: string[]
  image?: string
  content?: string
  display?: boolean
  showShareButton?: boolean
  emptyTitle: string
  emptySubtitle: string
}

function buildArticleConfig(slug: string): Config {
  const article = getArticleBySlug(slug)
  return {
    notFound: !article,
    notFoundMessage: 'Article not found',
    backRoute: '/blog',
    backLabel: 'All Articles',
    meta: [
      { value: article?.category ?? '', primary: true },
      { value: article?.date ?? '' },
      { value: article?.readTime ?? '' },
    ],
    title: article?.title ?? '',
    subtitle: article?.excerpt ?? '',
    image: article?.image,
    content: article?.content,
    display: article?.display,
    showShareButton: true,
    emptyTitle: 'This article is coming soon.',
    emptySubtitle: "Stay tuned — I'm writing this one.",
  }
}

function buildProjectConfig(slug: string): Config {
  const project = getProjectBySlug(slug)
  const typeLabel =
    project?.type === 'venture' ? 'Venture'
    : project?.type === 'side-project' ? 'Side Project'
    : 'Project'
  return {
    notFound: !project,
    notFoundMessage: 'Project not found',
    backRoute: '/projects',
    backLabel: 'All Projects',
    meta: [
      { value: typeLabel, primary: true },
      { value: project?.role ?? '' },
      { value: project?.period ?? '' },
    ],
    title: project?.title ?? '',
    subtitle: project?.description ?? '',
    tags: project?.tags,
    image: project?.image,
    content: project?.content,
    display: project?.display,
    emptyTitle: 'The full story behind this project is coming soon.',
    emptySubtitle: "Stay tuned — I'm writing about this experience.",
  }
}

export default function ContentDetailPage({ contentType }: { contentType: 'article' | 'project' }) {
  const { slug } = useParams()
  const config = contentType === 'article'
    ? buildArticleConfig(slug!)
    : buildProjectConfig(slug!)

  const { notFound, notFoundMessage, backRoute, backLabel, meta, title, subtitle, tags,
    image, content, display, showShareButton, emptyTitle, emptySubtitle } = config

  if (notFound) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl font-headline font-light text-primary mb-4">{notFoundMessage}</h1>
        <Link to={backRoute} className="text-primary underline">
          {backLabel}
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-[88px] flex flex-col items-center pb-32 bg-surface-container-lowest">
      <header className="w-full max-w-5xl px-6 md:px-12 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="w-full max-w-[44rem] flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8 type-label text-secondary">
            {meta.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim" />}
                <span className={item.primary ? 'type-article-category text-primary' : undefined}>
                  {item.value}
                </span>
              </React.Fragment>
            ))}
          </div>
          <h1 className="type-display-large font-headline text-primary mb-8 md:text-7xl">
            {title}
          </h1>
          <p className="type-body-large text-on-surface-variant">
            {subtitle}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {tags.map((tag) => (
                <Tag key={tag} label={tag} size="lg" />
              ))}
            </div>
          )}
        </div>
      </header>

      {image && (
        <div className="w-full max-w-7xl px-6 md:px-12 mb-24">
          <div className="aspect-[21/9] w-full rounded-sm bg-surface-container-low overflow-hidden relative shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
            <img alt={title} className="w-full h-full object-cover" src={image} />
          </div>
        </div>
      )}

      <article className="w-full max-w-[44rem] px-6 md:px-0 font-body">
        {content && display !== false ? (
          <>
            <MarkdownRenderer content={content} />
            {showShareButton && (
              <div className="flex justify-center mb-16 pt-8">
                <button className="bg-transparent border-b border-primary pb-1 text-primary font-bold uppercase tracking-wide text-sm hover:border-b-2 transition-all duration-200">
                  Share this article
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-5xl text-secondary/30 mb-6 block">edit_note</span>
            <p className="text-lg text-on-surface-variant font-light mb-2">{emptyTitle}</p>
            <p className="text-sm text-secondary">{emptySubtitle}</p>
          </div>
        )}
      </article>

      <div className="mt-16">
        <Link
          to={backRoute}
          className="text-primary font-label text-[0.7rem] uppercase tracking-[0.2em] hover:text-secondary transition-colors inline-flex items-center gap-3 border-b border-primary pb-1"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          {backLabel}
        </Link>
      </div>
    </div>
  )
}
