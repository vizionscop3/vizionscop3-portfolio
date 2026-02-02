'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/utils'

const heroContent = {
  greeting: "Hey, I'm",
  name: "Lee Aulder",
  tagline: "AI Product Designer & Technical Builder",
  description: "Bridging military-grade discipline, AI-native development, and culturally-grounded creative vision. Building products that matter.",
  primaryCTA: {
    text: "View My Work",
    href: "/projects"
  },
  secondaryCTA: {
    text: "Book Consultation",
    href: "/consultation"
  }
}

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-neutral-cream to-neutral-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInFromLeft}
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-neutral-gray mb-2"
            >
              {heroContent.greeting}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-display-sm md:text-display-xl font-bold text-primary mb-4"
            >
              {heroContent.name}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-display-sm md:text-2xl font-semibold text-neutral-dark mb-6"
            >
              {heroContent.tagline}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-neutral-gray mb-8 max-w-2xl"
            >
              {heroContent.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={heroContent.primaryCTA.href}>
                <Button variant="primary" size="lg">
                  {heroContent.primaryCTA.text}
                </Button>
              </Link>
              <Link href={heroContent.secondaryCTA.href}>
                <Button variant="outline" size="lg">
                  {heroContent.secondaryCTA.text}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInFromRight}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Abstract geometric pattern */}
              <div className="relative w-full h-96">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary border-2 border-neutral-black shadow-brutal-lg transform rotate-12"></div>
                <div className="absolute top-20 right-0 w-48 h-48 bg-secondary border-2 border-neutral-black shadow-brutal-md transform -rotate-12"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-accent-yellow border-2 border-neutral-black shadow-brutal-md transform rotate-45"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
