import { EMAIL, ETSY_SHOP, GUMROAD_SHOP, SITE_URL } from "@/lib/shop";
import type { Product } from "@/lib/products";

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function homeJsonLd(products: Product[]) {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Demure Design",
    url: SITE_URL,
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
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Demure Design",
        description:
          "Undated planners and kids printables. Instant download on Etsy and Gumroad.",
        publisher: { "@id": `${SITE_URL}/#organization` },
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
              text: "No. They are digital files. You download them after checkout. Nothing ships.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer refunds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Files arrive at purchase, so all sales are final. We do not provide refunds, returns, or exchanges.",
            },
          },
          {
            "@type": "Question",
            name: "Should I buy on Etsy or Gumroad?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The same printables are on both. Pick the shop you prefer.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Demure Design printables",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.name,
            description: product.facts,
            image: absoluteUrl(product.image),
            url: product.etsy.url,
            brand: { "@id": `${SITE_URL}/#organization` },
          },
        })),
      },
    ],
  };
}
