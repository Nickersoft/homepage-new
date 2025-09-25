import { join } from "node:path";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import rehypeFigure from "@microflash/rehype-figure";
import tailwind from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";

import rehypeExternalLinks from "rehype-external-links";
import remarkGFM from "remark-gfm";
import Icons from "unplugin-icons/vite";

const rehypePlugins = [rehypeExternalLinks, rehypeFigure];

// https://astro.build/config
export default defineConfig({
  site: "https://www.tylernickerson.com",
  output: "static",
  integrations: [mdx(), svelte(), sitemap()],
  adapter: vercel(),
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkGFM],
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }], rehypeFigure],
  },
  vite: {
    plugins: [
      tailwind(),
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
