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
        medium: "1.65rem",
      },
      letterSpacing: {
        x_wide: ".15em",
      },
      minHeight: {
        reverse: "50vw",
        mobile: "100vw",
        desk: "200px",
      },
      maxWidth: {
        med: "70rem",
      },
      height: {
        hsm: "36vh",
        msm: "64vh",
        hlg: "30vh",
        mlg: "70vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
