// 섹션 전환 애니메이션 훅
"use client";

import { useRef, useCallback } from "react";

interface TransitionOptions {
  fadeOutDuration?: number;
  overlayDuration?: number;
  onComplete?: () => void;
}

export function useSectionTransition() {
  const transitionOverlayRef = useRef<HTMLDivElement | null>(null);

  const createTransitionOverlay = useCallback(
    (message: string): HTMLDivElement => {
      const overlay = document.createElement("div");
      overlay.className = "section-transition-overlay";
      overlay.innerHTML = `
        <div class="transition-content">
          <div class="font-mono text-primary text-sm tracking-[0.3em]">${message}</div>
        </div>
      `;
      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.classList.add("active");
      });

      return overlay;
    },
    []
  );

  const fadeOutContent = useCallback(
    <T extends HTMLElement>(contentRef: React.RefObject<T | null>, duration = 1000) => {
      if (contentRef.current) {
        contentRef.current.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "translateY(-20px)";
      }
    },
    []
  );

  const playTransition = useCallback(
    (
      message: string,
      targetSelector: string,
      options: TransitionOptions = {}
    ) => {
      const {
        overlayDuration = 1500,
        onComplete,
      } = options;

      return new Promise<void>((resolve) => {
        const overlay = createTransitionOverlay(message);

        setTimeout(() => {
          const target = document.querySelector<HTMLElement>(targetSelector);
          if (target) {
            const offset =
              target.getBoundingClientRect().top + window.scrollY - 24;
            window.scrollTo({
              top: Math.max(offset, 0),
              behavior: "auto",
            });
          }

          overlay.addEventListener(
            "animationend",
            () => {
              overlay.remove();
              onComplete?.();
              resolve();
            },
            { once: true }
          );
        }, overlayDuration);
      });
    },
    [createTransitionOverlay]
  );

  return {
    transitionOverlayRef,
    fadeOutContent,
    playTransition,
    createTransitionOverlay,
  };
}

