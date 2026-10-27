import { EMAIL, ETSY_SHOP, GUMROAD_SHOP, HOME_URL, SITE_URL } from "@/lib/shop";
import type { Product } from "@/lib/products";

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const STORE_DESCRIPTION =
  "Wedding menus, undated planners, and kids printables. Instant download on Etsy and Gumroad.";

const REFUND_ANSWER =
  "Files are digital, so all sales are final. Nothing ships. If a file will not open, email us and we will send a working copy.";

function productNode(product: Product) {
  const node = {
    "@type": product.etsy.price ? "Product" : "Thing",
    "@id": `${HOME_URL}#product-${product.id}`,
    name: product.name,
    description: product.facts,
    image: absoluteUrl(product.image),
    url: product.etsy.url,
  };

  if (!product.etsy.price) return node;

  return {
    ...node,
    ...(product.sku ? { sku: product.sku } : {}),
    brand: { "@type": "Brand", name: "Demure Design" },
    offers: {
      "@type": "Offer",
      url: product.etsy.url,
      priceCurrency: "USD",
      price: product.etsy.price,
      availability: "https://schema.org/InStock",
      ...(product.priceValidUntil
        ? { priceValidUntil: product.priceValidUntil }
        : {}),
    },
  };
}

export function homeJsonLd(products: Product[]) {
  const priced = products.map(productNode);
  const organization = {
    "@type": "Organization",
    "@id": `${HOME_URL}#organization`,
    name: "Demure Design",
    url: HOME_URL,
    email: EMAIL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [ETSY_SHOP, GUMROAD_SHOP],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${HOME_URL}#website`,
        url: HOME_URL,
        name: "Demure Design",
        description: STORE_DESCRIPTION,
        publisher: { "@id": `${HOME_URL}#organization` },
      },
      {
        "@type": "HowTo",
        name: "Buy. Download. Print.",
        description:
          "How to get Demure Design printables from Etsy or Gumroad.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Buy",
            text: "Pick a printable. Pay on Etsy or Gumroad.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download",
            text: "Get the PDF from your purchases right away.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Print",
            text: "Print at home. Reprint whenever you want.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do these printables ship?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. They are digital files. You download them after checkout. Nothing ships, so there is no shipping cost.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer refunds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: REFUND_ANSWER,
            },
          },
          {
            "@type": "Question",
            name: "Etsy or Gumroad?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The files are the same. Use Etsy if you already shop there. Use Gumroad for a direct checkout.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Demure Design printables",
        numberOfItems: products.length,
        itemListElement: priced.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: product,
        })),
      },
      ...priced.filter((product) => product["@type"] === "Product"),
    ],
  };
}
