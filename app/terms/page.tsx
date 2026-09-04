import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for Demure Design printables.",
  alternates: {
    canonical: "https://demure.design/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="legal">
      <p className="eyebrow">Legal</p>
      <h1>Terms</h1>
      <p>
        Demure Design sells instant-download printables. Nothing physical
        ships. Files are for personal use unless a listing says otherwise.
      </p>
      <p>
        Listings, prices, and file delivery are handled by Etsy or Gumroad at
        checkout.
      </p>
      <p>
        Questions:{" "}
        <a href="mailto:hello@demure.design">hello@demure.design</a>
      </p>
    </article>
  );
}
