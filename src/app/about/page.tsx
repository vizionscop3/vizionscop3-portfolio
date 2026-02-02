import Image from 'next/image'
import PageWrapper from '@/components/layout/PageWrapper'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import ResumeEmbed from '@/components/sections/ResumeEmbed'
import EducationSection from '@/components/sections/EducationSection'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-neutral-light py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Section */}
          <div className="text-center mb-12">
            <div 
              className="relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-neutral-black shadow-brutal-lg"
              style={{
                width: 'fit-content',
                height: 'fit-content',
                maxWidth: '',
                maxHeight: ''
              }}
            >
              <Image
                src="/images/profile/headshot.png"
                alt="Lee Aulder"
                width={225}
                height={225}
                className="object-cover"
                style={{ 
                  objectPosition: '55% 60%',
                  width: '225px',
                  minWidth: '225px'
                }}
                sizes="192px"
              />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-black mb-2">
              Lee Aulder
            </h1>
            <p className="text-xl text-neutral-gray mb-6">
              AI Product Designer & Technical Builder
            </p>
          </div>

          {/* Embedded Resume */}
          <Card variant="default" padding="lg" className="mb-8">
            <SectionHeading
              title="Resume"
              align="left"
              accentColor="primary"
            />
            <ResumeEmbed />
          </Card>

          {/* Career Narrative */}
          <Card variant="default" padding="lg" className="mb-8">
            <SectionHeading
              title="My Story"
              align="left"
              accentColor="primary"
            />
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-gray leading-relaxed mb-4">
                I'm Lee Aulder (Vizion), a Brooklyn-based AI Product Designer and Technical Builder 
                with a unique blend of military discipline, AI-native development expertise, and 
                culturally-grounded creative vision.
              </p>
              <p className="text-neutral-gray leading-relaxed mb-4">
                My journey spans from structured military environments to cutting-edge AI product 
                development, always with a focus on building products that matter. I specialize in 
                bridging the gap between technical excellence and creative innovation.
              </p>
              <p className="text-neutral-gray leading-relaxed">
                As the founder of VizionScop3 LLC, I'm committed to creating solutions that combine 
                technical rigor with creative authenticity, whether that's building AI-powered 
                applications, designing intuitive user experiences, or developing creative universes 
                that tell meaningful stories.
              </p>
            </div>
          </Card>

          {/* Education & Certifications */}
          <EducationSection />
        </div>
      </div>
    </PageWrapper>
  )
}
