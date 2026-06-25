"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Create Your Network",
    desc: "Set up your organization profile in minutes.",
    active: true,
  },
  {
    n: "02",
    title: "Add Members",
    desc: "Import existing records or invite members directly.",
    active: true,
  },
  {
    n: "03",
    title: "Launch Events",
    desc: "Create events and open registrations instantly.",
    active: true,
  },
  {
    n: "04",
    title: "Manage Finances",
    desc: "Track dues, budgets, and transactions in one view.",
    active: false,
  },
  {
    n: "05",
    title: "Track Tasks via WhatsApp",
    desc: "Your officers manage tasks without leaving WhatsApp.",
    active: false,
  },
  {
    n: "06",
    title: "Grow Community Impact",
    desc: "Use analytics to improve engagement and scale.",
    active: false,
  },
];

// Connector color to the RIGHT of each step (index → classes)
const CONNECTORS = [
  "bg-gradient-to-r from-brand to-purple-500",
  "bg-gradient-to-r from-purple-500 to-indigo-500",
  "bg-gradient-to-r from-indigo-500 to-blue-500",
  "bg-slate-200",
  "bg-slate-200",
];

const GRADIENT = "bg-gradient-to-br from-brand via-purple-500 to-blue-600";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-slate-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">
            Getting Started
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Go from signup to fully operational in under an hour.
          </p>
        </Reveal>

        {/* Desktop: horizontal animated timeline */}
        <div className="mt-20 hidden grid-cols-6 lg:grid">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className="relative flex flex-col items-center px-3 text-center"
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-10 h-0.5 w-full ${CONNECTORS[i]}`}
                />
              )}

              {/* Badge pops in */}
              <motion.div
                className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl text-xl font-bold ${
                  step.active
                    ? `${GRADIENT} text-white shadow-lg shadow-purple-500/30`
                    : "border border-slate-200 bg-white text-slate-300 shadow-sm"
                }`}
                initial={{ opacity: 0, scale: 0.5, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {step.n}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.18 + 0.15 }}
              >
                <h3 className="font-display mt-6 text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: stacked cards */}
        <div className="mt-12 space-y-4 lg:hidden">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.06}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white ${GRADIENT}`}
              >
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
