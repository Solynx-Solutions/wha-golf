"use client";

import Image from "next/image";
import { useState } from "react";
import { CTA_URL } from "../lib/constants";

const partners = [
  { name: "Belgard", logo: "/partners/belgard.svg" },
  { name: "Basalite", logo: "/partners/basalite.svg" },
  { name: "SiteOne", logo: "/partners/siteone.svg" },
  { name: "Techniseal", logo: "/partners/techniseal.svg" },
  { name: "Heritage Landscape Supply", logo: "/partners/heritage-landscape-supply.svg" },
  { name: "Resource Building Supply", logo: "/partners/resource-building-supply.svg" },
  { name: "PBM", logo: "/partners/pbm.svg" },
  { name: "AckerStone", logo: "/partners/ackerstone.svg" },
  { name: "MSI", logo: "/partners/msi.svg" },
  { name: "Garden Supply", logo: "/partners/garden-supply.svg" },
  { name: "Keystone", logo: "/partners/keystone.svg" },
  { name: "Outdoor Solutions", logo: "/partners/outdoor-solutions.svg" },
  { name: "Alliance", logo: "/partners/alliance.svg" },
  { name: "Brickyard", logo: "/partners/brickyard.svg" },
  { name: "Evergreen", logo: "/partners/evergreen.svg" },
];

function PartnerCard({ name, logo }: { name: string; logo: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative flex min-h-24 cursor-default items-center justify-center overflow-hidden rounded-xl border border-[#3a403d] bg-[linear-gradient(165deg,rgba(29,33,31,0.92),rgba(18,21,20,0.98))] px-3 py-6 text-center shadow-[inset_0_1px_0_rgba(238,229,210,0.05),0_10px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a665] hover:shadow-[0_0_0_1px_rgba(196,166,101,0.35),inset_0_1px_0_rgba(238,229,210,0.08),0_16px_32px_rgba(0,0,0,0.40),0_0_20px_rgba(196,166,101,0.18)]"
    >
      {/* Inner bevel line */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[10px] border border-[#454b47]/70 transition-colors duration-300 group-hover:border-[#c4a665]/20" />

      {/* Gold ambient glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(196,166,101,0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-center">
        {imgError ? (
          <span className="text-sm font-semibold leading-tight tracking-[0.03em] text-[#d0c8b8] transition-colors duration-300 group-hover:text-[#ebddbd]">
            {name}
          </span>
        ) : (
          <Image
            src={logo}
            alt={`${name} logo`}
            width={160}
            height={48}
            className="h-10 w-auto max-w-[80%] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="section-shell section-glow-green px-5 sm:px-8 lg:px-14"
      aria-labelledby="partners-heading"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#2b312f] bg-[linear-gradient(180deg,#161918_0%,#101312_100%)] px-4 py-10 sm:px-7 sm:py-12 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(196,166,101,0.16),transparent_44%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(46,110,83,0.2),transparent_50%)]" />

        <div className="relative z-10">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfc98f]">Industry Partners</p>
          <h2 id="partners-heading" className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl">
            Partner Brands That Set the Standard
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b4ad9f] sm:text-base">
            Your brand appears alongside respected manufacturers and supply leaders trusted by serious contractors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} name={partner.name} logo={partner.logo} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <p className="mx-auto max-w-3xl text-center text-sm text-[#c8c1b3] sm:text-base">
            Want your brand positioned beside WHA&apos;s most trusted industry partners?
          </p>
          <div className="mt-4 flex justify-center">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6">
              Become a Sponsor
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[#8a8478]">
          Final logo lockups will be added as sponsor assets are received.
        </p>
        </div>
      </div>
    </section>
  );
}
