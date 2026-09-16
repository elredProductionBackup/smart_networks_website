import Image from "next/image";

export default function Navbar() {
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

        {/* Actions */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="rounded-xl bg-brand px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm shadow-brand/30 transition-colors hover:bg-brand-dark"
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
