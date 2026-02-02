import Badge from '@/components/ui/Badge'

interface TechStackProps {
  technologies: string[]
  className?: string
}

export default function TechStack({ technologies, className }: TechStackProps) {
  return (
    <div className={className}>
      <h3 className="text-xl font-bold text-neutral-black mb-4">Technology Stack</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="primary" size="md">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
