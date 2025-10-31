"use client";
import React, { useState } from "react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setEmail("");
        setName("");
      } else {
        setError(data.message || "Subscription failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-navy-700/30 text-center flex flex-col items-center justify-center px-6 py-14">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
        Get Your <span className="text-gold-500">AI Profit Report</span>
      </h2>
      <p className="text-white/80 mb-10 max-w-lg">
        Enter your email and we’ll send a personalized DishFuse ROI report to show exactly how much profit AI can uncover for your restaurant.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-lg"
      >
        <input
          type="text"
          placeholder="Restaurant Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-5 py-3 rounded-full text-black text-base focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <input
          type="email"
          placeholder="you@restaurant.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-5 py-3 rounded-full text-black text-base focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary gold-glow w-full sm:w-auto px-8 py-3 rounded-full font-extrabold text-base transition-all hover:scale-105"
        >
          {loading ? "Submitting..." : "Get Report"}
        </button>
      </form>

      {success && (
        <p className="text-emerald-400 mt-5 text-base font-semibold">
          ✅ You’re in! Check your inbox for your AI Profit Report.
        </p>
      )}
      {error && (
        <p className="text-red-400 mt-5 text-base font-semibold">⚠️ {error}</p>
      )}

      <div className="mt-12 text-white/60 text-sm">
        100% secure • No spam • Unsubscribe anytime
      </div>
    </section>
  );
}
