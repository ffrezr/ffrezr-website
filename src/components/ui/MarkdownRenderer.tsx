import { useState, Children, isValidElement, type ReactElement, type ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import type { Components } from 'react-markdown'
import ImageModal from './ImageModal'

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (isValidElement(node)) {
    const props = node.props as Record<string, unknown>
    if (props.children) return extractText(props.children as ReactNode)
  }
  return ''
}

function detectKeyTakeaways(children: ReactNode): ReactElement[] | null {
  const significant = Children.toArray(children).filter(
    (c) => !(typeof c === 'string' && !c.trim()) && (typeof c !== 'string' ? isValidElement(c) : true),
  )

  const header = significant[0]
  if (!isValidElement(header)) return null
  const headerText = extractText(header).trim()
  if (!/^key\s*takeaways?$/i.test(headerText)) return null

  const list = significant[1]
  if (!isValidElement(list)) return null

  const listProps = list.props as { children?: ReactNode }
  const items = Children.toArray(listProps.children).filter(isValidElement) as ReactElement[]
  return items.length > 0 ? items : null
}

function ArticleCodeWindow({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false)
  const codeText = extractText(children).replace(/\n$/, '')

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="article-code-window" role="group" aria-label="Code block">
      <div className="article-code-window-bar">
        <div className="article-code-window-controls" aria-hidden="true">
          <span className="article-code-window-dot article-code-window-dot-red" />
          <span className="article-code-window-dot article-code-window-dot-yellow" />
          <span className="article-code-window-dot article-code-window-dot-green" />
        </div>
        <button
          type="button"
          className="article-code-copy-button type-hero-terminal"
          onClick={handleCopy}
          aria-label={copied ? 'Code copied' : 'Copy code'}
          title={copied ? 'Code copied' : 'Copy code'}
        >
          <span className="material-symbols-outlined icon-sm" aria-hidden="true">
            {copied ? 'check' : 'content_copy'}
          </span>
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="article-code-window-body">{children}</pre>
    </div>
  )
}

const components: Components = {
  h2: ({ children, className }) => (
    <h2 className={className || 'type-headline-large font-semibold font-headline text-primary mb-8'}>
      {children}
    </h2>
  ),
  h3: ({ children, className }) => (
    <h3 className={className || 'type-headline-small font-headline text-primary mb-4'}>
      {children}
    </h3>
  ),
  p: ({ children, className }) => (
    <p className={className || 'type-article-body text-on-surface-variant mb-10'}>
      {children}
    </p>
  ),
  strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline hover:text-secondary transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-10 space-y-3 type-article-body text-on-surface-variant">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-10 space-y-3 type-article-body text-on-surface-variant">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => {
    const takeaways = detectKeyTakeaways(children)
    if (takeaways) {
      return (
        <aside className="key-takeaways w-full my-12 bg-surface-container-low/50 p-10 md:p-12 rounded-sm">
          <h4 className="font-headline text-lg font-bold text-primary mb-7 tracking-tight uppercase text-secondary">
            Key Takeaways
          </h4>
          <ul className="list-none m-0 p-0 space-y-5">
            {takeaways.map((item, i) => {
              const itemProps = item.props as { children?: ReactNode }
              return (
                <li key={i} className="flex items-start gap-4 text-on-surface-variant">
                  <span className="text-primary text-xl leading-none mt-0.5 shrink-0" style={{ fontFamily: 'var(--font-serif)' }}>
                    •
                  </span>
                  <span className="text-[1.0625rem] leading-[1.6]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {itemProps.children}
                  </span>
                </li>
              )
            })}
          </ul>
        </aside>
      )
    }

    const quoteLines: string[] = []
    let attribution = ''

    Children.forEach(children, (child) => {
      if (!isValidElement(child)) return
      const text = extractText(child).trim()
      if (!text) return
      if (text.startsWith('—') || text.startsWith('--')) {
        attribution = text.replace(/^—\s*|^--\s*/, '')
      } else {
        quoteLines.push(text)
      }
    })

    return (
      <div className="w-full bg-surface-container-low p-12 md:p-16 mb-16 rounded-sm shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
        <blockquote className="type-headline-large font-bold text-primary">
          {quoteLines.join(' ')}
        </blockquote>
        {attribution && (
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="type-label font-bold text-secondary">
              {attribution}
            </span>
          </div>
        )}
      </div>
    )
  },
  code: ({ children, className }) => {
    const isBlock = className?.startsWith('language-') || extractText(children).includes('\n')
    if (isBlock) return <code className={className}>{children}</code>
    return (
      <code className="text-[0.875em] bg-surface-container-low/50 text-secondary px-1.5 py-0.5 rounded-sm tracking-wide" style={{ fontFamily: '"SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", Menlo, monospace' }}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <ArticleCodeWindow>{children}</ArticleCodeWindow>
  ),
  hr: () => <hr className="border-t border-outline-variant my-16" />,
  table: ({ children }) => (
    <div className="article-table-frame">
      <table className="article-data-table">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="article-table-head">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="article-table-row">{children}</tr>,
  th: ({ children }) => (
    <th className="article-table-heading type-label">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="article-table-cell type-body-medium">
      {children}
    </td>
  ),
}

export default function MarkdownRenderer({ content, className = '' }: { content: string; className?: string }) {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)

  const imageComponents: Components = {
    ...components,
    img: ({ src, alt, title }) => (
      <figure
        className="w-full mb-12 cursor-pointer group"
        onClick={() => src && setExpandedImage({ src, alt: alt || '', caption: title || undefined })}
      >
        <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-sm bg-surface-container-high overflow-hidden shadow-[0px_24px_48px_rgba(0,0,0,0.04)] group-hover:opacity-90 transition-opacity">
          <img
            src={src}
            alt={alt || ''}
            className="w-full h-full object-cover"
          />
        </div>
        {title && (
          <figcaption className="mt-3 text-center text-sm text-secondary font-body italic">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <>{children}</>,
                code: ({ children }) => (
                  <code className="not-italic text-[0.875em] bg-surface-container-low/50 text-secondary px-1.5 py-0.5 rounded-sm tracking-wide" style={{ fontFamily: '"SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", Menlo, monospace' }}>
                    {children}
                  </code>
                ),
              }}
            >
              {title}
            </ReactMarkdown>
          </figcaption>
        )}
      </figure>
    ),
  }

  return (
    <>
      <ImageModal
        isOpen={!!expandedImage}
        onClose={() => setExpandedImage(null)}
        src={expandedImage?.src || ''}
        alt={expandedImage?.alt || ''}
        caption={expandedImage?.caption}
      />
      <div className={`markdown-body ${className}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={imageComponents}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}
