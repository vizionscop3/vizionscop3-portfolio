'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/utils'

const skillCategories = {
  'Technical': ['Python', 'JavaScript/TypeScript', 'React/React Native', 'Next.js', 'Node.js'],
  'AI/ML': ['Machine Learning', 'LLM Integration', 'Prompt Engineering'],
  'Product': ['User Research', 'PRD Writing', 'Roadmapping', 'Agile/Scrum'],
  'Design': ['UI/UX Design', 'Figma', 'Design Systems', 'Prototyping'],
}

export default function SkillsOverview() {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A condensed overview of my capabilities"
          align="center"
          accentColor="secondary"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white border-2 border-neutral-black rounded-md p-6 shadow-brutal-sm">
              <h3 className="text-xl font-bold text-neutral-black mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link href="/about">
            <Button variant="secondary" size="lg">
              View Full Skills & Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
