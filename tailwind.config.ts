import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Red & Black solid theme variables
        background: '#050505', // Deep matte black
        surface: {
          secondary: '#0d0d0d', // Muted dark charcoal for panels
          elevated: '#141414', // Slightly elevated surface card
          panel: '#1a1a1a', // Active or brighter interactive container
        },
        accent: {
          red: '#D32F2F', // Solid matte crimson red
          brightRed: '#FF1E27', // Bright alert red for active/hover states
          mutedRed: '#7A1C1C', // Dark red for inactive borders/muted states
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#A8B3C2',
          muted: '#6D7888',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
