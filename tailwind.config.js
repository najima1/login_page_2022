module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },

    container: {
      center: true,
      paddin: "2rem",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
