import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  variant: 'default' | 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md'
  children: ReactNode
  className?: string
}

const variantStyles = {
  default: 'bg-neutral-light text-neutral-dark border-neutral-black',
  primary: 'bg-primary text-white border-neutral-black',
  secondary: 'bg-secondary text-neutral-black border-neutral-black',
  outline: 'bg-transparent text-neutral-dark border-neutral-black',
}

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
}

export default function Badge({
  variant,
  size,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold rounded-full border-2 shadow-brutal-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}
