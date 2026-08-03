import type { Metadata } from "next";
import BookingForm from "../components/BookingForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment with anthrop architecture and design studio at DN Oxypark, Bhubaneswar.",
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    "DN Oxypark, Dumduma, Bhubaneswar, Odisha 751019"
  );

  return (
    <main id="main-content" className="inner-page contact-page">
      <section className="contact-intro section-pad">
        <p className="eyebrow">Start a project</p>
        <h1>Tell us about the<br /><em>space you imagine.</em></h1>
        <p>
          Every engagement begins with a scheduled studio consultation. Share a
          few details and choose a time that works for you.
        </p>
      </section>

      <section className="booking-section section-pad">
        <BookingForm />
        <aside className="contact-aside">
          <div className="studio-card">
            <p className="eyebrow">Studio address</p>
            <h2>DN Oxypark</h2>
            <address>
              Flat no. 3141, Tower — Aqua
              <br />
              Dumduma, Bhubaneswar
              <br />
              Odisha 751019
            </address>
            <div className="contact-action-list">
              <a className="text-link" href="tel:+919937783912">
                Call +91 99377 83912 <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href="https://wa.me/919937783912?text=Hello%20anthrop%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hours-card">
            <p className="eyebrow">Appointments</p>
            <div className="hours-row">
              <span>Monday — Sunday</span>
              <strong>10:00 AM — 7:00 PM</strong>
            </div>
            <p>Studio visits are by prior appointment only.</p>
            <div className="studio-rating" aria-label="4.9 rating from 57 reviews">
              <strong>4.9 <span aria-hidden="true">★</span></strong>
              <span>57 reviews</span>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="anthrop studio location at DN Oxypark"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
