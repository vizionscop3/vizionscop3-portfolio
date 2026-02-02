'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { fadeInUp } from '@/lib/utils'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card variant="highlight" padding="lg" className="text-center">
            <h2 className="text-display-md md:text-display-lg font-bold text-neutral-black mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg md:text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
              Whether you need AI product strategy, UI/UX design, technical development, or creative direction, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="primary" size="lg">
                  Book a Consultation Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
