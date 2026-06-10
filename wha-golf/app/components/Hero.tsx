"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTA_URL, EVENT } from "../lib/constants";

const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(CTA_URL)}`;

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0">
        <Image
          src="/hero-golf.png"
          alt="Golf course at Eagle Vines Golf Club"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#060706]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(46,110,83,0.32),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_84%,rgba(195,164,97,0.2),transparent_45%)]" />
      </div>

      <div className="section-shell relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
        <div>
          {/* ── Official WHA Logo ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.50 }}
            className="mb-6"
          >
            <div className="inline-block rounded-2xl bg-white/92 px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              <Image
                src="/wha-logo.png"
                alt="Western Hardscape Association official logo"
                width={220}
                height={110}
                className="h-24 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#dfc98f]"
          >
            20th Annual Golf Tournament
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.12 }}
            className="font-display max-w-3xl text-4xl font-semibold leading-[1.02] text-[#f0ece4] sm:text-5xl lg:text-7xl"
          >
            The Hardscape Industry&apos;s
            <span className="text-gold-gradient"> Premier Golf Tournament</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-sm text-[#d2cbc0] sm:text-base"
          >
            {EVENT.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            <Tag>{EVENT.date}</Tag>
            <Tag>{EVENT.venue}</Tag>
            <Tag>{EVENT.location}</Tag>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.34 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Register to Play
              <ArrowIcon />
            </a>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
              Become a Sponsor
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="glass-card mx-auto w-full max-w-sm p-5 sm:p-6"
          aria-label="Quick registration panel"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#d7be7d]">Scan and Register</p>
          <p className="mt-2 text-sm text-[#d1c8b8]">Fastest path from email, social, or QR traffic to sign-up.</p>

          <Image
            src={QR_SRC}
            alt="QR code to register for the WHA Golf Tournament"
            width={208}
            height={208}
            className="mx-auto mt-4 h-52 w-52 rounded-xl border border-[#3c3f3d] bg-white p-2 shadow-lg"
          />

          <div className="mt-5 rounded-lg border border-[#2d6650] bg-[#163126]/55 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#98cfb5]">Conversion Focus</p>
            <p className="mt-1 text-sm text-[#d5cec0]">Contractor-first event access. Sponsor visibility. High-intent industry attendance.</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#3b3c3a] bg-black/45 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[#e2d3aa]">
      {children}
    </span>
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
