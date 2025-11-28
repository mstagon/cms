// HeroSection 오거니즘은 메인 인트로 문구와 스크롤 인디케이터를 보여줍니다.
"use client";

import { useEffect, useRef } from "react";
import { useUI } from "@/app/context/UIContext";
import HeroControls from "@/app/components/organisms/hero/HeroControls";
import BootSequenceOverlay from "@/app/components/molecules/hero/BootSequenceOverlay";
import GlitchOverlay from "@/app/components/molecules/hero/GlitchOverlay";
import HeroHeading from "@/app/components/molecules/hero/HeroHeading";
import TechPillList from "@/app/components/molecules/hero/TechPillList";
import ScrollIndicatorLink from "@/app/components/molecules/hero/ScrollIndicatorLink";
import type { BootLine } from "@/app/types/hero";
import type { Language } from "@/app/types/ui";

const TECH_PILLS = ["React", "Next.js", "TypeScript", "WebGL", "Three.js"];

interface CopyContent {
  role: string;
  tagline: string;
  glitchText: string;
  glitchMessage: string;
  transitionText: string;
  scroll: string;
  bootSequence: BootLine[];
}

const COPY = {
  ko: {
    role: "FRONTEND DEVELOPER",
    tagline: "MINSEOK CHOI",
    glitchText: "데이터_손상",
    glitchMessage: "연결 재설정 중...",
    transitionText: "ABOUT 모듈 접속 중...",
    scroll: "INITIATE_SEQUENCE",
    bootSequence: [
      { content: "> 시스템 부팅 중...", delay: 0.2 },
      {
        content: "> 뉴럴 링크 연결 중...",
        delay: 1.0,
        highlight: { text: "성공", className: "text-text-main" },
      },
      {
        content: "> CYBER PORTFOLIO V1.0 로딩...",
        delay: 1.8,
        highlight: { text: "완료", className: "text-text-main" },
      },
      {
        content: "> 접근 허용. 환영합니다.",
        delay: 2.6,
        className: "text-secondary-accent",
      },
    ] as BootLine[],
  },
  en: {
    role: "FRONTEND DEVELOPER",
    tagline: "MINSEOK CHOI",
    glitchText: "DATA_CORRUPTED",
    glitchMessage: "Attempting to re-establish connection...",
    transitionText: "Linking with ABOUT module...",
    scroll: "INITIATE_SEQUENCE",
    bootSequence: [
      { content: "> BOOTING SYSTEM...", delay: 0.2 },
      {
        content: "> ESTABLISHING NEURAL LINK...",
        delay: 1.0,
        highlight: { text: "OK", className: "text-text-main" },
      },
      {
        content: "> LOADING CYBERPUNK PORTFOLIO V2.04...",
        delay: 1.8,
        highlight: { text: "DONE", className: "text-text-main" },
      },
      {
        content: "> ACCESS GRANTED. WELCOME.",
        delay: 2.6,
        className: "text-secondary-accent",
      },
    ] as BootLine[],
  },
} satisfies Record<Language, CopyContent>;

