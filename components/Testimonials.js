import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Smart Network replaced multiple spreadsheets and completely simplified our operations. We went from spending 10 hours a week on admin to just 2.",
    initials: "KM",
    name: "Kavitha Menon",
    role: "Community Director · South India Business Association",
    avatar: "bg-rose-500",
  },
  {
    quote:
      "We manage 2,400 members, 30+ events per year, and our entire finances from one platform. The WhatsApp integration alone is worth it.",
    initials: "AS",
    name: "Arjun Sharma",
    role: "Association President · National NGO Coalition",
    avatar: "bg-blue-600",
  },
  {
    quote:
      "Our team saves 6+ hours every week. Members get timely updates, our books are always clean, and nobody misses a deadline anymore.",
    initials: "FA",
    name: "Fatima Al-Rashid",
    role: "NGO Coordinator · Women in Leadership Network",
    avatar: "bg-emerald-500",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-360 scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
          Testimonials
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Loved by Network Leaders
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} variant="up" delay={i * 0.12}>
            <figure className="flex h-full flex-col rounded-3xl border border-slate-100 bg-slate-50/70 p-7 sm:p-8">
              <Stars />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${t.avatar}`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-sm leading-snug text-slate-400">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
