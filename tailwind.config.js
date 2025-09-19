/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'ai-purple': '#8B5CF6',
        'ai-green': '#10B981',
        'ai-orange': '#F97316',
        'ai-red': '#EF4444',
        'ai-yellow': '#F59E0B',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #E0E7FF 0%, #D1FAE5 100%)',
        'gradient-cta': 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
      },
    },
  },
  plugins: [],
}
