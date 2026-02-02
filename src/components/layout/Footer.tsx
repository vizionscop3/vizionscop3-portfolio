import Link from 'next/link'
import { Linkedin, Github } from 'lucide-react'
import { navigation, socialLinks } from '@/lib/constants'

// X.com logo component (custom SVG)
const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const iconMap = {
    Linkedin: Linkedin,
    Github: Github,
    x: XLogo,
  }

  return (
    <footer className="bg-neutral-dark text-neutral-light border-t-2 border-neutral-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Lee Aulder</h3>
            <p className="text-neutral-gray text-sm">
              AI Product Designer & Technical Builder
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-gray hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border-2 border-neutral-gray hover:border-white transition-colors"
                    aria-label={social.platform}
                    title={social.platform}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-neutral-gray pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-gray">
          <p>© {currentYear} VizionScop3 LLC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  )
}
