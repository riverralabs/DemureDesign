import type { MetadataRoute } from "next";
import { getCatalog } from "@/lib/catalog";
import { pageUrl } from "@/lib/shop";

export const revalidate = 3600;

function absoluteImage(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return pageUrl(src);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const updated = new Date("2026-10-27");
  const shopUpdated = new Date("2026-10-27");
  let productImages: string[] = [];

  try {
    const products = await getCatalog();
    productImages = products.map((product) => absoluteImage(product.image));
  } catch {
    productImages = [];
  }

  return [
    {
      url: pageUrl("/"),
      lastModified: shopUpdated,
      changeFrequency: "weekly",
      priority: 1,
      images: [pageUrl("/banner.jpg"), pageUrl("/logo.png"), ...productImages],
    },
    {
      url: pageUrl("/contact"),
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: pageUrl("/privacy"),
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: pageUrl("/terms"),
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
