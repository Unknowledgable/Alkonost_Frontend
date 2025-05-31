/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0c1118',
          card: '#1a1f29',
          accent: {
            slate: '#3a4b61',
            indigo: '#546880',
            highlight: '#7c8ea3',
            glow: '#aabbd1',
          },
          text: {
            base: '#e1e6ed',
            muted: '#b0b9c5',
          },
          border: '#2c3440',
        },
        light: {
          bg: '#f0f4f8',
          card: '#ffffff',
          accent: {
            slate: '#5c6f82',
            indigo: '#6b8ba4',
            highlight: '#8baecd',
            glow: '#d8e3ee',
          },
          text: {
            base: '#1f2937',
            muted: '#6b7280',
          },
          border: '#cbd5e1',
        },
        classic: {
          bg: '#ffffff',
          card: '#f9f9f9',
          accent: {
            highlight: '#000000',
          },
          text: {
            base: '#000000',
            muted: '#4b5563',
          },
          border: '#d1d5db',
        }
      }
    }
  },
  plugins: [],
}
