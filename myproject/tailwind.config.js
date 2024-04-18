module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "link-color": "#509ee3",
        "black-color": "#000",
        "white-color": "#fff",
        "blanco": "#fff",
        "black": "#000",
        "khaki": "#ecf489",
        "second-color": "#14192d",
        "first-color": "#d90062",

        "gray-light-color": "#f3f3f3",
        "grey-dark": "#d1d1d1",
        "grey-darker": "#acacac",


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
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
