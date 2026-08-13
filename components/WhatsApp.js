import Reveal from "./Reveal";

const BENEFITS = [
  "Create tasks instantly from any WhatsApp chat",
  "Assign tasks to members without leaving the chat",
  "Mark tasks complete with a simple reply",
  "Improve officer productivity by 60%",
];

// WhatsApp-style chat background
const CHAT_BG = {
  backgroundColor: "#e7ded4",
};

function WhatsAppLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

function BlueTicks({ className }) {
  return (
    <svg className={className} viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 6.5 4 9.5 10 2.5" />
      <path d="M7.5 9 8 9.5 14 2.5" />
    </svg>
  );
}

function Outgoing({ text, time }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-[#dcf6c4] px-3.5 py-2.5 shadow-sm">
        <p className="text-[15px] leading-snug text-slate-800">{text}</p>
        <div className="mt-1 flex items-center justify-end gap-1">
          <span className="text-[11px] text-slate-500">{time}</span>
          <BlueTicks className="h-3 w-4 text-sky-500" />
        </div>
      </div>
    </div>
  );
}

function Incoming({ children, time }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 shadow-sm">
        <div className="space-y-2 text-[15px] leading-snug text-slate-800">
          {children}
        </div>
        <div className="mt-1 text-right text-[11px] text-slate-400">{time}</div>
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-2xl shadow-slate-300/50">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#1f3d34] px-4 py-3.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
          <WhatsAppLogo className="h-6 w-6" />
        </span>
        <div>
          <p className="text-[15px] font-bold text-white">Smart Network Bot</p>
          <p className="text-xs text-emerald-100/80">Online</p>
        </div>
      </div>

      {/* Chat body */}
      <div className="space-y-3 px-4 py-5" style={CHAT_BG}>
        <Outgoing
          text="Create task: Follow up with 45 lapsed members by Friday"
          time="10:14 AM"
        />

        <Incoming time="10:14 AM">
          <p>✅ Task created!</p>
          <p>
            📋 Follow up with 45 lapsed members
            <br />
            👤 Assigned to: Ravi Kumar
            <br />
            📅 Due: Friday, Dec 20
          </p>
          <p>Reply DONE to mark complete.</p>
        </Incoming>

        <Outgoing text="DONE" time="10:45 AM" />

        <Incoming time="10:45 AM">
          <p>🎉 Task marked complete!</p>
          <p>Ravi Kumar completed &apos;Follow up with lapsed members&apos; at 10:45 AM.</p>
          <p>📊 Team score: 94% completion this week.</p>
        </Incoming>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2.5 bg-[#f0f0f0] px-3 py-3">
        <div className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm text-slate-400">
          Type a message...
        </div>
        <button
          type="button"
          aria-label="Send"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function WhatsApp() {
  return (
    <section className="bg-slate-50/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-360 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Left: chat mockup */}
        <Reveal variant="right" className="order-1">
          <ChatMock />
        </Reveal>

        {/* Right: content */}
        <Reveal variant="left" delay={0.12} className="order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            <WhatsAppLogo className="h-4 w-4 text-emerald-500" />
            WhatsApp-Native Task Management
          </span>

          <h2 className="font-display mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Manage Tasks Directly From WhatsApp
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
            Your officers already use WhatsApp every day. Smart Network lets
            them create, assign, and complete tasks directly from chat — no
            app downloads required.
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
