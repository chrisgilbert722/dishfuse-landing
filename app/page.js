"use client";

import React from "react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION — Video 1 */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-slicing-fresh-vegetables-1831/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a]/80 to-[#0f172a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <img
            src="/logo-header.png"
            alt="DishFuse Logo"
            className="mx-auto mb-6 w-32 md:w-40"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Boost Restaurant Profits with AI that Predicts, Plans & Prevents Waste
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            DishFuse helps restaurants increase profit margins, reduce waste, and
            optimize operations using AI.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0f172a] px-8 py-4 rounded-full font-semibold animate-pulse shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Start Free 14-Day Trial
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#0f172a] text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Why Restaurants Love DishFuse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
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
              text: "See which dishes and locations perform best in real-time.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span className="text-5xl mb-4 inline-block">{card.emoji}</span>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI CHAT DEMO */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center text-white">
        <h2 className="text-4xl font-bold mb-12">See DishFuse AI in Action</h2>
        <div className="max-w-3xl mx-auto bg-white/10 border border-white/10 p-8 rounded-2xl backdrop-blur-lg text-left shadow-xl">
          <div className="space-y-4">
            <p className="text-emerald-400 font-semibold">👩‍🍳 Chef Maria:</p>
            <p className="ml-6 text-gray-200">
              “We waste too much produce every week. Can AI really help reduce that?”
            </p>
            <p className="text-blue-400 font-semibold mt-6">🤖 DishFuse AI:</p>
            <p className="ml-6 text-gray-200">
              “Absolutely! Based on your past 3 months of sales, I predict a 27%
              reduction in waste with smart ordering suggestions. Would you like to
              see a forecast?”
            </p>
            <a
              href="#pricing"
              className="block text-center mt-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0f172a] px-8 py-4 rounded-full font-semibold animate-pulse shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Try DishFuse AI Free
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-[#0f172a] text-center border-t border-white/10">
        <h2 className="text-4xl font-bold text-white mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Starter",
              price: "$99/mo",
              desc: "Perfect for small restaurants just getting started.",
              features: ["AI Menu Insights", "Basic Analytics Dashboard", "Email Support"],
            },
            {
              name: "Pro",
              price: "$199/mo",
              desc: "Ideal for growing restaurants that want deeper insights.",
              features: ["All Starter Features", "Inventory Forecasting", "24/7 Chat Support"],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "For large restaurant chains with custom needs.",
              features: ["All Pro Features", "Dedicated Account Manager", "Custom Integrations"],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-gradient-to-br from-amber-400/20 to-yellow-400/20 border-amber-400"
                  : "bg-white/10 border-white/10"
              } shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-4">{plan.desc}</p>
              <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
              <ul className="text-gray-300 mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0f172a] px-6 py-3 rounded-full font-semibold animate-pulse shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION — Video 2 */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Book a Demo or Get in Touch</h2>
          <p className="text-gray-200 mb-10">
            Have questions? Let our AI experts show you how DishFuse can transform
            your restaurant.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white h-32"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 rounded-full font-semibold text-[#0f172a] animate-pulse hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-center text-gray-400 py-8 text-sm border-t border-white/10">
        <img
          src="/logo-footer.png"
          alt="DishFuse Logo"
          className="mx-auto mb-4 w-20 opacity-80"
        />
        <p>© {new Date().getFullYear()} DishFuse. All rights reserved.</p>
      </footer>
    </>
  );
}

