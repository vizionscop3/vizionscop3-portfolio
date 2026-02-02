'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  variant: 'default' | 'elevated' | 'interactive' | 'highlight'
  padding: 'none' | 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  onClick?: () => void
}

const variantStyles = {
  default: 'bg-white border-2 border-neutral-black shadow-brutal-md',
  elevated: 'bg-white border-2 border-neutral-black shadow-brutal-lg',
  interactive: 'bg-white border-2 border-neutral-black shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-all cursor-pointer',
  highlight: 'bg-accent-yellow border-2 border-neutral-black shadow-brutal-md',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  variant,
  padding,
  children,
  className,
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-md'
  
  if (variant === 'interactive' && onClick) {
    return (
      <motion.div
        className={cn(baseStyles, variantStyles[variant], paddingStyles[padding], className)}
        onClick={onClick}
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cn(baseStyles, variantStyles[variant], paddingStyles[padding], className)}>
      {children}
    </div>
  )
}
