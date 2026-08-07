import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Anthrop Studio's history, vision, and aesthetic approach to architecture and interior design.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-pad">
      <section className="section-pad">
        <div className="section-heading">
          <p className="eyebrow">Our Studio</p>
          <h1>Philosophy & Vision</h1>
        </div>
        <div className="content-grid">
          <div className="copy-block">
            <h2>Designing from the outside in.</h2>
            <p>
              At Anthrop Studio, we believe that the best spaces are those that
              respond intuitively to their environment. Our philosophy is rooted
              in a deep appreciation for context, climate, and the human
              experience. We craft spaces that are not just visually stunning
              but functionally resonant.
            </p>
            <p>
              Since our inception, we have strived to bridge the gap between
              traditional craftsmanship and modern architectural innovation. Every
              project is a dialogue between the site&apos;s natural characteristics
              and our client&apos;s unique aspirations.
            </p>
          </div>
          <figure className="image-block">
            <img src="/assets/minimalist-bedroom-ceiling.webp" alt="Minimalist interior space showcasing our design aesthetic" />
          </figure>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="section-heading">
          <h2>Our Aesthetic Approach</h2>
        </div>
        <div className="grid-3">
          <div className="feature-card">
            <h3>Material Honesty</h3>
            <p>We celebrate the raw beauty of natural materials, allowing wood, stone, and metal to age gracefully.</p>
          </div>
          <div className="feature-card">
            <h3>Spatial Flow</h3>
            <p>Our layouts are designed for intuitive movement, blurring the boundaries between interior and exterior spaces.</p>
          </div>
          <div className="feature-card">
            <h3>Timeless Elegance</h3>
            <p>We avoid fleeting trends, focusing instead on enduring design principles that stand the test of time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
