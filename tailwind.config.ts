import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7F8FC',
        surface: '#FFFFFF',
        text: '#111827',
        muted: '#64748B',
        border: '#E5E7EB',
        accent: '#4F46E5',
        accentSoft: '#EEF2FF',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.35s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
