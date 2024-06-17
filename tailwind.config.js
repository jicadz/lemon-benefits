/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'button-shadow' : '0 0 8px gray',
        'button-shadow2' : '0 0 8px white'
      },
      backgroundImage: {
        'about-image' : "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url('./assets/image2.jpg')",
        'user-1' : "url('./assets/user1.jpg')",
        'user-2' : "url('./assets/user2.jpg')",
        'user-3' : "url('./assets/user3.jpg')"
      }
    },
  },
  plugins: [],
}

