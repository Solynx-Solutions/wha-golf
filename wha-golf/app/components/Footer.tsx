import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-[#2d322f] bg-[#0b0d0c] px-5 py-10 text-center sm:px-8 lg:px-14"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-lg text-[#d4c4a1]">Western Hardscape Association</p>
        <div className="divider-gold mx-auto mb-4 mt-3 w-28" />

        <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#8f897d] sm:text-xs">
          20th Annual Golf Tournament &bull; June 19, 2026 &bull; Eagle Vines Golf Club &bull; Napa Valley, CA
        </p>

        <p className="mt-2 text-xs text-[#625d53]">
          &copy; {new Date().getFullYear()} Western Hardscape Association. All rights reserved.
        </p>

        {/* SOLYNX attribution — standard footer credit */}
        <div className="mt-5 border-t border-white/[0.08] pt-4 flex justify-center text-[0.78rem] leading-snug opacity-70 transition-opacity duration-[180ms] hover:opacity-100">
          <Link
            href="https://solynx.solutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website designed, built and managed by SOLYNX"
            className="inline-flex items-center justify-center gap-[0.45rem] text-[#8a8480] no-underline hover:underline hover:underline-offset-[3px] focus-visible:underline focus-visible:underline-offset-[3px] flex-wrap"
          >
            <Image
              src="/SLX-WRD.png"
              alt="SOLYNX logo"
              width={80}
              height={22}
              className="h-[18px] w-auto"
              unoptimized
            />
            <span>
              Website designed, built &amp; managed by <strong>SOLYNX</strong>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
