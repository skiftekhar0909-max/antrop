"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
];

type Confirmation = {
  name: string;
  date: string;
  time: string;
  reference: string;
  whatsappUrl: string;
};

export default function BookingForm() {
  const [minDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const reference = `ANT-${Date.now().toString().slice(-6)}`;
    const record = {
      name: String(data.get("name")),
      email: String(data.get("email")),
      phone: String(data.get("phone")),
      service: String(data.get("service")),
      date: String(data.get("date")),
      time: String(data.get("time")),
      message: String(data.get("message")),
      reference,
      createdAt: new Date().toISOString(),
    };
    const whatsappMessage = [
      "Hello anthrop, I would like to request a studio consultation.",
      "",
      `Name: ${record.name}`,
      `Phone: ${record.phone}`,
      `Email: ${record.email}`,
      `Service: ${record.service}`,
      `Preferred date: ${record.date}`,
      `Preferred time: ${record.time}`,
      `Project details: ${record.message || "Not provided"}`,
      `Reference: ${record.reference}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/919937783912?text=${encodeURIComponent(whatsappMessage)}`;

    localStorage.setItem("anthrop-consultation-request", JSON.stringify(record));
    setConfirmation({
      name: record.name,
      date: record.date,
      time: record.time,
      reference,
      whatsappUrl,
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
  }

  if (confirmation) {
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${confirmation.date}T12:00:00`));

    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="confirmation"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="booking-confirmation" 
          role="status"
        >
          <motion.span 
            className="confirmation-mark" 
            aria-hidden="true"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          >✓</motion.span>
          <p className="eyebrow">WhatsApp request prepared</p>
          <h2>Thank you, {confirmation.name}.</h2>
          <p>
            Your preferred appointment is <strong>{formattedDate}</strong> at{" "}
            <strong>{confirmation.time}</strong>.
          </p>
          <div className="reference-row">
            <span>Request reference</span>
            <strong>{confirmation.reference}</strong>
          </div>
          <p className="form-note">
            WhatsApp has been opened with your details. Tap Send there to deliver
            the request to anthrop; the studio will confirm the appointment.
          </p>
          <a
            className="submit-button confirmation-whatsapp"
            href={confirmation.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Continue to WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <button className="text-link" type="button" onClick={() => setConfirmation(null)}>
            Prepare another request <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form 
        key="form"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="booking-form" 
        onSubmit={handleSubmit}
      >
        <div className="form-heading">
          <p className="eyebrow">Consultation planner</p>
          <h2>Choose a preferred date.</h2>
          <p>All fields marked with * are required.</p>
        </div>

        <div className="field-grid">
          <label>
            <span>Name *</span>
            <input name="name" type="text" autoComplete="name" required placeholder="Your full name" />
          </label>
          <label>
            <span>Phone *</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              inputMode="tel"
              pattern="[0-9+ -]{8,18}"
              placeholder="+91"
            />
          </label>
        </div>

        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </label>

        <label>
          <span>What can we help with? *</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Architectural Planning</option>
            <option>Interior Architecture</option>
            <option>Landscape Architecture</option>
            <option>Integrated Design</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <div className="field-grid">
          <label>
            <span>Preferred date *</span>
            <input name="date" type="date" min={minDate} required />
          </label>
          <label>
            <span>Preferred time *</span>
            <select name="time" required defaultValue="">
              <option value="" disabled>Select a time</option>
              {timeSlots.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </label>
        </div>

        <label>
          <span>Tell us about the project</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Project type, location, approximate area, timeline or anything useful..."
          />
        </label>

        <label className="consent-field">
          <input type="checkbox" required />
          <span>I agree to be contacted about this consultation request. *</span>
        </label>

        <button className="submit-button" type="submit">
          Send request on WhatsApp <span aria-hidden="true">↗</span>
        </button>
        <p className="form-note">
          Appointment times are preferences and are confirmed by the studio.
        </p>
      </motion.form>
    </AnimatePresence>
  );
}
