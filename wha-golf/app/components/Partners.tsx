"use client";

import Image from "next/image";
import { useState } from "react";
import { type Sponsor, type SponsorTier, sponsors, TIER_ORDER } from "../lib/sponsors";

// ─── Tier Config ─────────────────────────────────────────────────────────────
const TIER_CONFIG = {
  platinum: {
    label: "Platinum Sponsors",
    badgeLabel: "Platinum",
    accentColor: "#e5c96e",
    accentRgb: "229,201,110",
    badgeBg: "linear-gradient(110deg,#b6914d,#e4cc95,#b6914d)",
    badgeText: "#0f1110",
    containerBorder: "rgba(229,201,110,0.35)",
    containerBg:
      "linear-gradient(165deg,rgba(32,27,14,0.96),rgba(20,17,9,0.99))",
    cardBorder: "rgba(229,201,110,0.22)",
    cardBg:
      "linear-gradient(165deg,rgba(36,31,16,0.94),rgba(22,18,10,0.98))",
    hoverBorder: "#e5c96e",
    logoSize: { width: 240, height: 240 },
    logoClass: "h-20 w-auto max-w-[88%]",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
    cardMinH: "min-h-40",
  },
  gold: {
    label: "Gold Sponsors",
    badgeLabel: "Gold",
    accentColor: "#c9a84c",
    accentRgb: "201,168,76",
    badgeBg: "linear-gradient(110deg,#a07835,#d4aa5e,#a07835)",
    badgeText: "#0f1110",
    containerBorder: "rgba(201,168,76,0.28)",
    containerBg:
      "linear-gradient(165deg,rgba(28,24,14,0.95),rgba(18,15,8,0.99))",
    cardBorder: "rgba(201,168,76,0.18)",
    cardBg:
      "linear-gradient(165deg,rgba(30,26,14,0.93),rgba(18,15,8,0.97))",
    hoverBorder: "#c9a84c",
    logoSize: { width: 220, height: 220 },
    logoClass: "h-18 w-auto max-w-[85%]",
    gridClass: "grid-cols-1 sm:grid-cols-3",
    cardMinH: "min-h-36",
  },
  silver: {
    label: "Silver Sponsors",
    badgeLabel: "Silver",
    accentColor: "#9a9490",
    accentRgb: "154,148,144",
    badgeBg: "linear-gradient(110deg,#6e6a67,#b0aba6,#6e6a67)",
    badgeText: "#0f1110",
    containerBorder: "rgba(154,148,144,0.22)",
    containerBg:
      "linear-gradient(165deg,rgba(22,23,22,0.94),rgba(14,15,14,0.98))",
    cardBorder: "rgba(154,148,144,0.15)",
    cardBg:
      "linear-gradient(165deg,rgba(24,25,24,0.92),rgba(15,16,15,0.97))",
    hoverBorder: "#b0aba6",
    logoSize: { width: 200, height: 200 },
    logoClass: "h-16 w-auto max-w-[85%]",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    cardMinH: "min-h-32",
  },
  hole: {
    label: "Hole Sponsors",
    badgeLabel: "Hole",
    accentColor: "#52b788",
    accentRgb: "82,183,136",
    badgeBg: "linear-gradient(110deg,#2d6a4f,#52b788,#2d6a4f)",
    badgeText: "#0f1110",
    containerBorder: "rgba(82,183,136,0.2)",
    containerBg:
      "linear-gradient(165deg,rgba(15,22,18,0.95),rgba(10,14,12,0.99))",
    cardBorder: "rgba(82,183,136,0.14)",
    cardBg:
      "linear-gradient(165deg,rgba(16,23,19,0.92),rgba(10,14,12,0.97))",
    hoverBorder: "#52b788",
    logoSize: { width: 180, height: 180 },
    logoClass: "h-14 w-auto max-w-[82%]",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    cardMinH: "min-h-28",
  },
} as const;


