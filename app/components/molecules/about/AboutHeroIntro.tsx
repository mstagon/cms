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

  // IntersectionObserver로 섹션이 뷰포트에 들어올 때마다 표시
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            // 섹션이 뷰포트에 들어오면 표시
            setIsMounted(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // 히어로에서 넘어올 때 페이드 인 효과
    const handleHeroTransition = () => {
      setIsMounted(true);
    };

    // 커스텀 이벤트 리스너
    window.addEventListener("heroToAboutTransition", handleHeroTransition);

    return () => {
      window.removeEventListener("heroToAboutTransition", handleHeroTransition);
    };
  }, []);

  // 관성 스크롤 트리거 핸들러
  const handleInertiaScroll = useCallback(() => {
    const nextSection =
      document.querySelector<HTMLElement>("#timeline-section");
    if (!nextSection) {
      console.warn("timeline-section not found");
      return;
    }

    // 1. 비주얼 패널 로딩 시작 (300ms 지연)
    // 타임라인 도착까지 약 3500ms, 로딩 시간 5000ms이므로 도착 시점 진행률은 약 70%
    // 더 자연스러운 느낌을 위해 40%부터 시작하도록 조정
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("visualPanelLoading", {
          detail: {
            isLoading: true,
            message: "ACCESSING DATA_STREAM.LOG...",
            initialProgress: 40, // 도착 시점에 이미 진행 중인 느낌
          },
        })
      );
    }, 300);

    // 2. 어바웃 인트로 콘텐츠 페이드 아웃 (부팅 애니메이션처럼)
    fadeOutContent(contentRef, 1000);

    // 3. 페이드 아웃 후 전환 오버레이 표시
    let timelineFadeInTriggered = false;

    // 로딩 완료 이벤트 리스너 등록
    const handleLoadingComplete = () => {
      if (!timelineFadeInTriggered) {
        timelineFadeInTriggered = true;

        // 로딩 완료 후 약간의 지연을 두고 타임라인 페이드인 (더 자연스러운 느낌)
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("aboutIntroToTimeline"));

          // 비주얼 패널 로딩 종료
          window.dispatchEvent(
            new CustomEvent("visualPanelLoading", {
              detail: { isLoading: false },
            })
          );
        }, 300); // 로딩 완료 후 300ms 지연

        window.removeEventListener(
          "visualPanelLoadingComplete",
          handleLoadingComplete
        );
      }
    };

    window.addEventListener(
      "visualPanelLoadingComplete",
      handleLoadingComplete
    );

    setTimeout(() => {
      playTransition("ACCESSING DATA_STREAM.LOG...", "#timeline-section", {
        fadeOutDuration: 1000,
        overlayDuration: 1500,
        onComplete: () => {
          // onComplete 시점에 로딩이 완료되었는지 확인
          // 로딩 시작: 300ms, 로딩 시간: 5000ms, 로딩 완료: 5300ms
          // 타임라인 도착: 300ms + 1000ms + 1000ms + 1500ms = 3800ms
          // 로딩 완료까지 남은 시간: 5300ms - 3800ms = 1500ms
          // 로딩이 아직 완료되지 않았으면 완료 이벤트를 기다림
          // 이미 완료되었으면 즉시 타임라인 페이드인
          const loadingStartTime = 300;
          const loadingDuration = 5000;
          const loadingCompleteTime = loadingStartTime + loadingDuration; // 5300ms
          const currentTime = 300 + 1000 + 1000 + 1500; // 3800ms (onComplete 시점)
          const remainingTime = loadingCompleteTime - currentTime; // 1500ms

          if (remainingTime > 0) {
            // 로딩이 아직 완료되지 않았으면 완료 이벤트를 기다림
            // handleLoadingComplete가 처리함
          } else {
            // 로딩이 이미 완료되었으면 즉시 타임라인 페이드인
            handleLoadingComplete();
          }
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
          {glitchLabel.includes("\n") ? (
            <>
              <div className="block">
                <span
                  className="glitch-text"
                  data-text={glitchLabel.split("\n")[0]}
                >
                  {glitchLabel.split("\n")[0]}
                </span>
              </div>
              <div className="block mt-2">
                <span
                  className="glitch-text"
                  data-text={glitchLabel.split("\n")[1]}
                >
                  {glitchLabel.split("\n")[1]}
                </span>
                {roleSuffix}
              </div>
            </>
          ) : (
            <>
              <span className="glitch-text" data-text={glitchLabel}>
                {glitchLabel}
              </span>
              {roleSuffix}
            </>
          )}
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
          <span className="font-mono text-sm text-accent">{scrollLabel}</span>
          <div className="h-10 w-px bg-accent" />
          <div className="h-3 w-3 rounded-full border-2 border-accent" />
        </div>
      )}
    </section>
  );
}
