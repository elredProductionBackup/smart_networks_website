"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="Smart Networks">
          <Image
            src="/logo.svg"
            alt="Smart Networks"
            width={100}
            height={38}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-slate-600 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#"
            className="rounded-xl bg-brand px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm shadow-brand/30 transition-colors hover:bg-brand-dark"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href="#"
              className="rounded-xl bg-brand px-5 py-2.5 text-center text-[15px] font-semibold text-white"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
