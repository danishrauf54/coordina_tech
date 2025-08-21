/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#eff6ff",
          500:"#0ea5e9",
          600:"#0284c7",
          700:"#0369a1",
        }
      },
      boxShadow: {
        soft:"0 10px 30px rgba(2,8,23,0.08)"
      }
    },
  },
  plugins: [],
}