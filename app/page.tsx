"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handle = () => setIsMobile(mq.matches);
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return (
    <main>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-800/70 backdrop-blur-md">
        <div className="container flex justify-between items-center py-3">
          <Image
            src="/logo-header.png"
            alt="DishFuse"
            width={140}
            height={36}
            priority
          />
          <nav className="hidden md:flex gap-10 text-white/80 text-sm">
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
              Demo
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#pricing" className="btn btn-ghost px-4 py-2">
              Login
            </a>
            <a
              href="#cta"
              className="btn btn-primary gold-glow px-5 py-2.5"
            >
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
          preload="metadata"
          poster="/poster-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ filter: "brightness(1.18) contrast(1.06)" }}
        >
          <source
            src={isMobile ? "/video/hero-720.mp4" : "/video/hero-1080.mp4"}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/35" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            {/* Animated intro line */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-sm text-white/90">
                AI for restaurants — not spreadsheets
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Turn food costs into{" "}
              <span className="text-gold-500">predictable profit</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
              DishFuse uses AI to price menus, forecast inventory, and cut
              waste — increasing margins without working longer hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#pricing"
                className="btn btn-primary gold-glow px-6 py-3 text-base"
              >
                Start Free 14-Day Trial
              </a>
              <a href="#demo" className="btn btn-ghost px-5 py-3 text-base">
                Watch Live Demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-10">
              {[
                ["/aws.png", "Powered by AWS"],
                ["/stripe.png", "Secure Payments by Stripe"],
                ["/encryption.png", "Bank-Level Encryption"],
                ["/ai.png", "AI-Powered Accuracy"],
                ["/support.png", "24/7 Support"],
              ].map(([src, alt]) => (
                <Image
                  key={src}
                  src={src as string}
                  alt={alt as string}
                  width={120}
                  height={40}
                  className="opacity-90 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>

          {/* KPI Cards */}
          <div className="glass rounded-2xl p-5 md:p-6">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { k: "+27%", d: "Avg margin lift" },
                { k: "−42%", d: "Less food waste" },
                { k: "5 min", d: "Weekly ordering" },
              ].map((x) => (
                <div
                  key={x.d}
                  className="rounded-2xl p-4 border border-white/10 bg-[linear-gradient(160deg,#0f1a33,#0b1222)] text-center"
                >
                  <div className="text-2xl font-extrabold text-gold-500">
                    {x.k}
                  </div>
                  <div className="text-white/75 text-sm">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-white/60 text-center">
              *Based on early pilot results across small single-location
              restaurants.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section">
        <div className="container">
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
              Ready to see hidden profit?
            </h3>
            <p className="text-white/80 mb-7">
              Join restaurants using DishFuse to boost margins and cut waste
              with AI.
            </p>
            <a
              href="#pricing"
              className="btn btn-primary gold-glow px-8 py-4 text-lg"
            >
              Start Free 14-Day Trial
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
