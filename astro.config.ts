import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import rehypeExternalLinks from "rehype-external-links";
import rehypeFigure from "@microflash/rehype-figure";
import remarkGFM from "remark-gfm";

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tylernickerson.com",
  integrations: [mdx(), sitemap(), svelte(), react()],
  // adapter: vercel(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--ff-sans",
        weights: ["100 900"],
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkGFM],
    // rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }], rehypeFigure],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