// ─── Logo Card ────────────────────────────────────────────────────────────────
function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: Sponsor;
  tier: typeof TIER_CONFIG[SponsorTier];
}) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !sponsor.logo || imgError;

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name} website`}
      className={`group relative flex ${tier.cardMinH} cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1`}
      style={{
        border: `1px solid ${tier.cardBorder}`,
        background: tier.cardBg,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 18px rgba(0,0,0,0.25)`,
      }}
    >
      {/* Inner bevel */}
      <div
        className="pointer-events-none absolute inset-[1px] rounded-[10px] transition-colors duration-300"
        style={{
          border: `1px solid rgba(${tier.accentRgb},0.06)`,
        }}
      />
      {/* Hover ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${tier.accentRgb},0.10), transparent 70%)`,
          boxShadow: `0 0 0 1px rgba(${tier.accentRgb},0.30), 0 14px 28px rgba(0,0,0,0.35), 0 0 18px rgba(${tier.accentRgb},0.15)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        {showPlaceholder ? (
          <>
            {/* Text placeholder — shown when logo asset is missing */}
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-50"
              style={{ color: tier.accentColor }}
            >
              Logo Pending
            </span>
            <span
              className="text-sm font-semibold leading-tight tracking-[0.03em]"
              style={{ color: "#d0c8b8" }}
            >
              {sponsor.name}
            </span>
          </>
        ) : (
          <>
            <Image
              src={sponsor.logo!}
              alt={`${sponsor.name} logo`}
              width={tier.logoSize.width}
              height={tier.logoSize.height}
              className={`${tier.logoClass} object-contain grayscale transition-all duration-300 group-hover:grayscale-0`}
              onError={() => setImgError(true)}
              unoptimized
            />
            {/* Company name below logo */}
            <span
              className="mt-1 max-w-[90%] text-center text-[11px] font-semibold leading-tight tracking-[0.05em] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: tier.accentColor }}
            >
              {sponsor.name}
            </span>
          </>
        )}
      </div>
    </a>
  );
}

// ─── Tier Section ─────────────────────────────────────────────────────────────
function TierSection({ tierKey }: { tierKey: SponsorTier }) {
  const cfg = TIER_CONFIG[tierKey];
  const tierSponsors = sponsors.filter((s) => s.tier === tierKey);
  if (tierSponsors.length === 0) return null;

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        border: `1px solid ${cfg.containerBorder}`,
        background: cfg.containerBg,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.03), 0 20px 48px rgba(0,0,0,0.35)`,
      }}
    >
      {/* Tier header */}
      <div className="relative px-5 pb-5 pt-6 sm:px-7 sm:pt-7">
        {/* Tier badge */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className="inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ background: cfg.badgeBg, color: cfg.badgeText }}
          >
            {cfg.badgeLabel}
          </span>
          {/* Subtle divider line after badge */}
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, rgba(${cfg.accentRgb},0.45), transparent)`,
            }}
          />
        </div>

        <h3
          className="font-display text-2xl leading-tight sm:text-3xl"
          style={{ color: cfg.accentColor }}
        >
          {cfg.label}
        </h3>
      </div>

      {/* Divider */}
      <div
        className="mx-5 mb-5 h-px sm:mx-7"
        style={{
          background: `linear-gradient(90deg, rgba(${cfg.accentRgb},0.5), rgba(${cfg.accentRgb},0.1) 70%, transparent)`,
        }}
      />

      {/* Logo grid */}
      <div className={`grid gap-3 px-5 pb-7 sm:px-7 ${cfg.gridClass}`}>
        {tierSponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} tier={cfg} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Partners() {
  return (
    <section
      id="sponsors"
      className="section-shell section-glow-green px-5 sm:px-8 lg:px-14"
      aria-labelledby="sponsors-heading"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -inset-24 rounded-3xl bg-[radial-gradient(circle_at_18%_10%,rgba(196,166,101,0.12),transparent_44%)]" />
        <div className="pointer-events-none absolute -inset-24 rounded-3xl bg-[radial-gradient(circle_at_85%_85%,rgba(46,110,83,0.15),transparent_50%)]" />

        <div className="relative z-10">
          {/* Section header */}
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfc98f]">
              Event Sponsors
            </p>
            <h2
              id="sponsors-heading"
              className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl"
            >
              Event Sponsors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b4ad9f] sm:text-base">
              Thank you to the companies supporting the Western Hardscape
              Association Golf Tournament.
            </p>

            {/* Gold accent divider */}
            <div className="mx-auto mt-8 h-px max-w-xs bg-[linear-gradient(90deg,transparent,rgba(230,207,149,0.6),transparent)]" />
          </div>

          {/* Tiers — rendered in priority order */}
          <div className="space-y-6 sm:space-y-8">
            {TIER_ORDER.map((tierKey) => (
              <TierSection key={tierKey} tierKey={tierKey} />
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-10 text-center text-xs text-[#8a8478]">
            Final logo lockups will be updated as sponsor assets are received.
          </p>
        </div>
      </div>
    </section>
  );
}
