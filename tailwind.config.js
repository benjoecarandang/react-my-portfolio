module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#19181f",
        black1: "#23202a",
        black2: "#1E1B24",
        display: ["group-hover"],
      },
      animation: {
        "animate-spin": "spin 2s linear infinite"
      },
      
    },
  },
  plugins: [],
}
