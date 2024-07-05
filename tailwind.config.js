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
        footerBlack: '#272727',
        customAsh: '#F2F4F7',
        bloorAsh: '#FFFFFF24',
      
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

