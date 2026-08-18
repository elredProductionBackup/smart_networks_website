import Reveal from "./Reveal";

const LOSSES = [
  {
    icon: (
      <>
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
    title: "Money You Can't See",
    desc: "Every month on spreadsheets is a month of dues, sponsorships, and renewals quietly slipping through the cracks.",
    tint: "bg-rose-50 text-rose-500",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    title: "Volunteer Hours You Can't Get Back",
    desc: "Your board didn't sign up to spend evenings chasing RSVPs and reconciling expense sheets by hand.",
    tint: "bg-amber-50 text-amber-500",
  },
  {
    icon: (
      <>
        <path d="M16 11a4 4 0 1 0-4-4M8 11a3.5 3.5 0 1 0 0-7M2 20c0-3 2.7-5 6-5s6 2 6 5M13 15c2.8.3 5 2.2 5 5" />
      </>
    ),
    title: "Continuity at Handover",
    desc: "When leadership changes, the knowledge trapped in someone's inbox and phone walks out the door with them.",
    tint: "bg-blue-50 text-blue-500",
  },
];

export default function CostOfWaiting() {
  return (
    <section className="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">
          The Cost of Waiting
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Every Month You Wait Costs More Than You Think
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:mt-16">
        {LOSSES.map((loss, i) => (
          <Reveal
            key={loss.title}
            delay={i * 0.1}
            className="rounded-3xl border border-slate-100 bg-slate-50/70 p-7 sm:p-8"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${loss.tint}`}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {loss.icon}
              </svg>
            </span>
            <h3 className="font-display mt-6 text-xl font-bold text-ink">
              {loss.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              {loss.desc}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center lg:mt-16">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
        >
          Book a demo
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}
