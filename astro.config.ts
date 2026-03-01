import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

import rehypeExternalLinks from "rehype-external-links";
import rehypeFigure from "@microflash/rehype-figure";
import remarkGFM from "remark-gfm";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tylernickerson.com",
  integrations: [mdx({ optimize: true }), sitemap(), svelte()],
  adapter: vercel(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--ff-sans",
        weights: ["100 900"],
      },
    ],
  },
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkGFM],
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }], rehypeFigure],
  },
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
