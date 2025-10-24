"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* === LOGO === */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/images/dishfuse-logo-gold.png"
            alt="DishFuse Logo"
            className="w-10 h-10"
          />
          <span className="text-white font-bold text-xl tracking-wide">
            Dish<span className="text-emerald-400">Fuse</span>
          </span>
        </Link>

        {/* === NAVIGATION LINKS === */}
        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#features" className="hover:text-emerald-400 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-emerald-400 transition">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </a>
        </nav>

        {/* === CTA BUTTON === */}
        <a
          href="#pricing"
          className="hidden md:inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
        >
          Start Free Trial
        </a>

        {/* === MOBILE MENU TOGGLE === */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 text-center py-4 space-y-4">
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400">
            Features
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400">
            Testimonials
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400">
            Pricing
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400">
            Contact
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block bg-gradient-to-r from-emerald-400 to-blue-500 text-white mx-12 py-2 rounded-full font-semibold"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
}

