export default function Footer() {
  return (
    <footer
      className="py-10 px-6 sm:px-10 lg:px-16 text-center"
      style={{ background: "#080808", borderTop: "1px solid rgba(42,42,42,0.6)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo wordmark */}
        <div className="mb-4">
          <span className="font-display text-base font-semibold tracking-wider" style={{ color: "#5c5853" }}>
            Western Hardscape Association
          </span>
        </div>

        {/* Divider */}
        <div className="divider-gold w-24 mx-auto mb-4" style={{ opacity: 0.2 }} />

        {/* Event line */}
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#3a3835" }}>
          20th Annual Golf Tournament &bull; June 19, 2026 &bull; Eagle Vines Golf Club &bull; Napa Valley, CA
        </p>

        <p className="text-xs" style={{ color: "#2a2a28" }}>
          &copy; {new Date().getFullYear()} Western Hardscape Association. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
