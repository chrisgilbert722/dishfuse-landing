"use client";

import React, { useEffect, useMemo, useState } from "react";

/* =========================
   🔧 LOGO PATHS (edit if needed)
   Put your files in /public and update the names below if different.
   The <SmartImg> will also try several common fallbacks automatically.
========================= */
const LOGO_MARK_CANDIDATES = [
  "/dishfuse-logo-mark-gold.svg",
  "/dishfuse_logo_mark_gold.svg",
  "/dishfuse-logo-gold-mark.svg",
  "/DishFuselogo3.png",
  "/logo-mark.png",
];

const LOGO_WORDMARK_CANDIDATES = [
  "/dishfuse-wordmark-gold.svg",
  "/dishfuse_logo_wordmark_gold.svg",
  "/dishfuse-logo-wordmark-light.svg",
  "/dishfuse-logo-full.png",
  "/logo-wordmark.png",
];

/* =========================
   🎥 VIDEO SOURCES (hero + demo)
   You can swap these URLs later if you like.
========================= */
const HERO_VIDEO =
  "https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";
const DEMO_VIDEO =
  "https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";

/* ============================================
   Small helper so missing image sources don’t break the page.
   It cycles through candidates until one loads.
============================================ */
function SmartImg({
  candidates,
  alt,
  className,
  style,
  width,
  height,
  priority = false,
}) {
  const [idx, setIdx] = useState(0);
  const src = useMemo(() => candidates[idx] ?? candidates[candidates.length - 1], [idx, candidates]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        if (idx < candidates.length - 1) setIdx(idx + 1);
      }}
    />
  );
}

/* ============================================
   Simple gold glow utility (class names)
============================================ */
const glow =
  "transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.02] shadow-[0_0_0_0_rgba(245,200,75,0.0)] hover:shadow-[0_0_40px_6px_rgba(245,200,75,0.20)] focus:shadow-[0_0_36px_6px_rgba(245,200,75,0.25)]";

