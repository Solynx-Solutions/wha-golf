"use client";

import { motion } from "framer-motion";

const proofPoints = [
  {
    id: "years",
    stat: "20 Years",
    label: "Running",
    icon: <CalendarIcon />,
  },
  {
    id: "reach",
    stat: "500+",
    label: "Industry Professionals Reached",
    icon: <PeopleIcon />,
  },
  {
    id: "event",
    stat: "Northern California's",
    label: "Premier Hardscape Networking Event",
    icon: <StarIcon />,
  },
  {
    id: "host",
    stat: "Hosted by the",
    label: "Western Hardscape Association",
    icon: <BadgeIcon />,
  },
];

export default function CredibilityStrip() {
  return (
    <div
      id="credibility-strip"
      className="relative z-10 mx-auto -mt-1 w-full"
      aria-label="Event credibility highlights"
    >
      {/* Top gold accent line */}
      <div className="divider-gold" />

      <div className="bg-[linear-gradient(180deg,#0f1210_0%,#0b0d0c_100%)] px-5 py-6 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {proofPoints.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.6 + i * 0.08 }}
              className="group flex flex-col items-center gap-1.5 rounded-xl border border-[#262b29] bg-[#131615]/80 px-3 py-4 text-center transition-all duration-300 hover:border-[#c3a461]/30 hover:bg-[#181c1a]"
            >
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg border border-[#3b5c4a] bg-[#152a21]/60 text-[#c3a461]">
                {point.icon}
              </div>
              <p className="text-sm font-bold leading-tight text-[#e6cf95] sm:text-base">
                {point.stat}
              </p>
              <p className="text-[11px] leading-snug text-[#8f8a7e] sm:text-xs">
                {point.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gold accent line */}
      <div className="divider-gold" />
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
