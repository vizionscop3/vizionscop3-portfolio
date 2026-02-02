'use client'

import Image from 'next/image'
import { ExternalLink, Github, Play } from 'lucide-react'
import { Project } from '@/types'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import TechStack from './TechStack'

/** Normalize YouTube or Vimeo URL to embed URL for iframe */
function getEmbedUrl(url: string): string | null {
  if (!url?.trim()) return null
  const u = url.trim()
  const youtubeMatch = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/)
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  const vimeoMatch = u.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  if (u.startsWith('https://www.youtube.com/embed/') || u.startsWith('https://player.vimeo.com/video/')) return u
  return null
}

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const embedUrl = project.demoVideo ? getEmbedUrl(project.demoVideo) : null
  const hasLiveDemo = project.links?.demo && !project.links.demo.includes('[')

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-md overflow-hidden border-2 border-neutral-black bg-neutral-light">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-contain object-center p-4"
            sizes="100vw"
            priority
          />
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-black mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-neutral-gray mb-6">{project.tagline}</p>
        <p className="text-lg text-neutral-dark mb-8">{project.description}</p>

        {/* Primary CTA: Live demo / landing page for visitors and employers */}
        {hasLiveDemo && (
          <div className="mb-8 p-4 rounded-md border-2 border-neutral-black bg-white brutal-shadow">
            <p className="text-sm font-semibold text-neutral-gray uppercase tracking-wide mb-3">
              See it live
            </p>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary" size="lg" icon={<ExternalLink className="w-5 h-5" />}>
                Visit {project.title} landing page
              </Button>
            </a>
          </div>
        )}

        {/* Other links */}
        {project.links && (
          <div className="flex flex-wrap gap-4">
            {project.links.github &&
             !project.links.github.includes('[profile]') &&
             !project.links.github.includes('[') && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" size="md" icon={<Github className="w-5 h-5" />}>
                  View on GitHub
                </Button>
              </a>
            )}
            {project.links.caseStudy &&
             !project.links.caseStudy.includes('[') && (
              <a
                href={project.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="secondary" size="md" icon={<ExternalLink className="w-5 h-5" />}>
                  Case Study
                </Button>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Problem Statement */}
      <Card variant="default" padding="lg" className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-black mb-4">Problem</h2>
        <p className="text-lg text-neutral-dark leading-relaxed">{project.problem}</p>
      </Card>

      {/* Solution */}
      <Card variant="default" padding="lg" className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-black mb-4">Solution</h2>
        <p className="text-lg text-neutral-dark leading-relaxed">{project.solution}</p>
      </Card>

      {/* Demo Video - for visitors and employers */}
      {embedUrl && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-black mb-4 flex items-center gap-2">
            <Play className="w-6 h-6" aria-hidden />
            Demo video
          </h2>
          <div className="relative w-full rounded-md overflow-hidden border-2 border-neutral-black aspect-video bg-neutral-black">
            <iframe
              src={embedUrl}
              title={`${project.title} demo video`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-black mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-md overflow-hidden border-2 border-neutral-black bg-neutral-light"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-contain object-center p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-8">
        <TechStack technologies={project.techStack} />
      </div>

      {/* Role & Contributions */}
      <Card variant="default" padding="lg" className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-black mb-4">My Role</h2>
        <p className="text-lg text-neutral-dark mb-6">{project.role}</p>
        <h3 className="text-xl font-semibold text-neutral-black mb-4">Key Contributions</h3>
        <ul className="list-disc list-inside space-y-2 text-neutral-dark">
          {project.contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
      </Card>

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <Card variant="highlight" padding="lg">
          <h2 className="text-2xl font-bold text-neutral-black mb-4">Outcomes & Impact</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-dark">
            {project.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}
