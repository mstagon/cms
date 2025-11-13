// 스크롤 위치에 따라 요소가 자연스럽게 드러나도록 IntersectionObserver 로직을 재사용합니다.
"use client";

import { MutableRefObject, useEffect } from "react";

interface ScrollRevealOptions {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(
  containerRef: MutableRefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {},
) {
  const {
    selector = '[data-animate="scroll"]',
    threshold = 0.2,
    rootMargin = "0px",
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") {
      return;
    }

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>(selector),
    );

    if (!targets.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      targets.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    targets.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [containerRef, selector, threshold, rootMargin]);
}


