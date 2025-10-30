"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ROIProfitCalculator() {
  const [revenue, setRevenue] = useState(100000);
  const [foodCost, setFoodCost] = useState(35);

  const liftMin = 0.12;
  const liftMax = 0.24;
  const grossProfit = revenue * (1 - foodCost / 100);
  const extraProfitMin = grossProfit * liftMin;
  const extraProfitMax = grossProfit * liftMax;

  // currency formatter
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section
      id="calculator"
      className="section relative overflow-hidden bg-navy-700/30"
    >
      <div className="container relative z-10">
        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-1 text-white">
                See Your Profit with{" "}
                <span className="text-gold-500">DishFuse AI</span>
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                Adjust a couple of sliders – watch your gold meter fill.
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Revenue */}
            <div>
              <div className="flex justify-between text-white/80 text-sm mb-1">
                <label htmlFor="rev">Monthly Revenue</label>
                <span className="font-semibold">{fmt.format(revenue)}</span>
              </div>
              <input
                id="rev"
                type="range"
                min={10000}
                max={200000}
                step={1000}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>$10k</span>
                <span>$200k+</span>
              </div>
            </div>

            {/* Food Cost */}
            <div>
              <div className="flex justify-between text-white/80 text-sm mb-1">
                <label htmlFor="food">Food Cost %</label>
                <span className="font-semibold">{foodCost}%</span>
              </div>
              <input
                id="food"
                type="range"
                min={20}
                max={45}
                step={1}
                value={foodCost}
                onChange={(e) => setFoodCost(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>20 %</span>
                <span>45 %</span>
              </div>
            </div>
          </div>

          {/* Result meter */}
          <div className="mt-10 space-y-3">
            <p className="text-sm text-white/70">
              Based on your numbers, DishFuse could unlock:
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              transition={{ duration: 0.6 }}
              className="h-4 rounded-full bg-white/10 overflow-hidden"
            >
              <motion.div
                key={revenue + foodCost}
                initial={{ width: 0 }}
                animate={{
                  width: "80%",
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-4 bg-gradient-to-r from-gold-500 to-gold-600"
              />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-gold-500">
              {fmt.format(extraProfitMin)} – {fmt.format(extraProfitMax)} / mo
            </h3>
            <p className="text-xs text-white/60">
              *Typical improvement range 12 – 24 % of gross profit.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="#pricing"
              className="btn btn-primary gold-glow px-8 py-4 text-lg w-full sm:w-auto text-center"
            >
              See Plans That Fit You
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
