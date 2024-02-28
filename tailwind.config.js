/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "cormorant": ['var(--font-cormorant)'],
        "bricolage": ['var(--font-bricolage)'],
        "comic": ['var(--font-comic)'],
      },
    },
  },
  plugins: [],
}