export type ProductCategory = "planning" | "kids";

export type Product = {
  id: string;
  name: string;
  facts: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  etsy: { url: string };
  gumroad?: { url: string };
};

export const PRODUCT_FACTS: Record<string, string> = {
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
    etsy: { url: "https://www.etsy.com/listing/4534979142" },
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
    etsy: { url: "https://www.etsy.com/listing/4563523161" },
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
    etsy: { url: "https://www.etsy.com/listing/4542113652" },
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
    etsy: { url: "https://www.etsy.com/listing/4566631822" },
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
    etsy: { url: "https://www.etsy.com/listing/4534956675" },
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
    etsy: { url: "https://www.etsy.com/listing/4539280226" },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/educational-wall-art",
    },
  },
];
