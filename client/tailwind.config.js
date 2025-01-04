/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        default: "1px",
      },
      fontFamily: {
        primary: ["PelakFA"],
      },
      colors: {
        primary: "#E66A17",
        secondary: "#FDF0E8",
        tertiary: "#ECE9E9",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
