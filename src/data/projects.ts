import { Project } from '@/types'
import { projectPlaceholders } from '@/lib/image-utils'

// Helper to get image with fallback
function getImagePath(path: string, placeholderKey: keyof typeof projectPlaceholders): string {
  // In development, use placeholders if file doesn't exist
  // In production, use actual path
  return path
}

export const projects: Project[] = [
  {
    slug: 't-trac',
    title: 'T-Trac',
    tagline: 'HRT medication tracking app with AI companion',
    description: 'A comprehensive hormone replacement therapy tracking application with AI-powered insights and support features. Designed and built to demonstrate end-to-end product design: research, UX, UI, and implementation.',
    heroImage: '/images/projects/ttrac-logo-horizontal.svg',
    screenshots: [
      '/images/projects/ttrac-hero.svg',
      '/images/projects/ttrac-logo-drop-track.svg',
      // Add app screenshots when ready: ttrac-screenshot-1.png, ttrac-screenshot-2.png, etc.
    ],
    problem: 'Managing HRT medication schedules, tracking symptoms, and understanding treatment progress can be overwhelming without proper tools.',
    solution: 'T-Trac provides an intuitive interface for medication tracking, symptom logging, and AI-powered insights to help users better understand their treatment journey. The landing page and app showcase product design from concept to shipped experience.',
    techStack: ['React Native', 'TypeScript', 'AI/ML', 'Firebase'],
    role: 'Product Designer & Lead Developer',
    contributions: [
      'End-to-end product design: research, UX flows, and visual design',
      'Designed and implemented the core tracking interface',
      'Integrated AI companion for personalized insights',
      'Built data visualization for treatment progress',
      'Created user onboarding and landing page experience'
    ],
    outcomes: [
      'Shipped landing page and app demonstrating product design capability',
      'Improved medication adherence tracking',
      'Enhanced user engagement through AI features'
    ],
    links: {
      github: 'https://github.com/[profile]/t-trac',
      demo: 'https://ttrac.vercel.app/',
    },
    demoVideo: '', // Add YouTube or Vimeo embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID) when ready
    category: ['mobile', 'healthcare', 'ai-ml', 'product-design'],
    featured: true,
    status: 'completed'
  },
  {
    slug: 'chessmaster-ai',
    title: 'ChessMaster AI',
    tagline: 'Real-time AI chess coaching platform',
    description: 'An AI-powered chess coaching platform that provides real-time analysis and personalized training recommendations.',
    heroImage: '/images/projects/style3-checkered-light.svg',
    screenshots: [
      projectPlaceholders['chessmaster-screens'] || '/images/projects/chessmaster-screens.webp'
    ],
    problem: 'Chess players need accessible, personalized coaching that adapts to their skill level and learning style.',
    solution: 'ChessMaster AI uses advanced chess engines and machine learning to provide real-time game analysis, move suggestions, and personalized training plans.',
    techStack: ['React', 'Python', 'TensorFlow', 'Chess Engine API'],
    role: 'Full Stack Developer & AI Engineer',
    contributions: [
      'Developed real-time game analysis engine',
      'Built interactive chess board interface',
      'Implemented AI coaching algorithms',
      'Created user progress tracking system'
    ],
    outcomes: [
      'Enabled personalized chess training',
      'Improved user skill development tracking'
    ],
    links: {
      github: 'https://github.com/[profile]/chessmaster-ai',
    },
    category: ['ai-ml', 'gaming', 'mobile'],
    featured: true,
    status: 'completed'
  },
  {
    slug: 'the-masjid',
    title: 'The Masjid',
    tagline: 'Islamic prayer companion application',
    description: 'A mobile application designed to help Muslims track prayers, find nearby mosques, and access Islamic resources.',
    heroImage: '/images/projects/masjid-logo.svg',
    screenshots: [
      projectPlaceholders['masjid-screens'] || '/images/projects/masjid-screens.webp'
    ],
    problem: 'Muslims need a reliable, user-friendly tool to track prayer times, find mosques, and access Islamic resources on the go.',
    solution: 'The Masjid provides accurate prayer times based on location, mosque finder with directions, and curated Islamic content and resources.',
    techStack: ['React Native', 'TypeScript', 'Location Services', 'APIs'],
    role: 'Lead Developer & UX Designer',
    contributions: [
      'Designed intuitive prayer tracking interface',
      'Integrated location-based services',
      'Built mosque finder with map integration',
      'Created content management system for resources'
    ],
    links: {
      github: 'https://github.com/[profile]/the-masjid',
      demo: 'https://themasjid.vercel.app/',
    },
    outcomes: [
      'Shipped beta (v5) with AI-powered Islamic education and The Imam companion',
      'Prayer times, Qibla, Quran & recitation, and guided Salah features',
      'TestFlight (iOS) and Android APK available for beta testers',
    ],
    category: ['mobile', 'community'],
    featured: true,
    status: 'completed'
  },
  {
    slug: 'ai-floor-plan-insights',
    title: 'AI Floor Plan Insights',
    tagline: 'AI-powered real estate analysis tool',
    description: 'A hackathon project that uses AI to analyze floor plans and provide insights on space utilization, design recommendations, and property value estimates.',
    heroImage: '/images/projects/floorplan-hero.png',
    screenshots: [
      projectPlaceholders['floorplan-screens'] || '/images/projects/floorplan-screens.webp'
    ],
    problem: 'Real estate professionals and buyers need quick, accurate analysis of floor plans to make informed decisions.',
    solution: 'AI Floor Plan Insights uses computer vision and machine learning to analyze floor plans, providing instant insights on space efficiency, design potential, and market value.',
    techStack: ['Next.js', 'Python', 'Computer Vision', 'ML Models'],
    role: 'Full Stack Developer & AI Engineer',
    contributions: [
      'Developed floor plan image processing pipeline',
      'Built AI analysis engine for space utilization',
      'Created interactive visualization dashboard',
      'Implemented property value estimation model'
    ],
    outcomes: [
      'Won hackathon prize for innovation',
      'Demonstrated practical AI application in real estate'
    ],
    links: {
      github: 'https://github.com/[profile]/ai-floor-plan-insights',
    },
    category: ['hackathon', 'ai-ml', 'real-estate'],
    featured: true,
    status: 'completed'
  }
]

export const featuredProjects = projects.filter(project => project.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
