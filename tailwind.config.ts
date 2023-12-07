import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans Variable", "sans-serif"],
      mono: ["Fira Code Variable", "monospace"],
    },
    keyframes: {
      fadeUp: {
        "0%": {
          opacity: "0",
          transform: "translateY(8px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    borderColor: ({ theme }) => {
      return {
        light: theme("colors.gray.900"),
        dark: theme("colors.gray.0"),
        subtle: {
          light: theme("colors.gray.900/0.1"),
          dark: theme("colors.gray.0/0.1"),
        },
        emphasis: {
          light: theme("colors.gray.900/0.2"),
          dark: theme("colors.gray.0/0.2"),
        },
      };
    },
    textColor: ({ theme }) => ({
      DEFAULT: theme("colors.gray.900"),
      dark: theme("colors.white"),
      subtle: {
        DEFAULT: theme("colors.gray.900/0.8"),
        dark: theme("colors.gray.0/0.8"),
      },
      muted: {
        DEFAULT: theme("colors.gray.900/0.5"),
        dark: theme("colors.gray.0/0.5"),
      },
    }),
    animation: {
      "fade-up": "fadeUp 0.4s ease-in-out",
    },
    boxShadow: {
      none: "none",
      sm: "0 2px 12px rgba(0,0,0,0.1)",
      md: "0px 0px 0px 0px rgba(69, 50, 19, 0.05), 3px 5px 12px 0px rgba(69, 50, 19, 0.05), 10px 19px 22px 0px rgba(69, 50, 19, 0.04), 24px 43px 29px 0px rgba(69, 50, 19, 0.02), 42px 76px 35px 0px rgba(69, 50, 19, 0.01), 66px 118px 38px 0px rgba(69, 50, 19, 0.00)",
      lg: "0px 0px 0px 0px rgba(60, 59, 57, 0.14), 7px 8px 23px 0px rgba(60, 59, 57, 0.14), 28px 30px 41px 0px rgba(60, 59, 57, 0.12), 63px 68px 56px 0px rgba(60, 59, 57, 0.07), 113px 120px 66px 0px rgba(60, 59, 57, 0.02), 176px 188px 72px 0px rgba(60, 59, 57, 0.00)",
    },
    colors: {
      white: "#FFFFFF",
      gray: {
        0: "#FEFEFE",
        100: "#F6F6F6",
        200: "#E8E8E8",
        300: "#D5D5D5",
        400: "#9C9C9C",
        500: "#848484",
        600: "#6B6B6B",
        700: "#424242",
        800: "#323232",
        900: "#222222",
      },
      red: "#F47373",
      blue: "rgb(0, 110, 255)",
      yellow: "#F4E773",
      green: "#73F478",
      clear: "transparent",
      purple: "#8F00FF",
    },
  },
  plugins: [typography()],
} satisfies Config;
