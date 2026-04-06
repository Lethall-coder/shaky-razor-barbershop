export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-ornament">&#10022; &mdash;&mdash;&mdash; &#10022;</div>
        <div className="hero-subtitle">San Ramon&rsquo;s Finest</div>
        <h1 className="hero-title">
          The Shaky<em>Razor Barbershop</em>
        </h1>
        <div className="hero-est">&mdash; Established 2017 &mdash;</div>
        <div className="hero-badges">
          <span className="hero-badge">Appointments Only</span>
          <span className="hero-badge">Cash Only &middot; ATM Onsite</span>
        </div>
        <a
          href="https://www.vagaro.com/theshakyrazorbarbershop"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Book Your Appointment
        </a>
      </div>
      <div className="hero-scroll">
        <span></span>
      </div>
    </section>
  );
}
