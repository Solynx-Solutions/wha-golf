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
      className="relative py-24 px-6 sm:px-10 lg:px-16 section-glow-green"
      style={{ background: "#0d0d0d" }}
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{ color: "#c9a84c", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            Registration
          </span>
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#f0ede8" }}
          >
            Secure Your Spot
          </h2>
          <p className="text-base" style={{ color: "#9a9490", maxWidth: "460px", margin: "0 auto" }}>
            Early pricing available through May 31. Register before June 1 to save.
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              id={`pricing-${tier.id}`}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: tier.featured ? "rgba(26,26,26,0.95)" : "rgba(20,20,20,0.8)",
                border: tier.featured
                  ? "1px solid rgba(201,168,76,0.4)"
                  : "1px solid rgba(42,42,42,0.8)",
                boxShadow: tier.featured
                  ? "0 8px 40px rgba(201,168,76,0.12), 0 4px 16px rgba(0,0,0,0.4)"
                  : "0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold tracking-[0.15em] uppercase"
                  style={{ background: "linear-gradient(90deg, #c9a84c, #e5c96e, #c9a84c)", color: "#0d0d0d" }}
                >
                  Best Value
                </div>
              )}

              <div className={`p-7 ${tier.featured ? "pt-10" : ""}`}>
                {/* Tier label */}
                <h3 className="font-display text-xl font-bold mb-5" style={{ color: "#f0ede8" }}>
                  {tier.label}
                </h3>

                {/* Prices side by side */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Early price */}
                  <div
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#c9a84c" }}>
                      Early
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#e5c96e" }}>
                      {tier.earlyPrice}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#9a9490" }}>
                      {tier.earlyDeadline}
                    </p>
                  </div>
                  {/* Regular price */}
                  <div
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "rgba(26,26,26,0.6)",
                      border: "1px solid rgba(42,42,42,0.8)",
                    }}
                  >
                    <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#5c5853" }}>
                      Standard
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#9a9490" }}>
                      {tier.regularPrice}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#5c5853" }}>
                      {tier.regularDeadline}
                    </p>
                  </div>
                </div>

                {/* Perks list */}
                <ul className="space-y-2 mb-7">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-sm" style={{ color: "#b0ada8" }}>
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(45,106,79,0.2)", border: "1px solid rgba(82,183,136,0.35)" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="#52b788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1 5 3.5 7.5 9 2" />
                        </svg>
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`register-${tier.id}-btn`}
                  className={tier.featured ? "btn-primary w-full" : "btn-secondary w-full"}
                  style={!tier.featured ? { justifyContent: "center" } : {}}
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Early deadline callout */}
        <p className="text-center text-sm mt-8" style={{ color: "#5c5853" }}>
          Early registration pricing valid through{" "}
          <span style={{ color: "#c9a84c", fontWeight: 600 }}>May 31, 2026</span>.
          All registrations subject to availability.
        </p>
      </div>
    </section>
  );
}
