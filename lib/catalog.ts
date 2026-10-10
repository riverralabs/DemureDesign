import { ETSY_RSS } from "@/lib/shop";
import {
  etsyListing,
  fallbackProducts,
  PRODUCT_FACTS,
  type Product,
  type ProductCategory,
} from "@/lib/products";

const GUMROAD_BY_LISTING: Record<string, string> = {
  "4534979142": "https://demuredesign.gumroad.com/l/undatedplanner",
  "4563523161": "https://demuredesign.gumroad.com/l/bjzhx",
  "4542113652": "https://demuredesign.gumroad.com/l/animal-coloring-pages",
  "4566631822":
    "https://demuredesign.gumroad.com/l/animal-alphabet-flash-cards",
  "4534956675": "https://demuredesign.gumroad.com/l/kids-affirmation-cards",
  "4539280226": "https://demuredesign.gumroad.com/l/educational-wall-art",
};

const NAME_BY_LISTING: Record<string, string> = {
  "4534979142": "The Quiet Planner",
  "4563523161": "Sea Animal Coloring",
  "4542113652": "Easy Animal Coloring",
  "4566631822": "Animal Alphabet Cards",
  "4534956675": "Kids Affirmation Cards",
  "4539280226": "Educational Posters",
  "4592502270": "The Rosalie",
  "4592503468": "The Jardin",
  "4592523673": "The Marais",
};

/** Listings whose shop photo is the file in public/products, not the Etsy CDN image. */
const LOCAL_IMAGE_LISTINGS = new Set([
  "4592502270",
  "4592503468",
  "4592523673",
]);

const PHYSICAL =
  /\b(t-shirt|t shirt|graphic tee|toddler tee|cotton blend shirt|birthday tee)\b/i;

function decode(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unescapeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function classify(title: string): ProductCategory {
  if (/planner|journal|habit|budget|undated/i.test(title)) return "planning";
  if (/\bwedding\b/i.test(title)) return "wedding";
  return "kids";
}

function shortName(listingId: string, title: string) {
  if (NAME_BY_LISTING[listingId]) return NAME_BY_LISTING[listingId];
  return title
    .replace(/\s+by\s+TheDemureDesign$/i, "")
    .split(",")[0]
    .trim();
}

function factsFrom(listingId: string, description: string) {
  if (PRODUCT_FACTS[listingId]) return PRODUCT_FACTS[listingId];

  const clean = decode(description);
  const sentences = clean
    .split(". ")
    .map((part) => part.trim())
    .filter(Boolean);
  const useful = sentences.find(
    (sentence) =>
      !/instant digital download|nothing ships|this is a digital file|digital files only/i.test(
        sentence,
      ),
  );
  const sentence = useful || sentences[0] || clean;
  if (sentence.length <= 140) {
    return /[.!?]$/.test(sentence) ? sentence : `${sentence}.`;
  }
  return `${sentence.slice(0, 137).trim()}...`;
}

type RssItem = {
  listingId: string;
  title: string;
  url: string;
  image: string;
  description: string;
  price?: string;
};

export function parseEtsyPrice(html: string): string | undefined {
  const match = html.match(/class="price">\s*([0-9]+(?:\.[0-9]+)?)\s+USD/i);
  return match?.[1];
}

function parseRss(xml: string): RssItem[] {
  const blocks = xml.split(/<item>/i).slice(1);
  const items: RssItem[] = [];

  for (const raw of blocks) {
    const block = unescapeXml(raw);
    const title = decode(block.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "");
    const link =
      block.match(/<link>([^<]+)<\/link>/i)?.[1]?.trim() ??
      block.match(/https:\/\/www\.etsy\.com\/listing\/\d+[^<\s"]*/)?.[0] ??
      "";
    const listingId = link.match(/listing\/(\d+)/)?.[1] ?? "";
    const image =
      block
        .match(/<img[^>]+src="([^"]+)"/i)?.[1]
        ?.replace(/\\/g, "")
        .replace("il_570xN", "il_794xN") ?? "";
    const description =
      block.match(/<p class="description">([\s\S]*?)<\/p>/i)?.[1] ?? title;
    const price = parseEtsyPrice(block);

    if (!listingId || !title || !link || !image) continue;
    if (PHYSICAL.test(title)) continue;

    items.push({
      listingId,
      title,
      url: link.split("?")[0],
      image,
      description,
      price,
    });
  }

  return items;
}

export async function getCatalog(): Promise<Product[]> {
  try {
    const response = await fetch(ETSY_RSS, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "DemureDesign/1.0 (https://demure.design)",
      },
    });
    if (!response.ok) return fallbackProducts;

    const items = parseRss(await response.text());
    if (items.length === 0) return fallbackProducts;

    const fromFeed = items.map((item) => {
      const known = fallbackProducts.find(
        (product) => product.id === item.listingId,
      );
      const name = known?.name ?? shortName(item.listingId, item.title);
      const gumroad = GUMROAD_BY_LISTING[item.listingId];
      const image =
        known && LOCAL_IMAGE_LISTINGS.has(item.listingId)
          ? known.image
          : item.image;
      return {
        id: item.listingId,
        name,
        facts: known?.facts ?? factsFrom(item.listingId, item.description),
        category: known?.category ?? classify(item.title),
        image,
        imageAlt: known?.imageAlt ?? name,
        etsy: etsyListing(item.listingId, item.url, item.price),
        gumroad: gumroad ? { url: gumroad } : undefined,
        sku: known?.sku,
      };
    });

    const seen = new Set(fromFeed.map((product) => product.id));
    const pinned = fallbackProducts.filter(
      (product) =>
        LOCAL_IMAGE_LISTINGS.has(product.id) && !seen.has(product.id),
    );
    return [...fromFeed, ...pinned];
  } catch {
    return fallbackProducts;
  }
}
