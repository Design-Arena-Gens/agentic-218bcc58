"use client";

import { motion } from "framer-motion";

const items = [
  {
    quote:
      "We consolidated 5 tools into one and doubled pipeline contribution in two quarters.",
    author: "VP Growth, B2B SaaS Unicorn",
  },
  {
    quote: "The predictive audiences were plug-and-play ? our CAC dropped 29% in 30 days.",
    author: "Head of Marketing, Fintech Scaleup",
  },
  {
    quote: "Finally a platform with real governance: data contracts, PII controls, audit logs.",
    author: "CISO, Global Marketplace",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-medium text-white/90">What leaders say</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <blockquote className="text-white/90">?{t.quote}?</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">{t.author}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
