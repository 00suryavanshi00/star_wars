/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        scriptBlueColor : "#6B21A8"
      },
      fontFamily:{
        starjhol: ['starjhol']
      },
      backgroundImage: {
        'space-background': "url('src/images/nightbackground.jpg')",
      },
      animation: {
        bounce: "bounce-custom 1.5s infinite ease-in-out",
        fade: 'fadeOut 4s ease-in-out',
      },
      keyframes: {
        "bounce-custom": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "fadeOut": {
          '0%': { opacity: 1 }, // Tailwind red-300 color directly referenced
          '100%': { opacity: 0 }, // Corrected transparent value
        },
      },
    },
  },
  plugins: [],
}
