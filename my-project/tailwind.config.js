/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#3B7302',
        'custom-light-green': '#9BBF65',
        'custom-tan': '#EBF2B3'
        
      }
  
    },
  },
  plugins: [],
}

