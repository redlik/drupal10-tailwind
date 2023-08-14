/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.twig"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
}
