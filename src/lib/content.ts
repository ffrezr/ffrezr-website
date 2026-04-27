import { parse as parseYaml } from 'yaml'
import type { Project, ProjectContent, Article, ArticleContent } from '../types'

const projectFiles = import.meta.glob('../content/projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const articleFiles = import.meta.glob('../content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parseFrontmatter<T>(raw: string): { data: T; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {} as T, content: raw.trim() }
  const data = parseYaml(match[1]) as T
  return { data, content: match[2].trim() }
}

function parsePeriodEndDate(period: string): number {
  const end = period.split('—').pop()?.trim() ?? ''
  if (end.toLowerCase() === 'present') return Date.now()
  const parsed = new Date(end)
  return isNaN(parsed.getTime()) ? 0 : parsed.getTime()
}

function isPublished<T extends { published?: boolean }>(item: T): boolean {
  return item.published !== false
}

export function getAllProjects(): Project[] {
  return Object.values(projectFiles)
    .map((raw) => parseFrontmatter<Project>(raw).data)
    .filter(isPublished)
    .sort((a, b) => parsePeriodEndDate(b.period) - parsePeriodEndDate(a.period))
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  const entry = Object.values(projectFiles)
    .map((raw) => parseFrontmatter<Project>(raw))
    .find((p) => p.data.slug === slug && isPublished(p.data))
  if (!entry) return undefined
  return { ...entry.data, content: entry.content }
}

export function getAllArticles(): Article[] {
  return Object.values(articleFiles)
    .map((raw) => parseFrontmatter<Article>(raw).data)
    .filter(isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  const entry = Object.values(articleFiles)
    .map((raw) => parseFrontmatter<Article>(raw))
    .find((a) => a.data.slug === slug && isPublished(a.data))
  if (!entry) return undefined
  return { ...entry.data, content: entry.content }
}

export function getArticleCategories(): string[] {
  const cats = new Set(getAllArticles().map((a) => a.category))
  return ['All', ...Array.from(cats).sort()]
}
