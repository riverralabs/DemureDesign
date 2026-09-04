import type { Metadata } from "next";
import Image from "next/image";
import { FloralCluster } from "@/components/FloralCluster";
import { ProductShop } from "@/components/ProductShop";
import { getCatalog } from "@/lib/catalog";
import { EMAIL, ETSY_SHOP } from "@/lib/shop";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Demure Design",
  description:
    "Printables for quiet time, planning, and little hands. Instant download, nothing ships.",
  alternates: {
    canonical: "https://demure.design",
  },
};

export default async function HomePage() {
  const products = await getCatalog();

  return (
    <>
      <section className="hero-section">
        <div className="shell hero">
          <div className="hero-float">
            <FloralCluster className="hero-art" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Calm by design</p>
            <h1>Printables for quiet time, planning, and little hands</h1>
            <hr className="sun-rule" />
            <p className="lede">Instant download. Nothing ships.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#shop">
                Shop printables
              </a>
              <a
                className="btn btn-secondary"
                href={ETSY_SHOP}
                rel="noopener noreferrer"
                target="_blank"
              >
                Shop on Etsy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section" aria-label="Brand banner">
        <Image
          src="/banner.jpg"
          alt="Designed for your everyday and special moments. Planners and kids activities."
          width={3750}
          height={938}
          className="banner-image"
          sizes="100vw"
          priority
        />
      </section>

      <section className="shop-section" id="shop" aria-label="Printables">
        <div className="shell">
          <ProductShop products={products} />
        </div>
      </section>

      <section className="how-section" aria-labelledby="how-heading">
        <div className="shell">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title" id="how-heading">
            Buy. Download. Print.
          </h2>
          <ol className="how-grid">
            <li>
              <h3>Buy</h3>
              <p>Pick a printable. Pay on Etsy or Gumroad.</p>
            </li>
            <li>
              <h3>Download</h3>
              <p>Get the PDF from your purchases right away.</p>
            </li>
            <li>
              <h3>Print</h3>
              <p>Print at home. Reprint whenever you want.</p>
            </li>
          </ol>
          <p className="policy-note">
            Digital files only. Nothing ships. Sales are final. No refunds.
          </p>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-heading">
        <div className="shell">
          <p className="eyebrow">About</p>
          <h2 className="section-title" id="about-heading">
            Demure Design
          </h2>
          <p>
            Digital printables for quiet time, planning, and little hands.
            Instant download. Nothing ships.
          </p>
          <p>
            Files are delivered at checkout, so sales are final. No refunds.
          </p>
          <p>
            Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
