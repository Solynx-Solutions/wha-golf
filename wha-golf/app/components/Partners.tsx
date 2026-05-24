const partners = [
  "Belgard",
  "Basalite",
  "SiteOne",
  "Techniseal",
  "Heritage Landscape Supply",
  "Resource Building Supply",
  "PBM",
  "AckerStone",
  "MSI",
  "Garden Supply",
  "Keystone",
  "Outdoor Solutions",
  "Alliance",
  "Brickyard",
  "Evergreen",
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-24 px-6 sm:px-10 lg:px-16"
      style={{ background: "#0a0a0a" }}
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{ color: "#c9a84c", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            Industry Partners
          </span>
          <h2
            id="partners-heading"
            className="font-display text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#f0ede8" }}
          >
            Confirmed Industry Partners
          </h2>
          <p className="text-sm" style={{ color: "#5c5853" }}>
            Leading manufacturers, suppliers, and distributors participating in this year's event
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="rounded-xl flex items-center justify-center px-4 py-5 text-center transition-all duration-250 hover:-translate-y-0.5 cursor-default group"
              style={{
                background: "rgba(20,20,20,0.8)",
                border: "1px solid rgba(42,42,42,0.8)",
                minHeight: "72px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(26,26,26,0.95)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(42,42,42,0.8)";
                (e.currentTarget as HTMLElement).style.background = "rgba(20,20,20,0.8)";
              }}
            >
              <span
                className="text-sm font-semibold leading-tight tracking-wide"
                style={{ color: "#9a9490" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "#3a3835" }}>
          Partner logos will be displayed once assets are provided
        </p>
      </div>
    </section>
  );
}
