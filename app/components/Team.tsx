"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const barbers = [
  { name: "Jorge Ramirez", image: "/images/barbers/jorge-ramirez.jpg" },
  { name: "Yureni Crisbel", image: "/images/barbers/yureni-crisbel.jpg" },
  { name: "Alexis Rincon", image: "/images/barbers/alexis-rincon.jpg" },
  { name: "Tyrone Mean", image: "/images/barbers/tyrone-mean.jpg" },
  { name: "Chris Demara", image: "/images/barbers/chris-demara.jpg" },
  { name: "Atif Naeemi", image: "/images/barbers/atif-naeemi.jpg" },
  { name: "Patty Holtz", image: "/images/barbers/patty-holtz.jpg" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function BarberCard({ name, image }: { name: string; image: string }) {
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
            <BarberCard key={barber.name} name={barber.name} image={barber.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
