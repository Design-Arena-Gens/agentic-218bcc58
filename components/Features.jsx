"use client";

import { motion } from "framer-motion";
import { Sparkles, LineChart, Boxes } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Audiences",
    desc: "Cluster users in real time across channels with streaming ML",
  },
  {
    icon: LineChart,
    title: "Predictive LTV",
    desc: "Anticipate churn, LTV and CAC payback with probabilistic models",
  },
  { icon: Boxes, title: "Creative Gen", desc: "Auto-generate and test creative variants with guardrails" },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-medium text-white/90">Features</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-70" />
            <f.icon className="mb-4 h-6 w-6 text-white" />
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
