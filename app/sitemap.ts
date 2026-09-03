import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://demure.design", changeFrequency: "monthly", priority: 1 },
    {
      url: "https://demure.design/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://demure.design/terms",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
