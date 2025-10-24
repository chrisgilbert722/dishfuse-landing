"use client";

import React from "react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
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

        {/* Overlay Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a]/80 to-[#0f172a]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Boost Restaurant Profits with AI that Predicts, Plans & Prevents
            Waste
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            DishFuse helps restaurants increase profit margins, reduce waste, and
            optimize operations using AI.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Start Free 14-Day Trial
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#0f172a] text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-white mb-12"
        >
          Why Restaurants Love DishFuse
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Card 1 */}
          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span className="text-5xl mb-4 inline-block">🍕</span>
            <h3 className="text-2xl font-semibold mb-3">AI Menu Pricing</h3>
            <p className="text-gray-300">
              Smart pricing insights that increase profits automatically.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span className="text-5xl mb-4 inline-block">🏗️</span>
            <h3 className="text-2xl font-semibold mb-3">Inventory Forecasting</h3>
            <p className="text-gray-300">
              Predict demand and eliminate costly waste with AI-powered
              forecasts.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span className="text-5xl mb-4 inline-block">📊</span>
            <h3 className="text-2xl font-semibold mb-3">Profit Analytics</h3>
            <p className="text-gray-300">
              See which dishes and locations perform best in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-white mb-12"
        >
          What Restaurants Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div
            data-aos="zoom-in"
            className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic text-gray-300 mb-2">
              “DishFuse completely changed how we price our menu. Profits are up
              25% in just two months.”
            </p>
            <h4 className="text-white font-semibold">– Maria G.</h4>
            <p className="text-sm text-gray-400">Restaurant Owner</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic text-gray-300 mb-2">
              “We waste 40% less food now. The AI forecasting is spot-on.”
            </p>
            <h4 className="text-white font-semibold">– David L.</h4>
            <p className="text-sm text-gray-400">Head Chef</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg"
          >
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic text-gray-300 mb-2">
              “The profit analytics dashboard shows us exactly where we win.”
            </p>
            <h4 className="text-white font-semibold">– Jason K.</h4>
            <p className="text-sm text-gray-400">Franchise Manager</p>
          </div>
        </div>
      </section>
    </>
  );
}


