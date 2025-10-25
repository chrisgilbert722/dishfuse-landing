"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

/**
* DishFuse – High-converting Landing v10/10 (Navy + Gold)
* - Two full-screen autoplay videos (hero + chat demo)
* - Chef Maria × DishFuse AI animated chat
* - Pricing: $99 / $199 / Custom
* - Uses your logo files in /public:
* /logo-header.png, /logo-footer.png, /favicon.png (optional)
* - External video fallbacks (load first), then local /hero.mp4, /chat.mp4
*/

const LOGO_MARK = "/logo-header.png"; // header logo
const LOGO_WORD = "/logo-footer.png"; // footer wordmark

// External fallbacks FIRST (per your request), then local sources
const HERO_FALLBACK =
"https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";
const CHAT_FALLBACK =
"https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";

// === Optional Analytics (fill in later) ===
const GA_ID = ""; // e.g., "G-XXXXXXXXXX"
const FB_PIXEL_ID = ""; // e.g., "123456789012345"

export default function Home() {
const [chatStep, setChatStep] = useState(0);
const [mounted, setMounted] = useState(false);

const heroRef = useRef(null);

// Testimonials auto-loop controller
const testimonialsRef = useRef(null);
const [testimonialsInView, setTestimonialsInView] = useState(false);
const scrollIntervalRef = useRef(null);

useEffect(() => {
setMounted(true);
// Slower, natural chat timing (3s, 7s, 11s, 16s)
const t1 = setTimeout(() => setChatStep(1), 3000);
const t2 = setTimeout(() => setChatStep(2), 7000);
const t3 = setTimeout(() => setChatStep(3), 11000);
const t4 = setTimeout(() => setChatStep(4), 16000);
return () => {
clearTimeout(t1);
clearTimeout(t2);
clearTimeout(t3);
clearTimeout(t4);
};
}, []);

// IntersectionObserver to start/stop testimonials auto-scroll
useEffect(() => {
if (!testimonialsRef.current) return;
const el = testimonialsRef.current;
const io = new IntersectionObserver(
(entries) => {
const inView = entries[0]?.isIntersecting;
setTestimonialsInView(inView);
},
{ threshold: 0.3 }
);
io.observe(el);
return () => io.disconnect();
}, []);

// Smooth auto-scroll when in view
useEffect(() => {
const scroller = testimonialsRef.current?.querySelector(".t-scroller");
if (!scroller) return;

const step = () => {
// advance by 1 card width every ~2.5s
const card = scroller.querySelector(".t-card");
const cardWidth = card ? card.getBoundingClientRect().width + 16 : 320;
scroller.scrollBy({ left: cardWidth, behavior: "smooth" });

// loop back near start when close to end
if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4) {
scroller.scrollTo({ left: 0, behavior: "smooth" });
}
};

if (testimonialsInView) {
scrollIntervalRef.current = setInterval(step, 2500);
} else {
if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
}
return () => {
if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
};
}, [testimonialsInView]);

// ======== SEO: JSON-LD =========
const orgJsonLd = {
"@context": "https://schema.org",
"@type": "Organization",
name: "DishFuse",
url: "https://dishfuse.com",
logo: "https://dishfuse.com/logo-footer.png",
};

const productJsonLd = {
"@context": "https://schema.org",
"@type": "Product",
name: "DishFuse",
description:
"AI that helps restaurants increase profit, forecast inventory, and reduce waste.",
brand: {
"@type": "Brand",
name: "DishFuse",
},
offers: [
{
"@type": "Offer",
price: "99",
priceCurrency: "USD",
name: "Starter",
availability: "https://schema.org/InStock",
},
{
"@type": "Offer",
price: "199",
priceCurrency: "USD",
name: "Growth",
availability: "https://schema.org/InStock",
},
],
};

