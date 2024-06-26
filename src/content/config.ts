/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from "zod"
import { defineCollection } from "astro:content"

export const LectureSchema = z.object({
  key: z.string(),
  title: z.string(),
  draft: z.boolean().optional(),
  description: z.object({
    short: z.string(),
    subtitle: z.string().optional(),
  }),
  thumbnail: z.string(),
  purchase_url: z.string(),
  toc_title: z.string().optional(),
  videos: z.array(
    z.object({
      title: z.string(),
      poster: z.string(),
    }),
  ),
  toc: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .optional(),
})

export type LectureSchema = z.infer<typeof LectureSchema>

const lecturesCollection = defineCollection({
  type: "content",
  schema: LectureSchema,
})

export const collections = {
  lectures: lecturesCollection,
}
