import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#6C5CE7',
          light: '#A29BFE',
          dark: '#4834D4',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#00CEC9',
          light: '#81ECEC',
          dark: '#00B894',
        },
        // Accent Colors
        accent: {
          yellow: '#FFEAA7',
          orange: '#FDCB6E',
          pink: '#FD79A8',
          red: '#E17055',
        },
        // Neutrals
        neutral: {
          white: '#FFFFFF',
          cream: '#FDF6E3',
          light: '#F8F9FA',
          gray: '#636E72',
          dark: '#2D3436',
          black: '#1A1A2E',
        },
        // Functional
        success: '#00B894',
        warning: '#FDCB6E',
        error: '#E17055',
        info: '#74B9FF',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      borderWidth: {
        DEFAULT: '2px',
        thick: '3px',
        chunky: '4px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        // Brutalist shadows - OFFSET STYLE (no blur)
        'brutal-sm': '2px 2px 0px 0px rgba(26, 26, 46, 1)',
        'brutal-md': '4px 4px 0px 0px rgba(26, 26, 46, 1)',
        'brutal-lg': '6px 6px 0px 0px rgba(26, 26, 46, 1)',
        'brutal-xl': '8px 8px 0px 0px rgba(26, 26, 46, 1)',
        // Colored shadows
        'brutal-primary': '4px 4px 0px 0px rgba(108, 92, 231, 1)',
        'brutal-secondary': '4px 4px 0px 0px rgba(0, 206, 201, 1)',
        // Neumorphic inner shadows
        'neu-inset': 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(255,255,255,0.5)',
        'neu-raised': '4px 4px 8px rgba(0,0,0,0.15), -4px -4px 8px rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [],
}
export default config