const reviewsJsonLd = {
"@context": "https://schema.org",
"@type": "ItemList",
itemListElement: [
{
"@type": "Review",
author: { "@type": "Person", name: "Chef Maria R." },
reviewBody:
"DishFuse took the guesswork out of pricing—margins are up 22% and ordering is faster.",
reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
itemReviewed: { "@type": "Product", name: "DishFuse" },
},
{
"@type": "Review",
author: { "@type": "Person", name: "James H., Urban Hearth" },
reviewBody:
"We cut weekly waste nearly in half and stopped 86s during rush. A lifesaver.",
reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
itemReviewed: { "@type": "Product", name: "DishFuse" },
},
{
"@type": "Review",
author: { "@type": "Person", name: "Sarah L., Golden Fork Bistro" },
reviewBody:
"Finally see which dishes print money. It paid for itself in the first month.",
reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
itemReviewed: { "@type": "Product", name: "DishFuse" },
},
],
};

return (
<main className="min-h-screen bg-[#0B1222] text-white">
<Head>
{/* Primary SEO */}
<title>DishFuse — AI that turns food costs into predictable profit</title>
<meta
name="description"
content="DishFuse helps restaurants increase profit, forecast inventory, and cut waste with AI. Price with confidence. Order exactly what you need. See profit clearly."
/>
<meta name="robots" content="index, follow" />

{/* Open Graph */}
<meta property="og:title" content="DishFuse — AI for Restaurant Profit" />
<meta
property="og:description"
content="Increase margins, predict inventory, reduce waste. See how owners get answers in seconds."
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://dishfuse.com" />
<meta property="og:image" content="https://dishfuse.com/logo-footer.png" />

{/* Twitter */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="DishFuse — AI for Restaurant Profit" />
<meta
name="twitter:description"
content="Increase margins, predict inventory, reduce waste with AI."
/>
<meta name="twitter:image" content="https://dishfuse.com/logo-footer.png" />

{/* Favicon (optional) */}
<link rel="icon" href="/favicon.png" />

{/* JSON-LD */}
<script type="application/ld+json">
{JSON.stringify(orgJsonLd)}
</script>
<script type="application/ld+json">
{JSON.stringify(productJsonLd)}
</script>
<script type="application/ld+json">
{JSON.stringify(reviewsJsonLd)}
</script>

{/* GA4 (only inject if ID provided) */}
{GA_ID && (
<>
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<script
dangerouslySetInnerHTML={{
__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`,
}}
/>
</>
)}

{/* Meta Pixel (only inject if ID provided) */}
{FB_PIXEL_ID && (
<>
<script
dangerouslySetInnerHTML={{
__html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
`,
}}
/>
<noscript>
<img
height="1"
width="1"
style={{ display: "none" }}
src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
alt=""
/>
</noscript>
</>
)}
</Head>

<style jsx global>{`
:root {
--navy: #0b1222;
--navy-2: #0f1a33;
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
transition: transform 0.2s ease, box-shadow 0.2s ease,
background 0.2s ease, opacity 0.2s ease;
will-change: transform, box-shadow;
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
.pulse-dot {
width: 10px;
height: 10px;
border-radius: 999px;
background: #34d399;
box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
animation: pulse 2s infinite;
}
@keyframes pulse {
0% {
transform: scale(0.97);
box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
}
70% {
transform: scale(1);
box-shadow: 0 0 0 18px rgba(52, 211, 153, 0);
}
100% {
transform: scale(0.97);
box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
}
}
.badge {
display: inline-flex;
align-items: center;
gap: 10px;
border-radius: 999px;
padding: 8px 14px;
font-weight: 700;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.15);
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
letter-spacing: -0.02em;
}
.h2 {
font-size: clamp(28px, 4.6vw, 40px);
font-weight: 800;
letter-spacing: -0.02em;
}
.lead {
color: var(--slate);
font-size: clamp(16px, 2.1vw, 20px);
}
.grid {
display: grid;
gap: 24px;
}
@media (min-width: 768px) {
.grid-3 {
grid-template-columns: repeat(3, 1fr);
}
.grid-2 {
grid-template-columns: repeat(2, 1fr);
}
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
.logoGlow {
filter: drop-shadow(0 0 22px rgba(244, 199, 98, 0.35));
}
.bubble {
max-width: 540px;
padding: 14px 16px;
border-radius: 16px;
line-height: 1.4;
font-size: 15px;
box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
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
/* Testimonials scroller */
.t-scroller {
display: flex;
gap: 16px;
overflow-x: auto;
scroll-behavior: smooth;
scrollbar-width: none;
}
.t-scroller::-webkit-scrollbar {
display: none;
}
.t-card {
min-width: 320px;
max-width: 360px;
flex: 0 0 auto;
}
`}</style>

{/* HEADER */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,18,34,0.72)] backdrop-blur-md">
<div className="container flex items-center justify-between py-4">
{/* Single Logo Only */}
<img src={LOGO_MARK} alt="DishFuse logo" className="h-10 w-auto logoGlow" />

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
<section
ref={heroRef}
className="relative min-h-[84vh] flex items-center overflow-hidden"
aria-label="DishFuse Kitchen Hero"
>
<video
autoPlay
muted
loop
playsInline
className="absolute inset-0 w-full h-full object-cover opacity-40"
style={{ filter: "brightness(1.15) contrast(1.05)", transition: "filter 0.4s ease" }}
>
{/* Fallback FIRST, then local (per your instruction) */}
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

{/* KPI right card */}
<div className="glass rounded-2xl p-5 md:p-6">
<div className="grid grid-3 grid-cols-1 md:grid-cols-3 gap-4">
{[
{ k: "+27%", d: "Avg margin lift" },
{ k: "−42%", d: "Less food waste" },
{ k: "5 min", d: "Weekly ordering" },
].map((x) => (
<div key={x.d} className="card text-center">
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
<div className="grid grid-3">
{[
{
t: "AI Menu Pricing",
p: "Dynamic suggestions by dish & daypart to hit your target margins.",
e: "💹",
},
{
t: "Inventory Forecasting",
p: "Predict SKUs by the day to avoid 86s and over-ordering.",
e: "📦",
},
{
t: "Waste Prevention Alerts",
p: "Real-time flags for expiring items and anomalies.",
e: "⚠️",
},
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

{/* LIVE CHAT DEMO – Video 2 background */}
<section id="demo" className="relative section overflow-hidden">
<video
autoPlay
muted
loop
playsInline
className="absolute inset-0 w-full h-full object-cover opacity-25"
style={{ filter: "brightness(1.1) contrast(1.08)", transition: "filter 0.4s ease" }}
>
{/* Fallback FIRST, then local */}
<source src={CHAT_FALLBACK} type="video/mp4" />
<source src="/chat.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1222]/70 to-[#0B1222]" />

<div className="container relative z-10">
<h2 className="h2 mb-2">Chef Maria × DishFuse AI</h2>
<p className="lead mb-8">See how owners get answers in seconds.</p>

<div className="grid md:grid-cols-2 gap-18 items-start">
<div className="glass rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="pulse-dot" />
<div className="text-sm text-white/80">
Live demo — simulated conversation
</div>
</div>

<div className="space-y-4">
{/* user */}
{mounted && (
<div
className="bubble user"
style={{ animationDelay: "0.05s" }}
aria-live="polite"
>
Hey DishFuse — what price should I set for our Margherita pizza this weekend?
</div>
)}
{/* ai */}
{chatStep >= 1 && (
<div
className="bubble ai"
style={{ animationDelay: "0.2s" }}
aria-live="polite"
>
Based on cost trends and demand spikes Fri–Sun, target price is{" "}
<b style={{ color: "var(--gold)" }}>$15.50–$16.25</b> to keep margin at{" "}
<b style={{ color: "var(--gold)" }}>31–33%</b>.
</div>
)}
{/* user */}
{chatStep >= 2 && (
<div
className="bubble user"
style={{ animationDelay: "0.35s" }}
aria-live="polite"
>
Great — how much mozzarella should I order?
</div>
)}
{/* ai */}
{chatStep >= 3 && (
<div
className="bubble ai"
style={{ animationDelay: "0.5s" }}
aria-live="polite"
>
Forecast is <b style={{ color: "var(--gold)" }}>18.4 lbs</b> for 7 days.
I’ll add a buffer of 8% for Sunday brunch rush →{" "}
<b style={{ color: "var(--gold)" }}>19.9 lbs</b>.
</div>
)}
{/* ai CTA */}
{chatStep >= 4 && (
<div
className="bubble ai"
style={{ animationDelay: "0.65s" }}
aria-live="polite"
>
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

{/* Value bullets */}
<div className="grid gap-4">
{[
["Price with confidence", "Hit target margins without guesswork."],
["Order exactly what you need", "Prevent over-stock & 86s automatically."],
["See profit clearly", "Know which dishes and days drive money."],
].map(([h, p]) => (
<div key={h} className="card">
<div className="text-lg font-bold">{h}</div>
<div className="text-white/75">{p}</div>
</div>
))}
</div>
</div>
</div>
</section>

{/* TESTIMONIALS — auto-loop on scroll */}
<section id="results" className="section" ref={testimonialsRef}>
<div className="container">
<h2 className="h2 mb-3">What owners are saying</h2>
<p className="lead mb-8">
These restaurants grew profit, reduced waste, and simplified ordering with DishFuse.
</p>

<div className="t-scroller glass rounded-2xl p-4">
{[
{
name: "Chef Maria R.",
title: "Owner, Trattoria Lucia",
quote:
"DishFuse took the guesswork out of pricing—margins are up 22% and ordering is faster.",
avatar: "https://randomuser.me/api/portraits/women/65.jpg",
},
{
name: "James H.",
title: "GM, Urban Hearth",
quote:
"We cut weekly waste nearly in half and stopped 86s during rush. A lifesaver.",
avatar: "https://randomuser.me/api/portraits/men/32.jpg",
},
{
name: "Sarah L.",
title: "Owner, Golden Fork Bistro",
quote:
"Finally see which dishes print money. It paid for itself in the first month.",
avatar: "https://randomuser.me/api/portraits/women/44.jpg",
},
{
name: "David P.",
title: "Chef-Partner, GreenLeaf Café",
quote:
"Forecasts are scary accurate. We buy exactly what we need—no more guessing.",
avatar: "https://randomuser.me/api/portraits/men/85.jpg",
},
{
name: "Anita K.",
title: "Owner, Spice & Stone",
quote:
"Setup took under an hour. Now my menu pricing actually matches real costs.",
avatar: "https://randomuser.me/api/portraits/women/12.jpg",
},
].map((t, i) => (
<div key={i} className="t-card card">
<div className="flex items-center gap-3 mb-3">
<img
src={t.avatar}
alt={t.name}
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<div className="font-semibold">{t.name}</div>
<div className="text-white/70 text-sm">{t.title}</div>
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
<p className="lead mb-10">
Choose the plan that fits your restaurant. Cancel anytime — no contracts.
</p>

<div className="grid grid-3">
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
desc: "Tailored solutions for multi-brand & franchise.",
features: ["Dedicated manager", "Custom integrations", "Data migration", "Team training"],
popular: false,
},
].map((t) => (
<div
key={t.plan}
className={`card priceCard ${t.popular ? "popular" : ""}`}
>
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

<div className="mt-8 text-sm text-white/70">
✓ 14-day free trial &nbsp; • &nbsp; ✓ No credit card required &nbsp; • &nbsp; ✓ Cancel anytime
</div>
</div>
</section>

{/* FINAL CTA */}
<section id="cta" className="section">
<div className="container">
<div className="glass rounded-3xl p-10 md:p-14 text-center">
<h3 className="h2 mb-3">Ready to see hidden profit?</h3>
<p className="lead mb-7">
Join restaurants using DishFuse to boost margins and cut waste with AI.
</p>
<a href="#pricing" className="btn btn-primary">
Start Free 14-Day Trial
</a>
</div>
</div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 py-10 bg-[#0A1120]">
<div className="container flex flex-col items-center gap-4">
<img src={LOGO_WORD} alt="DishFuse" className="h-6 md:h-7 logoGlow" />
<div className="text-white/60 text-sm">
© {new Date().getFullYear()} DishFuse. All rights reserved.
</div>
</div>
</footer>
</main>
);
}
	
