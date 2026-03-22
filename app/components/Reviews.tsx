"use client";

import { useReveal } from "../hooks/useReveal";

const reviews = [
  {
    text: "\u201cFound my forever barbershop. The level of detail and care here is unmatched \u2014 every cut is precise, no rushing, no shortcuts. Just quality work every time.\u201d",
    author: "Loyal Client",
    source: "via Yelp",
  },
  {
    text: "\u201cMy son has autism and is very sensitive to sensory overload. Atif is incredibly gentle and patient \u2014 my son now loves getting haircuts and we\u2019re loyal regulars.\u201d",
    author: "Grateful Parent",
    source: "via Vagaro",
  },
  {
    text: "\u201cClean fades, sharp lineups, and a welcoming atmosphere every single visit. You can tell the team here genuinely cares about their clients. Easily the best in the area.\u201d",
    author: "Regular Client",
    source: "via Google",
  },
];

export default function Reviews() {
  const headerRef = useReveal();
  const subtitleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">What They Say</div>
          <h2 className="section-title">Client Reviews</h2>
          <div className="section-divider"></div>
        </div>
        <div className="reviews-subtitle reveal" ref={subtitleRef}>
          Rated <span>4.2 &#9733;</span> across 190+ reviews
        </div>
        <div className="reviews-grid reveal" ref={gridRef}>
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">&mdash; {review.author}</div>
              <div className="review-source">{review.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
