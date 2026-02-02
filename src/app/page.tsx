import PageWrapper from '@/components/layout/PageWrapper'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedProjects />
      <CTASection />
    </PageWrapper>
  )
}
