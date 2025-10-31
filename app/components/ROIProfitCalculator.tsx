"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ROIProfitCalculator() {
  const [revenue, setRevenue] = useState(100000);
  const [foodCost, setFoodCost] = useState(35);
  const calcRef = useRef<HTMLDivElement | null>(null);

  const LIFT_MIN = 0.12;
  const LIFT_MAX = 0.24;
  const grossProfit = Math.max(0, revenue * (1 - foodCost / 100));
  const targetMin = grossProfit * LIFT_MIN;
  const targetMax = grossProfit * LIFT_MAX;

  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section id="calculator" ref={calcRef} className="section relative overflow-hidden">
      <div className="container relative z-10">
        <div className="glass rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            See Your Profit with <span className="text-gold-500">DishFuse</span>
          </h2>
          <p className="text-white/80 mb-8">
            Adjust a few numbers and see how AI pricing and forecasting can add thousands in profit.
          </p>

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
                onChange={(e) => setRevenue(parseInt(e.target.value))}
                className="w-full accent-gold-500"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>$10k</span>
                <span>$200k+</span>
              </div>
            </div>

            {/* Food Cost % */}
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
                onChange={(e) => setFoodCost(parseInt(e.target.value))}
                className="w-full accent-gold-500"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>20%</span>
                <span>45%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-10 text-center">
            <p className="text-white/70 text-sm mb-3">
              Based on your numbers, DishFuse could unlock:
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
              className="h-3 rounded-full bg-white/10 overflow-hidden mb-4"
            >
              <motion.div
                key={revenue + foodCost}
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-3 bg-gradient-to-r from-gold-500 to-gold-600"
              />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gold-500">
              {fmt.format(targetMin)} – {fmt.format(targetMax)} / mo
            </h3>
            <p className="text-xs text-white/60 mt-2">
              *Typical improvement range 12 – 24 % of gross profit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
