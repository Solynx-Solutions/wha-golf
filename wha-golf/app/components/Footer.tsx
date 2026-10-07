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
        <div className="mt-5 border-t border-[#dce5e1] bg-[#f4f7f6] px-5 py-4 flex justify-center text-sm leading-snug">
          <Link
            href="https://solynx.solutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website designed, built and managed by SOLYNX"
            className="inline-flex items-center justify-center gap-3 text-[#243f3b] min-h-11 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4c4a1] no-underline hover:underline hover:underline-offset-[3px] focus-visible:underline focus-visible:underline-offset-[3px] flex-wrap"
          >
            <Image
              src="/SLX-WRD.png"
              alt="SOLYNX logo"
              width={184}
              height={54}
              className="h-auto w-[184px] object-contain"
              unoptimized
            />
            <span>
              Powered by <strong>SOLYNX</strong>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
