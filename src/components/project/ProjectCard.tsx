'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { projectPlaceholders } from '@/lib/image-utils'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="h-full"
      >
        <Card variant="interactive" padding="none" className="h-full flex flex-col">
          <div className="relative w-full h-48 bg-neutral-light flex-shrink-0">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className={project.heroImage.endsWith('.svg') ? 'object-contain p-4' : 'object-cover'}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {project.slug === 't-trac' && (
              <div className="absolute top-2 right-2 z-10">
                <Badge variant="primary" size="sm">Live</Badge>
              </div>
            )}
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-neutral-black">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                {project.status === 'in-progress' && (
                  <Badge variant="secondary" size="sm">
                    In Progress
                  </Badge>
                )}
              </div>
            </div>
            <p className="text-neutral-gray mb-4">{project.tagline}</p>
            <p className="text-sm text-neutral-gray mb-4 line-clamp-2 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.category.slice(0, 3).map((cat) => (
                <Badge key={cat} variant="outline" size="sm">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}
