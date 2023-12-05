import { defineConfig } from "astro/config";
import { join } from "node:path";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import Icons from "unplugin-icons/vite";

import remarkFigureCaption from "@microflash/remark-figure-caption";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tylernickerson.com",
  output: "hybrid",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel(),
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkFigureCaption],
    rehypePlugins: [rehypeExternalLinks],
  },
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
