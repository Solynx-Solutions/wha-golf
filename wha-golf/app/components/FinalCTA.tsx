"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTA_URL } from "../lib/constants";

const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=340x340&data=${encodeURIComponent(CTA_URL)}`;

export default function FinalCTA() {
  return (
    <section id="register" className="section-shell px-5 sm:px-8 lg:px-14" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#323634] bg-gradient-to-b from-[#1b201e] to-[#101312] p-6 shadow-2xl sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9fceb8]">Final Call</p>
          <h2 id="final-cta-heading" className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl">
            Don&apos;t Miss the Industry Event
            <span className="text-gold-gradient"> Everyone Will Be Talking About</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b6afa2] sm:text-base">
            Secure your spot before registration closes and sponsorship inventory sells out.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-center gap-7 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="final-register-btn"
                className="btn-primary w-full sm:w-auto"
              >
                Register to Play
                <ArrowIcon />
              </a>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="final-sponsor-btn"
                className="btn-secondary w-full sm:w-auto"
              >
                Become a Sponsor
              </a>
            </div>

            <div className="mt-5 rounded-xl border border-[#335f4c] bg-[#183226]/65 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9fd0b7]">Modernization Partner</p>
              <p className="mt-1 text-sm text-[#d7cfc1]">
                Digital campaign strategy and delivery support by SOLYNX.
              </p>
            </div>
          </div>

          <div className="mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#dfc98f]">Scan to Register</p>
            <Image
              src={QR_SRC}
              alt="Large QR code to register for the WHA Golf Tournament"
              width={208}
              height={208}
              className="mt-3 h-52 w-52 rounded-xl border border-[#3a3d3b] bg-white p-2"
            />
          </div>
        </div>
      </div>
    </section>
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
