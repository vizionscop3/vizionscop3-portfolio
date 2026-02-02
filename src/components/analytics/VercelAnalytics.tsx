'use client'

import { Analytics } from '@vercel/analytics/react'

export default function VercelAnalytics() {
  // Analytics automatically works on Vercel deployments
  // Will be ignored/not load on other platforms
  return <Analytics />
}
