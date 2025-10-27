"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [chatStep, setChatStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const timeoutsRef = useRef([]);
  const runningRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    runningRef.current = true;
    loopChat();
    return () => {
      runningRef.current = false;
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  function loopChat() {
    timeoutsRef.current.forEach(clearTimeout);
    setChatStep(0);
    const t = [];
    t.push(setTimeout(() => setChatStep(1), 3000));
    t.push(setTimeout(() => setChatStep(2), 7000));
    t.push(setTimeout(() => setChatStep(3), 11000));
    t.push(setTimeout(() => setChatStep(4), 16000));
    t.push(
      setTimeout(() => runningRef.current && loopChat(), 21000)
    );
    timeoutsRef.current = t;
  }

  return (
    <main className="min-h-screen bg-[#0B1222] text-white">
      <style jsx global>{`
        :root {
          --gold: #f4c762;
          --gold2: #eeb94a;
        }
        .btn {
          border-radius: 999px;
          font-weight: 700;
          padding: 12px 20px;
          transition: all 0.2s ease;
        }
        .btn-primary {
          color: #0b1222;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          box-shadow: 0 8px 20px rgba(244, 199, 98, 0.25);
        }
        .btn-primary:hover {
          box-shadow: 0 14px 34px rgba(244, 199, 98, 0.35);
          transform: translateY(-1px);
        }
        .btn-ghost {
          border: 2px solid rgba(255, 255, 255, 0.8);
          color: white;
        }
        .section {
          padding: 72px 20px;
        }
        @media (max-width: 768px) {
          .btn {
            padding: 10px 16px;
            font-size: 14px;
          }
          .section {
            padding: 42px 18px;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,18,34,0.7)] backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-4">
          <img src="/logo-header.png" alt="DishFuse logo" className="h-10 w-auto" />
          <nav className="hidden md:flex gap-12 text-white/80 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#demo" className="hover:text-white">Live Demo</a>
          </nav>
          <div className="flex gap-2">
            <a href="#pricing" className="btn btn-ghost">See Plans</a>
            <a href="#cta" className="btn btn-primary">Start Free Trial</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[84vh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/poster-hero.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1222]/20 via-[#0B1222]/30 to-[#0B1222]/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center py-16 px-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">AI for restaurants — not spreadsheets</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Turn food costs into{" "}
              <span style={{ color: "var(--gold)" }}>predictable profit</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              DishFuse uses AI to price your menu, forecast inventory, and cut waste — so you increase margins without working longer hours.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a href="#pricing" className="btn btn-primary">Start Free 14-Day Trial</a>
              <a href="#demo" className="btn btn-ghost">Watch Live Demo</a>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-8 flex flex-col items-center gap-y-3">
              <div className="flex justify-center gap-8 md:gap-10">
                <img src="/aws.png" alt="AWS" width="110" height="40" />
                <img src="/stripe.png" alt="Stripe" width="110" height="40" />
                <img src="/ai.png" alt="OpenAI" width="110" height="40" />
              </div>
              <div className="flex justify-center gap-8 md:gap-10">
                <img src="/encryption.png" alt="SSL Secure" width="110" height="40" />
                <img src="/support.png" alt="24/7 Support" width="110" height="40" />
              </div>
            </div>
          </div>

          {/* KPI Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { k: "+27%", d: "Avg margin lift" },
                { k: "−42%", d: "Less food waste" },
                { k: "5 min", d: "Weekly ordering" },
              ].map((x) => (
                <div key={x.d}>
                  <div className="text-2xl font-extrabold" style={{ color: "var(--gold)" }}>{x.k}</div>
                  <div className="text-white/70 text-sm">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-white/60 text-center">
              *Based on early pilot results across single-location restaurants.
            </div>
          </div>
        </div>
      </section>

      {/* CHAT DEMO */}
      <section id="demo" className="relative section overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/poster-chat.jpg"
        >
          <source src="/chat.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1222]/50 to-[#0B1222]/70" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Chef Maria × DishFuse AI</h2>
          <p className="text-white/80 mb-8">See how owners get answers in seconds.</p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              {mounted && (
                <div className="mb-3 rounded-xl bg-white/10 p-3">
                  Hey DishFuse — what price should I set for our Margherita pizza this weekend?
                </div>
              )}
              {chatStep >= 1 && (
                <div className="mb-3 rounded-xl bg-white/5 border border-white/10 p-3">
                  Based on cost trends and demand spikes Fri–Sun, target price <b style={{ color: "var(--gold)" }}>$15.50 – $16.25</b> to keep margin <b style={{ color: "var(--gold)" }}>31 – 33%</b>.
                </div>
              )}
              {chatStep >= 2 && (
                <div className="mb-3 rounded-xl bg-white/10 p-3">
                  Great — how much mozzarella should I order?
                </div>
              )}
              {chatStep >= 3 && (
                <div className="mb-3 rounded-xl bg-white/5 border border-white/10 p-3">
                  Forecast <b style={{ color: "var(--gold)" }}>18.4 lbs</b> for 7 days. Adding 8% buffer → <b style={{ color: "var(--gold)" }}>19.9 lbs</b>.
                </div>
              )}
              {chatStep >= 4 && (
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  Want me to generate a pre-approved buy list and push to your vendor?
                  <div className="mt-3 text-center">
                    <a href="#pricing" className="btn btn-primary">Start Free 14-Day Trial</a>
                  </div>
                </div>
              )}
            </div>

            <div className="grid gap-4">
              {[
                ["Price with confidence", "Hit target margins without guesswork."],
                ["Order exactly what you need", "Prevent over-stock and 86s automatically."],
                ["See profit clearly", "Know which dishes and days drive money."],
              ].map(([h, p]) => (
                <div key={h} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                  <div className="font-semibold mb-1">{h}</div>
                  <p className="text-white/70 text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 bg-[#0A1120]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-3">
          <img src="/logo-footer.png" alt="DishFuse" className="h-6 md:h-7" />
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} DishFuse. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
