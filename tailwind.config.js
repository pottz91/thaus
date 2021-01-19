module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'tomate': '#A5505D',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
