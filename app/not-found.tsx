import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on Demure Design.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <article className="shell legal">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>That address is not on this site.</p>
      <p>
        <Link className="btn btn-primary" href="/">
          Back to printables
        </Link>
      </p>
    </article>
  );
}
