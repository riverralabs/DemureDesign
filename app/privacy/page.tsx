import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Demure Design collects nothing on this site.",
  alternates: {
    canonical: "https://demure.design/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="legal">
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
        Questions:{" "}
        <a href="mailto:hello@demure.design">hello@demure.design</a>
      </p>
    </article>
  );
}
