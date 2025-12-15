/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030014', // Deep Cosmic Void
        surface: '#110e24', // Deep Indigo Surface
        'neon-cyan': '#d946ef', // Electric Fuchsia (Primary)
        'neon-pink': '#8b5cf6', // Vivid Violet (Secondary)
        'neon-yellow': '#fbbf24', // Cosmic Gold (Accent)
        'hud-black': '#0a0a0a',
        muted: '#525252',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 10px rgba(217, 70, 239, 0.5), 0 0 20px rgba(217, 70, 239, 0.3)',
        'glow-pink': '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-yellow': '0 0 10px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3)',
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
