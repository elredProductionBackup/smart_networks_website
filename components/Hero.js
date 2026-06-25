import DashboardMock from "./DashboardMock";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const STATS = [
  { value: "500+", label: "Organizations" },
  { value: "10K+", label: "Members Managed" },
  { value: "95%", label: "Efficiency Gain" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-360 px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <Reveal variant="up" amount={0}>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Now with WhatsApp Task Management
          </span>

          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Run Your Entire <span className="text-brand">Network</span> From One
            Platform
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500 sm:text-xl">
            Manage members, events, finances, registrations, invitations,
            programs, and daily operations — without spreadsheets or scattered
            tools.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
            >
              Book Demo
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
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-slate-50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3l16 9-16 9V3Z" />
                </svg>
              </span>
              Watch Product Tour
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-7 gap-y-6 sm:gap-x-14">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Right: dashboard */}
        <Reveal variant="left" delay={0.15} amount={0} className="relative px-2 sm:px-6 lg:px-0">
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
