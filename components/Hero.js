import DashboardMock from "./DashboardMock";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-360 px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <Reveal variant="up" amount={0}>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Run Your Entire <span className="text-brand">Network</span> From One
            Platform
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500 sm:text-xl">
            Stop running your organization out of spreadsheets, email
            threads, and scattered WhatsApp chats. Smart Networks brings your
            members, events, and finances into one place — so you spend your
            time leading, not doing admin.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
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
          </div>

        </Reveal>

        {/* Right: dashboard */}
        <Reveal variant="left" delay={0.15} amount={0} className="relative px-2 sm:px-6 lg:px-0">
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
