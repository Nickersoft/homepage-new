import type { CollectionEntry } from "astro:content";

import { last } from "radash";

export function getPostSlug(post: CollectionEntry<"blog">) {
  return last(post.slug.split("/"));
}
