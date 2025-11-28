"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  timestamp: string;
  description: string;
}

interface AboutTimelineSectionProps {
  title: string;
  entries: TimelineEntry[];
  label: string;
}

export default function AboutTimelineSection({
  title,
  entries,
  label,
}: AboutTimelineSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 커스텀 이벤트 리스너 (어바웃 인트로에서 전환될 때)
    const handleTransition = () => {
      setIsVisible(true);
    };
    window.addEventListener("aboutIntroToTimeline", handleTransition);

    return () => {
      observer.disconnect();
      window.removeEventListener("aboutIntroToTimeline", handleTransition);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-primary text-3xl font-bold tracking-[0.3em]">
          {title}
        </h2>
      </div>
      <div className="relative flex flex-col gap-6 font-mono text-sm">
        {entries.map((entry, index) => (
          <div
            key={`${entry.title}-${entry.timestamp}`}
            className={`group relative border-l-2 border-primary/20 pl-4 transition-all duration-500 hover:border-primary/60 hover:bg-primary/5 hover:pl-6 hover:shadow-[0_0_20px_rgba(0,255,149,0.1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className="absolute -left-[2px] top-0 h-full w-0 bg-primary/30 transition-all duration-500 group-hover:w-1 group-hover:shadow-[0_0_10px_var(--color-accent)]" />
            <div className="absolute -left-[5px] top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_8px_#00ff95] transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:shadow-[0_0_16px_#00ff95] group-hover:-left-[6px] pulse-glow" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-primary/40">$</span>
                <span className="text-primary font-bold transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)] group-hover:translate-x-1 group-hover:scale-105">
                  {entry.title}
                </span>
              </div>
              <p className="text-primary/80 text-xs pl-1 transition-all duration-300 group-hover:text-primary group-hover:pl-2">
                <span className="text-primary/60">//</span> {label}: <span className="text-accent">{entry.timestamp}</span>
              </p>
              <p className="text-[#8892B0] text-sm leading-relaxed pl-1 transition-all duration-300 group-hover:text-[#a8b2d1] group-hover:pl-2">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

