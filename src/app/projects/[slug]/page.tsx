import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/data/projects'
import ProjectDetail from '@/components/project/ProjectDetail'

// Revalidate so project data (e.g. demo links) updates without full rebuild
export const revalidate = 60

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <ProjectDetail project={project} />
    </div>
  )
}
