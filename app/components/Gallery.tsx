"use client";

import { useReveal } from "../hooks/useReveal";

const gallerySlots = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Gallery() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">Our Work</div>
          <h2 className="section-title">The Gallery</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="gallery-grid reveal" ref={gridRef}>
        {gallerySlots.map((num) => (
          <div key={num} className="gallery-item">
            <div className="gallery-placeholder">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              Photo {num}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
