export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  heroImage: string
  screenshots: string[]
  problem: string
  solution: string
  techStack: string[]
  role: string
  contributions: string[]
  outcomes?: string[]
  links: {
    github?: string
    demo?: string
    caseStudy?: string
  }
  /** YouTube or Vimeo embed URL for demo video (e.g. https://www.youtube.com/embed/VIDEO_ID) */
  demoVideo?: string
  category: string[]
  featured: boolean
  status: 'completed' | 'in-progress' | 'concept'
}

export interface SkillCategory {
  name: string
  skills: string[]
}
