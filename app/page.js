"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * DishFuse — 10/10 High-Converting Landing (Dark + AI Demo Chat)
 * - Auto-play background videos (hero + contact)
 * - Auto-open AI Demo Chat after 10s (if no interaction)
 * - Pricing: $99 / $199 / Custom
 * - Smooth animations + accessible, responsive layout
 *
 * Drop this file in: app/page.jsx
 * Tailwind CSS required (already in your project)
 */

const LOGO = "/logos/dishfuse-mark-gold.svg"; // put your final mark file here (public/logos/…)
const WORDMARK = "/logos/dishfuse-wordmark-gold.svg"; // optional; can be same as LOGO
const HERO_VIDEO =
  "https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";
const CONTACT_VIDEO =
  "https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";

export default function Home() {
  // --- AI demo chat modal state ---
  const [showDemo, setShowDemo] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // --- simple engagement tracking (safe no-op if analytics not set) ---
  const track = (name, data = {}) => {
    try {
      if (window.gtag) window.gtag("event", name, data);
      if (window.fbq) window.fbq("trackCustom", name, data);
      // console.log(name, data);
    } catch {}
  };

  // Open the AI demo automatically after 10s if the user hasn't interacted
  useEffect(() => {
    const onFirstInteract = () => setHasInteracted(true);
    window.addEventListener("scroll", onFirstInteract, { once: true, passive: true });
    window.addEventListener("mousemove", onFirstInteract, { once: true });
    window.addEventListener("touchstart", onFirstInteract, { once: true });

    const t = setTimeout(() => {
      if (!hasInteracted) {
        setShowDemo(true);
        track("AI_Demo_AutoOpen");
      }
    }, 10000);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("mousemove", onFirstInteract);
      window.removeEventListener("touchstart", onFirstInteract);
    };
  }, [hasInteracted]);

  return (
    <>
      <Header />

      {/* HERO — Video 1 */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0b1220]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/75 via-[#0b1220]/85 to-[#0b1220]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-200">
              AI for restaurants — not spreadsheets
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.12] mb-6">
            Grow Profit. Cut Waste.{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
              With DishFuse AI.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Dynamic menu pricing, inventory forecasting, and waste prevention —
            built for busy 1–5 location owners and franchise operators.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              onClick={() => track("CTA_Click", { where: "hero" })}
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-white font-semibold bg-gradient-to-r from-emerald-500 to-sky-500 hover:brightness-110 transition-transform duration-200 hover:scale-[1.02] shadow-lg"
            >
              Start Free 14-Day Trial
            </a>
            <button
              onClick={() => {
                setShowDemo(true);
                track("Demo_Open", { where: "hero" });
              }}
              className="inline-flex items-center justify-center rounded-full px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Watch AI Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-6 text-slate-400 text-sm">
            <span className="inline-flex items-center gap-2">
              ⭐⭐⭐⭐⭐ <span className="text-slate-300">4.9/5 from 240+ owners</span>
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="inline-flex items-center gap-2">
              ⏱ <span className="text-slate-300">Setup in under 10 minutes</span>
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="inline-flex items-center gap-2">
              🔒 <span className="text-slate-300">SOC-2 cloud security</span>
            </span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            Smart Tools for Smarter Kitchens
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "💸",
                title: "AI Menu Pricing",
                text: "Hit target margins with dynamic suggestions by dish and daypart — no guesswork.",
              },
              {
                emoji: "📦",
                title: "Inventory Forecasting",
                text: "Know next week’s buy list by SKU. Stop 86s and over-ordering.",
              },
              {
                emoji: "⚠️",
                title: "Waste Prevention",
                text: "Real-time flags for expiring items and anomalies before they cost you.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-slate-200 hover:bg-white/[0.08] transition-colors"
              >
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                <p className="text-slate-300">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0b1220]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-12">
            What Owners Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
                quote:
                  "We found $1,100/mo in lost profit the first week. Pricing changes were instant wins.",
                name: "Sarah — Bistro Bella",
              },
              {
                img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop",
                quote:
                  "Ordering went from 4 hours to 5 minutes. Waste dropped ~30%.",
                name: "James — Urban Eats",
              },
              {
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
                quote:
                  "We didn’t change recipes — just prices and ordering. Margins jumped 22%.",
                name: "David — Fireside Grill",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-200 backdrop-blur-md"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-emerald-400/40"
                />
                <blockquote className="italic text-slate-300 mb-3">“{t.quote}”</blockquote>
                <figcaption className="text-white font-semibold">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — $99 / $199 / Custom */}
      <section id="pricing" className="py-24 bg-[#0b1220]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-300 mb-14">
            Start free for 14 days. Cancel anytime — no contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99/mo",
                desc: "Perfect for single-location restaurants.",
                features: [
                  "AI-driven menu pricing",
                  "Inventory forecasting",
                  "Waste alerts",
                  "Analytics dashboard",
                ],
                cta: "Start Free Trial",
              },
              {
                name: "Pro",
                price: "$199/mo",
                desc: "For multi-location and growth operators.",
                features: [
                  "Everything in Starter",
                  "Multi-location support",
                  "Advanced profit analytics",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                highlight: true,
              },
              {
                name: "Custom",
                price: "Let’s Talk",
                desc: "Tailored for franchises & enterprise.",
                features: [
                  "Dedicated account manager",
                  "Custom AI integrations",
                  "Data migration",
                  "Team training",
                ],
                cta: "Contact Sales",
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-3xl border shadow-xl ${
                  p.highlight
                    ? "bg-gradient-to-br from-emerald-500/15 to-sky-500/15 border-emerald-400/40"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {p.highlight && (
                  <div className="inline-block mb-3 text-xs font-extrabold text-slate-900 bg-amber-300 px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                <div className="text-4xl font-extrabold text-white mt-2 mb-2">{p.price}</div>
                <p className="text-slate-300 mb-6">{p.desc}</p>
                <ul className="text-left text-slate-300 mb-8 space-y-3">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>✅</span> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.name === "Custom" ? "mailto:sales@dishfuse.com" : "#onboarding"}
                  onClick={() =>
                    track("Pricing_Click", { plan: p.name })
                  }
                  className={`inline-flex items-center justify-center w-full rounded-full px-6 py-3 font-semibold transition-all ${
                    p.highlight
                      ? "bg-white text-emerald-700 hover:bg-emerald-50"
                      : "bg-gradient-to-r from-emerald-500 to-sky-500 text-white hover:brightness-110"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-slate-400 text-sm flex flex-wrap gap-4 justify-center">
            <span>✅ 14-day free trial</span>
            <span>✅ No credit card required</span>
            <span>✅ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* CONTACT — Video 2 */}
      <section className="relative py-24 text-center text-white overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src={CONTACT_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">Want a quick walkthrough?</h2>
          <p className="text-slate-200 mb-10">
            Enter your email and we’ll send a 2-minute DishFuse demo (no sales calls).
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              track("Lead_Submit", { where: "contact" });
              alert("Thanks! We’ll send your demo shortly.");
            }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
          >
            <input
              type="email"
              required
              placeholder="you@restaurant.com"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 font-semibold hover:brightness-110"
            >
              Send Demo
            </button>
          </form>
        </div>
      </section>

      <Footer />

      {/* AI DEMO CHAT MODAL */}
      {showDemo && <AIDemoChat onClose={() => setShowDemo(false)} onTrack={track} />}
    </>
  );
}

/* ---------------- UI PIECES ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#0b1220]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="DishFuse"
            className="h-8 w-auto"
            style={{ filter: "drop-shadow(0 0 12px rgba(16,185,129,.25))" }}
          />
          <img
            src={WORDMARK}
            alt="DishFuse"
            className="h-5 w-auto hidden sm:block opacity-90"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a
            href="/login"
            className="border border-white/15 rounded-full px-4 py-2 hover:bg-white/10"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="rounded-full px-5 py-2 font-semibold bg-gradient-to-r from-emerald-500 to-sky-500 text-white hover:brightness-110"
          >
            Start Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b1220] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        <img
          src={LOGO}
          alt="DishFuse"
          className="h-10 w-auto"
          style={{ filter: "drop-shadow(0 0 16px rgba(16,185,129,.25))" }}
        />
        <p className="text-slate-400">
          © {new Date().getFullYear()} DishFuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- AI DEMO CHAT ---------------- */

function AIDemoChat({ onClose, onTrack }) {
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const seq = [0, 1, 2, 3, 4];
    let i = 0;
    const t = setInterval(() => {
      setStep((s) => {
        const next = Math.min(s + 1, seq[seq.length - 1]);
        return next;
      });
      i += 1;
      if (i >= seq.length) clearInterval(t);
      // auto scroll
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-white font-semibold">Chef Maria × DishFuse AI</p>
          </div>
          <button
            onClick={() => {
              onTrack("Demo_Close");
              onClose();
            }}
            className="text-slate-300 hover:text-white"
            aria-label="Close demo"
          >
            ✕
          </button>
        </div>

        <div ref={containerRef} className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <Bubble who="ai" show={step >= 0}>
            Hi Maria! Want to see where your menu is under-priced? Upload last week’s sales CSV.
          </Bubble>
          <Bubble who="user" show={step >= 1}>
            Uploaded. Can you check burgers and pasta?
          </Bubble>
          <Bubble who="ai" show={step >= 2}>
            Found 3 dishes priced below target margin. Recommend +$1.50 for Classic Burger and +$2.00 for Chicken Alfredo.
          </Bubble>
          <Bubble who="user" show={step >= 3}>
            What does that change do to monthly profit?
          </Bubble>
          <Bubble who="ai" show={step >= 4}>
            Estimated +$1,180/month with no volume loss. Want me to generate a new price sheet for Friday?
          </Bubble>
        </div>

        <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            onClick={() => onTrack("Demo_CTA_Click", { cta: "Start Free Trial" })}
            className="flex-1 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:brightness-110"
          >
            Start Free 14-Day Trial
          </a>
          <a
            href="mailto:sales@dishfuse.com?subject=DishFuse%20Demo"
            onClick={() => onTrack("Demo_CTA_Click", { cta: "Book a Demo" })}
            className="flex-1 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white border border-white/15 hover:bg-white/10"
          >
            Book a Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function Bubble({ who, children, show }) {
  if (!show) return null;
  const isAI = who === "ai";
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAI
            ? "bg-white/8 text-slate-100 border border-white/10"
            : "bg-emerald-500/20 text-emerald-100 border border-emerald-400/20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
