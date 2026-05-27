"use client";

const cards = [
  {
    icon: <NetworkIcon />,
    tag: "Authority",
    headline: "Meet Owners and Buyers",
    body: "Get direct face-time with contractors, suppliers, and manufacturers making purchasing decisions now.",
  },
  {
    icon: <TrophyIcon />,
    tag: "Experience",
    headline: "Premium Golf. Real Industry Access.",
    body: "Compete at Eagle Vines while conversations move from introductions to projects and partnerships.",
  },
  {
    icon: <GrowthIcon />,
    tag: "Growth",
    headline: "Strengthen Your 2026 Pipeline",
    body: "Use one day to generate visibility, referrals, and sponsor-level market credibility across Northern California.",
  },
];

export default function WhyAttend() {
  return (
    <section id="why-attend" className="section-shell section-glow-green px-5 sm:px-8 lg:px-14" aria-labelledby="why-attend-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a2d3bc]">Why Attend</p>
          <h2 id="why-attend-heading" className="font-display mt-3 text-3xl leading-tight text-[#f0ede7] sm:text-5xl">
            Built for Contractors,
            <span className="text-gold-gradient"> Sponsors, and Suppliers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b5ada0] sm:text-base">
            This is a revenue and relationship event for the hardscape industry. Every section of the day is designed for outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.tag}
              className="glass-card group p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#3d6e58] bg-[#153428]/45 text-[#d9c58d]">
                {card.icon}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#dfc98f]">{card.tag}</p>
              <h3 className="font-display mt-2 text-2xl leading-[1.1] text-[#ece8de]">{card.headline}</h3>
              <p className="mt-3 text-sm text-[#b7b0a3]">{card.body}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#c3a461] to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-70" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="12" y1="14" x2="5" y2="16" />
      <line x1="12" y1="14" x2="19" y2="16" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 21 12 17 16 21" />
      <line x1="12" y1="17" x2="12" y2="11" />
      <path d="M5 3H3v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V3h-2" />
      <rect x="5" y="3" width="14" height="8" rx="1" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
