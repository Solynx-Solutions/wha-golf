import { CTA_URL, EVENT } from "../lib/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-golf.png"
          alt="Eagle Vines Golf Club, Napa Valley"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic overlay — dark charcoal gradient from top and bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.45) 40%, rgba(13,13,13,0.6) 70%, rgba(13,13,13,0.95) 100%)",
          }}
        />
        {/* Green accent glow from top-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 10% 0%, rgba(45,106,79,0.18) 0%, transparent 60%)",
          }}
        />
        {/* Gold accent from bottom right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 35% at 90% 100%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 flex flex-col items-center text-center">

        {/* WHA Logo / Brand Mark */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex flex-col items-center gap-2">
            {/* Wordmark badge */}
            <div
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
              style={{
                background: "rgba(45,106,79,0.25)",
                border: "1px solid rgba(45,106,79,0.5)",
                color: "#52b788",
                backdropFilter: "blur(8px)",
              }}
            >
              Western Hardscape Association
            </div>
            {/* Gold separator line */}
            <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          </div>
        </div>

        {/* Anniversary label */}
        <div className="animate-fade-in-up-delay-1 mb-4">
          <span
            className="text-sm font-medium tracking-[0.15em] uppercase"
            style={{ color: "#c9a84c" }}
          >
            20th Annual Golf Tournament
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-display animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          style={{ color: "#f0ede8", maxWidth: "900px" }}
        >
          Northern California's{" "}
          <span className="text-gold-gradient">Premier Hardscape</span>{" "}
          Networking Event
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-in-up-delay-2 text-base sm:text-lg lg:text-xl leading-relaxed mb-10"
          style={{ color: "#b0ada8", maxWidth: "680px" }}
        >
          {EVENT.subheadline}
        </p>

        {/* Date / Venue Pills */}
        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center gap-3 mb-10">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(20,20,20,0.8)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#e5c96e",
              backdropFilter: "blur(8px)",
            }}
          >
            <CalendarIcon />
            {EVENT.date}
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(20,20,20,0.8)",
              border: "1px solid rgba(45,106,79,0.35)",
              color: "#52b788",
              backdropFilter: "blur(8px)",
            }}
          >
            <LocationIcon />
            {EVENT.venue} &mdash; {EVENT.location}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center gap-4 mb-14">
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            Register Now
            <ArrowIcon />
          </a>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
            Become a Sponsor
          </a>
        </div>

        {/* QR Code Placeholder */}
        <div className="animate-fade-in-up-delay-3">
          <QRCodePlaceholder label="Scan to Register" />
        </div>
      </div>

      {/* Bottom fade-in scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#9a9490" }}>Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(180deg, #c9a84c, transparent)" }} />
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function QRCodePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* QR box */}
      <div
        className="w-28 h-28 rounded-2xl flex items-center justify-center relative overflow-hidden"
        style={{
          background: "rgba(20,20,20,0.9)",
          border: "2px solid rgba(201,168,76,0.4)",
          backdropFilter: "blur(8px)",
        }}
        aria-label={`QR code placeholder — ${label}`}
      >
        {/* QR pattern SVG placeholder */}
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true">
          {/* Top-left finder pattern */}
          <rect x="4" y="4" width="24" height="24" rx="3" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
          <rect x="10" y="10" width="12" height="12" rx="1" fill="#c9a84c"/>
          {/* Top-right finder pattern */}
          <rect x="60" y="4" width="24" height="24" rx="3" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
          <rect x="66" y="10" width="12" height="12" rx="1" fill="#c9a84c"/>
          {/* Bottom-left finder pattern */}
          <rect x="4" y="60" width="24" height="24" rx="3" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
          <rect x="10" y="66" width="12" height="12" rx="1" fill="#c9a84c"/>
          {/* Data dots */}
          <rect x="34" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="40" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="34" y="10" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="10" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="34" y="16" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="40" y="16" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="4" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="10" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="16" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="4" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="34" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="40" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="52" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="58" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="34" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="58" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="40" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="52" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="58" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="52" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="46" y="52" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="60" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="66" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="72" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="78" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="60" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="72" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="60" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="66" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="78" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="34" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="40" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="46" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="52" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="58" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="66" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="72" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="78" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="34" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="46" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="52" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="60" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="72" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="34" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="40" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="52" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="58" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="66" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="78" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="46" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="60" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="72" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="78" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
        </svg>
      </div>
      <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "#9a9490" }}>
        {label}
      </p>
    </div>
  );
}
