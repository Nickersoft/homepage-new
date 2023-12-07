import { defineConfig } from "astro/config";
import { join } from "node:path";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import Icons from "unplugin-icons/vite";

import rehypeExternalLinks from "rehype-external-links";
import rehypeFigure from '@microflash/rehype-figure';
import remarkGFM from 'remark-gfm';

const rehypePlugins = [rehypeExternalLinks, rehypeFigure];

// https://astro.build/config
export default defineConfig({
  site: "https://www.tylernickerson.com",
  output: "hybrid",
  integrations: [mdx({ optimize: true }), sitemap(), tailwind()],
  adapter: vercel(),
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkGFM],
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }], rehypeFigure] 
  },
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
