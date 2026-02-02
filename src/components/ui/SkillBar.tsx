import Badge from './Badge'

interface SkillBarProps {
  skills: string[]
  className?: string
}

export default function SkillBar({ skills, className }: SkillBarProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      {skills.map((skill) => (
        <Badge key={skill} variant="default" size="md">
          {skill}
        </Badge>
      ))}
    </div>
  )
}
