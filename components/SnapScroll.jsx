"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SnapScroll() {
  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    if (!sections.length) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: () => document.body.scrollHeight - window.innerHeight,
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: 0.6,
        ease: "power1.inOut",
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return null;
}
