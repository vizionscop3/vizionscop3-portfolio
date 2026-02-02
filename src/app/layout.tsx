import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import VercelAnalytics from '@/components/analytics/VercelAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://proof-lac.vercel.app'),
  title: {
    default: 'Lee Aulder | AI Product Designer & Technical Builder',
    template: '%s | Lee Aulder'
  },
  description: 'Portfolio of Lee Aulder (Vizion) — AI Product Designer, Technical Builder, and Creative Technologist. Founder of VizionScop3 LLC.',
  keywords: ['AI Product Designer', 'Full Stack Developer', 'UI/UX Designer', 'Brooklyn', 'React', 'Next.js', 'Machine Learning'],
  authors: [{ name: 'Lee Aulder' }],
  creator: 'Lee Aulder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://proof-lac.vercel.app',
    siteName: 'Lee Aulder Portfolio',
    title: 'Lee Aulder | AI Product Designer & Technical Builder',
    description: 'Bridging military-grade discipline, AI-native development, and culturally-grounded creative vision.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Lee Aulder Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lee Aulder | AI Product Designer & Technical Builder',
    description: 'Bridging military-grade discipline, AI-native development, and culturally-grounded creative vision.',
    images: ['/og-image.webp']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:border-2 focus:border-neutral-black"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16 md:pt-20 bg-neutral-cream min-h-screen">
          {children}
        </main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  )
}
