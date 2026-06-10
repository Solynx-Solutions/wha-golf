"use client";

import Image from "next/image";
import { useState } from "react";
import { type Sponsor, type SponsorTier, sponsors, TIER_ORDER } from "../lib/sponsors";

// ─── Tier Config ─────────────────────────────────────────────────────────────
const TIER_CONFIG = {
  platinum: {
    badgeLabel: "PLATINUM SPONSORS",
    icon: "👑",
    accentColor: "#c3a461",
    accentRgb: "195,164,97",
    containerBorder: "rgba(195,164,97,0.45)",
    containerBg: "linear-gradient(165deg,rgba(28,23,11,0.97),rgba(18,14,6,0.99))",
    headerDivider: "rgba(195,164,97,0.40)",
    // ── White card for universal logo visibility ──
    cardBg: "#f9f8f5",
    cardBorder: "rgba(0,0,0,0.07)",
    hoverBorder: "rgba(195,164,97,0.70)",
    hoverShadow: "0 8px 24px rgba(195,164,97,0.18), 0 2px 6px rgba(0,0,0,0.08)",
    logoSize: { width: 240, height: 160 },
    logoClass: "h-20 w-auto max-w-[80%]",
    nameColor: "#1e1b16",
    gridClass: "grid-cols-2 md:grid-cols-4",
    cardMinH: "min-h-40",
    gridGap: "gap-3 sm:gap-4",
  },
  gold: {
    badgeLabel: "GOLD SPONSORS",
    icon: "⭐",
    accentColor: "#c9a84c",
    accentRgb: "201,168,76",
    containerBorder: "rgba(201,168,76,0.38)",
    containerBg: "linear-gradient(165deg,rgba(24,20,10,0.97),rgba(15,12,5,0.99))",
    headerDivider: "rgba(201,168,76,0.38)",
    cardBg: "#f9f8f5",
    cardBorder: "rgba(0,0,0,0.07)",
    hoverBorder: "rgba(201,168,76,0.65)",
    hoverShadow: "0 8px 24px rgba(201,168,76,0.16), 0 2px 6px rgba(0,0,0,0.08)",
    logoSize: { width: 220, height: 145 },
    logoClass: "h-18 w-auto max-w-[80%]",
    nameColor: "#1e1b16",
    gridClass: "grid-cols-1 sm:grid-cols-3",
    cardMinH: "min-h-40",
    gridGap: "gap-3 sm:gap-4",
  },
  silver: {
    badgeLabel: "SILVER SPONSORS",
    icon: "🏆",
    accentColor: "#a09b96",
    accentRgb: "160,155,150",
    containerBorder: "rgba(154,148,144,0.30)",
    containerBg: "linear-gradient(165deg,rgba(20,21,20,0.97),rgba(12,13,12,0.99))",
    headerDivider: "rgba(160,155,150,0.35)",
    cardBg: "#f9f8f5",
    cardBorder: "rgba(0,0,0,0.07)",
    hoverBorder: "rgba(160,155,150,0.55)",
    hoverShadow: "0 8px 20px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.07)",
    logoSize: { width: 200, height: 130 },
    logoClass: "h-16 w-auto max-w-[80%]",
    nameColor: "#1e1b16",
    gridClass: "grid-cols-2 sm:grid-cols-3",
    cardMinH: "min-h-36",
    gridGap: "gap-3",
  },
  hole: {
    badgeLabel: "HOLE SPONSORS",
    icon: "⛳",
    accentColor: "#52b788",
    accentRgb: "82,183,136",
    containerBorder: "rgba(82,183,136,0.28)",
    containerBg: "linear-gradient(165deg,rgba(12,18,14,0.97),rgba(8,11,9,0.99))",
    headerDivider: "rgba(82,183,136,0.35)",
    cardBg: "#f9f8f5",
    cardBorder: "rgba(0,0,0,0.07)",
    hoverBorder: "rgba(82,183,136,0.50)",
    hoverShadow: "0 8px 20px rgba(82,183,136,0.14), 0 2px 6px rgba(0,0,0,0.07)",
    logoSize: { width: 160, height: 100 },
    logoClass: "h-12 w-auto max-w-[84%]",
    nameColor: "#1e1b16",
    gridClass: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
    cardMinH: "min-h-28",
    gridGap: "gap-2 sm:gap-3",
  },
} as const;

