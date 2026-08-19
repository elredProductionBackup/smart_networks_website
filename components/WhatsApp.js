import Image from "next/image";
import Reveal from "./Reveal";

const BENEFITS = [
  "Instant answers to member queries, straight from the chatbot",
  "Update actionables the moment they're done — no app switching",
  "Automatic reminders keep everyone in the loop on upcoming events",
  "Real-time arrival tracking, so every guest is welcomed right on time",
];

function WhatsAppLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

function ChatScreenshot() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-slate-200/70 shadow-2xl shadow-slate-300/50">
      <Image
        src="/whatsapp.jpeg"
        alt="Smart Networks WhatsApp bot conversation"
        width={1080}
        height={2169}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function WhatsApp() {
  return (
    <section className="bg-slate-50/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-360 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Left: chat mockup */}
        <Reveal variant="right" className="order-1">
          <ChatScreenshot />
        </Reveal>

        {/* Right: content */}
        <Reveal variant="left" delay={0.12} className="order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            <WhatsAppLogo className="h-4 w-4 text-emerald-500" />
            WhatsApp-Native Experience
          </span>

          <h2 className="font-display mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Every Conversation, Answered Instantly
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
            From the moment a query comes in to the moment a guest walks
            through the door, Smart Networks keeps every conversation warm
            and personal — right inside WhatsApp. Get instant answers from
            our chatbot, update actionables on the go, and send timely
            reminders so every event runs smoothly and every guest feels
            expected.
          </p>

          <ul className="mt-8 space-y-5">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-base font-medium text-slate-700 sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
