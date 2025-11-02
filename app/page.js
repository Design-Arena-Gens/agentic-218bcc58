"use client";

import LenisProvider from "@/components/LenisProvider";
import SnapScroll from "@/components/SnapScroll";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-black">
        <SnapScroll />
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </LenisProvider>
  );
}