// ─── Sponsor Card ─────────────────────────────────────────────────────────────
function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: Sponsor;
  tier: (typeof TIER_CONFIG)[SponsorTier];
}) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasLogo = !!sponsor.logo && !imgError;

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name} website`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex ${tier.cardMinH} flex-col items-center justify-center rounded-xl px-3 py-5 text-center`}
      style={{
        background: tier.cardBg,
        border: `1px solid ${hovered ? tier.hoverBorder : tier.cardBorder}`,
        boxShadow: hovered
          ? tier.hoverShadow
          : "0 2px 8px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "border 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease",
        cursor: "pointer",
      }}
    >
      {/* Logo area */}
      <div className="flex flex-1 items-center justify-center">
        {hasLogo ? (
          <Image
            src={sponsor.logo!}
            alt={`${sponsor.name} logo`}
            width={tier.logoSize.width}
            height={tier.logoSize.height}
            className={`${tier.logoClass} object-contain`}
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          /* Name-only fallback when no logo available */
          <span
            className="px-2 text-sm font-bold leading-tight tracking-[0.02em]"
            style={{ color: tier.nameColor }}
          >
            {sponsor.name}
          </span>
        )}
      </div>

      {/* Company name below logo */}
      {hasLogo && (
        <span
          className="mt-2 max-w-[95%] text-center text-[11px] font-semibold leading-tight tracking-[0.04em]"
          style={{ color: "#3d3933" }}
        >
          {sponsor.name}
        </span>
      )}
    </a>
  );
}

// ─── Tier Section ─────────────────────────────────────────────────────────────
function TierSection({ tierKey }: { tierKey: SponsorTier }) {
  const cfg = TIER_CONFIG[tierKey];
  const tierSponsors = sponsors.filter((s) => s.tier === tierKey && s.logo);
  if (tierSponsors.length === 0) return null;

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        border: `1px solid ${cfg.containerBorder}`,
        background: cfg.containerBg,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.03), 0 20px 48px rgba(0,0,0,0.30)",
      }}
    >
      {/* ── Tier Header ───────────────────────────────────────────── */}
      <div className="px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
        <div className="flex items-center gap-3">
          {/* Icon + Label */}
          <span className="text-lg leading-none">{cfg.icon}</span>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.16em]"
            style={{ color: cfg.accentColor }}
          >
            {cfg.badgeLabel}
          </span>
          {/* Trailing divider line */}
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, ${cfg.headerDivider}, transparent)`,
            }}
          />
        </div>
      </div>

      {/* ── Logo Grid ─────────────────────────────────────────────── */}
      <div className={`grid px-5 pb-6 sm:px-7 ${cfg.gridClass} ${cfg.gridGap}`}>
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
        <div className="pointer-events-none absolute -inset-24 rounded-3xl bg-[radial-gradient(circle_at_18%_10%,rgba(196,166,101,0.10),transparent_44%)]" />
        <div className="pointer-events-none absolute -inset-24 rounded-3xl bg-[radial-gradient(circle_at_85%_85%,rgba(46,110,83,0.12),transparent_50%)]" />

        <div className="relative z-10">
          {/* ── Section Header ──────────────────────────────────────── */}
          <div className="mb-12 text-center">
            {/* Eyebrow with decorative lines */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[linear-gradient(90deg,transparent,rgba(230,207,149,0.7))]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfc98f]">
                Event Sponsors
              </p>
              <div className="h-px w-12 bg-[linear-gradient(90deg,rgba(230,207,149,0.7),transparent)]" />
            </div>

            <h2
              id="sponsors-heading"
              className="font-display mt-4 text-3xl leading-tight text-[#f0ece5] sm:text-5xl"
            >
              Event Sponsors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b4ad9f] sm:text-base">
              Thank you to the companies supporting the Western Hardscape
              Association Golf Tournament.
            </p>

            {/* Gold diamond divider */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(230,207,149,0.55))]" />
              <span className="text-[10px] text-[#c3a461]">◆</span>
              <div className="h-px w-20 bg-[linear-gradient(90deg,rgba(230,207,149,0.55),transparent)]" />
            </div>
          </div>

          {/* ── Tier Blocks ─────────────────────────────────────────── */}
          <div className="space-y-5 sm:space-y-6">
            {TIER_ORDER.map((tierKey) => (
              <TierSection key={tierKey} tierKey={tierKey} />
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-xs text-[#7a7670]">
            ◆&nbsp; Final logo lockups will be updated as sponsor assets are received.
          </p>
        </div>
      </div>
    </section>
  );
}
