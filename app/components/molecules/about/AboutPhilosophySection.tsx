"use client";

import { useEffect, useRef, useState } from "react";

interface PhilosophyCard {
  icon: string;
  title: string;
  body: string;
}

interface AboutPhilosophySectionProps {
  title: string;
  description: string;
  cards: PhilosophyCard[];
}

export default function AboutPhilosophySection({
  title,
  description,
  cards,
}: AboutPhilosophySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 관성 스크롤로 도달했을 때 페이드 인
    const handleTransition = () => {
      setTimeout(() => {
        setIsMounted(true);
      }, 500);
    };

    window.addEventListener("aboutIntroToPhilosophy", handleTransition);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 일반 스크롤로 도달한 경우
          if (!isMounted) {
            setTimeout(() => {
              setIsMounted(true);
            }, 300);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("aboutIntroToPhilosophy", handleTransition);
    };
  }, [isMounted]);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col gap-6 transition-all duration-1000 ease-out ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-3xl font-bold tracking-[0.3em]">
            {title}
          </h2>
          <p className="text-[#8892B0] text-sm font-mono">{"// "}{description}</p>
        </div>
        <div className="flex flex-col gap-4 font-mono text-sm">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative flex flex-col gap-2 border-l-2 border-primary/20 pl-4 transition-all duration-500 hover:border-primary/60 hover:bg-primary/5 hover:pl-6 hover:shadow-[0_0_20px_rgba(0,255,149,0.1)] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="absolute -left-[2px] top-0 h-full w-0 bg-primary/30 transition-all duration-500 group-hover:w-1 group-hover:shadow-[0_0_10px_var(--color-accent)]" />
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)] group-hover:scale-110">
                  [{index + 1}]
                </span>
                <span className="text-primary/40">→</span>
                <h3 className="text-[#E6F1FF] text-base font-bold tracking-wider transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:drop-shadow-[0_0_5px_var(--color-accent)]">
                  {card.title.toUpperCase()}
                </h3>
              </div>
              <p className="text-[#8892B0] text-sm leading-relaxed pl-7 transition-all duration-300 group-hover:text-[#a8b2d1] group-hover:pl-8">
                <span className="text-primary/60">{"// "}</span>{card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

