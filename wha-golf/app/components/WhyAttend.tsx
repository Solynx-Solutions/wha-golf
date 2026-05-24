export default function WhyAttend() {
  const cards = [
    {
      icon: <NetworkIcon />,
      accent: "#c9a84c",
      tag: "Connect",
      headline: "Network With Industry Leaders",
      body: "Build face-to-face relationships with Northern California's leading contractors, suppliers, and manufacturers — the people who shape the hardscape industry.",
    },
    {
      icon: <TrophyIcon />,
      accent: "#52b788",
      tag: "Compete",
      headline: "Championship Golf & Prizes",
      body: "Enjoy a world-class round at Eagle Vines Golf Club with contests, prizes, raffles, and giveaways throughout the day.",
    },
    {
      icon: <GrowthIcon />,
      accent: "#c9a84c",
      tag: "Grow",
      headline: "Build Future Opportunities",
      body: "The relationships forged at WHA's annual tournament have driven partnerships, referrals, and growth across the California market for 20 years.",
    },
  ];

  return (
    <section
      id="why-attend"
      className="relative section-glow-green py-24 px-6 sm:px-10 lg:px-16"
      style={{ background: "#0d0d0d" }}
      aria-labelledby="why-attend-heading"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{ color: "#52b788", background: "rgba(45,106,79,0.15)", border: "1px solid rgba(45,106,79,0.3)" }}
          >
            Why Attend
          </span>
          <h2
            id="why-attend-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#f0ede8" }}
          >
            More Than a Round of Golf
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.tag}
              className="glass-card p-8 group transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px rgba(${card.accent === "#c9a84c" ? "201,168,76" : "82,183,136"},0.15), 0 4px 24px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: card.accent === "#c9a84c"
                    ? "rgba(201,168,76,0.12)"
                    : "rgba(82,183,136,0.12)",
                  border: `1px solid ${card.accent}30`,
                  color: card.accent,
                }}
              >
                {card.icon}
              </div>

              {/* Tag */}
              <span
                className="text-xs font-bold tracking-[0.15em] uppercase mb-3 block"
                style={{ color: card.accent }}
              >
                {card.tag}
              </span>

              {/* Headline */}
              <h3
                className="font-display text-xl font-bold mb-3 leading-tight"
                style={{ color: "#f0ede8" }}
              >
                {card.headline}
              </h3>

              {/* Body */}
              <p className="text-sm leading-relaxed" style={{ color: "#9a9490" }}>
                {card.body}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: card.accent === "#c9a84c"
                    ? "linear-gradient(90deg, #c9a84c, transparent)"
                    : "linear-gradient(90deg, #52b788, transparent)",
                }}
              />
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
