const STATS = [
  {
    value: "₹36,000",
    label: "Yearly Income 2026",
    name: "Income",
    tint: "bg-emerald-50",
    valueTint: "text-emerald-600",
    iconTint: "bg-emerald-500",
    icon: (
      <>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </>
    ),
  },
  {
    value: "₹10,70,000",
    label: "Allocated Budget 2026",
    name: "Budget",
    tint: "bg-blue-50",
    valueTint: "text-blue-600",
    iconTint: "bg-blue-600",
    icon: null,
    glyph: "₹",
  },
  {
    value: "₹0.00",
    label: "Total Expenses 2026",
    name: "Expense",
    tint: "bg-purple-50",
    valueTint: "text-purple-600",
    iconTint: "bg-purple-600",
    icon: (
      <>
        <path d="M23 18l-9.5-9.5-5 5L1 6" />
        <path d="M17 18h6v-6" />
      </>
    ),
  },
];

const PORTFOLIOS = [
  { name: "Learning", pct: 84.7, ring: "#3b82f6", text: "text-blue-600" },
  { name: "Engagement", pct: 91.4, ring: "#10b981", text: "text-emerald-600" },
  { name: "Membership", pct: 95.8, ring: "#f59e0b", text: "text-amber-600" },
];

const EVENTS = [
  { name: "Figma Config", date: "12th–14th Aug, 2026", amount: "₹8,500" },
  { name: "Summer Leadership Workshop", date: "22nd Aug, 2026", amount: "₹18,500" },
];

function Donut({ pct, ring }) {
  return (
    <div
      className="relative h-14 w-14 shrink-0 rounded-full"
      style={{ background: `conic-gradient(${ring} ${pct}%, #e5e7eb ${pct}% 100%)` }}
    >
      <div className="absolute inset-[5px] rounded-full bg-white" />
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-2xl shadow-slate-300/40 sm:p-5">
        {/* Browser chrome */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-300" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <div className="flex-1 truncate rounded-lg bg-slate-50 px-4 py-2 text-xs text-slate-400 sm:text-sm">
            app.smartnetwork.io/finance
          </div>
        </div>

        {/* Page header */}
        <div className="mt-4">
          <p className="text-base font-bold text-ink sm:text-lg">Vision Board</p>
          <p className="text-xs text-slate-400">Annual overview and portfolio management</p>
        </div>

        {/* Stat cards */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {STATS.map((stat) => (
            <div key={stat.name} className={`rounded-2xl p-3 ${stat.tint}`}>
              <span
                className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-white ${stat.iconTint}`}
              >
                {stat.glyph ? (
                  <span className="text-sm font-bold">{stat.glyph}</span>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {stat.icon}
                  </svg>
                )}
              </span>
              <p className={`text-sm font-bold sm:text-base ${stat.valueTint}`}>{stat.value}</p>
              <p className="text-[11px] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Overview panel */}
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-sm font-bold text-ink">Portfolio Overview</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            {PORTFOLIOS.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1.5">
                <Donut pct={p.pct} ring={p.ring} />
                <p className="text-xs font-semibold text-ink">{p.name}</p>
                <p className={`text-[11px] font-semibold ${p.text}`}>{p.pct}% Utilized</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top upcoming events panel */}
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-sm font-bold text-ink">Top Upcoming Events</p>
          <ul className="mt-4 space-y-4">
            {EVENTS.map((e) => (
              <li key={e.name} className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{e.name}</p>
                    <p className="text-xs text-slate-400">{e.date}</p>
                  </div>
                </div>
                <span className="shrink-0 text-sm font-bold text-blue-600">{e.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating: WhatsApp update */}
      <div className="absolute right-1 top-20 w-52 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-right-6 sm:top-28 sm:w-64">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
            </svg>
          </span>
          <span className="text-sm font-bold text-ink">WhatsApp Update</span>
        </div>
        <div className="mt-2 rounded-lg bg-emerald-50 p-2.5 text-xs leading-snug text-emerald-700">
          ✓ Expense of ₹11,500 approved for Membership via WhatsApp
        </div>
      </div>

      {/* Floating: Top portfolio */}
      <div className="absolute left-1 bottom-12 w-48 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-6 sm:bottom-16 sm:w-60">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Top Portfolio
        </p>
        <p className="mt-1 text-sm font-bold text-ink">Membership</p>
        <p className="text-xs text-slate-400">₹12,000 Budget · 95.8% Utilized</p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[95.8%] rounded-full bg-amber-500" />
        </div>
      </div>
    </div>
  );
}
