module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "hsl(180, 66%, 69%)", // Light Cyan
          main: "hsl(180, 66%, 49%)", // Main Cyan
          dark: "hsl(180, 66%, 29%)", // Dark Cyan
        },
        secondary: {
          light: "hsl(257, 7%, 73%)", // Light Grayish Violet
          main: "hsl(257, 7%, 53%)", // Main Grayish Violet
          dark: "hsl(257, 7%, 33%)", // Dark Grayish Violet
        },
        accent: {
          light: "hsl(0, 87%, 77%)", // Light Red
          main: "hsl(0, 87%, 57%)", // Main Red
          dark: "hsl(0, 87%, 37%)", // Dark Red
        },
        background: {
          light: "hsl(0, 0%, 100%)", // Light Background
          main: "hsl(260, 8%, 14%)", // Main Very Dark Violet
          dark: "hsl(260, 8%, 10%)", // Dark Very Dark Violet
        },
        text: {
          light: "hsl(0, 0%, 0%)", // Dark Text on Light Background
          main: "hsl(0, 0%, 100%)", // Light Text on Dark Background
          dark: "hsl(0, 0%, 80%)", // Gray Text on Dark Background
        },
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
