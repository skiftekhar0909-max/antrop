import Link from "next/link";

const links = [
  { href: "/", label: "Studio" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-lockup" href="/" aria-label="anthrop home">
          <img src="/assets/anthrop-symbol-dark.png" alt="" />
          <span className="brand-type">
            <strong>anthrop</strong>
            <small>Planning · Interior · Landscape</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contact">
          Book a consultation <span aria-hidden="true">↗</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="mobile-book" href="/contact">
              Book a consultation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
