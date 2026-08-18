"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

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
    desc: "Stop losing your evenings to admin busywork. Automate the renewals, reminders, and reports so you can actually lead.",
    tint: "bg-rose-50 text-rose-500",
  },
  {
    icon: "heart",
    title: "Improve Engagement",
    desc: "Members who feel seen stay members. Keep them engaged with communications that land at the right moment.",
    tint: "bg-blue-50 text-blue-500",
  },
  {
    icon: "eye",
    title: "Better Visibility",
    desc: "Sleep easier knowing nothing's slipping through the cracks — finances, attendance, and tasks, all in view.",
    tint: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: "bolt",
    title: "Scale Effortlessly",
    desc: "Grow from hundreds to thousands of members without ever feeling like you're falling behind.",
    tint: "bg-amber-50 text-amber-500",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="mx-auto max-w-360 scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
          Why Smart Networks
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Built for Busy Network Leaders
        </h2>
      </Reveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
      >
        {CARDS.map((card) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/70 p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
          >
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-rose-400 transition-transform duration-300 group-hover:scale-x-100" />

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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
