/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast-finite': 'spin 0.5s linear',
      }
    },
  },
  plugins: [],
}