/* ============================================
   Autoplay AI Chat Demo
============================================ */
function ChatDemo() {
  const script = [
    { from: "chef", text: "Hey DishFuse—my chicken sandwich keeps selling out. Help?" },
    { from: "ai", text: "On it. Demand peaks Thu–Sat. Recommend +12% order qty and +$1 price after 5pm." },
    { from: "chef", text: "Will customers push back?" },
    { from: "ai", text: "Historical elasticity says no. Margin improves +19%. Want the auto-order placed?" },
    { from: "chef", text: "Yes. Let’s do it." },
    { from: "ai", text: "Done. You’ll save ~14 hrs/month and reduce waste by 32%. Ready to grow profit?" },
  ];
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let t = 0;
    script.forEach((_, i) => {
      t += i === 0 ? 300 : 1600;
      const h = setTimeout(() => setVisible((v) => Math.min(v + 1, script.length)), t);
      return () => clearTimeout(h);
    });
  }, []); // autoplay once

  return (
    <div className="max-w-3xl mx-auto">
      <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 md:p-8">
        <div className="space-y-4 min-h-[280px]">
          {script.slice(0, visible).map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "ai" ? "justify-start" : "justify-end"} animate-[fadeIn_.5s_ease]`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base leading-relaxed ${
                  m.from === "ai"
                    ? "bg-[#101826] text-slate-200 border border-white/10"
                    : "bg-gradient-to-br from-[#1b2841] to-[#0f172a] text-white border border-white/10"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#pricing"
            className={`inline-block ${glow} bg-gradient-to-r from-[#f5c84b] to-[#e6b638] text-[#0b1220] font-semibold px-7 py-3 rounded-full`}
          >
            Start Free 14-Day Trial
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Page
============================================ */
export default function Home() {
  return (
    <main className="bg-[#0b1220] text-white">
      {/* ========= NAVBAR ========= */}
      <header className="sticky top-0 z-40 bg-[#0b1220]/85 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SmartImg
              candidates={LOGO_MARK_CANDIDATES}
              alt="DishFuse mark"
              className="h-10 w-auto"
              priority
            />
            <SmartImg
              candidates={LOGO_WORDMARK_CANDIDATES}
              alt="DishFuse wordmark"
              className="h-6 w-auto hidden sm:block"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-200">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#demo" className="hover:text-white">Live Demo</a>
            <a
              href="#pricing"
              className={`${glow} bg-gradient-to-r from-[#f5c84b] to-[#e6b638] text-[#0b1220] font-semibold px-5 py-2.5 rounded-full`}
            >
              Start Free Trial
            </a>
          </nav>
        </div>
      </header>

      {/* ========= HERO (VIDEO 1) ========= */}
      <section className="relative min-h-[84vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_10%,rgba(245,200,75,0.18),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/60 via-[#0b1220]/78 to-[#0b1220]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AI that helps restaurants{" "}
            <span className="text-[#f5c84b]">increase profit</span> &{" "}
            <span className="text-[#f5c84b]">cut waste</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mt-5">
            Menu pricing, inventory forecasting, and waste prevention — in one
            simple platform built for single locations and franchises.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className={`${glow} inline-block bg-gradient-to-r from-[#f5c84b] to-[#e6b638] text-[#0b1220] font-semibold px-8 py-4 rounded-full`}
            >
              Start Free 14-Day Trial
            </a>
            <a
              href="#features"
              className="inline-block border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 text-slate-300 text-sm">
            No credit card required · Cancel anytime · Setup in under 10 minutes
          </div>
        </div>
      </section>

      {/* ========= FEATURE HIGHLIGHTS ========= */}
      <section id="features" className="py-20 md:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Smart tools for smarter kitchens
          </h2>
          <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto">
            Hit target margins, order exactly what you need, and stop throwing away profit.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              ["AI Menu Pricing", "Dynamic price suggestions by dish and daypart to hit your exact margin targets."],
              ["Inventory Forecasting", "Predict next week’s buy list down to the SKU to prevent 86s and overstock."],
              ["Waste Prevention Alerts", "Real-time flags for expiring items and anomalies—catch losses early."],
            ].map(([title, copy]) => (
              <div
                key={title}
                className={`rounded-2xl border border-white/10 bg-white/[.06] p-6 ${glow}`}
              >
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-slate-300 mt-2">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= PRICING ========= */}
      <section id="pricing" className="py-24 bg-[#0f172a] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto">
            Choose your plan now. Scale as you grow.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "Starter",
                price: "$99/mo",
                desc: "Perfect for single-location restaurants.",
                features: [
                  "AI menu pricing",
                  "Inventory forecasting",
                  "Waste alerts",
                  "Dashboard analytics",
                ],
                cta: "Start Starter",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$199/mo",
                desc: "Best for multi-unit operators & franchises.",
                features: [
                  "Everything in Starter",
                  "Multi-location support",
                  "Advanced profit analytics",
                  "Priority support",
                ],
                cta: "Start Growth",
                highlight: true,
              },
              {
                name: "Custom",
                price: "Let’s Talk",
                desc: "Tailored solutions & white-label.",
                features: [
                  "Dedicated account manager",
                  "Custom AI integrations",
                  "Data migration support",
                  "Team training included",
                ],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${plan.highlight
                    ? "border-[#f5c84b] bg-[linear-gradient(145deg,rgba(245,200,75,0.10),rgba(255,255,255,0.02))]"
                    : "border-white/10 bg-white/[.05]"
                  } ${glow}`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-slate-300 mt-1">{plan.desc}</p>
                <div className="text-4xl font-extrabold mt-4">{plan.price}</div>

                <ul className="mt-6 space-y-2 text-slate-200">
                  {plan.features.map((f) => (
                    <li key={f}>✅ {f}</li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#"
                    className={`${glow} inline-block w-full text-center bg-gradient-to-r from-[#f5c84b] to-[#e6b638] text-[#0b1220] font-semibold px-6 py-3 rounded-full`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-slate-400 text-sm">
            14-day free trial · Cancel anytime · No setup fees
          </div>
        </div>
      </section>

      {/* ========= DEMO (VIDEO 2 + CHAT) ========= */}
      <section id="demo" className="relative py-24 overflow-hidden border-t border-white/10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src={DEMO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/60 via-[#0b1220]/75 to-[#0b1220]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            See DishFuse in action
          </h2>
          <ChatDemo />
        </div>
      </section>

      {/* ========= FOOTER ========= */}
      <footer className="border-t border-white/10 bg-[#0b1220]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-4">
          <SmartImg
            candidates={LOGO_MARK_CANDIDATES}
            alt="DishFuse logo"
            className="h-12 w-auto"
          />
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} DishFuse · AI Restaurant Profit & Inventory Optimization
          </p>
        </div>
      </footer>

      {/* ===== Anim keyframes (tiny) ===== */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
