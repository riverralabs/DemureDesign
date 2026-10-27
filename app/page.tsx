import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductShop } from "@/components/ProductShop";
import { getCatalog } from "@/lib/catalog";
import { homeJsonLd, jsonLdScript } from "@/lib/json-ld";
import { EMAIL, HOME_URL } from "@/lib/shop";
import type { Product } from "@/lib/products";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Demure Design · Wedding menu printables",
  },
  description:
    "Wedding menus, undated planners, and kids printables. Instant download on Etsy and Gumroad.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "Wedding menus, planners, and kids printables",
    description:
      "Wedding menus, undated planners, and kids printables from Demure Design. Download instantly. Print at home.",
    url: HOME_URL,
  },
};

function heroPicks(products: Product[]) {
  const wedding = products.find((product) => product.category === "wedding");
  const planning = products.find((product) => product.category === "planning");
  const kids = products.find((product) => product.category === "kids");
  return [wedding, planning, kids].filter((product) => product !== undefined);
}

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
            <ul className="hero-picks">
              {heroPicks(products).map((product) => (
                <li key={product.id}>
                  <a className="hero-pick" href="#shop">
                    <span className="hero-pick-media">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="(max-width: 879px) 30vw, 160px"
                      />
                    </span>
                    <span>{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Instant download</p>
            <h1>Printable wedding menus, planners, and kids activities</h1>
            <hr className="sun-rule" />
            <p className="lede">
              Buy once. Edit a menu in Canva, or print a PDF at home.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#shop">
                Shop printables
              </a>
            </div>
            <p className="cta-note">
              Instant download. Nothing ships, so there is no shipping cost.
              Listing photos show the pages.
            </p>
          </div>
        </div>
      </section>

      <section className="banner-section" aria-label="Brand banner">
        <Image
          src="/banner.jpg"
          alt="Designed for your everyday and special moments. Wedding menus, planners, and kids activities."
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
            Files are digital, so all sales are final. Nothing ships. If a file
            will not open, email us and we will send a working copy. Read the{" "}
            <Link href="/terms/#refunds">refund terms</Link>.
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
                Nothing ships, so there is no shipping cost.
              </dd>
            </div>
            <div>
              <dt>Do you offer refunds?</dt>
              <dd>
                Files are digital, so all sales are final. If a file will not
                open, email us and we will send a working copy. The{" "}
                <Link href="/terms/#refunds">terms</Link> have the full policy.
              </dd>
            </div>
            <div>
              <dt>Etsy or Gumroad?</dt>
              <dd>
                The files are the same. Use Etsy if you already shop there. Use
                Gumroad for a direct checkout.
              </dd>
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
            Demure Design is a small studio. The printables are wedding menus,
            an undated planner, and quiet activities for kids. Menus are
            editable in Canva. The planner and kids pages are PDFs you print at
            home.
          </p>
          <p>
            Instant download. Nothing ships, so there is no shipping cost. Files
            are for personal use.
          </p>
          <p>
            Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. If a file will
            not open, email us and we will send a working copy. See the{" "}
            <Link href="/contact/">contact page</Link> and the{" "}
            <Link href="/terms/#refunds">refund terms</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
