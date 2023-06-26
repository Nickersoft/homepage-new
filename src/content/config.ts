import { defineCollection, z } from "astro:content";
import { ICONS, TAGS } from "../consts";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
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
    heroImage: z.string().optional(),
  }),
});

const code = defineCollection({
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    tags: z.array(z.enum(Object.keys(TAGS) as [string])),
    site: z.string().url().optional(),
    code: z.string().regex(/\w+\/\w+/),
    icon: z.enum(Object.keys(ICONS) as [string]),
  }),
});

export const collections = { blog, code };
