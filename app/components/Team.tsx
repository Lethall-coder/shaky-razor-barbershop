"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const barbers = [
  { name: "Greg", subtitle: "Co-Owner", image: "/images/barbers/greg.jpg" },
  { name: "Brenda", subtitle: "Co-Owner", image: "/images/barbers/brenda.jpg" },
  { name: "Jorge", image: "/images/barbers/jorge.jpg" },
  { name: "Alexis", image: "/images/barbers/alexis.jpg" },
  { name: "Atif", image: "/images/barbers/atif.jpg" },
  { name: "Chris", image: "/images/barbers/chris.jpg" },
  { name: "Tyrone", image: "/images/barbers/tyrone.jpg" },
  { name: "Patty", image: "/images/barbers/patty.jpg" },
  { name: "Toby", image: "/images/barbers/toby.jpg" },
  { name: "Yureni", image: "/images/barbers/yureni.jpg" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function BarberCard({ name, subtitle, image }: { name: string; subtitle?: string; image: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="team-card">
      {imgError ? (
        <div className="team-placeholder">
          <span>{getInitials(name)}</span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={image}
          alt={name}
          className="team-photo"
          onError={() => setImgError(true)}
        />
      )}
      <div className="team-name">{name}</div>
      {subtitle && <div className="team-subtitle">{subtitle}</div>}
    </div>
  );
}

export default function Team() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Meet the Barbers</h2>
          <div className="section-divider"></div>
        </div>
        <div className="team-grid reveal" ref={gridRef}>
          {barbers.map((barber) => (
            <BarberCard key={barber.name} name={barber.name} subtitle={barber.subtitle} image={barber.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
