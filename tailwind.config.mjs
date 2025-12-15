/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0b0c10', // Deep Obsidian
        surface: '#1f2833', // Dark Slate Surface
        'neon-cyan': '#66fcf1', // Bright Mint (Primary)
        'neon-pink': '#45a29e', // Muted Teal (Secondary)
        'neon-yellow': '#fcd34d', // Warm Gold (Accent)
        'hud-black': '#0b0c10',
        muted: '#94a3b8',
        gray: {
          ...require('tailwindcss/colors').gray,
          400: '#cbd5e1', // Overriding 400 to be lighter (Standard Slate 300) for better readability
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 10px rgba(102, 252, 241, 0.5), 0 0 20px rgba(102, 252, 241, 0.3)',
        'glow-pink': '0 0 10px rgba(69, 162, 158, 0.5), 0 0 20px rgba(69, 162, 158, 0.3)',
        'glow-yellow': '0 0 10px rgba(252, 211, 77, 0.5), 0 0 20px rgba(252, 211, 77, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 2s linear infinite',
      },
    },
  },
  plugins: [],
}
