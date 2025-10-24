"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10 py-12 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* === LOGO SECTION === */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/images/logo-footer.png" // your footer logo
            alt="DishFuse Logo"
            width={56}
            height={56}
            className="rounded-lg"
          />
          <p className="text-gray-400 text-sm max-w-xs">
            AI that helps restaurants predict, plan, and prevent waste — boosting profit and sustainability.
          </p>
        </div>

        {/* === LINKS SECTION === */}
        <div className="flex flex-col items-center md:items-center gap-2">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <Link href="#features" className="text-gray-300 hover:text-white text-sm">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white text-sm">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white text-sm">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white text-sm">
            Contact
          </Link>
        </div>

        {/* === SOCIAL & COPYRIGHT === */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} DishFuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
