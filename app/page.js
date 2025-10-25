"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [chat, setChat] = useState([]);
  const [step, setStep] = useState(0);

  const conversation = [
    { sender: "Chef Maria 👩‍🍳", text: "Hey DishFuse! Can you help me reduce food waste for my restaurant?" },
    { sender: "DishFuse AI 🤖", text: "Of course, Maria! I’ve analyzed your past 30 days of ingredient usage and found where you can save 22% this month." },
    { sender: "Chef Maria 👩‍🍳", text: "Wow! Can you also predict what ingredients I’ll need next week?" },
    { sender: "DishFuse AI 🤖", text: "Done ✅ — here’s your optimized order list. You just saved $1,130 in waste!" },
    { sender: "DishFuse AI 🤖", text: "Ready to boost your profits too? Let’s get started 👇" },
  ];

  useEffect(() => {
    if (step < conversation.length) {
      const timer = setTimeout(() => {
        setChat((prev) => [...prev, conversation[step]]);
        setStep((s) => s + 1);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-[#1a1a2e] text-white flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-opacity-30 backdrop-blur-lg border-b border-gray-800">
        <Image src="/logo-header.png" alt="DishFuse Logo" width={180} height={50} className="drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]" />
        <a
          href="#signup"
          className="bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] text-black font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,200,0,0.6)]"
        >
          Start Free Trial
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]">
          Boost Restaurant Profits with AI
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mb-10">
          DishFuse predicts, plans, and prevents waste — helping restaurants save thousands every month while running smoother operations.
        </p>

        {/* AI Chat Demo */}
        <div className="w-full max-w-lg bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,215,0,0.2)]">
          <div className="h-72 overflow-y-auto space-y-4">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl text-sm md:text-base ${
                  msg.sender.includes("AI")
                    ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black self-end shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    : "bg-gray-800 text-gray-100 self-start"
                }`}
              >
                <strong>{msg.sender}: </strong> {msg.text}
              </div>
            ))}
          </div>
        </div>

        <a
          id="signup"
          href="#"
          className="mt-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,200,0,0.5)]"
        >
          Try DishFuse Free Today
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 mt-16 flex flex-col items-center gap-3 border-t border-gray-800 bg-opacity-20 backdrop-blur-lg">
        <Image src="/logo-footer.png" alt="DishFuse Logo" width={140} height={40} className="opacity-90" />
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DishFuse. All rights reserved.</p>
      </footer>
    </main>
  );
}
