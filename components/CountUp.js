"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Counts up numeric values on scroll into view.
 * Non-numeric values (e.g. "24/7") render statically.
 * Handles suffixes/prefixes like "+", "%", "K+".
 */
export default function CountUp({ value }) {
  const ref = useRef(null);
  const isNumeric = /\d/.test(value) && !value.includes("/");
  const suffix = value.replace(/[\d,]/g, "");
  const target = isNumeric ? parseInt(value.replace(/[^\d]/g, ""), 10) : 0;

  useEffect(() => {
    if (!isNumeric || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 95%", once: true },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toLocaleString("en-US") + suffix;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [isNumeric, target, suffix]);

  return <span ref={ref}>{isNumeric ? `0${suffix}` : value}</span>;
}
