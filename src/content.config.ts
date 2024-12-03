import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

const events = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/events" }),
  schema: z
    .object({
      id: z.number(),
      name: z.string(),
      description: z.string(),
      dateStart: z.coerce.date(),
      dateEnd: z.coerce.date(),
      location: z.string(),
      locationUrl: z.string().url(),
      locatoinLatitude: z.string(),
      locatoinLongitude: z.string(),
      parking: z.string(),
      parkingUrl: z.string().url(),
      schedule: z.array(
        z
          .object({
            dateStart: z.coerce.date(),
            dateEnd: z.coerce.date(),
            title: z.string(),
            description: z.string().optional(),
          })
          .strict(),
      ),
      speakers: z.array(reference("speaker")),
      images: z
        .array(
          z
            .object({
              src: z.string(),
              caption: z.string(),
            })
            .strict(),
        )
        .optional(),
    })
    .strict(),
});

const speaker = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/speakers" }),
  schema: z
    .object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
      bio: z.string().optional(),
      urlWebsite: z.string().url().optional(),
      urlGitHub: z.string().url().optional(),
      urlMastodon: z.string().url().optional(),
      urlBluesky: z.string().url().optional(),
      urlLinkedIn: z.string().url().optional(),
      urlInstagram: z.string().url().optional(),
      urlTwitter: z.string().url().optional(),
    })
    .strict(),
});

export const collections = { events, speaker };
