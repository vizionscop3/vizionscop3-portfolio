'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
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

export default function CreativePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <PageWrapper>
      <div className="min-h-screen bg-neutral-light py-12 relative">
        {/* Blurred Content */}
        <div className="blur-sm pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Creative Work"
              subtitle="Exploring the G.O.T.H Universe"
              align="center"
              accentColor="yellow"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {gothCharacters.map((character) => (
                <div
                  key={character.name}
                  className="bg-white border-2 border-neutral-black rounded-md shadow-brutal-md overflow-hidden"
                >
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coming Soon Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10"
        >
          <div className="text-center p-8 bg-white border-2 border-neutral-black rounded-md shadow-brutal-lg max-w-md mx-4">
            <h2 className="text-display-md font-bold text-neutral-black mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-gray">
              The Creative portfolio is being updated with new work. Check back soon!
            </p>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-neutral-black/90 z-50 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-label="Image lightbox"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="relative max-w-4xl max-h-[90vh] w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full border-2 border-neutral-black z-10 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Close lightbox"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="relative w-full h-[80vh] rounded-md overflow-hidden border-4 border-neutral-black">
                    <Image
                      src={selectedImage || creativePlaceholders['seer']}
                      alt="Creative work"
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  )
}
