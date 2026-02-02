import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align: 'left' | 'center'
  accentColor?: 'primary' | 'secondary' | 'yellow'
  className?: string
}

const accentColors = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  yellow: 'bg-accent-yellow',
}

export default function SectionHeading({
  title,
  subtitle,
  align,
  accentColor = 'primary',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
      <h2 className="text-display-md md:text-display-lg font-bold text-neutral-black mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-gray mb-4">{subtitle}</p>
      )}
      <div
        className={cn(
          'h-2 w-16 border-2 border-neutral-black',
          accentColors[accentColor],
          align === 'center' && 'mx-auto'
        )}
      />
    </div>
  )
}
