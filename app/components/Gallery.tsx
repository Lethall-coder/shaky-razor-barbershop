"use client";

import { useRef } from "react";

const TOTAL_PHOTOS = 25;
const SCROLL_COUNT = 3;
const PHOTO_SIZE = 280;
const GAP = 4;

export default function Gallery() {
  const stripRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    if (!stripRef.current) return;
    stripRef.current.scrollBy({
      left: direction * (PHOTO_SIZE + GAP) * SCROLL_COUNT,
      behavior: "smooth",
    });
  }

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">The Gallery</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="gallery-carousel">
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          &#8249;
        </button>
        <div className="gallery-strip" ref={stripRef}>
          {Array.from({ length: TOTAL_PHOTOS }, (_, i) => (
            <img
              key={i}
              src={`/images/gallery/${i + 1}.jpg`}
              alt={`Gallery photo ${i + 1}`}
              className="gallery-photo"
              loading="lazy"
            />
          ))}
        </div>
        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
