/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "signin-image":
          "url('https://source.unsplash.com/xB4ExGcUai0/1600x900')",
      }),
      colors: {
        primary: "#182277",
        primaryDark: "#10185e",
        secondary: "#FFB7E4",
        secondaryDark: "#de8cbf",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      variants: {
        extend: {},
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}};