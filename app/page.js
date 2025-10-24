"use client";
import React, { useState } from "react";

export default function Home() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 99,
      yearly: 950,
      desc: "Perfect for small restaurants just getting started.",
      features: ["AI Menu Insights", "Basic Analytics Dashboard", "Email Support"],
    },
    {
      name: "Growth",
      monthly: 199,
      yearly: 1900,
      desc: "Ideal for growing restaurants that want deeper insights.",
      features: [
        "All Starter Features",
        "Inventory Forecasting",
        "24/7 Chat Support",
        "Profitability Reports",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      desc: "For large restaurant chains with custom needs.",
      features: [
        "All Pro Features",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
    },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Boost Restaurant Profits with AI that Predicts, Plans & Prevents Waste
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            DishFuse helps restaurants increase profit margins, reduce waste, and
            optimize operations using AI.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Start Free 14-Day Trial
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#0f172a] text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Why Restaurants Love DishFuse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { emoji: "🍕", title: "AI Menu Pricing", text: "Smart pricing insights that increase profits automatically." },
            { emoji: "🏗️", title: "Inventory Forecasting", text: "Predict demand and eliminate costly waste with AI-powered forecasts." },
            { emoji: "📊", title: "Profit Analytics", text: "See which dishes and locations perform best in real time." },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span className="text-5xl mb-4 inline-block">{c.emoji}</span>
              <h3 className="text-2xl font-semibold mb-3">{c.title}</h3>
              <p className="text-gray-300">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI PROFIT CALCULATOR */}
      <section className="relative py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.coverr.co/videos/coverr-frying-pan-action-1080p.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See How Much Profit You Could Add Each Month 💸
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Use our AI calculator to estimate your extra monthly profit with DishFuse.
          </p>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg max-w-2xl mx-auto">
            <form className="space-y-6 text-left">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Average Monthly Revenue</label>
                <input id="revenue" type="number" placeholder="e.g. 25000" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Estimated Food Waste (%)</label>
                <input id="waste" type="number" placeholder="e.g. 15" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400" />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    const rev = document.getElementById("revenue").value;
                    const waste = document.getElementById("waste").value;
                    const saved = rev * (waste / 100) * 0.4;
                    const counter = document.getElementById("profitCounter");
                    if (counter) {
                      let cur = 0;
                      const tgt = Math.round(saved);
                      const dur = 1000;
                      const inc = tgt / (dur / 16);
                      const animate = () => {
                        cur += inc;
                        if (cur < tgt) {
                          counter.innerText = "$" + Math.floor(cur).toLocaleString();
                          requestAnimationFrame(animate);
                        } else {
                          counter.innerText = "$" + tgt.toLocaleString();
                        }
                      };
                      animate();
                    }
                  }}
                  className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Calculate My Profit
                </button>
              </div>
            </form>

            <div className="mt-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Your Monthly AI Profit Boost:</h3>
              <p id="profitCounter" className="text-5xl font-extrabold text-emerald-400">$0</p>
              <p className="text-gray-400 mt-4 text-sm italic">
                (DishFuse customers report an average 18–25% profit increase.)
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Start Free 14-Day Trial
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          What Restaurants Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              quote: "DishFuse completely changed how we price our menu. Profits are up 20%!",
              name: "Sarah, Bistro Bella",
            },
            {
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              quote: "We waste 40% less food now. The AI forecasting is spot on!",
              name: "James, Urban Eats",
            },
            {
              img: "https://randomuser.me/api/portraits/men/85.jpg",
              quote: "The profit analytics dashboard shows us exactly where we win.",
              name: "David, GreenLeaf Café",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg">
              <img src={t.img} alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic text-gray-300 mb-2">“{t.quote}”</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-[#0f172a] text-center border-t border-white/10">
        <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
        <p className="text-gray-400 mb-10">
          Flexible pricing that scales with your restaurant.
        </p>
        <div className="flex justify-center items-center mb-12 space-x-4">
          <span className={`text-gray-300 ${!yearly ? "font-bold text-white" : ""}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" onChange={() => setYearly(!yearly)} />
            <div className="w-14 h-8 bg-gray-600 rounded-full peer peer-checked:bg-emerald-500 transition-all"></div>
            <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all peer-checked:translate-x-6"></div>
          </label>
          <span className={`text-gray-300 ${yearly ? "font-bold text-white" : ""}`}>
            Annually <span className="text-emerald-400">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-10 rounded-2xl border ${
                p.highlight
                  ? "bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-emerald-400 shadow-2xl transform scale-105"
                  : "bg-white/10 border-white/10 shadow-lg"
              } hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{p.name}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="text-5xl font-bold text-white mb-6">
                {p.monthly === "Custom"
                  ? "Custom"
                  : `$${yearly ? p.yearly : p.monthly}`}
                <span className="text-lg font-medium text-gray-400">
                  {p.monthly !== "Custom" ? (yearly ? "/yr" : "/mo") : ""}
                </span>
              </div>
              <ul className="text-gray-300 mb-8 space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                {p.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT — Video 2 */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-40">
          <source src="https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Book a Demo or Get in Touch</h2>
          <p className="text-gray-200 mb-10">
            Have questions? Let our AI experts show you how DishFuse can transform your restaurant.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white h-32" />
            <button type="submit" className="bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-center text-gray-400 py-8 text-sm border-t border-white/10">
        © {new Date().getFullYear()} DishFuse. All rights reserved.
      </footer>
    </>
  );
}
