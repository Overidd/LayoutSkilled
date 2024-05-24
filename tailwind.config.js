
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Raleway": ['Raleway', 'sans-serif'],
        "Open Sans": ['Open Sans']
      },
      colors:{
        "color-bg": "#f3e5d8",
        "color-bg1": "#fff7fc",
        "color-1": "#90546d"
      },
      backgroundImage: {
        "clave": "url(')"
      }
    },
  },
  plugins: [],
}
