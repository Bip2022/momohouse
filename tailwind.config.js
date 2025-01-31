/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ['Allura', 'sans-serif'], // Add the Allura font here
      },
    
    },

    },
  plugins: [],
}