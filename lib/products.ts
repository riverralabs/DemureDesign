export type ProductCategory = "planning" | "kids";

export type Product = {
  id: string;
  name: string;
  facts: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  etsy: { url: string; price: number };
  gumroad?: { url: string; price: number };
};

export const products: Product[] = [
  {
    id: "quiet-planner",
    name: "The Quiet Planner",
    facts: "111 pages. A4, A5, and US Letter PDFs.",
    category: "planning",
    image: "/products/planner.jpg",
    imageAlt:
      "The Quiet Planner: undated planner pages on tablets, including a habit tracker.",
    etsy: {
      url: "https://www.etsy.com/listing/4534979142",
      price: 16.99,
    },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/undatedplanner",
      price: 9.99,
    },
  },
  {
    id: "sea-coloring",
    name: "Sea Animal Coloring",
    facts: "8 toddler pages. US Letter PDF.",
    category: "kids",
    image: "/products/sea-coloring.jpg",
    imageAlt:
      "Eight easy sea animal coloring pages for toddlers, including a clown fish and octopus.",
    etsy: {
      url: "https://www.etsy.com/listing/4563523161",
      price: 2.99,
    },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/bjzhx",
      price: 2.99,
    },
  },
  {
    id: "animal-coloring",
    name: "Easy Animal Coloring",
    facts: "30 pages. US Letter PDF.",
    category: "kids",
    image: "/products/animal-coloring.jpg",
    imageAlt:
      "Thirty easy animal coloring pages for toddlers, one animal per page.",
    etsy: {
      url: "https://www.etsy.com/listing/4542113652",
      price: 4.99,
    },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/animal-coloring-pages",
      price: 4.99,
    },
  },
  {
    id: "alphabet-cards",
    name: "Animal Alphabet Cards",
    facts: "26 animals plus 10 shapes. 5x7 and 8x10 PDFs.",
    category: "kids",
    image: "/products/alphabet.jpg",
    imageAlt:
      "Printable animal alphabet flash cards, A to Z, with smiling shape cards.",
    etsy: {
      url: "https://www.etsy.com/listing/4566631822",
      price: 4.99,
    },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/animal-alphabet-flash-cards",
      price: 6.99,
    },
  },
  {
    id: "affirmation-cards",
    name: "Kids Affirmation Cards",
    facts: "36 cards. 3x5 and 5x7 PDFs, plus JPGs.",
    category: "kids",
    image: "/products/affirmation-cards.jpg",
    imageAlt:
      "Thirty-six printable kids affirmation cards for lunch boxes and calm corners.",
    etsy: {
      url: "https://www.etsy.com/listing/4534956675",
      price: 9.99,
    },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/kids-affirmation-cards",
      price: 7,
    },
  },
  {
    id: "posters",
    name: "Educational Posters",
    facts: "7 designs in 5 sizes. JPG files.",
    category: "kids",
    image: "/products/posters.jpg",
    imageAlt:
      "Set of seven educational posters covering alphabet, numbers, shapes, and more.",
    etsy: {
      url: "https://www.etsy.com/listing/4539280226",
      price: 12.99,
    },
    gumroad: {
      url: "https://demuredesign.gumroad.com/l/educational-wall-art",
      price: 12.99,
    },
  },
];
