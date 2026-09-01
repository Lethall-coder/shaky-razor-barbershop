"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const barbers = [
  { name: "Greg", subtitle: "Co-Owner", image: "/images/barbers/greg.jpg", position: "center 15%" },
  { name: "Brenda", subtitle: "Co-Owner", image: "/images/barbers/brenda.jpg", position: "center 10%" },
  { name: "Jorge", image: "/images/barbers/jorge.jpg", position: "center 15%" },
  { name: "Alexis", image: "/images/barbers/alexis.jpg", position: "center 30%" },
  { name: "Atif", image: "/images/barbers/atif.jpg", position: "center 25%" },
  { name: "Tyrone", image: "/images/barbers/tyrone.jpg", position: "center 20%" },
  { name: "Patty", image: "/images/barbers/patty.jpg", position: "center 20%" },
  { name: "Toby", image: "/images/barbers/toby.jpg", position: "center 25%" },
  { name: "Yureni", image: "/images/barbers/yureni.jpg", position: "center 15%" },
  { name: "Heaven", image: "/images/barbers/heaven.jpg", position: "center 25%" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function BarberCard({ name, subtitle, image, position }: { name: string; subtitle?: string; image: string; position?: string }) {
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
          style={position ? { objectPosition: position } : undefined}
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
            <BarberCard key={barber.name} name={barber.name} subtitle={barber.subtitle} image={barber.image} position={barber.position} />
          ))}
        </div>
      </div>
    </section>
  );
}
