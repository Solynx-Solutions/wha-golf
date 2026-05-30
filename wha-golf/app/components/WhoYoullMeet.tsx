"use client";

import { motion } from "framer-motion";

const attendeeTypes = [
  {
    id: "contractors",
    label: "Contractors",
    icon: <HardHatIcon />,
    desc: "General and specialty contractors driving project decisions.",
  },
  {
    id: "designers",
    label: "Landscape Designers",
    icon: <PenIcon />,
    desc: "Creatives specifying materials for residential and commercial sites.",
  },
  {
    id: "manufacturers",
    label: "Manufacturers",
    icon: <FactoryIcon />,
    desc: "Product leaders introducing next-generation hardscape solutions.",
  },
  {
    id: "distributors",
    label: "Distributors",
    icon: <TruckIcon />,
    desc: "Regional distributors shaping supply chain relationships.",
  },
  {
    id: "dealers",
    label: "Dealers",
    icon: <StoreIcon />,
    desc: "Dealer principals stocking and selling to the trade.",
  },
  {
    id: "suppliers",
    label: "Suppliers",
    icon: <BoxIcon />,
    desc: "Suppliers supporting contractors from raw material to finish.",
  },
  {
    id: "builders",
    label: "Builders",
    icon: <BuildIcon />,
    desc: "Builders and developers integrating hardscape into every project.",
  },
  {
    id: "leaders",
    label: "Association Leaders",
    icon: <BadgeIcon />,
    desc: "Industry voices setting standards and driving advocacy.",
  },
];

export default function WhoYoullMeet() {
  return (
    <section
      id="who-youll-meet"
      className="section-shell section-glow-green px-5 sm:px-8 lg:px-14"
      aria-labelledby="who-meet-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fcdb7]">
            Attendance Profile
          </p>
          <h2
            id="who-meet-heading"
            className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl"
          >
            Who You&apos;ll{" "}
            <span className="text-gold-gradient">Meet</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b8b1a4] sm:text-base">
            Connect with the contractors, suppliers, manufacturers, designers,
            builders, and industry decision-makers shaping the future of
            hardscape in Northern California.
          </p>
        </motion.div>

        {/* Attendee grid */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {attendeeTypes.map((type, i) => (
            <motion.div
              key={type.id}
              id={`attendee-${type.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.42, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-xl border border-[#2a2f2d] bg-[linear-gradient(160deg,rgba(22,26,24,0.97),rgba(13,15,14,0.98))] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c3a461]/35 hover:shadow-[0_0_0_1px_rgba(195,164,97,0.2),0_14px_28px_rgba(0,0,0,0.4)]"
            >
              {/* Gold ambient glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_top_left,rgba(195,164,97,0.07),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#3d6150] bg-[#152b22]/60 text-[#c3a461]">
                  {type.icon}
                </div>
                <p className="text-sm font-bold leading-tight text-[#ece8de]">
                  {type.label}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-[#8a8479] sm:text-xs">
                  {type.desc}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c3a461] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
            </motion.div>
          ))}
        </div>

        {/* Sponsor value nudge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-[#3b5c46] bg-[linear-gradient(140deg,rgba(21,42,30,0.7),rgba(12,16,13,0.8))] px-6 py-5 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9fcdb7]">
            Sponsor Insight
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-[#c8c1b3] sm:text-base">
            Sponsors gain face-time with every category above —&nbsp;all in one
            place, over one focused day in Napa Valley.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icons ── */

function HardHatIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V5a2 2 0 0 1 4 0v5" />
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
