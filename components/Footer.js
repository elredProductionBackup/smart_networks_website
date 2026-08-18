import Image from "next/image";
import Reveal from "./Reveal";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Email",
    path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2 8 5 8-5",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <Reveal className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.svg"
              alt="Smart Networks"
              width={100}
              height={38}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/80">
              The all-in-one platform for managing membership-based
              organizations.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:contents">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-base font-bold text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/70">
              © 2026 Smart Networks. All rights reserved.
            </p>
            <div className="flex gap-7">
              {["Privacy Policy", "Terms", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-white/50 sm:text-left">
            Smart Networks is one amongst many networks trademarked and
            operated by{" "}
            <a
              href="https://www.rextonedigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white"
            >
              Rextone Digital Pvt. Ltd.
            </a>
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
