"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 text-center py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* === LOGO + TAGLINE === */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/dishfuse-logo-gold.png"
            alt="DishFuse Logo"
            className="w-14 h-14 mb-4"
          />
          <h3 className="text-white text-lg font-semibold">
            Dish<span className="text-emerald-400">Fuse</span> — Smarter, Simpler, More Profitable
          </h3>
        </div>

        {/* === NAVIGATION LINKS === */}
        <div className="flex justify-center flex-wrap gap-6 mb-8 text-sm">
          <Link href="#features" className="hover:text-emerald-400 transition">
            Features
          </Link>
          <Link href="#testimonials" className="hover:text-emerald-400 transition">
            Testimonials
          </Link>
          <Link href="#pricing" className="hover:text-emerald-400 transition">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </Link>
        </div>

        {/* === SOCIAL MEDIA ICONS === */}
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: "🐦", link: "https://twitter.com" },
            { icon: "📘", link: "https://facebook.com" },
            { icon: "📸", link: "https://instagram.com" },
            { icon: "💼", link: "https://linkedin.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition-transform duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* === COPYRIGHT === */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} DishFuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

