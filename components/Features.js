import Reveal from "./Reveal";

const ICONS = {
  members: (
    <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM3 20a5 5 0 0 1 10 0M14 13a5 5 0 0 1 7 7" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  finance: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  chat: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16v-4M12 16v-7M17 16v-2" />
    </>
  ),
};

const FEATURES = [
  {
    icon: "members",
    title: "Member Management",
    desc: "Manage memberships, renewals, profiles, and member communications from one central place.",
    tint: "bg-blue-50 text-blue-500",
  },
  {
    icon: "calendar",
    title: "Event Management",
    desc: "Create events, handle registrations, track attendees, and generate event reports instantly.",
    tint: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: "finance",
    title: "Finance Management",
    desc: "Track budgets, expenses, dues collection, and financial performance with clarity.",
    tint: "bg-amber-50 text-amber-500",
  },
  {
    icon: "chat",
    title: "WhatsApp Task Management",
    desc: "Create, assign, and complete tasks directly through WhatsApp — where your officers already are.",
    badge: "NEW",
    highlight: true,
  },
  {
    icon: "mail",
    title: "Invitations & Registrations",
    desc: "Handle member approvals, send invitations, and manage the full onboarding experience.",
    tint: "bg-violet-50 text-violet-500",
  },
  {
    icon: "chart",
    title: "Analytics & Reporting",
    desc: "Monitor growth, engagement, financial health, and operational activity in real time.",
    tint: "bg-rose-50 text-rose-500",
  },
];

function FeatureCard({ feature }) {
  const { icon, title, desc, badge, highlight, tint } = feature;

  if (highlight) {
    return (
      <div className="h-full rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-7 shadow-lg shadow-emerald-500/30 sm:p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ICONS[icon]}
          </svg>
        </span>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl font-bold text-white">{title}</h3>
          {badge && (
            <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-3 text-base leading-relaxed text-white/90">{desc}</p>
      </div>
    );
  }

  return (
    <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${tint}`}
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
          {ICONS[icon]}
        </svg>
      </span>
      <h3 className="font-display mt-6 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-slate-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
            Features
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Everything Your Network Needs
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            One platform to run your entire organization. No more juggling
            tools.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="h-full">
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
