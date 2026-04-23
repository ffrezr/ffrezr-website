import { Children, isValidElement, type ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import type { Components } from 'react-markdown'

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (isValidElement(node)) {
    const props = node.props as Record<string, unknown>
    if (props.children) return extractText(props.children as ReactNode)
  }
  return ''
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
    <p className={className || 'type-body-large text-on-surface-variant mb-12'}>
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
    <ul className="list-disc list-outside ml-6 mb-12 space-y-2 type-body-large text-on-surface-variant">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-12 space-y-2 type-body-large text-on-surface-variant">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.8]">{children}</li>,
  blockquote: ({ children }) => {
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
  hr: () => <hr className="border-t border-outline-variant my-16" />,
  img: ({ src, alt }) => (
    <div className="w-full aspect-[4/3] md:aspect-[16/9] mb-12 rounded-sm bg-surface-container-high overflow-hidden shadow-[0px_24px_48px_rgba(0,0,0,0.04)]">
      <img
        src={src}
        alt={alt || ''}
        className="w-full h-full object-cover"
      />
    </div>
  ),
}

export default function MarkdownRenderer({ content, className = '' }: { content: string; className?: string }) {
  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
