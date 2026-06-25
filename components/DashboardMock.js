const STATS = [
  {
    value: "2,847",
    label: "Members",
    tint: "bg-indigo-50 text-indigo-500",
    icon: (
      <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM3 20a5 5 0 0 1 10 0M14 13a5 5 0 0 1 7 7" />
    ),
  },
  {
    value: "24 Active",
    label: "Events",
    tint: "bg-emerald-50 text-emerald-500",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    value: "₹3.2L",
    label: "Revenue",
    tint: "bg-rose-50 text-rose-500",
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  },
  {
    value: "98 Open",
    label: "Tasks",
    tint: "bg-amber-50 text-amber-500",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
];

const MEMBERS = [
  { initial: "S", name: "Sarah Johnson", role: "Director", tint: "bg-purple-500" },
  { initial: "M", name: "Mike Patel", role: "Manager", tint: "bg-sky-500" },
  { initial: "A", name: "Anita Rao", role: "Coordinator", tint: "bg-rose-500" },
];

// Relative bar heights for the mini chart
const BARS = [38, 30, 52, 60, 66, 72, 64, 80, 70, 96];

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
            app.smartnetwork.io/dashboard
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4"
            >
              <span
                className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg ${stat.tint}`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {stat.icon}
                </svg>
              </span>
              <p className="text-base font-bold text-ink sm:text-lg">{stat.value}</p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent members panel */}
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-sm font-bold text-ink">Recent Members</p>
          <ul className="mt-4 space-y-4">
            {MEMBERS.map((m, i) => (
              <li key={m.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white ${m.tint}`}
                  >
                    {m.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{m.name}</p>
                    <p className="text-xs text-slate-400">{m.role}</p>
                  </div>
                </div>
                {i === 2 && (
                  <span className="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-500">
                    Pending
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-end gap-1 text-xs font-semibold text-emerald-500">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 6l-9.5 9.5-5-5L1 18" />
              <path d="M17 6h6v6" />
            </svg>
            +18% this month
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {BARS.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-md ${
                  i === BARS.length - 1 ? "bg-brand" : "bg-blue-100"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating: WhatsApp Task */}
      <div className="absolute right-1 top-20 w-52 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-right-6 sm:top-28 sm:w-64">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
            </svg>
          </span>
          <span className="text-sm font-bold text-ink">WhatsApp Task</span>
        </div>
        <div className="mt-2 rounded-lg bg-emerald-50 p-2.5 text-xs leading-snug text-emerald-700">
          ✓ Task &quot;Event Setup&quot; marked complete by Ravi via WhatsApp
        </div>
      </div>

      {/* Floating: Next Event */}
      <div className="absolute left-1 bottom-12 w-48 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-6 sm:bottom-16 sm:w-60">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Next Event
        </p>
        <p className="mt-1 text-sm font-bold text-ink">Annual Gala 2025</p>
        <p className="text-xs text-slate-400">Dec 15 · 342 RSVPs</p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/4 rounded-full bg-blue-600" />
        </div>
      </div>
    </div>
  );
}
