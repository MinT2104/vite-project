/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        opacity: "opacity 0.5s ease-in-out",
        opacityV2: "opacityV2 0.5s ease-in-out",
        slideIn: "slide-in 0.3s ease-in",
        slideInToLeft: "slide-in-to-left 0.1s ease-in",
        slideOut: "slide-out 0.3s ease-in",
        slideUp: "slide-up 0.3s ease-in-out",
        slideDown: "slide-down 0.3s ease-in-out",
        cancel: "cancel 0.3s ease-in-out",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        opacityV2: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.8 },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "slide-up": {
          "0%": { bottom: "-100%", opacity: 0 },
          "100%": { bottom: "0", opacity: 1 },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        cancel: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.blue.600")} ${theme(
            "colors.blue.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "0px",
          width: "0px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.blue.600"),
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.white"),
        },
      });
    }),
  ],
};
