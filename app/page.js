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
setTimeout(() => runningRef.current && runChatLoop(), 21000)
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
.logo-glow {
filter: drop-shadow(0 0 18px rgba(244, 199, 98, 0.35))
drop-shadow(0 0 40px rgba(244, 199, 98, 0.18));
}
.section {
padding: 72px 20px;
}
.container {
max-width: 1200px;
margin: 0 auto;
}
.faq-q {
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 18px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(255, 255, 255, 0.08);
transition: 0.2s;
}
.faq-a {
padding: 12px 4px 22px;
color: var(--slate);
}
.badge {
display: inline-flex;
align-items: center;
gap: 10px;
padding: 10px 14px;
border-radius: 14px;
border: 1px solid rgba(255, 255, 255, 0.12);
background: rgba(255, 255, 255, 0.04);
}
.badge svg {
width: 18px;
height: 18px;
}
`}</style>

{/* HEADER */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(20,34,58,0.7)] backdrop-blur-md">
<div className="container flex items-center justify-between py-4">
<img src={LOGO_HEADER} alt="DishFuse" className="h-10 w-auto logo-glow" />
<nav className="hidden md:flex gap-10 text-sm text-white/80">
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
<div className="flex gap-3">
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
className="absolute inset-0 w-full h-full object-cover opacity-65"
style={{ filter: "brightness(1.15) contrast(1.04)" }}
>
<source src={HERO_CDN} type="video/mp4" />
<source src="/hero.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,34,58,0.15),rgba(20,34,58,0.3))]" />
<div className="container relative z-10 py-16">
<h1 className="text-5xl font-bold mb-6">
Turn food costs into{" "}
<span style={{ color: "var(--gold)" }}>predictable profit</span>
</h1>
<p className="text-lg text-white/85 mb-8 max-w-2xl">
DishFuse uses AI to price your menu, forecast inventory, and cut waste — so
you increase margins without working longer hours.
</p>
<div className="flex flex-wrap gap-6">
<a href="#pricing" className="btn btn-primary">
Start Free 14-Day Trial
</a>
<a href="#demo" className="btn btn-ghost">
Watch Live Demo
</a>
</div>
</div>
</section>

{/* FAQ */}
<section id="faq" className="section">
<div className="container">
<h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
<FAQAccordion
items={[
{
q: "Do I need new hardware or change my POS?",
a: "No. DishFuse integrates with your POS via exports/APIs and starts delivering insights from day one.",
},
{
q: "How fast can I see results?",
a: "Most owners see pricing suggestions and waste alerts within the first week.",
},
{
q: "Can I cancel anytime?",
a: "Yes. Month-to-month billing, no long-term contracts.",
},
{
q: "Is my data secure?",
a: "Yes. Bank-level encryption, TLS 1.2+, and no data resale — ever.",
},
{
q: "How long is onboarding?",
a: "Most restaurants finish setup in under 60 minutes.",
},
]}
/>
</div>
</section>

{/* CTA + TRUST STRIP */}
<section id="cta" className="section">
<div className="container text-center">
<div className="glass rounded-3xl p-10 md:p-14">
<h3 className="text-3xl font-bold mb-3">Ready to see hidden profit?</h3>
<p className="text-lg mb-7 text-white/85">
Join restaurants using DishFuse to boost margins and cut waste with AI.
</p>
<a href="#pricing" className="btn btn-primary">
Start Free 14-Day Trial
</a>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<TrustBadge text="Backed by Stripe" icon="shield" />
<TrustBadge text="Bank-Level Security" icon="lock" />
<TrustBadge text="Trusted by 500+ Restaurants" icon="chef" />
<TrustBadge text="Setup in Minutes" icon="gear" />
<TrustBadge text="Cancel Anytime" icon="bulb" />
<TrustBadge text="99.9% Uptime" icon="shield" />
</div>
</div>
</div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 py-10 bg-[#0E1A30]">
<div className="container flex flex-col items-center gap-4">
<img src={LOGO_FOOTER} alt="DishFuse" className="h-6 md:h-7 logo-glow" />
<div className="text-white/60 text-sm">
© {new Date().getFullYear()} DishFuse. All rights reserved.
</div>
</div>
</footer>
</main>
);
}

/* ---------- FAQ Accordion ---------- */
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
>
<span className="font-semibold">{it.q}</span>
<span aria-hidden className="text-white/70">{isOpen ? "−" : "+"}</span>
</button>
{isOpen && <div className="faq-a">{it.a}</div>}
</div>
);
})}
</div>
);
}

/* ---------- Trust Badge ---------- */
function TrustBadge({ text, icon = "shield" }) {
const Icon = () => {
switch (icon) {
case "gear":
return (
<svg viewBox="0 0 24 24" fill="none">
<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="url(#grad)" strokeWidth="2" />
<path
d="M19 12a7 7 0 00-.1-1l2.1-1.5-2-3.5-2.5 1a7 7 0 00-1.7-1L14 2h-4l-.8 3a7 7 0 00-1.7 1l-2.5-1-2 3.5L4.1 11a7 7 0 000 2l-2.1 1.5 2 3.5 2.5-1a7 7 0 001.7 1L10 22h4l.8-3a7 7 0 001.7-1l2.5 1 2-3.5L18.9 13c.1-.33.1-.67.1-1z"
stroke="url(#grad)"
strokeWidth="2"
/>
<defs>
<linearGradient id="grad" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="#F4C762" />
<stop offset="1" stopColor="#EEB94A" />
</linearGradient>
</defs>
</svg>
);
case "lock":
return (
<svg viewBox="0 0 24 24" fill="none">
<path d="M7 10V8a5 5 0 0110 0v2" stroke="url(#grad2)" strokeWidth="2" />
<rect x="5" y="10" width="14" height="10" rx="2" stroke="url(#grad2)" strokeWidth="2" />
<defs>
<linearGradient id="grad2" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="#F4C762" />
<stop offset="1" stopColor="#EEB94A" />
</linearGradient>
</defs>
</svg>
);
case "chef":
return (
<svg viewBox="0 0 24 24" fill="none">
<path d="M6 10a4 4 0 118-1 3 3 0 113 4H6z" stroke="url(#grad3)" strokeWidth="2" />
<path d="M7 22v-5h10v5M9 17v-3h6v3" stroke="url(#grad3)" strokeWidth="2" />
<defs>
<linearGradient id="grad3" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="#F4C762" />
<stop offset="1" stopColor="#EEB94A" />
</linearGradient>
</defs>
</svg>
);
case "bulb":
return (
<svg viewBox="0 0 24 24" fill="none">
<path
d="M12 2a7 7 0 00-4 12c.8.7 1 1.7 1 2h6c0-1 .2-1.3 1-2a7 7 0 00-4-12zM9 18h6M10 21h4"
stroke="url(#grad4)"
strokeWidth="2"
/>
<defs>
<linearGradient id="grad4" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="#F4C762" />
<stop offset="1" stopColor="#EEB94A" />
</linearGradient>
</defs>
</svg>
);
default:
return (
<svg viewBox="0 0 24 24" fill="none">
<path
d="M12 3l8 3v6c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V6l8-3z"
stroke="url(#grad5)"
strokeWidth="2"
/>
<defs>
<linearGradient id="grad5" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="#F4C762" />
<stop offset="1" stopColor="#EEB94A" />
</linearGradient>
</defs>
</svg>
);
}
};
return (
<div className="badge">
<Icon />
<span>{text}</span>
</div>
);
}
	
