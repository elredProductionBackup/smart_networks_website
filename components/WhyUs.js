import Reveal from "./Reveal";

const ICONS = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  heart: (
    <path d="M19 14c1.5-1.5 3-3.2 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7 7-7Z" />
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
};

const CARDS = [
  {
    icon: "clock",
    title: "Save Time",
    desc: "Reduce administrative workload by up to 80%. Automate renewals, reminders, and reports.",
    tint: "bg-rose-50 text-rose-500",
  },
  {
    icon: "heart",
    title: "Improve Engagement",
    desc: "Keep members active and informed with targeted communications and event campaigns.",
    tint: "bg-blue-50 text-blue-500",
  },
  {
    icon: "eye",
    title: "Better Visibility",
    desc: "Track every aspect of your organization — finances, attendance, tasks — in one dashboard.",
    tint: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: "bolt",
    title: "Scale Effortlessly",
    desc: "Manage hundreds or thousands of members without adding headcount or complexity.",
    tint: "bg-amber-50 text-amber-500",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="mx-auto max-w-360 scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
          Why Smart Network
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Built for Busy Network Leaders
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.08}
            className="rounded-3xl border border-slate-100 bg-slate-50/70 p-7 sm:p-8"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.tint}`}
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
                {ICONS[card.icon]}
              </svg>
            </span>
            <h3 className="font-display mt-6 text-xl font-bold text-ink">
              {card.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              {card.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
