import { defineConfig } from "astro/config";
import { join } from "node:path";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [mdx(), sitemap(), tailwind(), prefetch()],
  adapter: vercel(),
});
