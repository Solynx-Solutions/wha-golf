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

        <p className="text-xs text-[#746f63]">Strategic digital support by SOLYNX.</p>

        <p className="mt-2 text-xs text-[#625d53]">
          &copy; {new Date().getFullYear()} Western Hardscape Association. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
