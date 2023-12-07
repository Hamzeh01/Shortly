module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 61%, 54%)",
        cyanLight: "hsl(180, 61%, 74%)",
        darkViolet: "hsl(257, 22%, 31%)",
        red: "hsl(0, 82%, 72%)",
        grayishViolet: "hsl(257, 2%, 68%)",
        veryDarkBlue: "hsl(255, 6%, 27%)",
        veryDarkViolet: "hsl(260, 3%, 19%)",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
