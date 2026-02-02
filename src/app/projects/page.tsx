'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectGrid from '@/components/project/ProjectGrid'

const categories = ['all', 'ai-ml', 'mobile', 'healthcare', 'creative', 'hackathon']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => 
        project.category.some(cat => 
          cat.toLowerCase().replace(/\s+/g, '-') === activeFilter
        )
      )

  return (
    <PageWrapper>
      <div className="min-h-screen bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Projects"
            subtitle="A collection of my work"
            align="left"
            accentColor="primary"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                role="tab"
                aria-selected={activeFilter === category}
                aria-controls={`projects-${category}`}
                className={`
                  px-4 py-2 rounded-full border-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary
                  ${
                    activeFilter === category
                      ? 'bg-primary text-white border-neutral-black shadow-brutal-sm'
                      : 'bg-white text-neutral-dark border-neutral-black hover:bg-neutral-light'
                  }
                `}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div id={`projects-${activeFilter}`} role="tabpanel">
            <ProjectGrid projects={filteredProjects} />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
