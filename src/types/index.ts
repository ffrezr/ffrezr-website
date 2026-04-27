export interface Experience {
  role: string
  company: string
  client?: string
  period: string
  location: string
  highlights: string[]
  tags: string[]
}

export interface Project {
  slug: string
  title: string
  role: string
  period: string
  location: string
  description: string
  image?: string
  tags?: string[]
  type?: 'venture' | 'project' | 'product' | 'side-project'
  featured?: boolean
  published?: boolean
  display?: boolean
}

export interface ProjectContent extends Project {
  content: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Education {
  degree: string
  institution: string
  date: string
}

export interface Certification {
  name: string
  issuer: string
  hours?: number
  date?: string
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  published?: boolean
  display?: boolean
}

export interface ArticleContent extends Article {
  content: string
}

export interface SocialLink {
  icon: 'linkedin' | 'github' | 'medium'
  label: string
  url: string
}
