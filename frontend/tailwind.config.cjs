/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        secondary: '#9ca3af',
        dangerous: '#dc2626',
      },
    },
  },
  plugins: [],
}
