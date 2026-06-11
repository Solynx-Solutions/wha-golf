"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── Photo Catalog ────────────────────────────────────────────────────────────
// All photos are real WHA Golf Tournament event photos from previous years.
// Categories: "course" | "sponsor" | "networking" | "venue"
const photos = [
  {
    src: "/DSC09752-1-1500x630.jpg",
    alt: "Attendees posing with their golf carts at WHA Golf Tournament",
    caption: "Ready to Roll",
    category: "Networking",
    // wide card — spans 2 cols on md+
    wide: true,
  },
  {
    src: "/DSC09769-1-1500x630.jpg",
    alt: "Industry professionals at tournament registration check-in",
    caption: "Check-In",
    category: "Registration",
    wide: false,
  },
  {
    src: "/DSC09918-1-1500x630.jpg",
    alt: "MSI and Mirage representatives relaxing and networking on the course",
    caption: "Industry Connections",
    category: "Networking",
    wide: false,
  },
  {
    src: "/DSC09802-1-1500x630.jpg",
    alt: "Foursome of golfers at a hole sponsor station in Napa Valley",
    caption: "Sponsor Station",
    category: "Sponsor Engagement",
    wide: false,
  },
  {
    src: "/DSC09853-1-1500x630.jpg",
    alt: "Techniseal sponsor booth with products and representatives on the course",
    caption: "Techniseal Hole Sponsor",
    category: "Sponsor Engagement",
    wide: false,
  },
  {
    src: "/DSC09770-1-1500x630.jpg",
    alt: "Bartell Global sponsor booth with equipment display on the fairway",
    caption: "Bartell Global Sponsor",
    category: "Sponsor Engagement",
    wide: false,
  },
  {
    src: "/DSC09894-1-1500x630.jpg",
    alt: "Alpha Professional Tools sponsor booth with representatives",
    caption: "Alpha Professional Tools",
    category: "Sponsor Engagement",
    wide: false,
  },
  {
    src: "/DSC09845-1-1500x630.jpg",
    alt: "Golfer navigating a bunker at Eagle Vines Golf Club",
    caption: "On the Course",
    category: "On the Course",
    wide: false,
  },
  {
    src: "/DSC09817-1-1500x630.jpg",
    alt: "Golfer reading the green at Eagle Vines Golf Club, Napa Valley",
    caption: "Reading the Green",
    category: "On the Course",
    wide: false,
  },
  {
    src: "/IMG_1578-1-1500x630.jpeg",
    alt: "Four golfers strategizing on the fairway with Napa Valley vineyards in the background",
    caption: "Foursome Strategy",
    category: "On the Course",
    // wide card — spans 2 cols on md+
    wide: true,
  },
  {
    src: "/DSC09795-1-1500x630.jpg",
    alt: "Panoramic view of Eagle Vines Golf Club with Napa Valley vineyards",
    caption: "Eagle Vines, Napa Valley",
    category: "Venue",
    wide: false,
  },
] as const;

// ─── Category badge colors ─────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, { text: string; bg: string; border: string }> = {
  "On the Course":    { text: "#9fcdb7", bg: "rgba(31,79,58,0.35)", border: "rgba(82,183,136,0.35)" },
  "Sponsor Engagement": { text: "#e6cf95", bg: "rgba(46,28,10,0.50)", border: "rgba(195,164,97,0.35)" },
  "Networking":       { text: "#c3b8ff", bg: "rgba(80,60,140,0.30)", border: "rgba(140,110,220,0.32)" },
  "Registration":     { text: "#b4d4f0", bg: "rgba(30,60,100,0.35)", border: "rgba(80,140,200,0.32)" },
  "Venue":            { text: "#d4c9b0", bg: "rgba(50,45,30,0.45)", border: "rgba(160,145,100,0.35)" },
};

// ─── Photo Card ───────────────────────────────────────────────────────────────
function PhotoCard({
  photo,
  index,
}: {
  photo: (typeof photos)[number];
  index: number;
}) {
  const badge = CATEGORY_COLORS[photo.category] ?? CATEGORY_COLORS["Venue"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.52, delay: Math.min(index * 0.06, 0.44) }}
      className={`group relative overflow-hidden rounded-3xl ${photo.wide ? "md:col-span-2" : ""}`}
      style={{
        border: "1px solid rgba(55,60,58,0.75)",
        boxShadow: "0 6px 24px rgba(0,0,0,0.40)",
      }}
    >
      {/* Photo wrapper — fixed aspect ratio so grid rows are uniform */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0d0f0e]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={
            photo.wide
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />

        {/* Gradient overlay — base (always visible for legibility) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Hover overlay — darkens slightly for contrast boost */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

        {/* Top-right category badge */}
        <span
          className="absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition-opacity duration-300"
          style={{
            color: badge.text,
            background: badge.bg,
            border: `1px solid ${badge.border}`,
          }}
        >
          {photo.category}
        </span>

        {/* Bottom caption — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1 px-5 pb-4 transition-transform duration-400 ease-out group-hover:translate-y-0">
          <p className="text-sm font-bold leading-tight text-white drop-shadow-lg sm:text-base">
            {photo.caption}
          </p>
          {/* thin gold accent line under caption */}
          <div className="mt-1.5 h-px w-8 bg-[linear-gradient(90deg,rgba(230,207,149,0.85),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function TournamentGallery() {
  return (
    <section
      id="tournament-gallery"
      className="section-shell px-5 sm:px-8 lg:px-14 xl:px-20"
      aria-labelledby="gallery-heading"
    >
      <div className="container-wide">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(230,207,149,0.7))]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fcdb7]">
              From the Tournament
            </p>
            <div className="h-px w-16 bg-[linear-gradient(90deg,rgba(230,207,149,0.7),transparent)]" />
          </div>

          <h2
            id="gallery-heading"
            className="font-display text-3xl leading-tight text-[#f0ece5] sm:text-5xl lg:text-[3.5rem]"
          >
            See What the Day{" "}
            <span className="text-gold-gradient">Looks Like</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-[#b4ad9f] sm:text-base">
            Real moments from previous WHA Golf Tournaments — golf on the
            course, sponsors engaging attendees, and hardscape professionals
            building relationships that last all year.
          </p>

          {/* Gold divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-[linear-gradient(90deg,transparent,rgba(230,207,149,0.55))]" />
            <span className="text-[10px] text-[#c3a461]">◆</span>
            <div className="h-px w-24 bg-[linear-gradient(90deg,rgba(230,207,149,0.55),transparent)]" />
          </div>
        </motion.div>

        {/* ── Photo Grid ── */}
        {/*
          Layout: 3-col on lg, 2-col on sm/md, 1-col on mobile.
          "wide" photos span 2 columns on md+.
          All photos use aspect-[16/10] for consistent row heights.
        */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {photos.map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} index={i} />
          ))}
        </div>

        {/* ── Footer caption ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-xs text-[#6e6a64]"
        >
          ◆&nbsp; Photos from WHA Golf Tournament at Eagle Vines Golf Club,
          Napa Valley.
        </motion.p>
      </div>
    </section>
  );
}
