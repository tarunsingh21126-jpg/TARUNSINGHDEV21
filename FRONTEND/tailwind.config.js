/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'Inter', 'sans-serif'],
        mon: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slower': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
