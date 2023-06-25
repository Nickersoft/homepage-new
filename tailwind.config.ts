import type { Config } from "tailwindcss";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Baskervville', 'serif']
    },
    colors: {
      black: '#1B1D21',
      white: '#FFFFFF',
      red: '#FF5757',
      yellow: '#FFD954',
      green: '#72FF66',
      gray: {
        light: '#D6D6D6'
      }
    }
	},
	plugins: [],
} satisfies Config;
