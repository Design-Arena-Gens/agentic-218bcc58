"use client";

import { useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const data = {
  labels: Array.from({ length: 12 }, (_, i) => `M${i + 1}`),
  datasets: [
    {
      label: "Revenue",
      data: [2, 2.5, 3, 3.2, 4, 4.6, 5.2, 6, 6.4, 7.1, 8.1, 9.3],
      borderColor: "#ffffff",
      backgroundColor: (ctx) => {
        const { ctx: c } = ctx.chart;
        const gradient = c.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(255,255,255,0.35)");
        gradient.addColorStop(1, "rgba(255,255,255,0.02)");
        return gradient;
      },
      fill: true,
      tension: 0.3,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { enabled: true, mode: "index", intersect: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: "rgba(255,255,255,0.5)" } },
    y: { grid: { color: "rgba(255,255,255,0.08)" }, ticks: { color: "rgba(255,255,255,0.5)" } },
  },
};

export default function Stats() {
  return (
    <section id="stats" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-medium text-white/90">Impact</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 h-64 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <Line data={data} options={options} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <p className="text-sm text-white/60">Average ROAS</p>
          <p className="mt-2 text-4xl font-semibold">4.7?</p>
          <p className="mt-4 text-sm text-white/60">Conversion Uplift</p>
          <p className="mt-2 text-3xl font-semibold">+38%</p>
        </motion.div>
      </div>
    </section>
  );
}
