"use client";

import {
  CTA_URL,
  EVENT,
  SQUARE_PLATINUM,
  SQUARE_GOLD,
  SQUARE_SILVER,
  SQUARE_HOLE,
} from "../lib/constants";

const SPONSOR_EMAIL = "info@westhardscapeassoc.com";

const tiers = [
  {
    name: "Platinum",
    price: "$3,700",
    accentColor: "#e5c96e",
    badgeBg: "linear-gradient(110deg,#b6914d,#e4cc95,#b6914d)",
    badgeText: "#0f1110",
    highlight: "Premier logo placement + exclusive hole sponsor",
    checkoutUrl: SQUARE_PLATINUM,
    purchaseId: "sponsor-cta-purchase-platinum",
  },
  {
    name: "Gold",
    price: "$3,000",
    accentColor: "#c9a84c",
    badgeBg: "linear-gradient(110deg,#a07835,#d4aa5e,#a07835)",
    badgeText: "#0f1110",
    highlight: "Hole sponsor + banner signage + brand recognition",
    checkoutUrl: SQUARE_GOLD,
    purchaseId: "sponsor-cta-purchase-gold",
  },
  {
    name: "Silver",
    price: "$2,200",
    accentColor: "#9a9490",
    badgeBg: "linear-gradient(110deg,#6e6a67,#b0aba6,#6e6a67)",
    badgeText: "#0f1110",
    highlight: "Logo on event materials + banner + communications",
    checkoutUrl: SQUARE_SILVER,
    purchaseId: "sponsor-cta-purchase-silver",
  },
  {
    name: "Hole",
    price: "$550",
    accentColor: "#52b788",
    badgeBg: "linear-gradient(110deg,#2d6a4f,#52b788,#2d6a4f)",
    badgeText: "#0f1110",
    highlight: "Branded hole signage + program recognition",
    checkoutUrl: SQUARE_HOLE,
    purchaseId: "sponsor-cta-purchase-hole",
  },
];

export default function SponsorCTA() {
  return (
    <section
      id="become-a-sponsor"
      className="section-shell px-5 sm:px-8 lg:px-14"
      aria-labelledby="sponsor-cta-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fcdb7]">
            Sponsorship Opportunities
          </p>
          <h2
            id="sponsor-cta-heading"
            className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl"
          >
            Put Your Brand in Front of the Industry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b4ad9f] sm:text-base">
            The {EVENT.name} draws contractors, installers, designers,
            distributors, and purchasing decision-makers throughout Northern
            California. Sponsorship is direct access — not just a logo on a
            banner.
          </p>
          {/* Divider */}
          <div className="mx-auto mt-8 h-px max-w-xs bg-[linear-gradient(90deg,transparent,rgba(230,207,149,0.6),transparent)]" />
        </div>

        {/* ── Tier summary cards ───────────────────────────────────────── */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-[#2a2f2d] bg-[linear-gradient(165deg,rgba(20,23,21,0.95),rgba(12,14,13,0.98))] px-4 py-5 text-center"
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ background: tier.badgeBg, color: tier.badgeText }}
              >
                {tier.name}
              </span>
              <p
                className="text-xl font-bold leading-none sm:text-2xl"
                style={{ color: tier.accentColor }}
              >
                {tier.price}
              </p>
              <p className="text-[11px] leading-snug text-[#9a9490] sm:text-xs">
                {tier.highlight}
              </p>
              {/* Per-tier Square checkout link */}
              <a
                href={tier.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={tier.purchaseId}
                className="mt-auto w-full rounded-lg py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  color: tier.accentColor,
                  border: `1px solid ${tier.accentColor}55`,
                  background: `${tier.accentColor}0f`,
                }}
              >
                Purchase
              </a>
            </div>
          ))}
        </div>

        {/* ── Value proposition block ──────────────────────────────────── */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-[#3b5c46] bg-[linear-gradient(140deg,rgba(21,42,30,0.70),rgba(12,16,13,0.80))] px-6 py-8 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ValuePoint
              icon={<EyeIcon />}
              title="Maximum Visibility"
              body="Logo placement on all event materials, digital assets, banners, and communications — before, during, and after the tournament."
            />
            <ValuePoint
              icon={<NetworkIcon />}
              title="Direct Networking"
              body={`Face-to-face access to 500+ hardscape industry professionals at ${EVENT.venue}, ${EVENT.location}.`}
            />
            <ValuePoint
              icon={<TrophyIcon />}
              title="Brand Prestige"
              body="Associate your company with Northern California's premier hardscape networking event in its 20th year."
            />
          </div>
        </div>

        {/* ── CTA row ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="sponsor-become-btn"
            className="btn-primary w-full sm:w-auto"
          >
            Become a Sponsor
            <ArrowIcon />
          </a>
          <a
            href={`mailto:${SPONSOR_EMAIL}?subject=WHA Golf Tournament Sponsorship Inquiry`}
            id="sponsor-contact-btn"
            className="btn-secondary w-full sm:w-auto"
          >
            Contact Us About Sponsorship
          </a>
        </div>

        <p className="mt-5 text-center text-xs text-[#6e6a64]">
          Prestige placements are limited and assigned first-come, first-served.{" "}
          <a
            href={`mailto:${SPONSOR_EMAIL}`}
            className="text-[#9fcdb7] underline underline-offset-2 transition-colors hover:text-[#c3e8d4]"
          >
            {SPONSOR_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ValuePoint({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3b5c46] bg-[#152a21]/60 text-[#9fcdb7]">
        {icon}
      </div>
      <p className="text-sm font-bold text-[#e6cf95] sm:text-base">{title}</p>
      <p className="text-xs leading-relaxed text-[#9a9490] sm:text-sm">{body}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 21 12 21 16 21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M5 4H3a1 1 0 0 0-1 1v3c0 3.31 2.69 6 6 6h0a6 6 0 0 0 6-6V5a1 1 0 0 0-1-1h-2" />
      <path d="M19 4h2a1 1 0 0 1 1 1v3c0 3.31-2.69 6-6 6h0" />
      <rect x="5" y="2" width="14" height="8" rx="2" />
    </svg>
  );
}
