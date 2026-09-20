import type { Metadata } from "next";
import Image from "next/image";
import { FloralCluster } from "@/components/FloralCluster";
import { ProductShop } from "@/components/ProductShop";
import { getCatalog } from "@/lib/catalog";
import { homeJsonLd, jsonLdScript } from "@/lib/json-ld";
import { ShopOnEtsy, ShopOnGumroad } from "@/components/ShopButtons";
import { EMAIL, ETSY_SHOP, GUMROAD_SHOP, SITE_URL } from "@/lib/shop";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Demure Design · Printables for quiet time and planning",
  },
  description:
    "Undated planners and kids printables. Instant download on Etsy and Gumroad.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Printables for quiet time and planning",
    description:
      "Undated planners and kids printables from Demure Design. Download instantly. Print at home.",
  },
};

export default async function HomePage() {
  const products = await getCatalog();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(homeJsonLd(products)),
        }}
      />
      <section className="hero-section">
        <div className="shell hero">
          <div className="hero-float">
            <FloralCluster className="hero-art" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Calm by design</p>
            <h1>Calm planning and quiet play, ready to print</h1>
            <hr className="sun-rule" />
            <p className="lede">
              Undated planners and kids printables you can print at home.
            </p>
            <div className="cta-row">
              <ShopOnGumroad href={GUMROAD_SHOP} />
              <ShopOnEtsy href={ETSY_SHOP} />
            </div>
            <p className="cta-note">
              Listing photos show the pages. Files arrive at checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="banner-section" aria-label="Brand banner">
        <Image
          src="/banner.jpg"
          alt="Designed for your everyday and special moments. Planners and kids activities."
          width={1920}
          height={480}
          className="banner-image"
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
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

      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="shell">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq-heading">
            Before you buy
          </h2>
          <dl className="faq-list">
            <div>
              <dt>Do these printables ship?</dt>
              <dd>
                No. They are digital files. You download them after checkout.
                Nothing ships.
              </dd>
            </div>
            <div>
              <dt>Do you offer refunds?</dt>
              <dd>
                No. Files arrive at purchase, so all sales are final. We do not
                provide refunds, returns, or exchanges.
              </dd>
            </div>
            <div>
              <dt>Etsy or Gumroad?</dt>
              <dd>The same printables are on both. Pick the shop you prefer.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-heading">
        <div className="shell">
          <p className="eyebrow">About</p>
          <h2 className="section-title" id="about-heading">
            Demure Design
          </h2>
          <p>
            A small studio making digital printables for quiet time, planning,
            and little hands.
          </p>
          <p>Instant download. Nothing ships. Files are for personal use.</p>
          <p>
            Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
