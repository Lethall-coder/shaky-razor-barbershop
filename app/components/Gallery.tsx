"use client";

import { useState, useEffect, useCallback } from "react";
import { useReveal } from "../hooks/useReveal";

const TOTAL_PHOTOS = 25;
const PHOTOS_PER_SET = 8;
const ROTATE_INTERVAL = 4000;
const allPhotos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => i + 1);

function getSet(index: number) {
  const start = index * PHOTOS_PER_SET;
  const set: number[] = [];
  for (let i = 0; i < PHOTOS_PER_SET; i++) {
    set.push(allPhotos[(start + i) % TOTAL_PHOTOS]);
  }
  return set;
}

const totalSets = Math.ceil(TOTAL_PHOTOS / PHOTOS_PER_SET);

export default function Gallery() {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const [currentSet, setCurrentSet] = useState(0);
  const [fading, setFading] = useState(false);
  const [displaySet, setDisplaySet] = useState(0);

  const advance = useCallback((direction: 1 | -1) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrentSet((prev) => (prev + direction + totalSets) % totalSets);
      setDisplaySet((prev) => (prev + direction + totalSets) % totalSets);
      setFading(false);
    }, 500);
  }, [fading]);

  useEffect(() => {
    const timer = setInterval(() => advance(1), ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

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
          onClick={() => advance(-1)}
          aria-label="Previous photos"
        >
          &#8249;
        </button>
        <div
          className={`gallery-grid reveal${fading ? " gallery-fade-out" : " gallery-fade-in"}`}
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
          onClick={() => advance(1)}
          aria-label="Next photos"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
