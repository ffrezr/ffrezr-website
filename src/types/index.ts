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
  title: string
  role: string
  period: string
  location: string
  description: string
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
}

export interface SocialLink {
  label: string
  url: string
}
