"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    tagline: "For early teams validating AI marketing",
    features: ["1,000 contacts", "2 journeys", "Community support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$299",
    tagline: "Predictive audiences & multi-channel automation",
    features: ["50,000 contacts", "Unlimited journeys", "Predictive LTV", "A/B creative"],
    cta: "Start 14-day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "SLA, SSO, governance & private cloud",
    features: ["SAML/SSO", "Dedicated support", "VPC deployment", "Data contracts"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-medium text-white/90">Pricing</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex flex-col rounded-2xl border border-white/10 p-6 backdrop-blur ${
              t.popular ? "bg-white/10" : "bg-white/5"
            }`}
          >
            {t.popular && (
              <span className="absolute right-4 top-4 rounded-full bg-white px-2 py-1 text-xs font-medium text-black">
                Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="mt-1 text-sm text-white/70">{t.tagline}</p>
            <p className="mt-6 text-4xl font-semibold">{t.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant={t.popular ? "default" : "outline"} className="w-full">
                {t.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
