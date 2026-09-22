import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    projectUrl: z.string().url(),
    technologies: z.array(z.string()),
    icon: z.enum(['code', 'message', 'house', 'user']).optional(),
    featured: z.boolean().default(false),
    publishedDate: z.date(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
