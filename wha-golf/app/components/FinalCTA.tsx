import { CTA_URL } from "../lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="register"
      className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{ background: "#0d0d0d" }}
      aria-labelledby="final-cta-heading"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(45,106,79,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Gold border top */}
      <div className="divider-gold max-w-4xl mx-auto mb-16" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span
          className="inline-block mb-6 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
          style={{ color: "#52b788", background: "rgba(45,106,79,0.15)", border: "1px solid rgba(45,106,79,0.3)" }}
        >
          Western Hardscape Association — June 19, 2026
        </span>

        {/* Headline */}
        <h2
          id="final-cta-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
          style={{ color: "#f0ede8" }}
        >
          Secure Your Spot at WHA&apos;s{" "}
          <span className="text-gold-gradient">Premier Industry</span>{" "}
          Golf Event
        </h2>

        {/* Sub copy */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "#9a9490", maxWidth: "560px", margin: "0 auto 2.5rem" }}
        >
          Eagle Vines Golf Club &mdash; Napa Valley, California
          <br />
          <span style={{ color: "#c9a84c" }}>Friday, June 19, 2026</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="final-register-btn"
            className="btn-primary w-full sm:w-auto"
          >
            Register Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
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

        {/* QR Code */}
        <div className="flex flex-col items-center gap-4">
          <div className="divider-gold w-32 mx-auto" />
          <QRCodeBlock />
        </div>
      </div>

      {/* Bottom gold border */}
      <div className="divider-gold max-w-4xl mx-auto mt-16" />
    </section>
  );
}

function QRCodeBlock() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs tracking-widest uppercase" style={{ color: "#5c5853" }}>
        Or scan to register on your phone
      </p>
      <div
        className="w-32 h-32 rounded-2xl flex items-center justify-center relative"
        style={{
          background: "rgba(20,20,20,0.95)",
          border: "2px solid rgba(201,168,76,0.35)",
        }}
        aria-label="QR code placeholder — scan to register"
      >
        <svg width="100" height="100" viewBox="0 0 88 88" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="3" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
          <rect x="10" y="10" width="12" height="12" rx="1" fill="#c9a84c"/>
          <rect x="60" y="4" width="24" height="24" rx="3" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
          <rect x="66" y="10" width="12" height="12" rx="1" fill="#c9a84c"/>
          <rect x="4" y="60" width="24" height="24" rx="3" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
          <rect x="10" y="66" width="12" height="12" rx="1" fill="#c9a84c"/>
          <rect x="34" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="40" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="34" y="10" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="10" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="34" y="16" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="40" y="16" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="40" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="52" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="58" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="34" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="46" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="58" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="40" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="52" y="46" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="60" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="66" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="72" y="34" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="60" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="72" y="40" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="40" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="46" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="52" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="60" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="66" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="72" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="34" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="46" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="60" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="72" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="34" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="40" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="52" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="60" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
          <rect x="72" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="34" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="46" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.9"/>
          <rect x="60" y="78" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.6"/>
          <rect x="78" y="60" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
          <rect x="78" y="66" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
          <rect x="78" y="72" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.8"/>
        </svg>
      </div>
      <p className="text-xs" style={{ color: "#3a3835" }}>
        Replace with real QR code when ready
      </p>
    </div>
  );
}
