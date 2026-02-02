'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variantStyles = {
  primary: 'bg-primary text-white border-neutral-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none',
  secondary: 'bg-secondary text-neutral-black border-neutral-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none',
  outline: 'bg-transparent text-neutral-black border-neutral-black hover:bg-neutral-black hover:text-white',
  ghost: 'bg-transparent text-neutral-black border-transparent hover:bg-neutral-light',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant,
  size,
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
  const shadowStyle = variant === 'primary' || variant === 'secondary' ? 'shadow-brutal-md' : ''
  
  return (
    <motion.button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        shadowStyle,
        fullWidth && 'w-full',
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  )
}
