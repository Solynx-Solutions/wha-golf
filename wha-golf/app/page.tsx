import Hero from "./components/Hero";
import WhyAttend from "./components/WhyAttend";
import EventDetails from "./components/EventDetails";
import Pricing from "./components/Pricing";
import Sponsorship from "./components/Sponsorship";
import Partners from "./components/Partners";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAttend />
      <EventDetails />
      <Pricing />
      <Sponsorship />
      <Partners />
      <FinalCTA />
      <Footer />
    </main>
  );
}
