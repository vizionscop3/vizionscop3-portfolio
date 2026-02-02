'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { navigation, ctaButton } from '@/lib/constants'
import Button from '@/components/ui/Button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-black/50 z-40 md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white border-l-2 border-neutral-black shadow-brutal-lg z-50 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-display font-bold">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md border-2 border-neutral-black"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col space-y-4 flex-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="text-lg font-medium text-neutral-dark hover:text-primary py-2 border-b-2 border-neutral-light"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="pt-6 border-t-2 border-neutral-black">
                <Link href={ctaButton.href} onClick={onClose}>
                  <Button variant="primary" size="md" fullWidth>
                    {ctaButton.label}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
