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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/90 to-[#0f172a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <img
            src="/images/dishfuse-logo-gold.png"
            alt="DishFuse Logo"
            className="mx-auto w-20 h-20 mb-6"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Boost Restaurant Profits with <span className="text-emerald-400">AI</span> That Thinks Ahead
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            DishFuse helps restaurants increase profits, reduce waste, and run smarter — powered by AI.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Start Free 14-Day Trial
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#0f172a] text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Why Restaurants Choose DishFuse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              emoji: "💡",
              title: "AI Menu Pricing",
              text: "Maximize profits automatically with real-time smart pricing suggestions.",
            },
            {
              emoji: "📦",
              title: "Inventory Forecasting",
              text: "Predict stock levels and reduce costly waste using AI demand modeling.",
            },
            {
              emoji: "📊",
              title: "Profit Analytics",
              text: "View performance dashboards for every dish and location — instantly.",
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

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          What Restaurant Owners Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              quote:
                "DishFuse changed our pricing strategy overnight — profits are up 22%.",
              name: "Sarah, Bistro Bella",
            },
            {
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              quote:
                "We cut our food waste in half. The AI forecasting is shockingly accurate.",
              name: "James, Urban Eats",
            },
            {
              img: "https://randomuser.me/api/portraits/men/85.jpg",
              quote:
                "I check DishFuse every morning — it’s like having a full-time analyst for my restaurant.",
              name: "David, GreenLeaf Café",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg"
            >
              <img
                src={t.img}
                alt="User"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-300 mb-2">“{t.quote}”</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* AI CHAT SIMULATION SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center text-white">
        <h2 className="text-4xl font-bold mb-12">See DishFuse AI in Action</h2>
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl text-left relative">
          <div className="mb-6">
            <p className="text-emerald-400 font-semibold mb-2">🍽️ Restaurant Owner:</p>
            <p className="text-gray-200 italic">
              “Hey DishFuse, we’re wasting too many ingredients every week — how can we fix it?”
            </p>
          </div>
          <div className="mb-6">
            <p className="text-blue-400 font-semibold mb-2">🤖 DishFuse AI:</p>
            <div className="animate-pulse">
              <p className="text-gray-100">
                “Analyzing your menu and sales data...”
              </p>
              <p className="text-gray-100 mt-2">
                “Recommendation: Reduce your ‘Signature Pasta’ batch by 18% on weekdays. You’ll save
                <span className="text-emerald-400 font-semibold"> $750/month</span> in ingredient costs.”
              </p>
            </div>
          </div>
          <div>
            <p className="text-blue-400 font-semibold mb-2">🤖 DishFuse AI:</p>
            <p className="text-gray-100">
              “Your best-selling dish this week is the Spicy Tuna Roll 🍣 — profit margin
              increased by <span className="text-emerald-400 font-semibold">12%</span> using AI pricing.”
            </p>
          </div>
          <div className="absolute top-4 right-4 text-xs text-gray-400">Live AI Demo</div>
        </div>
        <p className="text-gray-400 mt-8">
          *DishFuse AI constantly learns from your menu, sales, and inventory to increase profits.*
        </p>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-[#0f172a] text-center border-t border-white/10">
        <h2 className="text-4xl font-bold text-white mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Starter",
              price: "$99/mo",
              desc: "For small restaurants ready to grow with AI insights.",
              features: [
                "AI Menu Recommendations",
                "Basic Performance Analytics",
                "Email Support",
              ],
            },
            {
              name: "Pro",
              price: "$199/mo",
              desc: "Best for expanding restaurants needing full automation.",
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
              desc: "Tailored AI solutions for chains and franchises.",
              features: [
                "All Pro Features",
                "Dedicated Account Manager",
                "Custom Integrations",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-emerald-400"
                  : "bg-white/10 border-white/10"
              } shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-300 mb-4">{plan.desc}</p>
              <div className="text-4xl font-bold text-white mb-6">
                {plan.price}
              </div>
              <ul className="text-gray-300 mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION — Video 2 */}
      <section className="relative py-24 text-center text-white overflow-hidden" id="contact">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Book a Demo or Get in Touch</h2>
          <p className="text-gray-200 mb-10">
            Have questions? Let our AI experts show you how DishFuse can
            transform your restaurant operations.
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
              className="bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

