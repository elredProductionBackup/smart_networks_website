"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { value: "10,000+", label: "Members Managed", sub: "Across all organizations" },
  { value: "500+", label: "Events Organized", sub: "Last 12 months" },
  { value: "95%", label: "Efficiency Gain", sub: "Reported by admins" },
  { value: "24/7", label: "Cloud Access", sub: "From any device" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function StatsBanner() {
  return (
    <section className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/60 sm:p-9 lg:p-10"
          >
            {/* top accent bar */}
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-rose-400 transition-transform duration-300 group-hover:scale-x-100" />

            <p className="font-display text-3xl font-extrabold leading-none tracking-tight text-brand sm:text-5xl lg:text-6xl">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-4 text-base font-bold text-ink sm:text-lg">
              {stat.label}
            </p>
            <p className="mt-1 text-sm text-slate-500">{stat.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
