/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        header: '#4C16C9',    // purple
        secondary: '#F59E0B',  // amarelo laranja
        brandGreen: '#10B981', // verde personalizado
      }
    },
  },
  plugins: [],
}

