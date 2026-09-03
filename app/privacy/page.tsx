import type { Metadata } from "next";
import { EMAIL } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Demure Design collects nothing on this site.",
  alternates: {
    canonical: "https://demure.design/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="shell legal">
      <p className="eyebrow">Legal</p>
      <h1>Privacy</h1>
      <p>
        This site collects nothing. There is no form, no newsletter, no account,
        and no cookies set by Demure Design.
      </p>
      <p>
        Shop links go to Etsy and Gumroad. Those shops use their own privacy
        practices.
      </p>
      <p>
        Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </article>
  );
}
