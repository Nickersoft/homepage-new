import { defineCollection, z } from "astro:content";
import { ICONS, TAGS } from "../consts";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      original: z.string().url().optional(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image().optional(),
    }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    url: z.string().url(),
    icon: z.enum(Object.keys(ICONS) as [string, ...string[]]),
  }),
});

export const collections = { blog, projects };
