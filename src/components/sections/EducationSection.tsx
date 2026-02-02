'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'

export default function EducationSection() {
  return (
    <Card variant="default" padding="lg" className="mb-8 relative overflow-hidden">
      <div className="blur-sm pointer-events-none">
        <SectionHeading
          title="Education & Certifications"
          align="left"
          accentColor="primary"
        />
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-neutral-black mb-2">
              Education
            </h3>
            <p className="text-neutral-gray">
              Educational background and certifications will be displayed here.
            </p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10"
      >
        <div className="text-center p-8">
          <h3 className="text-2xl font-bold text-neutral-black mb-2">
            Coming Soon
          </h3>
          <p className="text-neutral-gray">
            Education & Certifications section will be updated soon.
          </p>
        </div>
      </motion.div>
    </Card>
  )
}
