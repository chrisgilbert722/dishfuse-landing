"use client";

import React, { useEffect, useRef, useState } from "react";

/**
* DishFuse – High-converting Landing v10/10 (Navy + Gold)
* Uses your logo-header.png and logo-footer.png
* Correct video order: fallback → local
*/

const LOGO_MARK = "/logo-header.png";
const LOGO_WORD = "/logo-footer.png";

const HERO_FALLBACK =
"https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";
const CHAT_FALLBACK =
"https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";

export default function Home() {
const [chatStep, setChatStep] = useState(0);
const [mounted, setMounted] = useState(false);
const heroRef = useRef(null);

useEffect(() => {
setMounted(true);
const t1 = setTimeout(() => setChatStep(1), 1200);
const t2 = setTimeout(() => setChatStep(2), 2600);
const t3 = setTimeout(() => setChatStep(3), 4200);
const t4 = setTimeout(() => setChatStep(4), 6200);
return () => [t1, t2, t3, t4].forEach(clearTimeout);
}, []);

return (
<main className="min-h-screen bg-[#0B1222] text-white">
{/* HEADER */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,18,34,0.72)] backdrop-blur-md">
<div className="container flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<img src={LOGO_MARK} alt="DishFuse logo mark" className="h-9 w-9 logoGlow" />
<img src={LOGO_WORD} alt="DishFuse" className="h-5 md:h-6 logoGlow" />
</div>
<nav className="hidden md:flex items-center gap-14 text-sm text-white/80">
<a href="#features" className="hover:text-white">Features</a>
<a href="#pricing" className="hover:text-white">Pricing</a>
<a href="#results" className="hover:text-white">Results</a>
<a href="#demo" className="hover:text-white">Live Demo</a>
</nav>
<div className="flex items-center gap-3">
<a href="#pricing" className="btn btn-ghost">See Plans</a>
<a href="#cta" className="btn btn-primary">Start Free Trial</a>
</div>
</div>
</header>

{/* HERO – Video 1 */}
<section ref={heroRef} className="relative min-h-[84vh] flex items-center overflow-hidden">
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-35">
{/* ✅ Correct order: fallback first */}
<source src={HERO_FALLBACK} type="video/mp4" />
<source src="/hero.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_70%_-10%,rgba(244,199,98,0.18),transparent)]" />
<div className="absolute inset-0 bg-gradient-to-b from-[#0B1222]/30 via-[#0B1222]/40 to-[#0B1222]" />

<div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center py-16">
<div>
<div className="badge mb-5">
<span className="pulse-dot" /> AI for restaurants — not spreadsheets
</div>
<h1 className="h1 mb-4">
Turn food costs into{" "}
<span style={{ color: "var(--gold)" }}>predictable profit</span>
</h1>
<p className="lead mb-8">
DishFuse uses AI to price your menu, forecast inventory, and cut waste—so you
increase margins without working longer hours.
</p>
<div className="flex flex-wrap gap-12 items-center">
<a href="#pricing" className="btn btn-primary">Start Free 14-Day Trial</a>
<a href="#demo" className="btn btn-ghost">Watch Live Demo</a>
</div>
<div className="mt-8 flex gap-6 text-sm text-white/80">
<span>✓ No credit card required</span>
<span>✓ Cancel anytime</span>
<span>✓ Setup in 60 min</span>
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
<div className="grid grid-3">
{[
{ t: "AI Menu Pricing", p: "Dynamic suggestions by dish & daypart to hit your target margins.", e: "💹" },
{ t: "Inventory Forecasting", p: "Predict SKUs by the day to avoid 86s and over-ordering.", e: "📦" },
{ t: "Waste Prevention Alerts", p: "Real-time flags for expiring items and anomalies.", e: "⚠️" },
].map((f) => (
<div key={f.t} className="card">
<div className="text-4xl mb-3">{f.e}</div>
<div className="text-xl font-bold mb-1">{f.t}</div>
<div className="text-white/75">{f.p}</div>
</div>
))}
</div>
</div>
</section>

{/* LIVE CHAT DEMO */}
<section id="demo" className="relative section overflow-hidden">
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
{/* ✅ Correct order: fallback first */}
<source src={CHAT_FALLBACK} type="video/mp4" />
<source src="/chat.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1222]/70 to-[#0B1222]" />
<div className="container relative z-10">
<h2 className="h2 mb-2">Chef Maria × DishFuse AI</h2>
<p className="lead mb-8">See how owners get answers in seconds.</p>
<div className="grid md:grid-cols-2 gap-18 items-start">
<div className="glass rounded-2xl p-6">
<div className="space-y-4">
{mounted && <div className="bubble user">Hey DishFuse — what price should I set for our Margherita pizza this weekend?</div>}
{chatStep >= 1 && <div className="bubble ai">Based on trends Fri–Sun, target <b style={{ color: "var(--gold)" }}>$15.50–$16.25</b> for <b style={{ color: "var(--gold)" }}>31–33%</b> margin.</div>}
{chatStep >= 2 && <div className="bubble user">Great — how much mozzarella should I order?</div>}
{chatStep >= 3 && <div className="bubble ai">Forecast <b style={{ color: "var(--gold)" }}>18.4 lbs</b> + 8% buffer → <b style={{ color: "var(--gold)" }}>19.9 lbs</b>.</div>}
{chatStep >= 4 && <div className="bubble ai">Want me to generate your buy list?<div className="mt-3"><a href="#pricing" className="btn btn-primary">Start Free Trial</a></div></div>}
</div>
</div>
</div>
</div>
</section>

{/* PRICING */}
<section id="pricing" className="section">
<div className="container">
<h2 className="h2 mb-3">Simple, transparent pricing</h2>
<p className="lead mb-10">Choose the plan that fits your restaurant. Cancel anytime.</p>
<div className="grid grid-3">
{[
{ plan: "Starter", price: "$99/mo", desc: "Perfect for single-location restaurants.", features: ["AI menu pricing", "Inventory forecasting", "Waste alerts", "Analytics dashboard"], popular: false },
{ plan: "Growth", price: "$199/mo", desc: "For busy kitchens and growing groups.", features: ["Everything in Starter", "Multi-location support", "Advanced profit analytics", "Priority support"], popular: true },
{ plan: "Custom", price: "Let’s Talk", desc: "Tailored solutions for franchises.", features: ["Dedicated manager", "Custom integrations", "Data migration", "Team training"], popular: false },
].map((t) => (
<div key={t.plan} className={`card priceCard ${t.popular ? "popular" : ""}`}>
{t.popular && <div className="mb-3 text-xs font-extrabold text-[#0B1222]" style={{ background: "linear-gradient(135deg,var(--gold),var(--gold-2))", display: "inline-block", padding: "6px 12px", borderRadius: 999 }}>MOST POPULAR</div>}
<div className="text-2xl font-bold mb-1">{t.plan}</div>
<div className="text-4xl font-extrabold mb-2" style={{ color: "var(--gold)" }}>{t.price}</div>
<div className="text-white/75 mb-6">{t.desc}</div>
<ul className="text-white/85 mb-6 space-y-2">
{t.features.map((f) => (<li key={f}>✅ {f}</li>))}
</ul>
<a href="#cta" className="btn btn-primary w-full justify-center">{t.plan === "Custom" ? "Contact Sales" : "Start Free Trial"}</a>
</div>
))}
</div>
</div>
</section>

{/* CTA + FOOTER */}
<section id="cta" className="section">
<div className="container text-center">
<img src={LOGO_MARK} alt="DishFuse mark" className="h-12 w-12 mx-auto mb-3 logoGlow" />
<h3 className="h2 mb-3">Ready to see hidden profit?</h3>
<p className="lead mb-7">Join restaurants using DishFuse to boost margins and cut waste with AI.</p>
<a href="#pricing" className="btn btn-primary">Start Free 14-Day Trial</a>
</div>
</section>

<footer className="border-t border-white/10 py-10 bg-[#0A1120]">
<div className="container flex flex-col items-center gap-4">
<img src={LOGO_WORD} alt="DishFuse" className="h-6 md:h-7 logoGlow" />
<div className="text-white/60 text-sm">© {new Date().getFullYear()} DishFuse. All rights reserved.</div>
</div>
</footer>
</main>
);
}
