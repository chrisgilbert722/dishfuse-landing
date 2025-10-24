"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sora } from "next/font/google";

// ——— Font (premium, high-legibility)
const sora = Sora({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

// ——— Theme palette
const COLORS = {
  navy: "#0f172a",          // base
  navyDeep: "#0b1222",
  gold: "#f5c044",          // accent
  goldDark: "#e9b22b",
  emerald: "#10b981",
  slate: "#94a3b8",
};

// ——— Simple intersection reveal helper
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-visible")),
      { threshold: 0.15, rootMargin: "60px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ——— Animated Chat Demo (Option A: typing + bubbles)
function ChatDemo() {
  const SCRIPT = [
    { from: "owner", text: "We threw away $600 in produce last week. Can you help?" },
    { from: "ai", text: "Yes. I analyzed sales & prep logs. Reduce lettuce orders by 18% Tue–Thu." },
    { from: "owner", text: "What about the chicken skewers?" },
    { from: "ai", text: "They’re underpriced by $2. Raise price to $13.95 to hit 72% margin." },
    { from: "owner", text: "Order list for the weekend?" },
    { from: "ai", text: "Ready. Approved cart saves ~$412 and avoids overstock on perishables." },
  ];

  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (idx >= SCRIPT.length) return;
    setTyping("");
    setIsTyping(true);

    const full = SCRIPT[idx].text;
    let i = 0;
    function type() {
      if (i <= full.length) {
        setTyping(full.slice(0, i));
        i += 1;
        timeoutRef.current = setTimeout(type, 18);
      } else {
        setIsTyping(false);
        timeoutRef.current = setTimeout(() => setIdx((v) => v + 1), 900);
      }
    }
    type();
    return () => clearTimeout(timeoutRef.current);
  }, [idx]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-3xl p-4 sm:p-6 lg:p-8 bg-white/5 border border-white/10 backdrop-blur">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,.8)]"></span>
          <p className="text-sm text-slate-300">DishFuse • AI Ops Assistant</p>
        </div>

        <div className="space-y-4">
          {SCRIPT.slice(0, idx).map((m, i) => (
            <Bubble key={i} from={m.from} text={m.text} />
          ))}

          {idx < SCRIPT.length && (
            <Bubble from={SCRIPT[idx].from} text={typing} typing={isTyping} />
          )}
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 mt-3">
        Live simulation: pricing, forecasting, and waste prevention insights in seconds.
      </p>
    </div>
  );
}

function Bubble({ from, text, typing }) {
  const isAI = from === "ai";
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} reveal`}>
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 leading-relaxed border
          ${isAI
            ? "bg-white/8 border-white/15 text-white"
            : "bg-[rgba(245,192,68,0.12)] border-[rgba(245,192,68,0.35)] text-white"
          }`}
        style={{ animationDelay: "80ms" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`inline-flex h-2 w-2 rounded-full ${isAI ? "bg-emerald-400" : "bg-yellow-300"}`}
          ></span>
          <span className="text-xs uppercase tracking-wide text-slate-300">
            {isAI ? "DishFuse AI" : "You"}
          </span>
        </div>
        <div className="text-[15px]">
          {text || (typing ? <TypingDots /> : null)}
        </div>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      <i className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:-0.2s]" />
      <i className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" />
      <i className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.2s]" />
    </span>
  );
}

