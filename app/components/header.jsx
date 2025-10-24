"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#0f172a]/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* === LOGO === */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/dishfuse-logo-gold.png" // your uploaded logo file
            alt="DishFuse Logo"
            width={48}
            height={48}
            className="logo-glow rounded-xl"
          />
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Dish<span className="text-emerald-400">Fuse</span>
          </h1>
        </div>

        {/* === NAVIGATION === */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-white transition"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-300 hover:text-white transition"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        {/* === LOGIN / CTA === */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-300 hover:text-emerald-400 transition"
          >
            Login
          </Link>
          <a
            href="#pricing"
            className="hidden sm:inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-glow"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
