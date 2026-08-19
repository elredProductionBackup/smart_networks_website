"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    q: "Is our organization's data safe?",
    a: "Yes. Your data is encrypted in transit and at rest, and only your authorized admins can access it. We never sell or share member data.",
  },
  {
    q: "Will our volunteers and board actually use this?",
    a: "Smart Networks is built for non-technical teams — most admins are comfortable within an afternoon.",
  },
  // {
  //   q: "We already have years of member data in spreadsheets — can we bring it over?",
  //   a: "Yes. Import your existing spreadsheets in a few clicks, and our team can help with the migration if you need a hand.",
  // },
  // {
  //   q: "What does it cost?",
  //   a: "Smart Networks is free to start, with simple plans that scale as your organization grows. No hidden fees, no long-term contracts.",
  // },
  {
    q: "We manage multiple chapters or clusters — does that work?",
    a: "Yes. Smart Networks supports multi-cluster organizations.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 py-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-bold text-ink sm:text-lg">
          {item.q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <p className="pb-5 pr-12 text-base leading-relaxed text-slate-500">
          {item.a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-360 scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">
          FAQ
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Questions, Answered
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl lg:mt-16">
        {QUESTIONS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </Reveal>
    </section>
  );
}
