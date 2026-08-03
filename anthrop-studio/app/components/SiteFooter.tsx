import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="anthrop home">
            <img
              className="footer-logo"
              src="/assets/anthrop-logo-full.png"
              alt="anthrop - Planning, Interior, Landscape"
            />
          </Link>
          <p>Thoughtful spaces for contemporary life.</p>
        </div>

        <div>
          <p className="footer-label">Visit the studio</p>
          <address>
            DN Oxypark, Flat no. 3141
            <br />
            Tower — Aqua, Dumduma
            <br />
            Bhubaneswar, Odisha 751019
          </address>
        </div>

        <div>
          <p className="footer-label">Studio hours</p>
          <p>
            Monday — Sunday
            <br />
            10:00 AM — 7:00 PM
            <br />
            By appointment
          </p>
          <a className="footer-phone" href="tel:+919937783912">
            +91 99377 83912
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Consultation</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} anthrop</p>
        <p>Planning · Interior Design · Landscape Architecture</p>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
