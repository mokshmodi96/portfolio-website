import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: image().optional(),
    badge: z.string().optional(),
  });

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

export type BlogSchema = z.infer<ReturnType<typeof blogSchema>>;

export const collections = {
  blog: blogCollection,
};
