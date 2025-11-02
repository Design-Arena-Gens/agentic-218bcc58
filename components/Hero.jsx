"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Stars() {
  const ref = useRef();
  const sphere = useMemo(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      const r = 2.2 * Math.random() + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      points[i] = r * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0004;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <Stars />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-white" />
            <p className="text-xs uppercase tracking-widest text-white/70">AI Marketing Platform</p>
          </div>
          <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent md:text-6xl">
            Predict. Personalize. Perform.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
            Turn raw customer data into revenue with real-time AI audiences, automated journeys, and predictive creatives.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex h-11 items-center rounded-full bg-white px-6 font-medium text-black transition-colors hover:bg-white/90">
              Start Free Trial
            </a>
            <a href="#features" className="inline-flex h-11 items-center rounded-full border border-white/20 px-6 font-medium text-white/90 hover:bg-white/10">
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>

      <GradientVignette />
    </section>
  );
}

function GradientVignette() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -inset-[20%] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0),rgba(0,0,0,0.6))]" />
    </div>
  );
}
