"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          The Shaky Razor
        </a>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#team" onClick={(e) => handleNavClick(e, "#team")}>
              Team
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={(e) => handleNavClick(e, "#gallery")}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={(e) => handleNavClick(e, "#reviews")}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#location" onClick={(e) => handleNavClick(e, "#location")}>
              Location
            </a>
          </li>
        </ul>
        <a
          href="https://www.vagaro.com/theshakyrazorbarbershop/services"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-book-btn"
        >
          Book Now
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
