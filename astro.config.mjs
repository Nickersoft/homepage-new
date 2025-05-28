import { defineConfig } from "astro/config";
import { join } from "node:path";

import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import Icons from "unplugin-icons/vite";

import rehypeExternalLinks from "rehype-external-links";
import rehypeFigure from "@microflash/rehype-figure";
import remarkGFM from "remark-gfm";

const rehypePlugins = [rehypeExternalLinks, rehypeFigure];

// https://astro.build/config
export default defineConfig({
  site: "https://www.tylernickerson.com",
  output: "static",
  integrations: [mdx({ optimize: true }), sitemap(), tailwind()],
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
