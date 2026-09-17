import TournamentGallery from "./components/TournamentGallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <section className="section-shell mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fcdb7]">Past event archive</p>
        <h1 className="font-display mt-4 text-4xl text-[#f0ece4] sm:text-5xl">20th Annual WHA Golf Tournament</h1>
        <p className="mt-5 text-lg text-[#d2cbc0]">June 19, 2026 · Eagle Vines Golf Club · Napa Valley, California</p>
        <p className="mt-5 max-w-2xl text-[#d2cbc0]">This event has passed. Registration and sponsorship offers for the 2026 tournament are closed. Visit Western Hardscape Association for current events and future tournament announcements.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="btn-primary" href="https://westernhardscape.org/events">View current WHA events</a>
          <a className="btn-secondary" href="https://westernhardscape.org/contact">Contact WHA</a>
        </div>
      </section>
      <TournamentGallery />
      <Footer />
    </main>
  );
}
