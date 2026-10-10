export type ProductCategory = "planning" | "kids" | "wedding";

export type EtsyListing = {
  url: string;
  price?: string;
};

export type Product = {
  id: string;
  name: string;
  facts: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  etsy: EtsyListing;
  gumroad?: { url: string };
  sku?: string;
  /** Sale price, such as "2.99". Regular price stays on etsy.price. */
  salePrice?: string;
  /** Inclusive end date, YYYY-MM-DD. After this date the regular price returns. */
  saleEndsAt?: string;
  /** Set at generation time while the sale is still active. */
  compareAtPrice?: string;
  /** Set at generation time while the sale is still active. */
  priceValidUntil?: string;
  /** False removes the listing from the shop, schema, and the Etsy feed. */
  active?: boolean;
};

const SALE_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** True through the end of saleEndsAt, compared as a UTC calendar date. */
export function saleIsCurrent(saleEndsAt: string, now = new Date()) {
  if (!SALE_DATE.test(saleEndsAt)) return false;
  return now.toISOString().slice(0, 10) <= saleEndsAt;
}

/** Apply salePrice until saleEndsAt. After that date, etsy.price is the offer. */
export function presentProduct(product: Product, now = new Date()): Product {
  const regular = product.etsy.price;
  if (!product.salePrice || !product.saleEndsAt || !regular) return product;
  if (!saleIsCurrent(product.saleEndsAt, now)) {
    return {
      ...product,
      compareAtPrice: undefined,
      priceValidUntil: undefined,
    };
  }
  return {
    ...product,
    etsy: { ...product.etsy, price: product.salePrice },
    compareAtPrice: regular,
    priceValidUntil: product.saleEndsAt,
  };
}

export function isInactiveListing(listingId: string) {
  return fallbackProducts.some(
    (product) => product.id === listingId && product.active === false,
  );
}

export function presentCatalog(products: Product[], now = new Date()) {
  return products
    .filter((product) => product.active !== false)
    .map((product) => presentProduct(product, now));
}

export const ETSY_PRICE_BY_LISTING: Record<string, string> = {
  "4592536961": "5.98",
  "4592523673": "5.98",
  "4592503468": "5.98",
  "4592502270": "5.98",
  "4581680364": "9.98",
  "4566631822": "4.99",
  "4563523161": "2.99",
  "4542113652": "4.99",
  "4539280226": "12.99",
  "4534979142": "16.99",
  "4534956675": "9.99",
};

export function etsyListing(
  listingId: string,
  url: string,
  livePrice?: string,
): EtsyListing {
  const price = livePrice ?? ETSY_PRICE_BY_LISTING[listingId];
  return price ? { url, price } : { url };
}

export const PRODUCT_FACTS: Record<string, string> = {
  "4592536961":
    "An olive striped wedding menu with a scalloped edge. Sized 5x7. You edit it in Canva.",
  "4581680364":
    "A wedding mood board and floral vision planner. You edit it in Canva.",
  "4592502270":
    "A crimson floral wedding menu with fine line art blooms and a delicate frame. Comes in 5x7 and 8x12.",
  "4592503468":
    "A blue botanical signature drinks menu for your wedding bar, with space for his, hers and ours cocktails. Comes in 5x7 and 8x12.",
  "4592523673":
    "An Art Deco wedding menu in warm rust red and cream, with a double frame and a striped cover. Comes in 5x7 and 8x12.",
  "4534979142":
    "Undated monthly, weekly, and daily pages you can start on any day.",
  "4563523161": "Eight simple sea animals for little hands.",
  "4542113652":
    "Thirty easy animals. One per page. Print again whenever you want.",
  "4566631822":
    "Printable animal alphabet cards your 3 to 6 year old can say out loud.",
  "4534956675": "Thirty-six lunch box notes with calm, kind words.",
  "4539280226": "Seven wall posters for letters, numbers, and shapes.",
};

