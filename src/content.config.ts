import { defineCollection, z, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";
import { ICONS } from "./consts";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      original: z.string().url().optional(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      image: image().optional(),
    }),
});

const caseStudy = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/caseStudy" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      protected: z.boolean().optional(),
      year: z.number().min(1900).max(2100),
      roles: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    url: z.string().url(),
    order: z.number(),
    icon: z.enum(Object.keys(ICONS) as [string, ...string[]]),
  }),
});

const openGraphType = z.enum([
  "website",
  "music.song",
  "music.album",
  "music.playlist",
  "music.radio_station",
  "video.movie",
  "video.episode",
  "video.tv_show",
  "video.other",
  "article",
  "book",
  "payment.link",
  "profile",
]);

const metaImage = (image: ImageFunction) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const seo = defineCollection({
  loader: glob({ pattern: "seo.yml", base: "src/data" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      siteName: z.string(),
      description: z.string(),
      image: metaImage(image),
      twitter: z
        .object({
          card: z.enum(["summary", "summary_large_image", "app", "player"]),
          site: z.string(),
          creator: z.string(),
          title: z.string(),
          description: z.string(),
          image: metaImage(image),
        })
        .partial()
        .optional(),
      opengraph: z
        .object({
          title: z.string(),
          description: z.string(),
          type: openGraphType,
          image: metaImage(image),
          audio: z.string().url(),
          determiner: z.string(),
          locale: z.string(),
          localeAlternate: z.array(z.string()),
          siteName: z.string(),
          video: z.string().url(),
        })
        .partial()
        .optional(),
    }),
});

export const collections = { caseStudy, blog, projects, seo };
