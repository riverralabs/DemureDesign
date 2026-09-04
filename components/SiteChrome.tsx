import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell">
          <Link className="wordmark" href="/">
            Demure Design
          </Link>
        </div>
      </header>
      <main id="content" className="shell">
        {children}
      </main>
      <footer className="site-footer">
        <div className="shell">
          <p className="footer-identity">Riverra Labs LLP</p>
          <a className="footer-mail" href="mailto:hello@demure.design">
            hello@demure.design
          </a>
          <nav className="footer-links" aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
