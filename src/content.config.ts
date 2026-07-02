import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.iso.date(),
    lang: z.union([z.literal("en"), z.literal("it")]),
    original: z.string().optional(),
  }),
});

export const collections = { blog };
