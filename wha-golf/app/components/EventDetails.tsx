const schedule = [
  { time: "9:00 AM", label: "Registration Opens", icon: <CheckInIcon /> },
  { time: "10:00 AM", label: "Box Lunch Service", icon: <LunchIcon /> },
  { time: "11:00 AM", label: "Shotgun Start", icon: <GolfIcon /> },
  { time: "4:00 PM", label: "Awards Dinner & Reception", icon: <DinnerIcon /> },
];

const includes = [
  "Green fees & cart",
  "Box lunch",
  "Awards dinner",
  "Tee prizes",
  "Contests & giveaways",
  "Raffle",
];

export default function EventDetails() {
  return (
    <section
      id="event-details"
      className="py-24 px-6 sm:px-10 lg:px-16 relative"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #111110 100%)" }}
      aria-labelledby="event-details-heading"
    >
      {/* Subtle top border */}
      <div className="divider-gold max-w-7xl mx-auto mb-16" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{ color: "#c9a84c", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            Event Details
          </span>
          <h2
            id="event-details-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#f0ede8" }}
          >
            A Full Day at Eagle Vines
          </h2>
          <p className="text-base" style={{ color: "#9a9490", maxWidth: "500px", margin: "0 auto" }}>
            Friday, June 19, 2026 &mdash; Eagle Vines Golf Club, Napa Valley, CA
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Schedule Timeline */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase mb-8" style={{ color: "#c9a84c" }}>
              Day Schedule
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-[2.125rem] top-4 bottom-4 w-px hidden sm:block"
                style={{ background: "linear-gradient(180deg, #c9a84c30, #2d6a4f30, #c9a84c30)" }}
              />

              <div className="flex flex-col gap-6">
                {schedule.map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-[4.25rem] h-[4.25rem] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: "rgba(26,26,26,0.9)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#c9a84c",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                      }}
                    >
                      {item.icon}
                    </div>
                    {/* Content */}
                    <div className="pt-3">
                      <span className="block text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#c9a84c" }}>
                        {item.time}
                      </span>
                      <span className="text-lg font-semibold" style={{ color: "#f0ede8" }}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="glass-card p-8 lg:p-10">
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase mb-8" style={{ color: "#52b788" }}>
              What&apos;s Included
            </h3>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(45,106,79,0.25)", border: "1px solid rgba(82,183,136,0.4)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#52b788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1.5 6 4.5 9 10.5 3" />
                    </svg>
                  </span>
                  <span className="text-base font-medium" style={{ color: "#d0cdc8" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Venue callout */}
            <div
              className="mt-8 p-5 rounded-xl"
              style={{
                background: "rgba(45,106,79,0.1)",
                border: "1px solid rgba(45,106,79,0.25)",
              }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#52b788" }}>Eagle Vines Golf Club</p>
              <p className="text-sm" style={{ color: "#9a9490" }}>
                2600 Jameson Canyon Rd, American Canyon, CA 94503
                <br />Napa Valley&apos;s premier championship golf course
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-gold max-w-7xl mx-auto mt-16" />
    </section>
  );
}

function CheckInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  );
}

function LunchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  );
}

function GolfIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="18" r="3"/>
      <path d="M12 15V3l8 4-8 4"/>
    </svg>
  );
}

function DinnerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  );
}
