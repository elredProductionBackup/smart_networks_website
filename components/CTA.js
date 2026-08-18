import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-slate-50/60 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-ink shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          No credit card required
        </span>

        <h2 className="font-display mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Your Members Deserve an
          <br />
          <span className="text-brand">Organization That Runs Like One</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
          Bring members, events, finances, and operations together in one
          platform.
        </p>

        <div className="mt-9 flex justify-center">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark sm:w-auto"
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
    </section>
  );
}
