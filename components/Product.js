import Reveal from "./Reveal";

const TABS = ["Members", "Board", "Non-Boarded"];

const SIDEBAR_ICONS = [
  { id: "dashboard", path: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" },
  { id: "calendar", path: "M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 5h16M8 3v4M16 3v4" },
  { id: "tasks", path: "M4 6h3M4 12h3M4 18h3M10 6h10M10 12h10M10 18h10" },
  { id: "finance", path: "M12 2v20M17 6.5c0-1.9-2.2-3-5-3s-5 1.4-5 3.2c0 4 10 2 10 6.1 0 1.9-2.2 3.2-5 3.2s-5-1.3-5-3.2" },
];

const MEMBERS = [
  { initial: "S", name: "Sarah Johnson", title: "Director", grad: "from-purple-500 to-purple-700" },
  { initial: "R", name: "Rajesh Patel", title: "Manager", grad: "from-indigo-500 to-purple-600" },
  { initial: "A", name: "Anita Rao", title: "Coordinator", grad: "from-violet-500 to-fuchsia-600" },
  { initial: "J", name: "James Liu", title: "Member", grad: "from-indigo-500 to-blue-600" },
  { initial: "P", name: "Priya Sharma", title: "Member", grad: "from-pink-500 to-rose-600" },
];

function SidebarIcon({ path }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

function ActionButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
    >
      {children}
    </button>
  );
}

function ProductMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-300/40 sm:rounded-3xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:px-5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-300" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
        <div className="flex-1 truncate rounded-lg bg-slate-50 px-4 py-1.5 text-xs text-slate-400 sm:text-sm">
          app.smartnetwork.io/members
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between gap-4 bg-indigo-50/50 px-5 py-3.5 sm:px-8">
        <p className="font-display shrink-0 leading-tight">
          <span className="block text-[13px] font-semibold text-ink sm:text-sm">Smart</span>
          <span className="block text-base font-extrabold text-brand sm:text-lg">NETWORKS</span>
        </p>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink sm:inline-flex">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-rose-100 text-rose-500">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            </span>
            Cluster1 Network
          </span>
          <svg className="h-5 w-5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 0 0-12 0c0 4.5-2 6-2 6h16s-2-1.5-2-6ZM9.5 17a2.5 2.5 0 0 0 5 0" />
          </svg>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-xs font-bold text-white">
            N
          </span>
        </div>
      </div>

      {/* App body: sidebar + content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden shrink-0 flex-col items-center gap-4 border-r border-slate-100 bg-indigo-50/30 px-3 py-6 sm:flex sm:px-4">
          {SIDEBAR_ICONS.map((icon) => (
            <span
              key={icon.id}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400"
            >
              <SidebarIcon path={icon.path} />
            </span>
          ))}
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-brand">
            <SidebarIcon path="M16 11a4 4 0 1 0-4-4M8 11a3.5 3.5 0 1 0 0-7M2 20c0-3 2.7-5 6-5s6 2 6 5M13 15c2.8.3 5 2.2 5 5" />
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 px-5 py-6 sm:px-8">
          <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">Members</h3>

          {/* Tabs */}
          <div className="mt-4 flex items-center gap-6 overflow-x-auto border-b border-slate-100 sm:gap-8">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={`-mb-px shrink-0 border-b-2 pb-3 text-sm font-semibold transition-colors sm:text-[15px] ${
                  i === 0
                    ? "border-brand text-brand"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="mt-5 flex w-full max-w-sm items-center gap-2 rounded-xl border border-slate-200 bg-white pl-3.5 pr-2 py-1">
            <span className="shrink-0 text-sm font-semibold text-slate-600">Name</span>
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
            <span className="h-4 w-px shrink-0 bg-slate-200" />
            <input
              type="text"
              placeholder="Search by name (Min 3 chars)"
              readOnly
              className="min-w-0 flex-1 truncate bg-transparent py-1.5 text-sm text-slate-400 outline-none placeholder:text-slate-400"
            />
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-hidden rounded-xl bg-indigo-50/30">
            <div className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
              <span>Name/Title</span>
              <span>Actions</span>
            </div>

            <ul>
              {MEMBERS.map((m) => (
                <li
                  key={m.name}
                  className="flex items-center justify-between gap-4 border-t border-white px-4 py-3.5 sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${m.grad}`}
                    >
                      {m.initial}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-ink">{m.name}</p>
                      <p className="truncate text-xs text-slate-400">{m.title}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <ActionButton label="WhatsApp">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
                      </svg>
                    </ActionButton>
                    <ActionButton label="Email">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m4 6 8 6 8-6" />
                      </svg>
                    </ActionButton>
                    <ActionButton label="Call">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                      </svg>
                    </ActionButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section id="solutions" className="mx-auto max-w-360 scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">
          Product
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          See Smart Networks in Action
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
          Built for how organizations actually run.
        </p>
      </Reveal>

      <Reveal variant="zoom" delay={0.1} className="mt-12 lg:mt-16">
        <ProductMock />
      </Reveal>
    </section>
  );
}
