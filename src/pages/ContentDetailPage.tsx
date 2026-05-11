import React from 'react'
import { useParams, Link } from 'react-router'
import { getArticleBySlug, getProjectBySlug } from '../lib/content'
import MarkdownRenderer from '../components/ui/MarkdownRenderer'
import Tag from '../components/ui/Tag'
import { profile, socialLinks } from '../data/profile'
import type { ArticleContent, FaqItem } from '../types'

const SITE_URL = 'https://ffrezr.dev'

interface MetaItem {
  value: string
  primary?: boolean
}

interface SeoMeta {
  description: string
  canonical: string
  ogImage: string
  jsonLd: Record<string, unknown>[]
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
  seo?: SeoMeta
}

function toAbsoluteUrl(path: string | undefined): string {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function toIsoDate(input?: string): string | undefined {
  if (!input) return undefined
  const d = new Date(input)
  return isNaN(d.getTime()) ? undefined : d.toISOString()
}

function buildArticleJsonLd(article: ArticleContent, canonical: string, ogImage: string): Record<string, unknown>[] {
  const datePublished = toIsoDate(article.date)
  const dateModified = toIsoDate(article.lastUpdated) ?? datePublished

  const blogPosting: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription ?? article.excerpt,
    image: ogImage,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    url: canonical,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: profile.fullName,
      url: `${SITE_URL}/about`,
      sameAs: socialLinks.map((s) => s.url),
    },
    publisher: {
      '@type': 'Person',
      name: profile.fullName,
      url: SITE_URL,
    },
    articleSection: article.category,
    keywords: article.tags?.join(', '),
  }
  if (datePublished) blogPosting.datePublished = datePublished
  if (dateModified) blogPosting.dateModified = dateModified

  const jsonLd: Record<string, unknown>[] = [blogPosting]

  if (article.faq && article.faq.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faq.map((f: FaqItem) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return jsonLd
}

function buildArticleConfig(slug: string): Config {
  const article = getArticleBySlug(slug)
  const canonical = `${SITE_URL}/blog/${slug}`
  const ogImage = toAbsoluteUrl(article?.image)
  const seo: SeoMeta | undefined = article
    ? {
        description: article.metaDescription ?? article.excerpt,
        canonical,
        ogImage,
        jsonLd: buildArticleJsonLd(article, canonical, ogImage),
      }
    : undefined

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
    tags: article?.tags,
    image: article?.image,
    content: article?.content,
    display: article?.display,
    showShareButton: true,
    emptyTitle: 'This article is coming soon.',
    emptySubtitle: "Stay tuned — I'm writing this one.",
    seo,
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
    image, content, display, showShareButton, emptyTitle, emptySubtitle, seo } = config

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
      {seo && (
        <>
          <title>{`${title} — ${profile.name}`}</title>
          <meta name="description" content={seo.description} />
          <link rel="canonical" href={seo.canonical} />
          <meta property="og:type" content={contentType === 'article' ? 'article' : 'website'} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:url" content={seo.canonical} />
          {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={seo.description} />
          {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}
          {seo.jsonLd.map((schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
        </>
      )}
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
        <div className="w-full max-w-7xl px-6 md:px-12 mb-24 flex justify-center">
          <div className="rounded-sm bg-surface-container-low overflow-hidden relative shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
            <img alt={title} className="block max-w-full h-auto" src={image} decoding="async" fetchPriority="high" />
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
