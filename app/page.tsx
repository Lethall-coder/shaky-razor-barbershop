import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import BookingCTA from "./components/BookingCTA";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Reviews />
      <BookingCTA />
      <Location />
      <Footer />
    </>
  );
}
