// app/page.jsx
"use client";

import ChatDemo from "./components/ChatDemo";

export default function Home() {
  return (
    <>
      {/* HERO — Video 1 */}
      <section className="relative flex h-[88vh] items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover opacity-30"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <img
            src="/logo-header.png"
            alt="DishFuse"
            className="mx-auto mb-6 h-12 w-auto glow-logo"
          />
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Boost Restaurant Profits with AI that Predicts, Plans & Prevents
            Waste
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Increase margins, reduce waste, and automate operations with
            DishFuse’s all-in-one restaurant AI.
          </p>
          <a
            href="#pricing"
            className="inline-block rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Start Free 14-Day Trial
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-slate-900 py-20 text-center">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Why Restaurants Love DishFuse
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {[
            {
              emoji: "🍕",
              title: "AI Menu Pricing",
              text: "Smart pricing insights that increase profits automatically.",
            },
            {
              emoji: "🏗️",
              title: "Inventory Forecasting",
              text: "Predict demand and eliminate costly waste with AI-powered forecasts.",
            },
            {
              emoji: "📊",
              title: "Profit Analytics",
              text: "See which dishes and locations perform best in real time.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur transition hover:scale-105"
            >
              <div className="mb-3 text-5xl">{c.emoji}</div>
              <h3 className="mb-2 text-2xl font-semibold">{c.title}</h3>
              <p className="text-slate-300">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE CHAT DEMO */}
      <section id="chat" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            See DishFuse in Action
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-slate-300">
            A quick peek at how a chef chats with DishFuse to cut waste, update
            prices, and auto-order — in seconds.
          </p>
          <ChatDemo />
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-t border-white/10 bg-slate-900 py-20 text-center"
      >
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">Choose Your Plan</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$99/mo",
              desc: "Perfect for single-location restaurants getting started.",
              features: ["AI Menu Insights", "Basic Analytics", "Email Support"],
            },
            {
              name: "Pro",
              price: "$199/mo",
              desc: "For growing teams who want forecasting & automation.",
              features: [
                "All Starter Features",
                "Inventory Forecasting",
                "24/7 Chat Support",
              ],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "Multi-location chains with custom needs & SSO.",
              features: [
                "All Pro Features",
                "Dedicated Account Manager",
                "Custom Integrations",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 shadow-lg transition hover:scale-105 ${
                plan.highlight
                  ? "border-emerald-400 bg-gradient-to-br from-emerald-500/15 to-blue-500/15"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="mb-2 text-2xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-slate-300">{plan.desc}</p>
              <div className="mb-6 text-4xl font-extrabold">{plan.price}</div>
              <ul className="mb-6 space-y-2 text-slate-200">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT — Video 2 */}
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-950 py-24 text-center text-white"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover opacity-35"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute left-0 top-0 h-full w-full bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Book a Demo or Get in Touch
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-slate-200">
            Let our AI specialists show how DishFuse can increase your profit
            margin in the first 30 days.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded bg-white/10 p-3 text-white placeholder-slate-400 outline-none ring-1 ring-white/20 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded bg-white/10 p-3 text-white placeholder-slate-400 outline-none ring-1 ring-white/20 focus:ring-emerald-400"
            />
            <textarea
              placeholder="Your Message"
              className="h-32 w-full rounded bg-white/10 p-3 text-white placeholder-slate-400 outline-none ring-1 ring-white/20 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

