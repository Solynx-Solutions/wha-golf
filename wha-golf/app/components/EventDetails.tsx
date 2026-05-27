"use client";

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
    <section id="event-details" className="section-shell px-5 sm:px-8 lg:px-14" aria-labelledby="event-details-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfc98f]">Event Details</p>
          <h2 id="event-details-heading" className="font-display mt-3 text-3xl leading-tight text-[#f0ece5] sm:text-5xl">
            Structured for a Full Day of Business + Golf
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b4ada1] sm:text-base">
            Friday, June 19, 2026 at Eagle Vines Golf Club in Napa Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="glass-card p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfc98f]">Day Schedule</h3>
            <div className="mt-5 space-y-4">
              {schedule.map((item) => (
                <div key={item.time} className="flex items-center gap-4 rounded-lg border border-[#313634] bg-[#111413]/70 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3f6f58] bg-[#153427]/55 text-[#dac48b]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a3cdb8]">{item.time}</p>
                    <p className="text-sm text-[#e6e0d6] sm:text-base">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfc98f]">Included with Registration</h3>
            <ul className="mt-5 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#d8d1c3]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#4f8269] bg-[#193729]">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#b8dfc9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1.5 6 4.5 9 10.5 3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-[#3b7158] bg-[#173226]/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9fd0b7]">Venue Address</p>
              <p className="mt-2 text-sm text-[#d2cabd]">
                2600 Jameson Canyon Rd, American Canyon, CA 94503
              </p>
            </div>
          </article>
        </div>
      </div>
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
