'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/utils'
import { projectPlaceholders } from '@/lib/image-utils'

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work"
          align="left"
          accentColor="primary"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              <Link href={`/projects/${project.slug}`}>
                <Card variant="interactive" padding="none" className="h-full flex flex-col">
                  <div className="relative w-full h-48 bg-neutral-light flex-shrink-0">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-neutral-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-gray mb-4">
                      {project.tagline}
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
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
