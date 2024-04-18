/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light-color": "#f3f3f3",
        "white-color": "#fff",
        "black-color": "#000",
        lavender: "#d1e3ff",
      },
      spacing: {},
      fontFamily: {
        mulish: "Mulish",
        raleway: "Raleway",
      },
      borderRadius: {
        lg: "18px",
      },
    },
    fontSize: {
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
