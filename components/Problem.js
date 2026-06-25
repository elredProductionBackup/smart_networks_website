import Reveal from "./Reveal";

const WITHOUT = [
  "Excel spreadsheets for member records",
  "Manual registration via email/paper",
  "Disconnected member databases",
  "Finance tracking across multiple files",
  "Lost task threads in WhatsApp chats",
  "Hours spent on admin every week",
];

const WITH = [
  "Centralized member database",
  "Automated registration workflows",
  "Single source of truth for all data",
  "Real-time financial visibility",
  "WhatsApp task management integration",
  "80% reduction in administrative work",
];

function CrossIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Problem() {
  return (
    <section className="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">
          The Problem
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          You Deserve Better Than This
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
        {/* Without */}
        <Reveal variant="right">
        <div className="rounded-3xl border border-rose-100 bg-rose-50/60 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
              <CrossIcon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Without Smart Network
            </h3>
          </div>

          <ul className="mt-7 space-y-5">
            {WITHOUT.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-200 text-rose-400">
                  <CrossIcon className="h-3 w-3" />
                </span>
                <span className="text-base text-slate-600 sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </Reveal>

        {/* With */}
        <Reveal variant="left" delay={0.12}>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <CheckIcon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              With Smart Network
            </h3>
          </div>

          <ul className="mt-7 space-y-5">
            {WITH.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base text-slate-600 sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
