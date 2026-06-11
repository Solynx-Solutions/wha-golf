"use client";

import {
  SQUARE_PLATINUM,
  SQUARE_GOLD,
  SQUARE_SILVER,
  SQUARE_HOLE,
  SQUARE_RAFFLE,
  CTA_URL,
} from "../lib/constants";

const sponsorTiers = [
  {
    id: "platinum",
    name: "Platinum Sponsor",
    price: "$3,700",
    accentColor: "#e5c96e",
    bgAccent: "rgba(201,168,76,0.06)",
    borderColor: "rgba(201,168,76,0.3)",
    featured: true,
    checkoutUrl: SQUARE_PLATINUM,
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
    checkoutUrl: SQUARE_GOLD,
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
    checkoutUrl: SQUARE_SILVER,
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
    checkoutUrl: SQUARE_HOLE,
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
    checkoutUrl: SQUARE_RAFFLE,
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
      className="section-shell px-5 sm:px-8 lg:px-14"
      aria-labelledby="sponsorship-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fcdb7]">Sponsorship</p>
          <h2 id="sponsorship-heading" className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl">
            Sponsor the Event That Commands Industry Attention
          </h2>

          {/* Value statement */}
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-[#3b5c46] bg-[linear-gradient(140deg,rgba(21,42,30,0.65),rgba(12,16,13,0.75))] px-5 py-4">
            <p className="text-sm font-semibold text-[#e6cf95] sm:text-base">
              Sponsorship is not just exposure. It is direct access to the people specifying, buying, installing, and recommending hardscape products and services.
            </p>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-[#b8b1a4] sm:text-base">
            Get your brand in front of contractors, installers, designers, distributors, and purchasing decision-makers throughout Northern California.
          </p>
        </div>

        <div className="mb-5 mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {sponsorTiers.slice(0, 3).map((tier) => (
            <SponsorCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="mx-auto mb-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
          {sponsorTiers.slice(3).map((tier) => (
            <SponsorCard key={tier.id} tier={tier} compact />
          ))}
        </div>

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
          <p className="mt-4 text-xs text-[#8c8679]">
            Prestige placements are limited and assigned first-come, first-served.
          </p>
        </div>
      </div>
    </section>
  );
}

function SponsorCard({ tier, compact = false }: { tier: typeof sponsorTiers[0]; compact?: boolean }) {
  return (
    <div
      id={`sponsor-${tier.id}`}
      className={`relative overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-1 ${
        tier.featured
          ? "border-[#c3a461] bg-gradient-to-b from-[#282318] to-[#161512]"
          : "border-[#313634] bg-gradient-to-b from-[#1c201f] to-[#111413]"
      } ${compact ? "p-5" : "p-6"}`}
    >
      {tier.featured && (
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-[#b6914d] via-[#e4cc95] to-[#b6914d] py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#0f1110]">
          Premier
        </div>
      )}

      <div className={`${tier.featured ? "pt-7" : ""}`}>
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className={`font-display leading-tight text-[#ece8de] ${compact ? "text-xl" : "text-2xl"}`}>
            {tier.name}
          </h3>
          <span className={`flex-shrink-0 font-bold ${compact ? "text-base" : "text-2xl"}`} style={{ color: tier.accentColor }}>
            {tier.price}
          </span>
        </div>

        <ul className="space-y-2">
          {tier.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-xs text-[#b7afa2] sm:text-sm">
              <span className="mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `${tier.accentColor}18`, border: `1px solid ${tier.accentColor}40` }}>
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none" stroke={tier.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 3 6 7 2" />
                </svg>
              </span>
              {perk}
            </li>
          ))}
        </ul>

        {/* Per-tier Square checkout CTA */}
        <a
          href={tier.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`sponsor-purchase-${tier.id}`}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 hover:-translate-y-0.5 ${
            tier.featured
              ? "btn-primary"
              : "border hover:bg-opacity-10"
          }`}
          style={
            !tier.featured
              ? {
                  color: tier.accentColor,
                  borderColor: `${tier.accentColor}55`,
                  background: `${tier.accentColor}08`,
                }
              : undefined
          }
        >
          Purchase Package
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}
