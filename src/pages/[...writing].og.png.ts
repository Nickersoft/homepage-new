import fs from "node:fs";
import path from "node:path";

import { fontData } from "astro:assets";
import { getCollection } from "astro:content";
import { ImageResponse } from "@vercel/og";
import { OpenGraphTemplate } from "@/components/og-template";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const posts = await getCollection("writing");

  return posts.map((post) => ({
    params: { writing: post.id },
    props: post,
  }));
}

export const GET: APIRoute = async (context) => {
  const DmSansReqular = await fetch(
    new URL(fontData["--ff-sans"][0].src[0].url, context.url.origin),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(OpenGraphTemplate(), {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "Inter",
        data: DmSansReqular,
        style: "normal",
        weight: 400,
      },
    ],
  });
};
