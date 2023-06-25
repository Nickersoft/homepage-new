import { defineConfig } from "astro/config";
import { join } from "node:path";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import vercel from "@astrojs/vercel/serverless";
import Icons from "unplugin-icons/vite";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "hybrid",
  integrations: [mdx(), sitemap(), tailwind(), prefetch(), svelte()],
  adapter: vercel(),
  vite: {
    plugins: [
      Icons({
        compiler: "svelte",
      }),
    ],
  },
});
