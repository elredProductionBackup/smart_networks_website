import Reveal from "./Reveal";

const ORGS = [
  "Business Networks",
  "Professional Chambers",
  "Alumni Associations",
  "NGO Coalitions",
  "Trade Associations",
  "Community Foundations",
  "Industry Groups",
  "Member Clubs",
];

export default function TrustedBy() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/60 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
          Trusted by community-driven organizations
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {ORGS.map((org) => (
            <div key={org} className="flex items-center gap-2.5">
              <span className="h-6 w-6 rounded-md border border-slate-200 bg-white" />
              <span className="text-base font-semibold text-slate-500">
                {org}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
