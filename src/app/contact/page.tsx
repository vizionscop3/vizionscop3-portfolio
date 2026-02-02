'use client'

import { useState, FormEvent } from 'react'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { socialLinks } from '@/lib/constants'

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

const iconMap = {
  Linkedin: Linkedin,
  Github: Github,
  x: XLogo,
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Google Apps Script Web App URL
    // Replace this with your deployed Apps Script URL after setup
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE'
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you! Your message has been sent.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('There was an error sending your message. Please try again.')
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-neutral-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's start a conversation"
            align="center"
            accentColor="primary"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card variant="default" padding="lg">
              <h2 className="text-2xl font-bold text-neutral-black mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-neutral-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card variant="default" padding="lg">
                <h2 className="text-2xl font-bold text-neutral-black mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <a
                    href="mailto:admin@vizionscop3.com"
                    className="flex items-center space-x-3 text-neutral-dark hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>admin@vizionscop3.com</span>
                  </a>

                  <div className="flex items-start space-x-3 text-neutral-dark">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span>Brooklyn, NY</span>
                  </div>
                </div>
              </Card>

              <Card variant="default" padding="lg">
                <h2 className="text-2xl font-bold text-neutral-black mb-6">Connect on Social</h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon as keyof typeof iconMap]
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 border-2 border-neutral-black rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all"
                        aria-label={social.platform}
                        title={social.platform}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </a>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
