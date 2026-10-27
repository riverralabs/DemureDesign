import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, pageUrl } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email Demure Design if a printable will not open. Checkout stays on Etsy or Gumroad.",
  alternates: {
    canonical: pageUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <article className="shell legal">
      <p className="eyebrow">Contact</p>
      <h1>Contact</h1>
      <p>
        Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        If a file will not open, write to us and we will send a working copy.
        This site does not take payment. Checkout stays on Etsy or Gumroad.
      </p>
      <p>
        Digital sales are final. The policy is in the{" "}
        <Link href="/terms/#refunds">terms</Link>.
      </p>
    </article>
  );
}
