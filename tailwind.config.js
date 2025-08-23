module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#f0fbff", 100:"#e1f7ff", 200:"#c3ecff", 300:"#a3e0ff", 400:"#7cd1ff", 500:"#48beff", 600:"#1fa6f0", 700:"#1586c2", 800:"#116c9a", 900:"#0f5a80" }
      },
      fontFamily: { serif: ['Georgia','Times New Roman','Times','serif'] }
    }
  },
  plugins: [],
}