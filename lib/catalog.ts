import { ETSY_RSS } from "@/lib/shop";
import { fallbackProducts, type Product, type ProductCategory } from "@/lib/products";

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
};

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
  return /planner|journal|habit|budget|undated/i.test(title)
    ? "planning"
    : "kids";
}

function shortName(listingId: string, title: string) {
  if (NAME_BY_LISTING[listingId]) return NAME_BY_LISTING[listingId];
  return title
    .replace(/\s+by\s+TheDemureDesign$/i, "")
    .split(",")[0]
    .trim();
}

function factsFrom(description: string) {
  const clean = decode(description);
  const sentence = clean.split(". ")[0]?.trim() || clean;
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
};

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

    if (!listingId || !title || !link || !image) continue;
    if (PHYSICAL.test(title)) continue;

    items.push({
      listingId,
      title,
      url: link.split("?")[0],
      image,
      description,
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

    return items.map((item) => {
      const name = shortName(item.listingId, item.title);
      const gumroad = GUMROAD_BY_LISTING[item.listingId];
      return {
        id: item.listingId,
        name,
        facts: factsFrom(item.description),
        category: classify(item.title),
        image: item.image,
        imageAlt: name,
        etsy: { url: item.url },
        gumroad: gumroad ? { url: gumroad } : undefined,
      };
    });
  } catch {
    return fallbackProducts;
  }
}