export default function Home() {
  useReveal();

  return (
    <main className={`${sora.className} bg-[${COLORS.navy}] text-white`}>
      <StyleOverrides />

      {/* ————————————————————— HERO (Video #1) */}
      <section className="relative min-h-[88vh] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,.85) 0%, rgba(15,23,42,.88) 40%, rgba(15,23,42,.95) 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,.8)]"></span>
            <span className="text-sm text-slate-200">AI for Restaurants — Not Spreadsheets</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Turn Food Costs into{" "}
            <span className="bg-gradient-to-r from-[#fde68a] via-[#f5c044] to-[#eab308] bg-clip-text text-transparent">
              Predictable Profit
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            DishFuse automates menu pricing, inventory forecasting, and waste prevention so
            owners grow margins without working longer hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="btn-primary"
              aria-label="Start free trial"
            >
              Start Free 14-Day Trial
            </a>
            <a href="#demo" className="btn-ghost" aria-label="See live demo">
              See Live Demo
            </a>
          </div>

          <div className="mt-8 text-slate-300 text-sm flex items-center justify-center gap-4">
            <span>• No credit card required</span>
            <span>• Setup in ~10 minutes</span>
            <span>• Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ————————————————————— KPIs */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            ["+27% avg margin lift", "from AI price optimization"],
            ["42% less waste", "smart ordering & expiry alerts"],
            ["5-min ordering", "approve weekly buy lists"],
          ].map(([k, s]) => (
            <div key={k} className="kpi">
              <p className="kpi-k">{k}</p>
              <p className="kpi-s">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ————————————————————— Features */}
      <section className="py-24" id="features">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Smarter Tools for Leaner Kitchens</h2>
          <p className="text-slate-300 mb-12">
            One dashboard to price with confidence, forecast precisely, and stop throwing money away.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "💡", title: "AI Menu Pricing", text: "Hit target margins by dish & daypart with dynamic suggestions." },
              { emoji: "📦", title: "Inventory Forecasting", text: "Predict next week’s buys to avoid 86s and overstock." },
              { emoji: "⚠️", title: "Waste Prevention", text: "Real-time expiry & anomaly alerts to stop losses early." },
            ].map((f) => (
              <div key={f.title} className="card reveal">
                <div className="text-5xl mb-3">{f.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-300">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————————— Live AI Chat Demo */}
      <section id="demo" className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3">See It Decide in Real-Time</h2>
            <p className="text-slate-300">
              This animated demo shows exactly how DishFuse recommends orders, prices & savings.
            </p>
          </div>
          <ChatDemo />
        </div>
      </section>

      {/* ————————————————————— Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Owners Who Switched to DishFuse</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria — TX",
                quote:
                  "Found $1,200/month in lost profit the first week. AI flagged underpriced dishes instantly.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&fit=crop",
              },
              {
                name: "James — FL",
                quote: "Ordering takes 5 minutes now instead of 4 hours. Waste dropped 30%.",
                img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&h=300&fit=crop",
              },
              {
                name: "Sarah — IL",
                quote: "We didn’t change recipes — just prices & ordering. Profit margin +22%.",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&h=300&fit=crop",
              },
            ].map((t) => (
              <div key={t.name} className="testimonial reveal">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400 mb-3"
                  loading="lazy"
                />
                <p className="text-slate-200 italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-slate-400 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————————— Pricing (99 / 199 / Custom) */}
      <section id="pricing" className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-300 mb-12">
            Choose a plan that fits your restaurant — scale as you grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99/mo",
                desc: "Perfect for single-location restaurants.",
                features: ["AI pricing suggestions", "Basic forecasting", "Waste alerts", "Analytics dashboard"],
                cta: "Start Free Trial",
                style: "card",
              },
              {
                name: "Growth",
                price: "$199/mo",
                desc: "For busy kitchens & small groups.",
                features: ["Everything in Starter", "Multi-location support", "Advanced analytics", "Priority support"],
                cta: "Start Free Trial",
                style: "card card--highlight",
                badge: "MOST POPULAR",
              },
              {
                name: "Custom",
                price: "Let’s Talk",
                desc: "Tailored solutions for franchises & enterprise.",
                features: ["Dedicated CSM", "Custom integrations", "Data migration", "Team training"],
                cta: "Contact Sales",
                style: "card",
              },
            ].map((p) => (
              <div key={p.name} className={`${p.style} reveal`}>
                {p.badge && (
                  <span className="badge badge--gold">{p.badge}</span>
                )}
                <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                <p className="text-slate-300 mb-5">{p.desc}</p>
                <p className="text-4xl font-extrabold mb-6">{p.price}</p>
                <ul className="text-left text-slate-200 space-y-2 mb-8">
                  {p.features.map((f) => (
                    <li key={f}>✅ {f}</li>
                  ))}
                </ul>
                <a
                  href={p.name === "Custom" ? "mailto:sales@dishfuse.com" : "#"}
                  className="btn-primary w-full"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————————— Closing CTA (Video #2) */}
      <section className="relative py-24 text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,.88) 0%, rgba(15,23,42,.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to see how much profit you’re missing?
          </h3>
          <p className="text-slate-200 mb-8">
            Join independent owners using DishFuse to boost margins and cut waste — with AI.
          </p>
          <a href="#pricing" className="btn-primary">Start Free 14-Day Trial</a>
        </div>
      </section>

      {/* ————————————————————— Footer */}
      <footer className="bg-[#0b1222] text-center text-slate-400 py-10 text-sm border-t border-white/10">
        © {new Date().getFullYear()} DishFuse • AI Restaurant Profit Platform
      </footer>
    </main>
  );
}

// ——— Styles (scoped utility helpers)
function StyleOverrides() {
  return (
    <style>{`
      .btn-primary {
        display:inline-flex; align-items:center; justify-content:center;
        padding:14px 22px; border-radius:9999px; font-weight:700;
        background: linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%);
        color:#0b1222; transition: transform .2s ease, box-shadow .2s ease;
        box-shadow: 0 8px 26px rgba(245,192,68,.25), inset 0 1px 0 rgba(255,255,255,.2);
      }
      .btn-primary:hover { transform: translateY(-1px) scale(1.02); box-shadow: 0 14px 34px rgba(245,192,68,.35); }

      .btn-ghost {
        display:inline-flex; align-items:center; justify-content:center;
        padding:14px 22px; border-radius:9999px; font-weight:700;
        border:2px solid rgba(255,255,255,.75); color:#fff;
        transition: background .2s ease, transform .2s ease;
      }
      .btn-ghost:hover { background: rgba(255,255,255,.08); transform: translateY(-1px); }

      .reveal { opacity:0; transform: translateY(18px); transition: all .6s cubic-bezier(.2,.8,.2,1); }
      .reveal-visible { opacity:1; transform: none; }

      .card {
        background: rgba(255,255,255,.06);
        border: 1px solid rgba(255,255,255,.14);
        padding: 24px; border-radius: 18px;
        box-shadow: 0 10px 30px rgba(0,0,0,.15);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,0,0,.22); border-color: rgba(245,192,68,.45); }

      .card--highlight {
        background:
          radial-gradient(1200px 600px at 0% 0%, rgba(245,192,68,.12), transparent 60%),
          rgba(255,255,255,.08);
        border: 2px solid rgba(245,192,68,.55);
      }

      .badge {
        display:inline-block; font-size:11px; letter-spacing:.06em;
        border-radius:9999px; padding:6px 10px; margin-bottom:8px;
        font-weight:800; text-transform:uppercase;
      }
      .badge--gold { background: rgba(245,192,68,.18); color:#fff; border:1px solid rgba(245,192,68,.45); }

      .kpi {
        background: rgba(255,255,255,.06);
        border: 1px solid rgba(255,255,255,.14);
        border-radius: 16px; padding: 20px; text-align:center;
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .kpi:hover { transform: translateY(-3px); border-color: rgba(245,192,68,.4); }
      .kpi-k { font-size: 22px; font-weight: 800; color: #fff; }
      .kpi-s { font-size: 13px; color: ${COLORS.slate}; }

      .testimonial {
        background: rgba(255,255,255,.06);
        border: 1px solid rgba(255,255,255,.14);
        border-radius: 18px; padding: 24px;
        box-shadow: 0 10px 30px rgba(0,0,0,.15);
      }
    `}</style>
  );
}
