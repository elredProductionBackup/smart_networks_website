import Reveal from "./Reveal";

const TABS = ["Members", "Events", "Finance", "Tasks"];

const MEMBERS = [
  {
    initial: "S",
    name: "Sarah Johnson",
    email: "sarah@community.org",
    role: "Director",
    status: "Active",
    joined: "Jan 2024",
    grad: "from-purple-500 to-purple-700",
  },
  {
    initial: "R",
    name: "Rajesh Patel",
    email: "raj@networks.in",
    role: "Manager",
    status: "Active",
    joined: "Mar 2024",
    grad: "from-indigo-500 to-purple-600",
  },
  {
    initial: "A",
    name: "Anita Rao",
    email: "anita@assoc.com",
    role: "Coordinator",
    status: "Pending",
    joined: "May 2024",
    grad: "from-violet-500 to-fuchsia-600",
  },
  {
    initial: "J",
    name: "James Liu",
    email: "james@chamber.org",
    role: "Member",
    status: "Active",
    joined: "Jun 2024",
    grad: "from-indigo-500 to-blue-600",
  },
  {
    initial: "P",
    name: "Priya Sharma",
    email: "priya@ngo.in",
    role: "Member",
    status: "Inactive",
    joined: "Feb 2024",
    grad: "from-pink-500 to-rose-600",
  },
];

const STATUS_STYLES = {
  Active: "bg-emerald-50 text-emerald-600",
  Pending: "bg-amber-50 text-amber-600",
  Inactive: "bg-slate-100 text-slate-400",
};

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

      {/* Tabs */}
      <div className="flex items-center gap-6 overflow-x-auto border-b border-slate-100 px-5 sm:gap-8 sm:px-8">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            type="button"
            className={`-mb-px shrink-0 border-b-2 py-4 text-sm font-semibold transition-colors sm:text-[15px] ${
              i === 0
                ? "border-brand text-brand"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 p-5 sm:p-8">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search members..."
            readOnly
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500 outline-none placeholder:text-slate-400"
          />
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:px-5"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span className="hidden sm:inline">Add Member</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Table */}
      <div className="px-5 pb-5 sm:px-8 sm:pb-8">
        {/* Header row */}
        <div className="flex items-center border-b border-slate-100 pb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          <span className="flex-1">Name</span>
          <span className="hidden w-32 md:block lg:w-44">Role</span>
          <span className="w-20 sm:w-28">Status</span>
          <span className="hidden w-20 sm:block lg:w-28">Joined</span>
        </div>

        {/* Member rows */}
        <ul>
          {MEMBERS.map((m) => (
            <li
              key={m.email}
              className="flex items-center border-b border-slate-50 py-4 last:border-0"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${m.grad}`}
                >
                  {m.initial}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink">{m.name}</p>
                  <p className="truncate text-xs text-slate-400">{m.email}</p>
                </div>
              </div>
              <span className="hidden w-32 text-sm text-slate-600 md:block lg:w-44">
                {m.role}
              </span>
              <span className="w-20 sm:w-28">
                <span
                  className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[m.status]}`}
                >
                  {m.status}
                </span>
              </span>
              <span className="hidden w-20 text-sm text-slate-400 sm:block lg:w-28">
                {m.joined}
              </span>
            </li>
          ))}
        </ul>
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
          See Smart Network in Action
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
          Built for how real organizations actually work.
        </p>
      </Reveal>

      <Reveal variant="zoom" delay={0.1} className="mt-12 lg:mt-16">
        <ProductMock />
      </Reveal>
    </section>
  );
}
