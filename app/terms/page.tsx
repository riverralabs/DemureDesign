import type { Metadata } from "next";
import { EMAIL } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for Demure Design printables.",
  alternates: {
    canonical: "https://demure.design/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="shell legal">
      <p className="eyebrow">Legal</p>
      <h1>Terms</h1>
      <p>
        Demure Design sells instant-download printables. Nothing physical ships.
        Files are for personal use unless a listing says otherwise.
      </p>
      <p>
        Listings and file delivery are handled by Etsy or Gumroad at checkout.
      </p>

      <h2>Refunds</h2>
      <p>
        Every product is a digital file. You receive it as soon as you pay.
        Nothing ships.
      </p>
      <p>
        Because the files are delivered at purchase, all sales are final. We do
        not provide refunds, returns, or exchanges.
      </p>

      <p>
        Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p className="legal-updated">Updated 20 September 2026</p>
    </article>
  );
}
