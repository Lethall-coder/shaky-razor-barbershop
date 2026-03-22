"use client";

import { useReveal } from "../hooks/useReveal";

export default function Location() {
  const headerRef = useReveal();
  const contentRef = useReveal();

  return (
    <section className="location" id="location">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">Find Us</div>
          <h2 className="section-title">Location &amp; Hours</h2>
          <div className="section-divider"></div>
        </div>
        <div className="location-content reveal" ref={contentRef}>
          <div className="location-info">
            <h3>Address</h3>
            <address>
              2438 San Ramon Valley Blvd
              <br />
              San Ramon, CA 94583
            </address>
            <h3>Phone</h3>
            <p>
              <a href="tel:9257185995">(925) 718-5995</a>
            </p>
            <h3>Hours</h3>
            <div className="hours-table">
              {[
                ["Monday", "11 AM \u2013 7 PM"],
                ["Tuesday", "11 AM \u2013 7 PM"],
                ["Wednesday", "11 AM \u2013 7 PM"],
                ["Thursday", "11 AM \u2013 7 PM"],
                ["Friday", "11 AM \u2013 7 PM"],
                ["Saturday", "10 AM \u2013 4 PM"],
                ["Sunday", "10 AM \u2013 4 PM"],
              ].map(([day, time]) => (
                <div key={day} className="hours-row">
                  <span className="hours-day">{day}</span>
                  <span className="hours-time">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps?q=The+Shaky+Razor+Barbershop,+2438+San+Ramon+Valley+Blvd,+San+Ramon,+CA+94583&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Shaky Razor Barbershop location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
