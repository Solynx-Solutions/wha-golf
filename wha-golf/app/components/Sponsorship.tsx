import { CTA_URL } from "../lib/constants";

const sponsorTiers = [
  {
    id: "platinum",
    name: "Platinum Sponsor",
    price: "$3,700",
    accentColor: "#e5c96e",
    bgAccent: "rgba(201,168,76,0.06)",
    borderColor: "rgba(201,168,76,0.3)",
    featured: true,
    perks: [
      "Premier logo placement across all event materials",
      "Exclusive hole sponsor placement",
      "Sponsored awards presentation",
      "Banner signage at registration & awards",
      "Company recognition in all communications",
      "Exclusive access to top-tier industry contacts",
    ],
  },
  {
    id: "gold",
    name: "Gold Sponsor",
    price: "$3,000",
    accentColor: "#c9a84c",
    bgAccent: "rgba(201,168,76,0.04)",
    borderColor: "rgba(201,168,76,0.2)",
    featured: false,
    perks: [
      "Logo placement on event materials",
      "Hole sponsor placement",
      "Banner signage at event",
      "Company recognition in communications",
      "High-visibility brand exposure",
    ],
  },
  {
    id: "silver",
    name: "Silver Sponsor",
    price: "$2,200",
    accentColor: "#9a9490",
    bgAccent: "rgba(154,148,144,0.04)",
    borderColor: "rgba(154,148,144,0.2)",
    featured: false,
    perks: [
      "Logo placement on event materials",
      "Event banner recognition",
      "Company recognition in communications",
      "Brand visibility with industry professionals",
    ],
  },
  {
    id: "hole",
    name: "Hole Sponsor",
    price: "$550",
    accentColor: "#52b788",
    bgAccent: "rgba(45,106,79,0.05)",
    borderColor: "rgba(45,106,79,0.2)",
    featured: false,
    perks: [
      "Branded signage at your designated hole",
      "Logo recognition in event program",
      "Direct brand exposure to all players",
    ],
  },
  {
    id: "raffle",
    name: "Raffle Item Sponsor",
    price: "Min. $50 Value",
    accentColor: "#5c5853",
    bgAccent: "rgba(30,30,28,0.4)",
    borderColor: "rgba(42,42,42,0.6)",
    featured: false,
    perks: [
      "Brand recognition at raffle drawing",
      "Donate a product or gift card",
      "Acknowledged in event program",
    ],
  },
];

export default function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="relative py-24 px-6 sm:px-10 lg:px-16"
      style={{ background: "linear-gradient(180deg, #0f0f0e 0%, #0d0d0d 100%)" }}
      aria-labelledby="sponsorship-heading"
    >
      {/* Top accent */}
      <div className="divider-gold max-w-7xl mx-auto mb-16" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span
            className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{ color: "#52b788", background: "rgba(45,106,79,0.15)", border: "1px solid rgba(45,106,79,0.3)" }}
          >
            Sponsorship
          </span>
          <h2
            id="sponsorship-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#f0ede8", maxWidth: "760px", margin: "0 auto 1rem" }}
          >
            Put Your Brand in Front of California&apos;s Top Hardscape Professionals
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#9a9490", maxWidth: "580px", margin: "0 auto" }}
          >
            WHA sponsors gain direct visibility with contractors, suppliers, manufacturers, and industry
            decision-makers throughout Northern California.
          </p>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Top 3 featured tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 mb-5">
          {sponsorTiers.slice(0, 3).map((tier) => (
            <SponsorCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Bottom 2 smaller tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12">
          {sponsorTiers.slice(3).map((tier) => (
            <SponsorCard key={tier.id} tier={tier} compact />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="sponsor-cta-btn"
            className="btn-green"
          >
            Become a Sponsor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <p className="text-xs mt-4" style={{ color: "#5c5853" }}>
            Contact us to discuss custom sponsorship packages
          </p>
        </div>
      </div>

      <div className="divider-gold max-w-7xl mx-auto mt-16" />
    </section>
  );
}

function SponsorCard({ tier, compact = false }: { tier: typeof sponsorTiers[0]; compact?: boolean }) {
  return (
    <div
      id={`sponsor-${tier.id}`}
      className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: tier.bgAccent,
        border: `1px solid ${tier.borderColor}`,
        boxShadow: tier.featured
          ? `0 8px 40px rgba(201,168,76,0.12), 0 4px 16px rgba(0,0,0,0.4)`
          : "0 4px 16px rgba(0,0,0,0.25)",
      }}
    >
      {tier.featured && (
        <div
          className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold tracking-[0.12em] uppercase"
          style={{ background: "linear-gradient(90deg, #c9a84c, #e5c96e, #c9a84c)", color: "#0d0d0d" }}
        >
          Premier
        </div>
      )}

      <div className={`p-6 ${tier.featured ? "pt-9" : ""} ${compact ? "p-5" : ""}`}>
        {/* Name + Price */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3
            className={`font-display font-bold leading-tight ${compact ? "text-base" : "text-xl"}`}
            style={{ color: "#f0ede8" }}
          >
            {tier.name}
          </h3>
          <span
            className={`font-bold flex-shrink-0 ${compact ? "text-base" : "text-xl"}`}
            style={{ color: tier.accentColor }}
          >
            {tier.price}
          </span>
        </div>

        {/* Perks */}
        <ul className="space-y-2">
          {tier.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-xs" style={{ color: "#9a9490" }}>
              <span
                className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                style={{ background: `${tier.accentColor}18`, border: `1px solid ${tier.accentColor}40` }}
              >
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none" stroke={tier.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 3 6 7 2" />
                </svg>
              </span>
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
