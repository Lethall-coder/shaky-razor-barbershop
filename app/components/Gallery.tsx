"use client";

import { useState, useRef } from "react";
import { useReveal } from "../hooks/useReveal";

const TOTAL_PHOTOS = 25;
const PHOTOS_PER_SET = 8;
const totalSets = Math.ceil(TOTAL_PHOTOS / PHOTOS_PER_SET);
const allPhotos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => i + 1);

function getSet(index: number) {
  const start = index * PHOTOS_PER_SET;
  const set: number[] = [];
  for (let i = 0; i < PHOTOS_PER_SET; i++) {
    set.push(allPhotos[(start + i) % TOTAL_PHOTOS]);
  }
  return set;
}

export default function Gallery() {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const [currentSet, setCurrentSet] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);
  const [displaySet, setDisplaySet] = useState(0);
  const lockRef = useRef(false);

  function navigate(direction: 1 | -1) {
    if (lockRef.current) return;
    lockRef.current = true;
    setSliding(direction === 1 ? "left" : "right");
    setTimeout(() => {
      const next = (currentSet + direction + totalSets) % totalSets;
      setCurrentSet(next);
      setDisplaySet(next);
      setSliding(null);
      lockRef.current = false;
    }, 400);
  }

  const photos = getSet(displaySet);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">Our Work</div>
          <h2 className="section-title">The Gallery</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="gallery-carousel">
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={() => navigate(-1)}
          aria-label="Previous photos"
        >
          &#8249;
        </button>
        <div
          className={`gallery-grid reveal${sliding === "left" ? " gallery-slide-left" : sliding === "right" ? " gallery-slide-right" : ""}`}
          ref={gridRef}
        >
          {photos.map((num) => (
            <div key={`${displaySet}-${num}`} className="gallery-item">
              <img
                src={`/images/gallery/${num}.jpg`}
                alt={`Gallery photo ${num}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={() => navigate(1)}
          aria-label="Next photos"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
