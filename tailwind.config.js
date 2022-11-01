module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9a7cc",

          secondary: "#eaab81",

          accent: "#6e72d1",

          neutral: "#242438",

          "base-100": "#FFFFFF",

          info: "#7DCFED",

          success: "#0DA789",

          warning: "#F1b531",

          error: "#EA758F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
