import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { EMAIL, ETSY_SHOP, GUMROAD_SHOP } from "@/lib/shop";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/">
            <LogoMark className="brand-mark" />
            <span className="brand-name">Demure Design</span>
          </Link>
          <nav className="header-nav" aria-label="Primary">
            <Link href="/#shop">Shop</Link>
            <a href={ETSY_SHOP} rel="noopener noreferrer" target="_blank">
              Etsy
            </a>
            <a href={GUMROAD_SHOP} rel="noopener noreferrer" target="_blank">
              Gumroad
            </a>
          </nav>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <p className="footer-identity">Riverra Labs LLP</p>
          <a className="footer-mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <nav className="footer-links" aria-label="Footer">
            <a href={ETSY_SHOP} rel="noopener noreferrer" target="_blank">
              Etsy
            </a>
            <a href={GUMROAD_SHOP} rel="noopener noreferrer" target="_blank">
              Gumroad
            </a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
