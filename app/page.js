"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";

/**
 * DishFuse — High-Converting Landing (Navy + Gold)
 * Mobile 10/10 • SEO 100 • Perf 96–100 (Lighthouse targets)
 * - Responsive video (1080p/720p swap + centered focus)
 * - Tight mobile spacing, button sizing, and tap targets
 * - Trust badges as an auto-fit grid (no wrap issues)
 * - Lazy-loaded noncritical images
 * - a11y labels + meta for perfect scores
 */

const LOGO_HEADER = "/logo-header.png";
const LOGO_FOOTER = "/logo-footer.png";

// Videos (1080p desktop / 720p mobile)
const HERO_CDN =
  "https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";
const CHAT_CDN =
  "https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";
const HERO_MOBILE =
  "https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-720p.mp4";
const CHAT_MOBILE =
  "https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/720p.mp4";

export default function Home() {
  const [chatStep, setChatStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutsRef = useRef([]);
  const runningRef = useRef(false);

  // Chat loop
  const runChatLoop = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setChatStep(0);
    timeoutsRef.current.push(setTimeout(() => setChatStep(1), 3000));
    timeoutsRef.current.push(setTimeout(() => setChatStep(2), 7000));
    timeoutsRef.current.push(setTimeout(() => setChatStep(3), 11000));
    timeoutsRef.current.push(setTimeout(() => setChatStep(4), 16000));
    timeoutsRef.current.push(
      setTimeout(() => runningRef.current && runChatLoop(), 21000)
    );
  };

  useEffect(() => {
    setMounted(true);
    runningRef.current = true;
    runChatLoop();

    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);

    return () => {
      runningRef.current = false;
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  return (
    <main className="min-h-screen text-white bg-gradient-to-b from-[#1F2D50] to-[#24335D]">
      <Head>
        {/* SEO basics */}
        <title>DishFuse — Turn food costs into predictable profit</title>
        <meta
          name="description"
          content="AI that turns restaurant data into predictable profit. Menu pricing, inventory forecasting, and waste prevention — all in one platform."
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theming */}
        <meta name="theme-color" content="#1F2D50" />
        {/* OpenGraph */}
        <meta property="og:title" content="DishFuse — Predictable Profit for Restaurants" />
        <meta
          property="og:description"
          content="Price menus with AI, forecast inventory, and cut waste. Built for independent restaurants and growing groups."
        />
        <meta property="og:type" content="website" />
      </Head>

      <style jsx global>{`
        :root {
          --navy: #1f2d50;
          --gold: #f4c762;
          --gold-2: #eeb94a;
          --slate: #cbd5e1;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .section {
          padding: 72px 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .h1 {
          font-size: clamp(28px, 8vw, 56px);
          line-height: 1.1;
          font-weight: 900;
        }
        .h2 {
          font-size: clamp(24px, 6vw, 40px);
          font-weight: 800;
        }
        .lead {
          color: var(--slate);
          font-size: clamp(15px, 4vw, 20px);
          line-height: 1.45;
        }

        .glass {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border-radius: 20px;
        }
        .card {
          border-radius: 20px;
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(160deg, #0f1a33, #0b1222);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-weight: 800;
          line-height: 1.1;
          transition: all 0.2s ease;
          padding: 12px 22px;
          font-size: clamp(13.5px, 2.2vw, 16px);
        }
        .btn-primary {
          color: #0b1222;
          background: linear-gradient(135deg, var(--gold), var(--gold-2));
          box-shadow: 0 8px 24px rgba(244, 199, 98, 0.25);
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 34px rgba(244, 199, 98, 0.35);
        }
        .btn-ghost {
          border: 2px solid rgba(255, 255, 255, 0.85);
          color: white;
          padding: 10px 18px;
        }

        /* FAQs */
        .faq-q {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          gap: 12px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .faq-a {
          padding: 12px 4px 22px 4px;
          color: var(--slate);
        }

        /* Trust row as true grid for flawless wrapping */
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 1rem;
          align-items: center;
          justify-items: center;
        }
        .trust-grid img {
          height: 24px;
          width: auto;
          opacity: 0.9;
          transition: all 0.2s ease;
        }
        .trust-grid img:hover {
          opacity: 1;
          transform: translateY(-1px) scale(1.03);
        }

        /* Price card highlight */
        .priceCard.popular {
          border: 1px solid rgba(244, 199, 98, 0.65);
          box-shadow: 0 18px 40px rgba(244, 199, 98, 0.1);
          background: radial-gradient(
              1200px 400px at 20% -10%,
              rgba(244, 199, 98, 0.12),
              transparent
            ),
            linear-gradient(160deg, #102042, #0b1222);
        }

        /* Chat bubbles */
        .bubble {
          max-width: 540px;
          padding: 14px 16px;
          border-radius: 16px;
          line-height: 1.4;
          font-size: 15px;
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 0.6s ease forwards;
        }
        .bubble.ai {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .bubble.user {
          background: rgba(244, 199, 98, 0.12);
          border: 1px solid rgba(244, 199, 98, 0.35);
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile tightening */
        @media (max-width: 768px) {
          .section {
            padding: 36px 18px;
          }
          .hero-min {
            min-height: 78vh; /* bring CTAs higher above-the-fold */
          }
          video.hero,
          video.chat {
            object-position: center top;
          }
          .lead {
            font-size: 15px !important;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(31,45,80,0.72)] backdrop-blur-md">
        <div className="container flex items-center justify-between py-3 px-4 md:px-8">
          <a href="#top" aria-label="DishFuse — Home">
            <img src={LOGO_HEADER} alt="DishFuse logo" className="h-10 w-auto" loading="eager" />
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/80" aria-label="Primary">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#demo" className="hover:text-white">Live Demo</a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a href="#pricing" className="btn btn-ghost text-xs md:text-sm" aria-label="See Plans">
              See Plans
            </a>
            <a href="#cta" className="btn btn-primary text-xs md:text-sm" aria-label="Start Free Trial">
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative hero-min flex items-center overflow-hidden">
        <video
          className="hero absolute inset-0 w-full h-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/poster-hero.jpg"
          title="Chef preparing food in the kitchen"
        >
          <source src={isMobile ? HERO_MOBILE : HERO_CDN} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,45,80,0.12)] via-[rgba(31,45,80,0.22)] to-[rgba(36,51,93,0.45)]" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 py-14 md:py-20">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-sm text-white/90">AI for restaurants — not spreadsheets</span>
            </div>

            <h1 className="h1 mb-4">
              Turn food costs into <span style={{ color: "var(--gold)" }}>predictable profit</span>
            </h1>
            <p className="lead mb-8">
              DishFuse uses AI to price your menu, forecast inventory, and cut waste — so you increase
              margins without working longer hours.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
              <a href="#pricing" className="btn btn-primary" aria-label="Start Free 14-Day Trial — See pricing plans">
                Start Free 14-Day Trial
              </a>
              <a href="#demo" className="btn btn-ghost" aria-label="Watch Live Demo">
                Watch Live Demo
              </a>
            </div>

            {/* TRUST BADGES (Auto-fit grid) */}
            <div className="mt-10 trust-grid opacity-90" aria-label="Trusted technology badges">
              <img src="/aws.png" alt="Powered by AWS Cloud" loading="lazy" decoding="async" />
              <img src="/stripe.png" alt="Secure payments by Stripe" loading="lazy" decoding="async" />
              <img src="/encryption.png" alt="Bank-level encryption" loading="lazy" decoding="async" />
              <img src="/ai.png" alt="AI-powered accuracy" loading="lazy" decoding="async" />
              <img src="/support.png" alt="24/7 Support" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* KPI card */}
          <div className="glass p-5 md:p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { k: "+27%", d: "Avg margin lift" },
                { k: "−42%", d: "Less food waste" },
                { k: "5 min", d: "Weekly ordering" },
              ].map((x) => (
                <div key={x.d}>
                  <div className="text-2xl font-extrabold" style={{ color: "var(--gold)" }}>
                    {x.k}
                  </div>
                  <div className="text-white/75 text-sm">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-white/60 text-center">
              *Based on early pilot results across small single-location restaurants.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="h2 mb-3">Smart tools for smarter kitchens</h2>
          <p className="lead mb-10">
            Price each dish to target margin, predict next week’s buy list, and stop losses before they happen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "AI Menu Pricing", p: "Dynamic suggestions by dish & daypart to hit your target margins.", e: "💹" },
              { t: "Inventory Forecasting", p: "Predict SKUs by the day to avoid 86s and over-ordering.", e: "📦" },
              { t: "Waste Prevention Alerts", p: "Real-time flags for expiring items and anomalies.", e: "⚠️" },
            ].map((f) => (
              <div key={f.t} className="card">
                <div className="text-4xl mb-3" aria-hidden="true">{f.e}</div>
                <div className="text-xl font-bold mb-1">{f.t}</div>
                <p className="text-white/75">{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAT DEMO */}
      <section id="demo" className="relative section overflow-hidden">
        <video
          className="chat absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/poster-chat.jpg"
          title="Kitchen prep video for chat demo background"
        >
          <source src={isMobile ? CHAT_MOBILE : CHAT_CDN} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(31,45,80,0.45)] to-[rgba(36,51,93,0.62)]" />

        <div className="container relative z-10">
          <h2 className="h2 mb-2">Chef Maria × DishFuse AI</h2>
          <p className="lead mb-8">See how owners get answers in seconds.</p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <p className="text-sm text-white/80">Live demo — simulated conversation</p>
              </div>

              <div className="space-y-4">
                {mounted && <div className="bubble user">Hey DishFuse — what price should I set for our Margherita pizza this weekend?</div>}
                {chatStep >= 1 && (
                  <div className="bubble ai">
                    Based on cost trends and demand spikes Fri–Sun, target price is{" "}
                    <b style={{ color: "var(--gold)" }}>$15.50 – $16.25</b> to keep margin at{" "}
                    <b style={{ color: "var(--gold)" }}>31 – 33%</b>.
                  </div>
                )}
                {chatStep >= 2 && <div className="bubble user">Great — how much mozzarella should I order?</div>}
                {chatStep >= 3 && (
                  <div className="bubble ai">
                    Forecast is <b style={{ color: "var(--gold)" }}>18.4 lbs</b> for 7 days. Adding 8% buffer →{" "}
                    <b style={{ color: "var(--gold)" }}>19.9 lbs</b>.
                  </div>
                )}
                {chatStep >= 4 && (
                  <div className="bubble ai">
                    Want me to generate a pre-approved buy list and push to your vendor?
                    <div className="mt-3">
                      <a href="#pricing" className="btn btn-primary" aria-label="Start Free 14-Day Trial — Go to pricing">
                        Start Free 14-Day Trial
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-4">
              {[
                ["Price with confidence", "Hit target margins without guesswork."],
                ["Order exactly what you need", "Prevent over-stock and 86s automatically."],
                ["See profit clearly", "Know which dishes and days drive money."],
              ].map(([h, p]) => (
                <div key={h} className="card">
                  <div className="text-lg font-bold">{h}</div>
                  <p className="text-white/75">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="results" className="section">
        <div className="container">
          <h2 className="h2 mb-3">What restaurant owners are saying</h2>
          <p className="lead mb-10">Proof from real kitchens using AI to protect margins.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Chef Maria Thompson",
                role: "Owner, Bella Forno",
                quote: "DishFuse cut our waste by nearly 40%. Pricing confidence went way up and so did margins.",
              },
              {
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "James Carter",
                role: "GM, Bistro 21",
                quote: "Inventory forecasts are spot on. Ordering takes minutes and we avoid 86s on busy nights.",
              },
              {
                img: "https://randomuser.me/api/portraits/women/65.jpg",
                name: "Lena Ortiz",
                role: "Owner, Café Luna",
                quote: "Finally see which dishes actually make money. We adjusted prices and margins stabilized fast.",
              },
              {
                img: "https://randomuser.me/api/portraits/men/12.jpg",
                name: "Andre Nguyen",
                role: "Owner, Saigon Social",
                quote: "The waste alerts alone paid for the subscription in the first month.",
              },
              {
                img: "https://randomuser.me/api/portraits/women/21.jpg",
                name: "Priya Sharma",
                role: "Operator, Spice Lane",
                quote: "We used data to push weekend pricing gracefully—customers were happy and so were margins.",
              },
              {
                img: "https://randomuser.me/api/portraits/men/85.jpg",
                name: "David Romero",
                role: "Owner, GreenLeaf Café",
                quote: "Clear reporting, simple actions. It’s like a profit coach built into our workflow.",
              },
            ].map((t) => (
              <div key={t.name} className="glass p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-white/70 text-sm">{t.role}</div>
                  </div>
                </div>
                <p className="text-white/85">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="h2 mb-3">Frequently asked questions</h2>
          <p className="lead mb-8">
            Quick answers about pricing, setup, and how DishFuse fits into your kitchen workflow.
          </p>
          <FAQAccordion
            items={[
              {
                q: "Do I need new hardware or change my POS?",
                a: "No new hardware is required. DishFuse integrates via exports/APIs with popular POS systems and starts delivering insights from day one.",
              },
              {
                q: "How fast can I get results?",
                a: "Most owners see actionable pricing suggestions and waste alerts within the first week. Inventory forecasts typically stabilize by week two.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. All plans are month-to-month and you can cancel in one click. There are no long-term contracts.",
              },
              {
                q: "Is my data secure?",
                a: "We use encrypted storage and transport (TLS 1.2+). Your data is never sold and access is restricted by role and tenant.",
              },
              {
                q: "What’s the onboarding like?",
                a: "A guided setup imports your menu, costs, and sales history. Most restaurants finish in under 60 minutes.",
              },
            ]}
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="h2 mb-3">Simple, transparent pricing</h2>
          <p className="lead mb-10">
            Choose the plan that fits your restaurant. Cancel anytime — no contracts.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                plan: "Starter",
                price: "$99/mo",
                desc: "Perfect for single-location restaurants.",
                features: ["AI menu pricing", "Inventory forecasting", "Waste alerts", "Analytics dashboard"],
                popular: false,
              },
              {
                plan: "Growth",
                price: "$199/mo",
                desc: "For busy kitchens and growing groups.",
                features: ["Everything in Starter", "Multi-location support", "Advanced profit analytics", "Priority support"],
                popular: true,
              },
              {
                plan: "Custom",
                price: "Let’s Talk",
                desc: "Tailored solutions for multi-brand & franchise groups.",
                features: ["Dedicated manager", "Custom integrations", "Data migration", "Team training"],
                popular: false,
              },
            ].map((t) => (
              <div key={t.plan} className={`card priceCard ${t.popular ? "popular" : ""}`}>
                {t.popular && (
                  <div
                    className="mb-3 text-xs font-extrabold text-[#0B1222]"
                    style={{
                      background: "linear-gradient(135deg,var(--gold),var(--gold-2))",
                      display: "inline-block",
                      padding: "6px 12px",
                      borderRadius: 999,
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div className="text-2xl font-bold mb-1">{t.plan}</div>
                <div className="text-4xl font-extrabold mb-2" style={{ color: "var(--gold)" }}>
                  {t.price}
                </div>
                <div className="text-white/75 mb-6">{t.desc}</div>
                <ul className="text-white/85 mb-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f}>✅ {f}</li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="btn btn-primary w-full justify-center"
                  aria-label={`${t.plan === "Custom" ? "Contact Sales" : "Start Free Trial"} — proceed to final call-to-action`}
                >
                  {t.plan === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/70 text-center">
            ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="section">
        <div className="container">
          <div className="glass p-10 md:p-14 text-center">
            <h3 className="h2 mb-3">Ready to see hidden profit?</h3>
            <p className="lead mb-7">
              Join restaurants using DishFuse to boost margins and cut waste with AI.
            </p>
            <a href="#pricing" className="btn btn-primary" aria-label="Start Free 14-Day Trial — See pricing">
              Start Free 14-Day Trial
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 md:py-10 bg-[#0A1120]">
        <div className="container flex flex-col items-center gap-4">
          <img src={LOGO_FOOTER} alt="DishFuse" className="h-7 w-auto pb-2" loading="lazy" decoding="async" />
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} DishFuse. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- FAQ Accordion Component ---------- */
function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((it, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={it.q} className="glass p-3">
            <button
              className="faq-q w-full"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
              aria-label={`FAQ: ${it.q}`}
            >
              <span className="font-semibold">{it.q}</span>
              <span aria-hidden className="text-white/70">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div id={`faq-panel-${idx}`} className="faq-a">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
