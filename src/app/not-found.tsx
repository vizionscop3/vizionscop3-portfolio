import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light px-4">
      <div className="text-center">
        <h1 className="text-display-lg font-bold text-neutral-black mb-4">404</h1>
        <p className="text-xl text-neutral-gray mb-8">Page not found</p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
