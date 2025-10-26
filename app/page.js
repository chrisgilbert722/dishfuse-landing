"use client";

import React, { useEffect, useState, useRef } from "react";

const LOGO_HEADER = "/logo-header.png";
const LOGO_FOOTER = "/logo-footer.png";

const HERO_CDN =
"https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4";
const CHAT_CDN =
"https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4";

export default function Home() {
const [chatStep, setChatStep] = useState(0);
const [mounted, setMounted] = useState(false);
const timeoutsRef = useRef([]);
const runningRef = useRef(false);

const runChatLoop = () => {
timeoutsRef.current.forEach(clearTimeout);
timeoutsRef.current = [];
setChatStep(0);
timeoutsRef.current.push(setTimeout(() => setChatStep(1), 3000));
timeoutsRef.current.push(setTimeout(() => setChatStep(2), 7000));
timeoutsRef.current.push(setTimeout(() => setChatStep(3), 11000));
timeoutsRef.current.push(setTimeout(() => setChatStep(4), 16000));
timeoutsRef.current.push(
setTimeout(() => {
if (runningRef.current) runChatLoop();
}, 21000)
);
};

useEffect(() => {
setMounted(true);
runningRef.current = true;
runChatLoop();
return () => {
runningRef.current = false;
timeoutsRef.current.forEach(clearTimeout);
timeoutsRef.current = [];
};
}, []);

return (
<main className="min-h-screen bg-[#14223A] text-white">
<style jsx global>{`
:root {
--navy: #14223a;
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
color: #14223a;
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
background: linear-gradient(160deg, #0d1427, #14223a);
}
.priceCard.popular {
border: 1px solid rgba(244, 199, 98, 0.65);
box-shadow: 0 18px 40px rgba(244, 199, 98, 0.1);
background: radial-gradient(
1200px 400px at 20% -10%,
rgba(244, 199, 98, 0.12),
transparent
),
linear-gradient(160deg, #0f1a33, #14223a);
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
transition: background 0.2s ease, border 0.2s ease;
}
.faq-q:hover {
background: rgba(255, 255, 255, 0.06);
border-color: rgba(255, 255, 255, 0.12);
}
.faq-a {
padding: 12px 4px 22px 4px;
color: var(--slate);
}
`}</style>

{/* HEADER */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(20,34,58,0.75)] backdrop-blur-md">
<div className="container flex items-center justify-between py-4">
<img src={LOGO_HEADER} alt="DishFuse logo" className="h-10 w-auto" />
<nav className="hidden md:flex items-center gap-14 text-sm text-white/80">
<a href="#features" className="hover:text-white">
Features
</a>
<a href="#pricing" className="hover:text-white">
Pricing
</a>
<a href="#results" className="hover:text-white">
Results
</a>
<a href="#demo" className="hover:text-white">
Live Demo
</a>
</nav>
<div className="flex items-center gap-3">
<a href="#pricing" className="btn btn-ghost">
See Plans
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
className="absolute inset-0 w-full h-full object-cover opacity-55"
style={{ filter: "brightness(1.18) contrast(1.05)" }}
>
<source src={HERO_CDN} type="video/mp4" />
<source src="/hero.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-[#14223A]/15 via-[#14223A]/25 to-[#14223A]/45" />

{/* Everything else below remains the same as your layout */}

{/* ... keep your KPI, Features, Chat Demo, Testimonials, FAQ, Pricing sections unchanged ... */}

{/* TRUST BADGES (new strip below Pricing, above CTA) */}
<section className="section py-8 bg-[#14223A] border-t border-white/10">
<div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-sm text-white/85">
{[
"🛡️ Backed by Stripe",
"🔒 Bank-Level Security",
"👨‍🍳 Trusted by 500+ Restaurants",
"⚙️ Setup in Minutes",
"💡 Cancel Anytime",
].map((txt) => (
<div
key={txt}
className="glass rounded-xl px-3 py-3 flex items-center justify-center"
>
{txt}
</div>
))}
</div>
</section>

{/* Final CTA */}
{/* ... keep your CTA + Footer sections the same ... */}
</section>
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
<div key={it.q} className="glass rounded-2xl p-3">
<button
className="faq-q w-full"
onClick={() => setOpenIndex(isOpen ? -1 : idx)}
aria-expanded={isOpen}
aria-controls={`faq-panel-${idx}`}
>
<span className="font-semibold">{it.q}</span>
<span aria-hidden className="text-white/70">
{isOpen ? "−" : "+"}
</span>
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
	

