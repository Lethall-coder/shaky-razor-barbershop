"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const headerRef = useReveal();
  const contentRef = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xwpkvjzr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try calling us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid reveal" ref={contentRef}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  color: "var(--gold-bright)",
                  marginBottom: "10px",
                }}
              >
                Message Sent!
              </h3>
              <p style={{ color: "var(--cream-dark)", fontSize: "1.1rem" }}>
                Thank you for reaching out. We&rsquo;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(925) 555-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
          <div className="contact-info-side">
            <h3>Prefer to Call?</h3>
            <p>
              Give us a ring at{" "}
              <a href="tel:9257185995">(925) 718-5995</a> to book or ask any
              questions.
            </p>
            <h3>Good to Know</h3>
            <p>
              We operate by appointment only to ensure every client gets the time
              and attention they deserve. We are a cash-only shop with an ATM
              available onsite for your convenience.
            </p>
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/shakyrazorbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.yelp.com/biz/the-shaky-razor-barbershop-san-ramon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Yelp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
