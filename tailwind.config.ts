import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        vazir: ["vazir"],
        vazirBold: ["vazirBold"],
        vazirLight: ["vazirLight"],
      },
      colors: {
        Gray100: "#F7FAFC",
        Gray150: "#ECEFF2",
        Gray200: "#D9DFE6",
        Gray300: "#C6CED9",
        bg: "#151c2c",
        bgSoft: "#182237",
        text: "#ffffff",
        textSoft: "#b7bac1",
        bgLight: "#f0f5ff",
        bgSoftLight: "#e3ebff",
        textLight: "#333333",
        textSoftLight: "#737373",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
