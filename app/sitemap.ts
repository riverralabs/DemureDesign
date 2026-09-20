import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demure.design",
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://demure.design/privacy",
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://demure.design/terms",
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
