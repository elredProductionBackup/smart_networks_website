import Image from "next/image";
import Reveal from "./Reveal";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Case Studies", "Webinars", "API"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
  },
  {
    label: "Twitter",
    path: "M23 4.5a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.8A11.7 11.7 0 0 1 3 3.2a4.1 4.1 0 0 0 1.3 5.5A4 4 0 0 1 2.4 8v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 1 16.7a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.3 8.3 0 0 0 23 4.5Z",
  },
  {
    label: "Email",
    path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2 8 5 8-5",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <Reveal className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-12">
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
                    fill={s.label === "Email" ? "none" : "currentColor"}
                    stroke={s.label === "Email" ? "currentColor" : "none"}
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-white/75 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-sm text-white/70">
            © 2024 Smart Network. All rights reserved.
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
      </Reveal>
    </footer>
  );
}
