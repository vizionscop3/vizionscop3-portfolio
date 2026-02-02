'use client'

import { useState } from 'react'
import Script from 'next/script'
import { Brain, Palette, Code, Sparkles } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    title: 'AI Product Strategy',
    description: 'From concept to implementation, integrating AI capabilities into your product.',
    icon: Brain,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design, prototyping, and design system development.',
    icon: Palette,
  },
  {
    title: 'Technical Development',
    description: 'Full-stack development, mobile apps, and AI/ML integration.',
    icon: Code,
  },
  {
    title: 'Creative Direction',
    description: 'Brand development, world-building, and visual storytelling.',
    icon: Sparkles,
  }
]

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope, but I typically work in 2-4 week sprints. Initial consultations help establish realistic timelines for your specific needs.'
  },
  {
    question: 'Do you work with startups or only established companies?',
    answer: 'I work with both startups and established companies. I particularly enjoy helping early-stage startups build their MVP and establish product-market fit.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing is project-based and depends on scope, timeline, and requirements. Let\'s schedule a consultation call to discuss your specific needs and provide a detailed quote.'
  },
  {
    question: 'Do you work remotely or on-site?',
    answer: 'I primarily work remotely, but I\'m based in Brooklyn, NY and can arrange on-site meetings when needed.'
  }
]

export default function ConsultationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <PageWrapper>
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="min-h-screen bg-neutral-light py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-black mb-4">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Whether you need AI product strategy, UI/UX design, technical development, 
              or creative direction, I'm here to help bring your vision to life.
            </p>
          </div>

          {/* Services */}
          <SectionHeading
            title="Services"
            subtitle="What I can help you with"
            align="center"
            accentColor="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} variant="default" padding="lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-md border-2 border-neutral-black" aria-hidden="true">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-black mb-2">
                        {service.title}
                      </h3>
                      <p className="text-neutral-dark">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Ideal Client */}
          <Card variant="default" padding="lg" className="mb-8">
            <SectionHeading
              title="Ideal Client Fit"
              align="left"
              accentColor="secondary"
            />
            <div className="space-y-4 text-lg text-neutral-dark">
              <p>
                I work best with founders, product managers, and creative directors who:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Value both technical excellence and creative vision</li>
                <li>Are building products that solve real problems</li>
                <li>Appreciate clear communication and transparent processes</li>
                <li>Want to leverage AI/ML capabilities thoughtfully</li>
                <li>Are committed to user-centered design principles</li>
              </ul>
            </div>
          </Card>

          {/* Pricing */}
          <Card variant="highlight" padding="lg" className="mb-8">
            <SectionHeading
              title="Pricing Transparency"
              align="left"
              accentColor="yellow"
            />
            <div className="space-y-4 text-lg text-neutral-dark">
              <p>
                I believe in transparent, fair pricing. All projects are quoted based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project scope and complexity</li>
                <li>Timeline and urgency</li>
                <li>Required expertise and resources</li>
                <li>Ongoing support needs</li>
              </ul>
              <p className="mt-4">
                <strong>Discovery calls are always free.</strong> Let's discuss your project 
                and I'll provide a detailed quote with no obligation.
              </p>
            </div>
          </Card>

          {/* Calendly Embed */}
          <Card variant="default" padding="lg" className="mb-8">
            <SectionHeading
              title="Schedule a Consultation"
              align="center"
              accentColor="primary"
            />
            <div className="text-center">
              <p className="text-lg text-neutral-dark mb-6">
                Book a free discovery call to discuss your project and see how we can work together.
              </p>
              {/* Calendly Inline Widget */}
              <div 
                className="calendly-inline-widget border-2 border-neutral-black rounded-md overflow-hidden"
                data-url="https://calendly.com/vizionscop3"
                style={{ minWidth: '320px', height: '700px' }}
                aria-label="Calendly scheduling widget"
              />
              <div className="mt-6">
                <a
                  href="https://calendly.com/vizionscop3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-dark hover:text-primary transition-colors underline"
                >
                  Or open in a new tab
                </a>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <Card variant="default" padding="lg">
            <SectionHeading
              title="Frequently Asked Questions"
              align="left"
              accentColor="secondary"
            />
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-neutral-black rounded-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-neutral-black">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-neutral-gray" aria-hidden="true">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div id={`faq-answer-${index}`} className="px-6 py-4 bg-neutral-light border-t-2 border-neutral-black">
                      <p className="text-neutral-dark">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  )
}
