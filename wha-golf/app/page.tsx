import Hero from "./components/Hero";
import CredibilityStrip from "./components/CredibilityStrip";
import WhyAttend from "./components/WhyAttend";
import WhoYoullMeet from "./components/WhoYoullMeet";
import EventDetails from "./components/EventDetails";
import Pricing from "./components/Pricing";
import Sponsorship from "./components/Sponsorship";
import Partners from "./components/Partners";
import SponsorCTA from "./components/SponsorCTA";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <WhyAttend />
      <WhoYoullMeet />
      <EventDetails />
      <Pricing />
      <Sponsorship />
      <Partners />
      <SponsorCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}

