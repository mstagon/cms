"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { useInertiaScroll } from "@/app/hooks/useInertiaScroll";
import { useSectionTransition } from "@/app/hooks/useSectionTransition";

interface AboutHeroIntroProps {
  initLabel: string;
  glitchLabel: string;
  roleSuffix: string;
  description: string;
  scrollLabel: string;
}

export default function AboutHeroIntro({
  initLabel,
  glitchLabel,
  roleSuffix,
  description,
  scrollLabel,
}: AboutHeroIntroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { fadeOutContent, playTransition } = useSectionTransition();

  // IntersectionObserver로 스크롤 인디케이터 표시 여부 결정
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    // 히어로에서 넘어올 때 페이드 인 효과
    const handleHeroTransition = () => {
      setIsMounted(true);
    };

    // 커스텀 이벤트 리스너
    window.addEventListener("heroToAboutTransition", handleHeroTransition);

    // 일반 스크롤로 도달한 경우 약간의 지연 후 표시
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // 이미 뷰포트에 있으면 즉시 표시
          setTimeout(() => {
            if (!isMounted) {
              setIsMounted(true);
            }
          }, 300);
        }
      }
    };

    const timer = setTimeout(checkVisibility, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("heroToAboutTransition", handleHeroTransition);
    };
  }, [isMounted]);

  // 관성 스크롤 트리거 핸들러
  const handleInertiaScroll = useCallback(() => {
    const nextSection =
      document.querySelector<HTMLElement>("#timeline-section");
    if (!nextSection) {
      console.warn("timeline-section not found");
      return;
    }

    // 1. 어바웃 인트로 콘텐츠 페이드 아웃 (부팅 애니메이션처럼)
    fadeOutContent(contentRef, 1000);

    // 2. 페이드 아웃 후 전환 오버레이 표시
    setTimeout(() => {
      playTransition("ACCESSING DATA_STREAM.LOG...", "#timeline-section", {
        fadeOutDuration: 1000,
        overlayDuration: 1500,
        onComplete: () => {
          // 4. 타임라인으로 이동한 후 비주얼 패널 로딩 애니메이션 시작
          setTimeout(() => {
            window.dispatchEvent(
              new CustomEvent("visualPanelLoading", {
                detail: {
                  isLoading: true,
                  message: "ACCESSING DATA_STREAM.LOG...",
                },
              })
            );

            // 5. 타임라인 섹션 페이드 인 이벤트
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent("aboutIntroToTimeline"));

              // 비주얼 패널 로딩 종료
              setTimeout(() => {
                window.dispatchEvent(
                  new CustomEvent("visualPanelLoading", {
                    detail: { isLoading: false },
                  })
                );
              }, 2000); // 로딩 애니메이션 2초 표시
            }, 300);
          }, 300);
        },
      });
    }, 1000);
  }, [fadeOutContent, playTransition]);

  // 관성 스크롤 조건
  const shouldTriggerInertia = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    // 섹션이 뷰포트에 있고, 상단 50% 이내에 있을 때만 작동
    return (
      rect.top >= 0 &&
      rect.top < window.innerHeight * 0.5 &&
      rect.bottom > window.innerHeight * 0.3
    );
  }, []);

  // 관성 스크롤 훅 사용
  useInertiaScroll(sectionRef, {
    shouldTrigger: shouldTriggerInertia,
    onTrigger: handleInertiaScroll,
    enabled: isMounted,
  });

  return (
    <section
      ref={sectionRef}
      className={`relative flex min-h-screen flex-col items-start justify-center gap-4 pt-24 text-left ${
        isMounted ? "" : "opacity-0"
      }`}
      style={{
        pointerEvents: isMounted ? "auto" : "none",
      }}
    >
      <div className="about-grid-overlay absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)]" />
      <div ref={contentRef} className="relative flex flex-col gap-4">
        <p
          className={`font-mono text-sm tracking-[0.4em] text-primary transition-all duration-800 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isMounted ? "0.2s" : "0s" }}
        >
          {initLabel}
        </p>
        <h1
          className={`text-4xl font-black leading-tight text-[#E6F1FF] md:text-6xl transition-all duration-800 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isMounted ? "0.4s" : "0s" }}
        >
          <span className="glitch-text" data-text={glitchLabel}>
            {glitchLabel}
          </span>
          {roleSuffix}
        </h1>
        <p
          className={`max-w-2xl text-base text-[#8892B0] md:text-lg transition-all duration-800 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isMounted ? "0.6s" : "0s" }}
        >
          {description}
        </p>
      </div>
      {isVisible && (
        <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-sm text-primary">{scrollLabel}</span>
          <div className="h-10 w-px bg-primary/50" />
          <div className="h-3 w-3 rounded-full border-2 border-primary" />
        </div>
      )}
    </section>
  );
}
