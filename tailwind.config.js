/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
      },
      colors: {
        'custgreen': ' #345333',
        'custyellow' : '#f49b25',
      },
      backgroundImage: {
        'greenbg': "url('/src/assets/bg-green.png')",
        'yellowbg': "url('/src/assets/bg-yellow.png')",
      }
    },
  },
  plugins: [],
}

