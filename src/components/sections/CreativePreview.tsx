'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/utils'
import { creativePlaceholders } from '@/lib/image-utils'

const gothCharacters = [
  {
    name: 'Seer',
    image: creativePlaceholders['seer'] || '/images/creative/goth/seer.webp',
    description: 'Mystical guide through the chakra cities'
  },
  {
    name: 'Duke',
    image: creativePlaceholders['duke'] || '/images/creative/goth/duke.webp',
    description: 'Noble protector of the realm'
  },
  {
    name: 'Mama Patsy',
    image: creativePlaceholders['mama-patsy'] || '/images/creative/goth/mama-patsy.webp',
    description: 'Wise matriarch of the universe'
  }
]

export default function CreativePreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Creative Work"
          subtitle="Exploring the G.O.T.H Universe"
          align="center"
          accentColor="yellow"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp as any}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {gothCharacters.map((character, index) => (
            <motion.div
              key={character.name}
              variants={(index % 2 === 0 ? slideInFromLeft : slideInFromRight) as any}
            >
              <Card variant="interactive" padding="none">
                <div className="relative w-full h-64 bg-neutral-light">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-black mb-2">
                    {character.name}
                  </h3>
                  <p className="text-neutral-gray text-sm">
                    {character.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link href="/creative">
            <Button variant="primary" size="lg">
              Explore Full Creative Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
