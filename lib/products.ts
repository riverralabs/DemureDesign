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

export const fallbackProducts: Product[] = [
  {
    id: "4534979142",
    name: "The Quiet Planner",
    facts: "111 pages. A4, A5, and US Letter PDFs.",
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
    facts: "8 toddler pages. US Letter PDF.",
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
    facts: "30 pages. US Letter PDF.",
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
    facts: "26 animals plus 10 shapes. 5x7 and 8x10 PDFs.",
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
    facts: "36 cards. 3x5 and 5x7 PDFs, plus JPGs.",
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
    facts: "7 designs in 5 sizes. JPG files.",
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
