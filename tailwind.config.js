module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Rubik", "sans-serif"],
      },
      colors: {
        vd_gray: "hsl(0, 0%, 17%)",
        d_gray: "hsl(0, 0%, 59%)",
      },
      fontSize: {
        "2xs": ".625rem",
      },
      letterSpacing: {
        x_wide: ".15em",
      },
      minHeight: {
        reverse: "50vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
