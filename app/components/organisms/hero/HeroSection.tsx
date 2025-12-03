// HeroSection 오거니즘은 메인 인트로 문구와 스크롤 인디케이터를 보여줍니다.
"use client";

import { useEffect, useRef } from "react";
import { useUI } from "@/app/context/UIContext";
import BootSequenceOverlay from "@/app/components/molecules/hero/BootSequenceOverlay";
import GlitchOverlay from "@/app/components/molecules/hero/GlitchOverlay";
import HeroHeading from "@/app/components/molecules/hero/HeroHeading";
import TechPillList from "@/app/components/molecules/hero/TechPillList";
import ScrollIndicatorLink from "@/app/components/molecules/hero/ScrollIndicatorLink";
import AboutSystemHeader from "@/app/components/molecules/about/AboutSystemHeader";
import { heroTexts } from "@/app/lib/i18n/texts";

const TECH_PILLS = ["React", "Next.js", "TypeScript", "WebGL", "Three.js"];

export default function HeroSection() {
  const { language } = useUI();
  const scrollLinkRef = useRef<HTMLAnchorElement>(null);
  const glitchOverlayRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  const transitionOverlayRef = useRef<HTMLDivElement>(null);
  const isInertiaScrollingRef = useRef(false);
  const inertiaTimeoutRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

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

  // 부팅 시퀀스가 끝난 후 헤더를 보이게 함
  useEffect(() => {
    // 부팅 시퀀스의 마지막 delay (2.6초) + 약간의 여유 시간 (1초) = 3.6초
    const showHeaderTimer = setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.transition = "opacity 0.6s ease-in";
      }
    }, 3600);

    return () => {
      clearTimeout(showHeaderTimer);
    };
  }, []);

  const text = heroTexts[language] ?? heroTexts.ko;

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
        successMessage={text.successMessage[language]}
      />

      <div ref={headerRef} style={{ opacity: 0 }}>
        <AboutSystemHeader brandLabel="cms.sys" />
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
