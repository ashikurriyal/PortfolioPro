/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#FD853A',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

