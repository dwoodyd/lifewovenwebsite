/*
 * LIFEWOVEN useReveal hook
 * Adds 'visible' class when element enters viewport
 * Respects prefers-reduced-motion
 */
import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion, just show immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useRevealAll(selector: string, threshold = 0.1) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = document.querySelectorAll<HTMLElement>(selector);

    if (reducedMotion) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);
}
