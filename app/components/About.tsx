"use client";

import { useReveal } from "../hooks/useReveal";

export default function About() {
  const headerRef = useReveal();
  const contentRef = useReveal();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">Our Story</div>
          <h2 className="section-title">Behind the Chair</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content reveal" ref={contentRef}>
          <div className="about-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/greg-brenda.jpg"
              alt="Greg & Brenda Rocha - Owners"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h3>Greg Rocha</h3>
            <div className="barber-title">Owner &amp; Master Barber</div>
            <p>
              In 2017, Greg and his wife Brenda opened The Shaky Razor with a
              simple idea: give every client the time, attention, and quality
              they deserve. No rushed cuts, no assembly line &mdash; just honest
              craftsmanship in a shop that feels like home.
            </p>
            <p>
              What started as a two-chair dream in San Ramon has grown into a
              go-to destination for men and families across the Tri-Valley. With
              a team of experienced barbers &mdash; each bringing years of skill
              behind the chair &mdash; The Shaky Razor delivers precision cuts,
              clean fades, and straight razor shaves that keep clients coming
              back.
            </p>
            <p>Step in and leave looking sharp.</p>
            <div className="about-signature">&mdash; Greg &amp; Brenda</div>
            <div className="about-extras">
              <span className="about-extra-item">Family Owned</span>
              <span className="about-extra-item">Est. 2017</span>
              <span className="about-extra-item">Kid Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
