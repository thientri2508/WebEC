/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'custom-shadow-inp': '0 0 6px 1px rgba(68, 158, 232, 0.923)',
      },
      backgroundImage: {
        'banner1': "url('./src/assets/banner1.jpg')",
      },
      colors: {
        'bg-blur': 'rgba(0,0,0,0.6)',
      },
      transitionProperty: {
        'products': 'all linear',
      },
      screens: {
        'tb': '1150px',
        'lg-': '950px',
      },
      scale: {
        '85': '0.85',
      },
    },
  },
  plugins: [],
}