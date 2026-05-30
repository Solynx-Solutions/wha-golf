"use client";

import { CTA_URL } from "../lib/constants";

const pricingTiers = [
  {
    id: "individual",
    label: "Individual Player",
    earlyPrice: "$315",
    regularPrice: "$325",
    earlyDeadline: "before June 1",
    regularDeadline: "after June 1",
    featured: false,
    perks: [
      "18-hole championship round",
      "Green fees & cart included",
      "Box lunch included",
      "Awards dinner included",
      "Tee prizes & raffle entry",
    ],
  },
  {
    id: "foursome",
    label: "Foursome",
    earlyPrice: "$1,060",
    regularPrice: "$1,100",
    earlyDeadline: "before June 1",
    regularDeadline: "after June 1",
    featured: true,
    perks: [
      "4 individual player entries",
      "Green fees & carts included",
      "Box lunch for all four",
      "Awards dinner for all four",
      "Tee prizes & 4 raffle entries",
      "Best value for teams",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="registration"
      className="section-shell section-glow-green px-5 sm:px-8 lg:px-14"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfc98f]">Registration</p>
          <h2 id="pricing-heading" className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl">
            Register Your Team Before Pricing Increases
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#b7afa2] sm:text-base">
            Early rates end May 31. Keep your crew visible at WHA&apos;s most important annual event.
          </p>
        </div>

        {/* Scarcity notice */}
        <div
          id="registration-scarcity"
          className="mx-auto mb-8 flex max-w-2xl items-start gap-3 rounded-xl border border-[#6b4a2a] bg-[linear-gradient(135deg,rgba(42,28,16,0.75),rgba(24,16,10,0.85))] px-5 py-4"
          role="alert"
          aria-live="polite"
        >
          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#c3a461]/50 bg-[#c3a461]/10 text-[#e6cf95]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-bold text-[#e6cf95]">Registration Capacity Is Limited</p>
            <p className="mt-0.5 text-xs text-[#b4a98c]">Once foursomes are filled, registration closes.</p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              id={`pricing-${tier.id}`}
              className={`relative overflow-hidden rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
                tier.featured
                  ? "border-[#c3a461] bg-gradient-to-b from-[#24211b] to-[#141514]"
                  : "border-[#2f3331] bg-gradient-to-b from-[#1b1e1d] to-[#111312]"
              }`}
            >
              {tier.featured && (
                <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-[#b6914d] via-[#e4cc95] to-[#b6914d] py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.17em] text-[#101110]">
                  Best Value
                </div>
              )}

              <div className={`p-7 ${tier.featured ? "pt-10" : ""}`}>
                <h3 className="font-display text-2xl text-[#ece7dd]">
                  {tier.label}
                </h3>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-[#6f5c33] bg-[#2a241a]/75 p-4 text-center">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#dfc98f]">
                      Early
                    </p>
                    <p className="text-2xl font-bold text-[#f1ddb0]">
                      {tier.earlyPrice}
                    </p>
                    <p className="mt-1 text-[11px] text-[#b8ad95]">
                      {tier.earlyDeadline}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#2f3331] bg-[#111312]/70 p-4 text-center">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d8678]">
                      Standard
                    </p>
                    <p className="text-2xl font-bold text-[#b4aea1]">
                      {tier.regularPrice}
                    </p>
                    <p className="mt-1 text-[11px] text-[#7f786b]">
                      {tier.regularDeadline}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-sm text-[#c7c0b3]">
                      <span className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-[#4a7f66] bg-[#1a3b2c]">
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="#52b788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1 5 3.5 7.5 9 2" />
                        </svg>
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`register-${tier.id}-btn`}
                  className={`${tier.featured ? "btn-primary" : "btn-secondary"} mt-6 w-full justify-center`}
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-[#8f897c] sm:text-sm">
          Early registration pricing valid through{" "}
          <span className="font-semibold text-[#dfc98f]">May 31, 2026</span>.
          All registrations subject to availability.
        </p>
      </div>
    </section>
  );
}