export const fallbackProducts: Product[] = [
  {
    id: "4534979142",
    name: "The Quiet Planner",
    facts: PRODUCT_FACTS["4534979142"],
    category: "planning",
    image: "/products/planner.jpg",
    imageAlt:
      "The Quiet Planner: undated planner pages on tablets, including a habit tracker.",
    etsy: etsyListing("4534979142", "https://www.etsy.com/listing/4534979142"),
    gumroad: { url: "https://demuredesign.gumroad.com/l/undatedplanner" },
  },
  {
    id: "4563523161",
    name: "Sea Animal Coloring",
    facts: PRODUCT_FACTS["4563523161"],
    category: "kids",
    image: "/products/sea-coloring.jpg",
    imageAlt:
      "Eight easy sea animal coloring pages for toddlers, including a clown fish and octopus.",
    etsy: etsyListing("4563523161", "https://www.etsy.com/listing/4563523161"),
    gumroad: { url: "https://demuredesign.gumroad.com/l/bjzhx" },
  },
  {
    id: "4542113652",
    name: "Easy Animal Coloring",
    facts: PRODUCT_FACTS["4542113652"],
    category: "kids",
    image: "/products/animal-coloring.jpg",
    imageAlt:
      "Thirty easy animal coloring pages for toddlers, one animal per page.",
    etsy: etsyListing("4542113652", "https://www.etsy.com/listing/4542113652"),
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/animal-coloring-pages",
    },
  },
  {
    id: "4566631822",
    name: "Animal Alphabet Cards",
    facts: PRODUCT_FACTS["4566631822"],
    category: "kids",
    image: "/products/alphabet.jpg",
    imageAlt:
      "Printable animal alphabet flash cards, A to Z, with smiling shape cards.",
    etsy: etsyListing("4566631822", "https://www.etsy.com/listing/4566631822"),
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/animal-alphabet-flash-cards",
    },
  },
  {
    id: "4534956675",
    name: "Kids Affirmation Cards",
    facts: PRODUCT_FACTS["4534956675"],
    category: "kids",
    image: "/products/affirmation-cards.jpg",
    imageAlt:
      "Thirty-six printable kids affirmation cards for lunch boxes and calm corners.",
    etsy: etsyListing("4534956675", "https://www.etsy.com/listing/4534956675"),
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/kids-affirmation-cards",
    },
  },
  {
    id: "4539280226",
    name: "Educational Posters",
    facts: PRODUCT_FACTS["4539280226"],
    category: "kids",
    image: "/products/posters.jpg",
    imageAlt:
      "Set of seven educational posters covering alphabet, numbers, shapes, and more.",
    etsy: etsyListing("4539280226", "https://www.etsy.com/listing/4539280226"),
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/educational-wall-art",
    },
  },
  {
    id: "4592502270",
    name: "The Rosalie",
    facts: PRODUCT_FACTS["4592502270"],
    category: "wedding",
    image: "/products/rosalie.jpg",
    imageAlt:
      "The Rosalie crimson floral wedding menu on cream paper, with a cover page and a menu page inside a fine line frame.",
    etsy: etsyListing(
      "4592502270",
      "https://www.etsy.com/listing/4592502270/crimson-floral-wedding-menu-template",
    ),
    sku: "DD-ROSALIE-MENU",
    salePrice: "2.99",
    saleEndsAt: "2026-11-09",
    gumroad: { url: "https://demuredesign.gumroad.com/l/the-rosalie" },
  },
  {
    id: "4592503468",
    name: "The Jardin",
    facts: PRODUCT_FACTS["4592503468"],
    category: "wedding",
    image: "/products/jardin.jpg",
    imageAlt:
      "The Jardin blue botanical signature drinks sign, an arched menu with three cocktails on cream paper.",
    etsy: etsyListing(
      "4592503468",
      "https://www.etsy.com/listing/4592503468/blue-botanical-signature-drink-sign",
    ),
    sku: "DD-JARDIN-BAR",
    salePrice: "2.99",
    saleEndsAt: "2026-11-09",
    gumroad: { url: "https://demuredesign.gumroad.com/l/the-jardin" },
  },
  {
    id: "4592523673",
    name: "The Marais",
    facts: PRODUCT_FACTS["4592523673"],
    category: "wedding",
    image: "/products/marais.jpg",
    imageAlt:
      "The Marais Art Deco wedding menu in rust red and cream, with a striped cover and a framed menu page.",
    etsy: etsyListing(
      "4592523673",
      "https://www.etsy.com/listing/4592523673/vintage-wedding-menu-template-art-deco",
    ),
    sku: "DD-MARAIS-MENU",
    salePrice: "2.99",
    saleEndsAt: "2026-11-09",
    gumroad: { url: "https://demuredesign.gumroad.com/l/the-marais" },
  },
  {
    id: "4592536961",
    name: "Olive Striped Menu",
    facts: PRODUCT_FACTS["4592536961"],
    category: "wedding",
    image: "/products/olive.jpg",
    imageAlt:
      "Olive striped wedding menu on cream paper, with a scalloped olive border and a striped card behind it.",
    etsy: etsyListing(
      "4592536961",
      "https://www.etsy.com/listing/4592536961/olive-green-striped-wedding-menu",
    ),
    salePrice: "2.99",
    saleEndsAt: "2026-11-09",
    gumroad: { url: "https://demuredesign.gumroad.com/l/olive-striped-menu" },
  },
  {
    id: "4588876694",
    name: "Floral Wedding Suite",
    active: false,
    facts: "Inactive. This listing is not sold on demure.design.",
    category: "wedding",
    image: "",
    imageAlt: "",
    etsy: {
      url: "https://www.etsy.com/listing/4588876694/floral-wedding-menu-template-canva-place",
    },
  },
  {
    id: "4581680364",
    name: "Wedding Mood Board",
    facts: PRODUCT_FACTS["4581680364"],
    category: "planning",
    image: "/products/mood-board.jpg",
    imageAlt:
      "Wedding mood board with a floral border, photo frames, and a palette of blush, sage, and blue.",
    etsy: etsyListing(
      "4581680364",
      "https://www.etsy.com/listing/4581680364/wedding-mood-board-template-canva",
    ),
    salePrice: "4.99",
    saleEndsAt: "2026-10-24",
    gumroad: { url: "https://demuredesign.gumroad.com/l/wedding-mood-board" },
  },
];
