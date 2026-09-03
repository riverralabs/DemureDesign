import type { Metadata } from "next";
import Image from "next/image";
import plannerStill from "@/public/products/quiet-planner.jpg";
import alphabetStill from "@/public/products/animal-alphabet.jpg";

export const metadata: Metadata = {
  title: "Demure Design",
  description:
    "Printables for quiet time and planning. Instant download, nothing ships.",
  alternates: {
    canonical: "https://demure.design",
  },
};

const ETSY_SHOP = "https://www.etsy.com/shop/TheDemureDesign";
const GUMROAD_SHOP = "https://demuredesign.gumroad.com";

export default function HomePage() {
  return (
    <>
      <p className="eyebrow">Calm by design</p>
      <h1>Printables for quiet time and planning</h1>
      <p className="lede">Instant download, nothing ships.</p>
      <div className="cta-row">
        <a
          className="btn btn-primary"
          href={ETSY_SHOP}
          rel="noopener noreferrer"
        >
          Shop on Etsy
        </a>
        <a
          className="btn btn-secondary"
          href={GUMROAD_SHOP}
          rel="noopener noreferrer"
        >
          Shop on Gumroad
        </a>
      </div>

      <section className="products" aria-label="Printables">
        <article className="product">
          <h2 className="product-title">The Quiet Planner</h2>
          <p className="product-meta">111-page undated</p>
          <Image
            src={plannerStill}
            alt="The Quiet Planner listing still: undated planner pages on three tablets, including a habit tracker."
            sizes="(max-width: 720px) calc(100vw - 48px), 672px"
            priority
          />
          <p className="product-copy">
            Monthly, weekly, and daily pages, with habits, budget, and
            reflection. Start on any day.
          </p>
          <div className="product-links">
            <a
              className="btn btn-primary"
              href="https://www.etsy.com/listing/4534979142"
              rel="noopener noreferrer"
            >
              Shop on Etsy
            </a>
            <a
              className="btn btn-secondary"
              href="https://demuredesign.gumroad.com/l/undatedplanner"
              rel="noopener noreferrer"
            >
              Shop on Gumroad
            </a>
          </div>
        </article>

        <article className="product">
          <h2 className="product-title">Animal Alphabet Flash Cards</h2>
          <p className="product-meta">A–Z + shapes</p>
          <Image
            src={alphabetStill}
            alt="Animal Alphabet Flash Cards listing still: letters, animals, and shapes on a paper-colored field."
            sizes="(max-width: 720px) calc(100vw - 48px), 672px"
          />
          <p className="product-copy">
            Printable cards for letters, animals, and shapes. Download and
            print at home.
          </p>
          <div className="product-links">
            <a
              className="btn btn-primary"
              href="https://www.etsy.com/listing/4566631822"
              rel="noopener noreferrer"
            >
              Shop on Etsy
            </a>
            <a
              className="btn btn-secondary"
              href="https://demuredesign.gumroad.com/l/animal-alphabet-flash-cards"
              rel="noopener noreferrer"
            >
              Shop on Gumroad
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
