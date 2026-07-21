/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'bg-primary': '#000000',
        'bg-secondary': '#0D1117',
        'bg-footer': '#1A1525',
        // Accent
        'accent-cyan': '#00BFFF',
        // Text
        'text-primary': '#FFFFFF',
        'text-muted': '#A0A0A0',
        // Card
        'card-bg': '#0D1B2A',
        'card-border': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '390px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      maxWidth: {
        'content': '1440px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
