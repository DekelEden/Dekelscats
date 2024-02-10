import { z } from 'zod'
import { defineCollection } from 'astro:content'

export const LectureSchema = z.object({
  title: z.string(),
  description: z.object({
    short: z.string(),
    subtitle: z.string()
  }),
  images: z.object({
    video_preview: z.string(), // TODO remove?
    thumbnail: z.string()
  }),
  purchase_url: z.string(),
  toc_title: z.string().optional(),
  videos: z.array(z.object({
    title: z.string(),
    poster: z.string(),
  })),
  toc: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).optional(),
})

export type Lecture = z.infer<typeof LectureSchema>

const lecturesCollection = defineCollection({
  type: 'content',
  schema: LectureSchema,
})

export const collections = {
  'lectures': lecturesCollection,
}
