"use client";

import React, { useEffect, useState } from "react";

/**
* DishFuse — High-converting Landing (Navy + Gold)
* - Hero + Chat demo videos (CDN first, local fallback)
* - Live ROI calculator (currency)
* - Trust badges under hero
* - FAQ accordion
* - Testimonials + Pricing + CTA
* - Login + Start Free Trial buttons in header
*/

const LOGO_HEADER = "/logo-header.png";
const LOGO_FOOTER = "/logo-footer.png";

// CDN-first videos with local fallbacks
const HERO_CDN =
"https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";
const CHAT_CDN =
"https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";

export default function Home() {
const [chatStep, setChatStep] = useState(0);
const [mounted, setMounted] = useState(false);

// ROI calculator state
const [revenue, setRevenue] = useState(60000); // $
const [foodCostPct, setFoodCostPct] = useState(32); // %
const [marginLiftPct, setMarginLiftPct] = useState(12); // % relative lift on margin

// Derived ROI metrics (currency formatting)
const currentMargin = 1 - foodCostPct / 100;
const newMargin = currentMargin * (1 + marginLiftPct / 100);
const profitAdded = Math.max(0, revenue * (newMargin - currentMargin));

const fmt = (n) =>
n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

useEffect(() => {
setMounted(true);
const timers = [
setTimeout(() => setChatStep(1), 3000),
setTimeout(() => setChatStep(2), 7000),
setTimeout(() => setChatStep(3), 11000),
setTimeout(() => setChatStep(4), 16000),
];
return () => timers.forEach(clearTimeout);
}, []);

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
.glass {
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(10px);
}
.btn {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 999px;
padding: 14px 22px;
font-weight: 700;
transition: all 0.2s ease;
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
color: #fff;
}
.btn-ghost:hover {
background: rgba(255, 255, 255, 0.08);
}
.badge {
display: inline-flex;
align-items: center;
gap: 8px;
border-radius: 999px;
padding: 8px 14px;
font-weight: 700;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.15);
}
.pulse-dot {
width: 10px;
height: 10px;
border-radius: 999px;
background: #34d399;
animation: pulse 2s infinite;
}
@keyframes pulse {
0% {
transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
}
70% {
transform: scale(1);
box-shadow: 0 0 0 16px rgba(52, 211, 153, 0);
}
100% {
transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
}
}
.section {
padding: 72px 20px;
}
.container {
max-width: 1200px;
margin: 0 auto;
}
.h1 {
font-size: clamp(34px, 6vw, 56px);
line-height: 1.05;
font-weight: 900;
}
.h2 {
font-size: clamp(28px, 4.6vw, 40px);
font-weight: 800;
}
.lead {
color: var(--slate);
font-size: clamp(16px, 2.1vw, 20px);
}
.card {
border-radius: 20px;
padding: 22px;
border: 1px solid rgba(255, 255, 255, 0.12);
background: linear-gradient(160deg, #0d1427, #0b1222);
}
.priceCard.popular {
border: 1px solid rgba(244, 199, 98, 0.65);
box-shadow: 0 18px 40px rgba(244, 199, 98, 0.1);
background: radial-gradient(
1200px 400px at 20% -10%,
rgba(244, 199, 98, 0.12),
transparent
),
linear-gradient(160deg, #0f1a33, #0b1222);
}
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
details.faq {
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 16px;
padding: 16px 18px;
background: linear-gradient(160deg, #0d1427, #0b1222);
}
details.faq[open] {
border-color: rgba(244, 199, 98, 0.5);
box-shadow: 0 8px 24px rgba(244, 199, 98, 0.08);
}
summary.faq-title {
cursor: pointer;
list-style: none;
font-weight: 800;
display: flex;
align-items: center;
justify-content: space-between;
}
summary.faq-title::-webkit-details-marker {
display: none;
}
`}</style>

{/* HEADER */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,18,34,0.72)] backdrop-blur-md">
<div className="container flex items-center justify-between py-4">
<img src={LOGO_HEADER} alt="DishFuse logo" className="h-10 w-auto" />
<nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
<a href="#features" className="hover:text-white">
Features
</a>
<a href="#pricing" className="hover:text-white">
Pricing
</a>
<a href="#results" className="hover:text-white">
Testimonials
</a>
<a href="#faq" className="hover:text-white">
FAQ
</a>
<a href="#demo" className="hover:text-white">
Live Demo
</a>
</nav>
<div className="flex items-center gap-3">
<a href="/login" className="btn btn-ghost">
Login
</a>
<a href="#cta" className="btn btn-primary">
Start Free Trial
</a>
</div>
</div>
</header>

{/* HERO */}
<section className="relative min-h-[84vh] flex items-center overflow-hidden">
<video
autoPlay
muted
loop
playsInline
preload="auto"
poster="/poster-hero.jpg"
className="absolute inset-0 w-full h-full object-cover opacity-45"
style={{ filter: "brightness(1.25) contrast(1.05)" }}
>
<source src={HERO_CDN} type="video/mp4" />
<source src="/hero.mp4" type="video/mp4" />
</video>
{/* lighter overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#0B1222]/20 via-[#0B1222]/28 to-[#0B1222]/50" />

<div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center py-16">
<div>
<div className="badge mb-5">
<span className="pulse-dot" /> AI for restaurants — not spreadsheets
</div>
<h1 className="h1 mb-4">
Turn food costs into <span style={{ color: "var(--gold)" }}>predictable profit</span>
</h1>
<p className="lead mb-8">
DishFuse uses AI to price your menu, forecast inventory, and cut waste — so you
increase margins without working longer hours.
</p>
<div className="flex flex-wrap gap-12 items-center">
<a href="#pricing" className="btn btn-primary">
Start Free 14-Day Trial
</a>
<a href="#demo" className="btn btn-ghost">
See How It Works
</a>
</div>
{/* Trust badges */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
{[
["No POS switch", "Start with CSV; connect later"],
["Secure by design", "Encryption + cloud best practices"],
["Cancel anytime", "No contracts or lock-ins"],
].map(([h, s]) => (
<div key={h} className="glass rounded-xl px-4 py-3">
<div className="font-semibold">{h}</div>
<div className="text-white/70">{s}</div>
</div>
))}
</div>
</div>
</div>
</section>

{/* LIVE ROI CALCULATOR */}
<section id="roi" className="section">
<div className="container">
<h2 className="h2 mb-2">See your ROI in 30 seconds</h2>
<p className="lead mb-8">
Estimate how much profit DishFuse can unlock for your kitchen each month.
</p>

<div className="grid md:grid-cols-2 gap-10 items-start">
{/* Inputs */}
<div className="glass rounded-2xl p-6">
<div className="grid gap-4">
<label className="text-sm text-white/80">
Monthly Revenue ($)
<input
type="number"
min={0}
value={revenue}
onChange={(e) => setRevenue(Number(e.target.value || 0))}
className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(244,199,98,0.6)]"
/>
</label>
<label className="text-sm text-white/80">
Food Cost (%)
<input
type="number"
min={0}
max={100}
value={foodCostPct}
onChange={(e) => setFoodCostPct(Number(e.target.value || 0))}
className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(244,199,98,0.6)]"
/>
</label>
<label className="text-sm text-white/80">
Expected Margin Lift (%)
<input
type="number"
min={0}
value={marginLiftPct}
onChange={(e) => setMarginLiftPct(Number(e.target.value || 0))}
className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(244,199,98,0.6)]"
/>
</label>
</div>

<div className="mt-6 grid md:grid-cols-2 gap-4">
<div className="glass rounded-xl p-4 text-center">
<div className="text-white/70 text-sm mb-1">Estimated Monthly Profit Added</div>
<div className="text-3xl font-extrabold" style={{ color: "var(--gold)" }}>
{fmt(profitAdded)}
</div>
</div>
<div className="glass rounded-xl p-4 text-center">
<div className="text-white/70 text-sm mb-1">Projected Margin</div>
<div className="text-3xl font-extrabold" style={{ color: "var(--gold)" }}>
{(newMargin * 100).toFixed(1)}%
</div>
</div>
</div>

<div className="mt-6">
<a href="#pricing" className="btn btn-primary w-full justify-center">
Start Free 14-Day Trial
</a>
<p className="text-xs text-white/70 mt-2 text-center">
No credit card required. Cancel anytime.
</p>
</div>
</div>

{/* Proof bullets beside the calculator */}
<div className="grid gap-4">
{[
["+27% avg margin lift", "from AI price optimization by dish & time"],
["42% less waste", "order exactly what you need — every time"],
["5-min ordering", "approve weekly buy lists in seconds"],
].map(([h, s]) => (
<div key={h} className="card">
<div className="text-xl font-bold">{h}</div>
<div className="text-white/75">{s}</div>
</div>
))}
</div>
</div>
</div>
</section>

{/* FEATURES */}
<section id="features" className="section">
<div className="container">
<h2 className="h2 mb-3">Smart tools for smarter kitchens</h2>
<p className="lead mb-10">
Price each dish to target margin, predict next week’s buy list, and stop losses before
they happen.
</p>
<div className="grid md:grid-cols-3 gap-6">
{[
{
t: "AI Menu Pricing",
p: "Dynamic suggestions by dish & daypart to hit your target margins.",
e: "💹",
},
{ t: "Inventory Forecasting", p: "Predict SKUs by the day to avoid 86s and over-ordering.", e: "📦" },
{ t: "Waste Prevention Alerts", p: "Real-time flags for expiring items and anomalies.", e: "⚠️" },
].map((f) => (
<div key={f.t} className="card">
<div className="text-4xl mb-3">{f.e}</div>
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
autoPlay
muted
loop
playsInline
preload="auto"
poster="/poster-chat.jpg"
className="absolute inset-0 w-full h-full object-cover opacity-35"
style={{ filter: "brightness(1.25) contrast(1.08)" }}
>
<source src={CHAT_CDN} type="video/mp4" />
<source src="/chat.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1222]/50 to-[#0B1222]/70" />

<div className="container relative z-10">
<h2 className="h2 mb-2">Chef Maria × DishFuse AI</h2>
<p className="lead mb-8">See how owners get answers in seconds.</p>

<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="glass rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="pulse-dot" />
<p className="text-sm text-white/80">Live demo — simulated conversation</p>
</div>

<div className="space-y-4">
{mounted && (
<div className="bubble user">
Hey DishFuse — what price should I set for our Margherita pizza this weekend?
</div>
)}
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
<a href="#pricing" className="btn btn-primary">
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
quote:
"DishFuse cut our waste by nearly 40%. Pricing confidence went way up and so did margins.",
},
{
img: "https://randomuser.me/api/portraits/men/32.jpg",
name: "James Carter",
role: "GM, Bistro 21",
quote:
"Inventory forecasts are spot on. Ordering takes minutes and we avoid 86s on busy nights.",
},
{
img: "https://randomuser.me/api/portraits/women/65.jpg",
name: "Lena Ortiz",
role: "Owner, Café Luna",
quote:
"Finally see which dishes actually make money. We adjusted prices and margins stabilized fast.",
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
quote:
"We used data to push weekend pricing gracefully—customers were happy and so were margins.",
},
{
img: "https://randomuser.me/api/portraits/men/85.jpg",
name: "David Romero",
role: "Owner, GreenLeaf Café",
quote:
"Clear reporting, simple actions. It’s like a profit coach built into our workflow.",
},
].map((t) => (
<div key={t.name} className="glass rounded-2xl p-6 border border-white/10">
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

{/* PRICING */}
<section id="pricing" className="section">
<div className="container">
<h2 className="h2 mb-3">Simple, transparent pricing</h2>
<p className="lead mb-10">Choose the plan that fits your restaurant. Cancel anytime — no contracts.</p>

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
features: [
"Everything in Starter",
"Multi-location support",
"Advanced profit analytics",
"Priority support",
],
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
<a href="#cta" className="btn btn-primary w-full justify-center">
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

{/* FAQ */}
<section id="faq" className="section">
<div className="container">
<h2 className="h2 mb-3">Frequently Asked Questions</h2>
<p className="lead mb-8">Still wondering if DishFuse is right for your restaurant? Here are the answers.</p>

<div className="grid md:grid-cols-2 gap-6">
{[
[
"Do I need a new POS system?",
"No — you can start with CSV and connect your POS whenever you’re ready. No switching required.",
],
[
"Is onboarding hard?",
"Setup takes under 10 minutes. We guide you step-by-step and can do it for you if you prefer.",
],
[
"Can I run multiple locations?",
"Yes — Growth and Custom plans include multi-location and franchise support out of the box.",
],
[
"Is my data secure?",
"We use industry-standard encryption and modern cloud best practices. Your data stays private.",
],
].map(([q, a]) => (
<details key={q} className="faq">
<summary className="faq-title">
{q}
<span style={{ color: "var(--gold)" }}>＋</span>
</summary>
<div className="text-white/80 mt-3">{a}</div>
</details>
))}
</div>
</div>
</section>

{/* FINAL CTA */}
<section id="cta" className="section">
<div className="container">
<div className="glass rounded-3xl p-10 md:p-14 text-center">
<h3 className="h2 mb-3">Ready to see hidden profit?</h3>
<p className="lead mb-7">Join restaurants using DishFuse to boost margins and cut waste with AI.</p>
<a href="#pricing" className="btn btn-primary">
Start Free 14-Day Trial
</a>
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
	

	
