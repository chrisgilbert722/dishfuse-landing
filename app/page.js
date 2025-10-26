"use client";

import React, { useEffect, useState, useRef } from "react";

/**
* DishFuse — High-converting Landing (Navy + Gold)
* - Zoom-in pop scroll animations
* - 2 slow, looping “live chat” conversations (auto-swap)
* - Autoplay videos (CDN first, local fallback) with lighter overlays
* - Trust badges + FAQ + Pricing + CTA
* - Login button in header
*/

const LOGO_HEADER = "/logo-header.png";
const LOGO_FOOTER = "/logo-footer.png";

// CDN-first videos with local fallbacks (place /hero.mp4 and /chat.mp4 in /public if you have them)
const HERO_CDN =
"https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";
const CHAT_CDN =
"https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";

export default function Home() {
// --- Live chat state (two conversations that auto-swap) ---
const conversations = [
[
{ role: "user", text: "Hey DishFuse — what price should I set for our Margherita pizza this weekend?" },
{ role: "ai", text: "Based on cost trends and Fri–Sun demand, target price is $15.50–$16.25 to keep margin near 31–33%." },
{ role: "user", text: "Great — how much mozzarella should I order?" },
{ role: "ai", text: "Forecast: 18.4 lbs next 7 days. Adding an 8% buffer for Sunday rush → 19.9 lbs." },
{ role: "ai", text: "Want me to generate a pre-approved buy list and push to your vendor?" },
],
[
{ role: "user", text: "We’ve been over-ordering chicken. Can we cut waste this week?" },
{ role: "ai", text: "Yes. Reduce Tuesday & Wednesday orders by 12% based on trend. Set auto-alert if prep exceeds 8 trays." },
{ role: "user", text: "Will that hurt weekend service?" },
{ role: "ai", text: "No. Weekend demand is strong — keep Friday at baseline and add +6% buffer for Saturday dinner." },
{ role: "ai", text: "I can lock this plan and send vendor-ready POs now." },
],
];

const [convIndex, setConvIndex] = useState(0); // which conversation (0 or 1)
const [chatStep, setChatStep] = useState(0); // how many messages are visible
const [mounted, setMounted] = useState(false);

// Smooth scroll reveal for zoom-in pop
useEffect(() => {
setMounted(true);
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((e) => {
if (e.isIntersecting) e.target.classList.add("reveal-in");
});
},
{ threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
return () => observer.disconnect();
}, []);

// Chat loop: slowly reveal messages, then swap conversations and repeat forever
useEffect(() => {
if (!mounted) return;
const msgs = conversations[convIndex];
setChatStep(0);
// reveal one message every 4 seconds
let step = 0;
const interval = setInterval(() => {
step += 1;
setChatStep(step);
if (step >= msgs.length) {
// after last message is shown, wait 4s more then swap convo
setTimeout(() => {
setConvIndex((i) => (i === 0 ? 1 : 0));
}, 4000);
clearInterval(interval);
}
}, 4000);
return () => clearInterval(interval);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [convIndex, mounted]);

return (
<main className="min-h-screen bg-[#0B1222] text-white">
<style jsx global>{`
:root {
--navy: #0b1222;
--gold: #f4c762;
--gold-2: #eeb94a;
--slate: #cbd5e1;
}
* {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
.section { padding: 72px 20px; }
.container { max-width: 1200px; margin: 0 auto; }

.btn {
display: inline-flex; align-items: center; justify-content: center;
gap: 10px; border-radius: 999px; padding: 14px 22px; font-weight: 700;
transition: transform .2s ease, box-shadow .2s ease, background .2s ease, opacity .2s ease;
}
.btn-primary {
color: #0b1222; background: linear-gradient(135deg, var(--gold), var(--gold-2));
box-shadow: 0 8px 24px rgba(244,199,98,.25);
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 14px 34px rgba(244,199,98,.35); }
.btn-ghost { border: 2px solid rgba(255,255,255,.85); color: #fff; }
.btn-ghost:hover { background: rgba(255,255,255,.08); }

.glass {
background: rgba(255,255,255,.06);
border: 1px solid rgba(255,255,255,.12);
backdrop-filter: blur(10px);
border-radius: 20px;
}

.h1 { font-size: clamp(34px, 6vw, 56px); line-height: 1.05; font-weight: 900; }
.h2 { font-size: clamp(28px, 4.6vw, 40px); font-weight: 800; }
.lead { color: var(--slate); font-size: clamp(16px, 2.1vw, 20px); }

.card {
border-radius: 20px; padding: 22px;
border: 1px solid rgba(255,255,255,.12);
background: linear-gradient(160deg, #0d1427, #0b1222);
}

.priceCard.popular {
border: 1px solid rgba(244,199,98,.65);
box-shadow: 0 18px 40px rgba(244,199,98,.1);
background:
radial-gradient(1200px 400px at 20% -10%, rgba(244,199,98,.12), transparent),
linear-gradient(160deg, #0f1a33, #0b1222);
}

/* Chat bubbles */
.bubble {
max-width: 560px; padding: 14px 16px; border-radius: 16px;
line-height: 1.4; font-size: 15px; box-shadow: 0 8px 22px rgba(0,0,0,.25);
opacity: 0; transform: translateY(8px);
animation: fadeUp .6s ease forwards;
}
.bubble.ai { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); }
.bubble.user { background: rgba(244,199,98,.12); border: 1px solid rgba(244,199,98,.35); }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

.pulse-dot {
width: 10px; height: 10px; border-radius: 999px; background: #34d399;
animation: pulse 2s infinite;
}
@keyframes pulse {
0% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(52,211,153,.6); }
70% { transform: scale(1); box-shadow: 0 0 0 16px rgba(52,211,153,0); }
100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(52,211,153,0); }
}

/* Zoom-in pop scroll animation */
.reveal { opacity: 0; transform: scale(.96) translateY(8px); transition: transform .5s ease, opacity .5s ease; }
.reveal-in { opacity: 1; transform: scale(1) translateY(0); }

/* Trust badges */
.badgeRow { display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0,1fr)); }
@media (min-width: 640px) { .badgeRow { grid-template-columns: repeat(4, minmax(0,1fr)); } }
.trust { border: 1px solid rgba(255,255,255,.12); border-radius: 14px; padding: 12px 14px; text-align: center; background: rgba(255,255,255,.04); }

/* FAQ */
details.faq { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.12); border-radius: 14px; padding: 16px 18px; }
details.faq + details.faq { margin-top: 10px; }
details.faq summary { cursor: pointer; list-style: none; font-weight: 700; }
details.faq summary::-webkit-details-marker { display: none; }

`}</style>

{/* HEADER */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,18,34,0.72)] backdrop-blur-md">
<div className="container flex items-center justify-between py-4">
<img src={LOGO_HEADER} alt="DishFuse logo" className="h-10 w-auto" />
<nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
<a href="#features" className="hover:text-white">Features</a>
<a href="#demo" className="hover:text-white">Live Demo</a>
<a href="#results" className="hover:text-white">Results</a>
<a href="#pricing" className="hover:text-white">Pricing</a>
<a href="/login" className="hover:text-white">Login</a>
</nav>
<div className="flex items-center gap-3">
<a href="#pricing" className="btn btn-ghost">See Plans</a>
<a href="#cta" className="btn btn-primary">Start Free Trial</a>
</div>
</div>
</header>

{/* HERO */}
<section className="relative min-h-[84vh] flex items-center overflow-hidden">
<video
autoPlay muted loop playsInline preload="auto" poster="/poster-hero.jpg"
className="absolute inset-0 w-full h-full object-cover opacity-45"
style={{ filter: "brightness(1.28) contrast(1.05)" }}
>
<source src={HERO_CDN} type="video/mp4" />
<source src="/hero.mp4" type="video/mp4" />
</video>
{/* lighter overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#0B1222]/20 via-[#0B1222]/28 to-[#0B1222]/48" />

<div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center py-16">
<div className="reveal">
<div className="flex items-center gap-2 mb-5">
<span className="pulse-dot" />
<span className="font-semibold text-sm text-white/90">AI for restaurants — not spreadsheets</span>
</div>
<h1 className="h1 mb-4">
Turn food costs into <span style={{ color: "var(--gold)" }}>predictable profit</span>
</h1>
<p className="lead mb-8">
DishFuse uses AI to price your menu, forecast inventory, and cut waste — so you increase margins without working longer hours.
</p>
<div className="flex flex-wrap gap-12 items-center">
<a href="#pricing" className="btn btn-primary">Start Free 14-Day Trial</a>
<a href="#demo" className="btn btn-ghost">Watch Live Demo</a>
</div>
</div>

{/* KPI card */}
<div className="glass p-5 md:p-6 reveal">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{[
{ k: "+27%", d: "Avg margin lift" },
{ k: "−42%", d: "Less food waste" },
{ k: "5 min", d: "Weekly ordering" },
].map((x) => (
<div key={x.d} className="card text-center">
<div className="text-2xl font-extrabold" style={{ color: "var(--gold)" }}>{x.k}</div>
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

{/* TRUST BADGES */}
<section className="section">
<div className="container">
<div className="badgeRow reveal">
{[
["🔒", "SSL 256-bit"],
["🛡️", "SOC 2 ready"],
["💳", "Stripe Billing"],
["☁️", "Runs on GCP/AWS"],
].map(([icon, label]) => (
<div key={label} className="trust text-white/85">
<div className="text-xl">{icon}</div>
<div className="text-sm mt-1">{label}</div>
</div>
))}
</div>
</div>
</section>

{/* FEATURES */}
<section id="features" className="section">
<div className="container">
<h2 className="h2 mb-3 reveal">Smart tools for smarter kitchens</h2>
<p className="lead mb-10 reveal">
Price each dish to target margin, predict next week’s buy list, and stop losses before they happen.
</p>
<div className="grid md:grid-cols-3 gap-6">
{[
{ t: "AI Menu Pricing", p: "Dynamic suggestions by dish & daypart to hit your target margins.", e: "💹" },
{ t: "Inventory Forecasting", p: "Predict SKUs by the day to avoid 86s and over-ordering.", e: "📦" },
{ t: "Waste Prevention Alerts", p: "Real-time flags for expiring items and anomalies.", e: "⚠️" },
].map((f) => (
<div key={f.t} className="card reveal">
<div className="text-4xl mb-3">{f.e}</div>
<div className="text-xl font-bold mb-1">{f.t}</div>
<p className="text-white/75">{f.p}</p>
</div>
))}
</div>
</div>
</section>

{/* LIVE DEMO */}
<section id="demo" className="relative section overflow-hidden">
<video
autoPlay muted loop playsInline preload="auto" poster="/poster-chat.jpg"
className="absolute inset-0 w-full h-full object-cover opacity-35"
style={{ filter: "brightness(1.28) contrast(1.08)" }}
>
<source src={CHAT_CDN} type="video/mp4" />
<source src="/chat.mp4" type="video/mp4" />
</video>
{/* lighter overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1222]/50 to-[#0B1222]/70" />

<div className="container relative z-10">
<h2 className="h2 mb-2 reveal">Chef Maria × DishFuse AI</h2>
<p className="lead mb-8 reveal">See how owners get answers in seconds.</p>

<div className="grid md:grid-cols-2 gap-12 items-start">
{/* Animated Chat Window */}
<div className="glass p-6 reveal" aria-live="polite">
<div className="flex items-center gap-3 mb-4">
<div className="pulse-dot" />
<p className="text-sm text-white/80">Live demo — simulated conversation</p>
</div>

<div className="space-y-4">
{conversations[convIndex].slice(0, chatStep).map((m, i) => (
<div key={i} className={`bubble ${m.role === "ai" ? "ai" : "user"}`}>
{m.role === "ai" ? (
<span>
{m.text
.replace("$15.50–$16.25", "$15.50–$16.25")
.replace("31–33%", "31–33%")}
</span>
) : (
<span>{m.text}</span>
)}
</div>
))}
</div>
</div>

{/* Value bullets */}
<div className="grid gap-4">
{[
["Price with confidence", "Hit target margins without guesswork."],
["Order exactly what you need", "Prevent over-stock and 86s automatically."],
["See profit clearly", "Know which dishes and days drive money."],
].map(([h, p]) => (
<div key={h} className="card reveal">
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
<h2 className="h2 mb-3 reveal">What restaurant owners are saying</h2>
<p className="lead mb-10 reveal">Proof from real kitchens using AI to protect margins.</p>
<div className="grid md:grid-cols-3 gap-6">
{[
{ img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Chef Maria Thompson", role: "Owner, Bella Forno", quote: "DishFuse cut our waste by nearly 40%. Pricing confidence went way up and so did margins." },
{ img: "https://randomuser.me/api/portraits/men/32.jpg", name: "James Carter", role: "GM, Bistro 21", quote: "Inventory forecasts are spot on. Ordering takes minutes and we avoid 86s on busy nights." },
{ img: "https://randomuser.me/api/portraits/women/65.jpg", name: "Lena Ortiz", role: "Owner, Café Luna", quote: "Finally see which dishes actually make money. We adjusted prices and margins stabilized fast." },
{ img: "https://randomuser.me/api/portraits/men/12.jpg", name: "Andre Nguyen", role: "Owner, Saigon Social", quote: "The waste alerts alone paid for the subscription in the first month." },
{ img: "https://randomuser.me/api/portraits/women/21.jpg", name: "Priya Sharma", role: "Operator, Spice Lane", quote: "We used data to push weekend pricing gracefully—customers were happy and so were margins." },
{ img: "https://randomuser.me/api/portraits/men/85.jpg", name: "David Romero", role: "Owner, GreenLeaf Café", quote: "Clear reporting, simple actions. It’s like a profit coach built into our workflow." },
].map((t) => (
<div key={t.name} className="glass p-6 border border-white/10 reveal">
<div className="flex items-center gap-4 mb-4">
<img src={t.img} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
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
<section className="section">
<div className="container">
<h2 className="h2 mb-6 reveal">Frequently asked questions</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="reveal">
<details className="faq">
<summary>Do I need to switch POS systems?</summary>
<p className="text-white/80 mt-3">
Nope. DishFuse works alongside your current POS and vendors; we import data and give you actions, not homework.
</p>
</details>
<details className="faq">
<summary>How fast can we get value?</summary>
<p className="text-white/80 mt-3">
Most single-location restaurants see quick wins in week 1: menu price suggestions and 5–10% waste reduction.
</p>
</details>
<details className="faq">
<summary>Is my data secure?</summary>
<p className="text-white/80 mt-3">
Yes. 256-bit SSL, access controls, encrypted at rest. SOC 2 readiness and vendor isolation by default.
</p>
</details>
</div>
<div className="reveal">
<details className="faq">
<summary>Can I cancel anytime?</summary>
<p className="text-white/80 mt-3">
Absolutely. No contracts. Start with a 14-day free trial and cancel anytime from your dashboard.
</p>
</details>
<details className="faq">
<summary>Does this help with multi-location groups?</summary>
<p className="text-white/80 mt-3">
Yes — our Growth and Custom plans include multi-location support and advanced profit analytics.
</p>
</details>
<details className="faq">
<summary>Will staff need training?</summary>
<p className="text-white/80 mt-3">
Very little. We deliver clear buy lists, price suggestions, and alerts. Most users are productive in a day.
</p>
</details>
</div>
</div>
</div>
</section>

{/* PRICING */}
<section id="pricing" className="section">
<div className="container">
<h2 className="h2 mb-3 reveal">Simple, transparent pricing</h2>
<p className="lead mb-10 reveal">
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
<div key={t.plan} className={`card priceCard ${t.popular ? "popular" : ""} reveal`}>
{t.popular && (
<div
className="mb-3 text-xs font-extrabold text-[#0B1222]"
style={{ background: "linear-gradient(135deg,var(--gold),var(--gold-2))", display: "inline-block", padding: "6px 12px", borderRadius: 999 }}
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
<a href="#cta" className="btn btn-primary w-full justify-center">
{t.plan === "Custom" ? "Contact Sales" : "Start Free Trial"}
</a>
</div>
))}
</div>

<p className="mt-8 text-sm text-white/70 text-center reveal">
✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
</p>
</div>
</section>

{/* FINAL CTA */}
<section id="cta" className="section">
<div className="container">
<div className="glass p-10 md:p-14 text-center reveal">
<h3 className="h2 mb-3">Ready to see hidden profit?</h3>
<p className="lead mb-7">
Join restaurants using DishFuse to boost margins and cut waste with AI.
</p>
<a href="#pricing" className="btn btn-primary">Start Free 14-Day Trial</a>
</div>
</div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 py-10 bg-[#0A1120]">
<div className="container flex flex-col items-center gap-4">
<img src={LOGO_FOOTER} alt="DishFuse" className="h-6 md:h-7" />
<div className="text-white/60 text-sm">
© {new Date().getFullYear()} DishFuse. All rights reserved.
</div>
</div>
</footer>
</main>
);
}
	

	
