const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: false,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#142531",
        secondary: "#56a8e0",
        "off-white": "#F5F5F5",
        culturedWhite: "#F5F5F5",
        onyx: "#3A3E41",
        "uranian-blue": "#B8D9F4",
        carolinaBlue: "#5FA8D3",
        littleBoyBlue: "#85A8D6",
        aeroBlue: "#7abfed",
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
        "max-eventCard": { max: "1110px" },
        "max-pastEventsTitle": { max: "768px" },
        "min-eventCard": "768px",
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
