/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'button-shadow' : '0 0 8px gray'
      }
    },
  },
  plugins: [],
}

