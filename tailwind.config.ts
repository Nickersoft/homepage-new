import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Playfair Display", "serif"],
      sans: ["Inter", "sans-serif"],
      serif: ["Baskervville", "serif"],
      mono: ["Fira Code", "monospace"],
    },
    boxShadow: {
      lg: "0px 0px 0px 0px rgba(60, 59, 57, 0.14), 7px 8px 23px 0px rgba(60, 59, 57, 0.14), 28px 30px 41px 0px rgba(60, 59, 57, 0.12), 63px 68px 56px 0px rgba(60, 59, 57, 0.07), 113px 120px 66px 0px rgba(60, 59, 57, 0.02), 176px 188px 72px 0px rgba(60, 59, 57, 0.00)",
    },
    colors: {
      black: "#2F2F31",
      white: "#FFFFFF",
      red: "#F47373",
      yellow: "#F4E773",
      green: "#73F478",
      background: "#FCF9F4",
      gray: {
        light: "#D6D6D6",
      },
    },
  },
  plugins: [],
} satisfies Config;
