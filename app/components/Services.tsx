"use client";

import { useReveal } from "../hooks/useReveal";

export default function Services() {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const footerRef = useReveal();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Services &amp; Pricing</h2>
          <div className="section-divider"></div>
        </div>
        <div className="services-grid reveal" ref={gridRef}>
          <div className="service-col">
            <h3>Classic Cuts</h3>
            <div className="service-item">
              <span className="service-name">Haircut</span>
              <span className="service-price">$45</span>
            </div>
            <div className="service-item">
              <span className="service-name">Beard Trim</span>
              <span className="service-price">$30</span>
            </div>
            <div className="service-item">
              <span className="service-name">Buzz Cut</span>
              <span className="service-price">$30</span>
            </div>
            <div className="service-item">
              <span className="service-name">Senior Cut</span>
              <span className="service-price">$30</span>
            </div>
            <div className="service-item">
              <span className="service-name">Shave</span>
              <span className="service-price">$60</span>
            </div>
            <div className="service-item">
              <span className="service-name">Long Cut</span>
              <span className="service-price">$60</span>
            </div>
          </div>
          <div className="service-col">
            <h3>Combo Packs</h3>
            <div className="service-item">
              <span className="service-name">Combo Shave</span>
              <span className="service-price">$110</span>
            </div>
            <div className="service-item">
              <span className="service-name">Haircut &amp; Beard</span>
              <span className="service-price">$70</span>
            </div>
          </div>
        </div>
        <div className="services-footer reveal" ref={footerRef}>
          <div className="services-badges">
            <span className="services-badge">Cash Only &middot; ATM Onsite</span>
            <span className="services-badge">Appointments Only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
