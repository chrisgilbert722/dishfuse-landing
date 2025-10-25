// app/components/ChatDemo.jsx
"use client";

import { useEffect, useState } from "react";

const script = [
  { who: "chef", text: "Hey DishFuse, Friday prep is killing our margins." },
  { who: "ai",   text: "Scanning your sales & waste. One sec…" },
  { who: "ai",   text: "Recommendation: cut tomato prep by 18% 3–6pm." },
  { who: "chef", text: "That alone saves real money." },
  { who: "ai",   text: "Also: raise Margherita by $1 (elasticity supports it)." },
  { who: "chef", text: "Done. Can you auto-order for the weekend?" },
  { who: "ai",   text: "Placed smart order. ETA tomorrow 10:00am." },
];

export default function ChatDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < script.length) {
      const t = setTimeout(() => setIndex((i) => i + 1), 1200);
      return () => clearTimeout(t);
    }
  }, [index]);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-800/60 p-4 backdrop-blur">
      <div className="flex items-center gap-2 px-2 pb-3 text-xs text-slate-400">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
        Live: Chef Maria × DishFuse AI
      </div>

      <div className="space-y-3">
        {script.slice(0, index).map((m, i) => (
          <div
            key={i}
            className={`chat-bubble ${m.who === "chef" ? "chef" : "ai"}`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {index >= script.length && (
        <a
          href="#pricing"
          className="mt-5 inline-block w-full rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 px-5 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
        >
          Try DishFuse Free for 14 Days
        </a>
      )}
    </div>
  );
}
