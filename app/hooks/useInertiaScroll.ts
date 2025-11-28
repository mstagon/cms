// 관성 스크롤 훅
"use client";

import { useEffect, useRef, RefObject, useCallback } from "react";

interface InertiaScrollOptions {
  shouldTrigger: () => boolean;
  onTrigger: () => void;
  enabled?: boolean;
}

export function useInertiaScroll(
  sectionRef: RefObject<HTMLElement | null>,
  options: InertiaScrollOptions
) {
  const { shouldTrigger, onTrigger, enabled = true } = options;
  const isInertiaScrollingRef = useRef(false);
  const inertiaTimeoutRef = useRef<number | null>(null);

  const isSectionInViewport = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }, [sectionRef]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !enabled) return;

    const handleWheel = (event: WheelEvent) => {
      // 관성 스크롤이 진행 중이면 모든 스크롤 차단
      if (isInertiaScrollingRef.current) {
        event.preventDefault();
        return;
      }

      // 아래로 스크롤할 때만 처리
      if (event.deltaY <= 0) {
        return;
      }

      // 섹션이 뷰포트에 있으면 항상 스크롤 차단
      if (isSectionInViewport()) {
        event.preventDefault();

        // 관성 스크롤 조건을 만족하면 트리거
        if (shouldTrigger()) {
          isInertiaScrollingRef.current = true;
          onTrigger();

          if (inertiaTimeoutRef.current) {
            clearTimeout(inertiaTimeoutRef.current);
          }

          inertiaTimeoutRef.current = window.setTimeout(() => {
            isInertiaScrollingRef.current = false;
            inertiaTimeoutRef.current = null;
          }, 1500);
        }
        return;
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      // 관성 스크롤이 진행 중이면 모든 터치 스크롤 차단
      if (isInertiaScrollingRef.current) {
        event.preventDefault();
        return;
      }

      if (touchStartY === 0 || !section) {
        return;
      }

      // 섹션이 뷰포트에 있으면 항상 스크롤 차단
      if (isSectionInViewport()) {
        event.preventDefault();

        const currentY = event.touches[0]?.clientY ?? touchStartY;
        const delta = touchStartY - currentY;

        // 아래로 스와이프할 때만 관성 스크롤 트리거
        if (delta > 60 && shouldTrigger()) {
          isInertiaScrollingRef.current = true;
          onTrigger();
          touchStartY = 0;

          if (inertiaTimeoutRef.current) {
            clearTimeout(inertiaTimeoutRef.current);
          }

          inertiaTimeoutRef.current = window.setTimeout(() => {
            isInertiaScrollingRef.current = false;
            inertiaTimeoutRef.current = null;
          }, 1500);
        }
        return;
      }
    };

    const handleTouchEnd = () => {
      touchStartY = 0;
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    section.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      section.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      section.removeEventListener("touchend", handleTouchEnd);
      if (inertiaTimeoutRef.current) {
        clearTimeout(inertiaTimeoutRef.current);
        inertiaTimeoutRef.current = null;
      }
    };
  }, [sectionRef, shouldTrigger, onTrigger, enabled, isSectionInViewport]);
}