export default function HeroSection() {
  const { language } = useUI();
  const scrollLinkRef = useRef<HTMLAnchorElement>(null);
  const glitchOverlayRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  const transitionOverlayRef = useRef<HTMLDivElement>(null);
  const isInertiaScrollingRef = useRef(false);
  const inertiaTimeoutRef = useRef<number | null>(null);

  const playSectionTransition = (onComplete: () => void) => {
    const overlay = transitionOverlayRef.current;

    if (!overlay) {
      onComplete();
      return;
    }

    const handleAnimationEnd = () => {
      overlay.classList.remove("active");
      overlay.removeEventListener("animationend", handleAnimationEnd);
      onComplete();
    };

    overlay.classList.remove("active");
    // reflow to restart animation
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    overlay.offsetHeight;

    overlay.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
    overlay.classList.add("active");
  };

  const triggerGlitchSequence = (onReady: () => void) => {
    const overlay = glitchOverlayRef.current;

    if (!overlay) {
      onReady();
      return;
    }

    overlay.classList.add("active");

    const readyTimer = window.setTimeout(onReady, 2000);
    const hideTimer = window.setTimeout(() => {
      overlay.classList.remove("active");
    }, 3000);

    const cleanup = () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(hideTimer);
      overlay.classList.remove("active");
    };

    overlay.addEventListener(
      "animationend",
      () => {
        cleanup();
      },
      { once: true }
    );
  };

  useEffect(() => {
    const scrollLink = scrollLinkRef.current;

    if (!scrollLink) return;

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      const targetSelector = scrollLink.getAttribute("href") ?? "#about";
      const target = document.querySelector(targetSelector);

      // 히어로 콘텐츠 페이드 아웃 (부팅 애니메이션처럼)
      if (mainContentRef.current) {
        mainContentRef.current.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        mainContentRef.current.style.opacity = "0";
        mainContentRef.current.style.transform = "translateY(-20px)";
      }

      // 페이드 아웃 후 전환 시작
      setTimeout(() => {
        triggerGlitchSequence(() => {
          playSectionTransition(() => {
            target?.scrollIntoView({ behavior: "auto", block: "start" });
            // 글리치 오버레이가 완전히 닫힌 후 어바웃 인트로 페이드 인
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent("heroToAboutTransition"));
            }, 800);
          });
        });
      }, 600);
    };

    scrollLink.addEventListener("click", handleClick);
    return () => scrollLink.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const section = introSectionRef.current;
    if (!section) return;

    const triggerInertiaScroll = () => {
      if (isInertiaScrollingRef.current) {
        return;
      }

      const nextSection = document.querySelector<HTMLElement>("#about");
      if (!nextSection) {
        return;
      }

      const startScroll = () => {
        const offset =
          nextSection.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({
          top: Math.max(offset, 0),
          behavior: "auto",
        });

        if (inertiaTimeoutRef.current) {
          clearTimeout(inertiaTimeoutRef.current);
        }

        inertiaTimeoutRef.current = window.setTimeout(() => {
          isInertiaScrollingRef.current = false;
          inertiaTimeoutRef.current = null;
        }, 1200);
      };

      isInertiaScrollingRef.current = true;

      // 히어로 콘텐츠 페이드 아웃 (부팅 애니메이션처럼)
      if (mainContentRef.current) {
        mainContentRef.current.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        mainContentRef.current.style.opacity = "0";
        mainContentRef.current.style.transform = "translateY(-20px)";
      }

      // 페이드 아웃 후 전환 시작
      setTimeout(() => {
        triggerGlitchSequence(() => {
          playSectionTransition(() => {
            // 전환 애니메이션 후 스크롤
            setTimeout(() => {
              startScroll();
              // 글리치 오버레이가 완전히 닫힌 후 어바웃 인트로 페이드 인
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent("heroToAboutTransition"));
              }, 800);
            }, 500);
          });
        });
      }, 600);
    };

    const shouldTriggerInertia = () =>
      window.scrollY < window.innerHeight * 0.45;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0 || !shouldTriggerInertia()) {
        return;
      }
      event.preventDefault();
      triggerInertiaScroll();
    };

    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY === 0 || !shouldTriggerInertia()) {
        return;
      }
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - currentY;
      if (delta > 60) {
        event.preventDefault();
        triggerInertiaScroll();
        touchStartY = 0;
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
  }, []);

  const text = COPY[language] ?? COPY.ko;

  return (
    <div className="font-display relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-text-light">
      <div
        className="animate-circuitMove absolute inset-0 z-[-1] opacity-5"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6y8pFkLPR47JSwc_23iL0YYl4u5DI83SFX6uPMjdF5aCY-4qb-qLXEMSgONpsLmrYMxDtUWHRtFDSv8aypAMymsOti6Fa6Z1en8JWf7xp5yKXxQbU_WOAPhkvC_ZKSMfBpDzI20Zk_1ElmKUTMHBruettS2pfVzUWEki15exSktla64DJigbKeSoNL6ho_s_0Z1uU2B9dtp-j1Ivjh8N1XLk2AGWjtw5b69G_r1BU7wrA10Ej0eo07YbNG5gpUc1jon0JRsvbCA')",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute inset-0 z-[-2] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(188,19,254,0.2)_0%,_rgba(1,1,10,0)_100%)]" />

      <BootSequenceOverlay lines={text.bootSequence} />
      <GlitchOverlay
        overlayRef={glitchOverlayRef}
        title={text.glitchText}
        message={text.glitchMessage}
        successMessage={
          language === "ko"
            ? "연결 완료. 전송 중..."
            : "Connection established. Transferring..."
        }
      />

      <div className="pointer-events-none absolute right-6 top-6 z-30 flex justify-end sm:right-10 sm:top-10">
        <HeroControls className="pointer-events-auto border-white/15 bg-black/40" />
      </div>

      <main
        ref={mainContentRef}
        className="flex h-full grow flex-col opacity-0 animate-fadeInMain"
      >
        <section
          id="intro"
          ref={introSectionRef}
          className="relative flex h-screen grow flex-col items-center justify-center p-4"
        >
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <HeroHeading role={text.role} tagline={text.tagline} />
            <TechPillList items={TECH_PILLS} />
          </div>

          <ScrollIndicatorLink label={text.scroll} linkRef={scrollLinkRef} />
        </section>
      </main>
    </div>
  );
}
