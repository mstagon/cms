"use client";

import { useEffect, useRef } from "react";
import type { SkillCategory } from "@/app/types/about";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface CapabilityStat {
  label: string;
  value: string;
  name: string;
}

interface AboutCapabilitiesSectionProps {
  title: string;
  stats: CapabilityStat[];
  skillCategories: SkillCategory[];
  onHeightChange?: (height: number) => void;
}

function getClipPath(value: string) {
  const parsed = Number.parseInt(value.replace(/[^0-9]/g, ""), 10);
  const clamped = Number.isNaN(parsed) ? 0 : Math.max(0, Math.min(parsed, 100));
  return `polygon(0 0, ${clamped}% 0, ${clamped}% 100%, 0% 100%)`;
}

export default function AboutCapabilitiesSection({
  title,
  stats,
  skillCategories,
  onHeightChange,
}: AboutCapabilitiesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef, {
    threshold: 0.2,
    triggerOnce: true,
  });

  // 실제 높이 측정 및 부모에 전달
  useEffect(() => {
    if (!containerRef.current || !onHeightChange) return;

    const updateHeight = () => {
      const height = containerRef.current?.offsetHeight || 0;
      const heightInVh = (height / window.innerHeight) * 100;
      // 여유 공간 추가 (10vh)
      onHeightChange(heightInVh + 10);
    };

    // 초기 높이 측정
    updateHeight();

    // ResizeObserver로 높이 변화 감지
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(containerRef.current);

    // 애니메이션 완료 후에도 높이 재측정
    const timer = setTimeout(updateHeight, 2000);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, [onHeightChange, isVisible, skillCategories]);

  // 서브 코어 데이터 준비
  const subCores = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill.name,
      value: skill.proficiency,
      level: skill.levelLabel,
    }))
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-primary text-3xl font-bold tracking-[0.3em]">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        {/* 핵심 코어 */}
        <div className="relative flex min-w-[20rem] max-w-md flex-col gap-6 border border-primary/20 bg-[rgba(10,25,47,0.6)] p-6 text-left backdrop-blur-sm">
          <div className="absolute -top-1 -left-1 h-4 w-4 border-l-2 border-t-2 border-primary" />
          <div className="absolute -top-1 -right-1 h-4 w-4 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-1 -left-1 h-4 w-4 border-l-2 border-b-2 border-primary" />
          <div className="absolute -bottom-1 -right-1 h-4 w-4 border-r-2 border-b-2 border-primary" />
          <p className="text-[#E6F1FF] text-lg font-bold font-mono">
            [CORE_SPECS]
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <div
                    className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"
                    style={{ clipPath: getClipPath(stat.value) }}
                  />
                  <p className="text-primary text-lg font-bold">{stat.value}</p>
                </div>
                <p className="text-[#8892B0] text-[0.65rem] font-bold tracking-wide font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 서브 코어 - 캐릭터 스텟 그래프 */}
        <div className="relative flex min-w-[20rem] max-w-md flex-col gap-4 border border-primary/20 bg-[rgba(10,25,47,0.6)] p-6 pb-8 text-left backdrop-blur-sm">
          <div className="absolute -top-1 -left-1 h-4 w-4 border-l-2 border-t-2 border-primary" />
          <div className="absolute -top-1 -right-1 h-4 w-4 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-1 -left-1 h-4 w-4 border-l-2 border-b-2 border-primary" />
          <div className="absolute -bottom-1 -right-1 h-4 w-4 border-r-2 border-b-2 border-primary" />
          <p className="text-[#E6F1FF] text-lg font-bold font-mono">
            [SUB_CORES]
          </p>
          <div className="flex flex-col gap-4">
            {subCores.map((core, index) => (
              <div
                key={`${core.name}-${index}`}
                className={`flex flex-col gap-2 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#8892B0] text-xs font-mono tracking-wider">
                    {core.name.toUpperCase()}
                  </span>
                  <span className="text-primary text-xs font-bold font-mono">
                    {core.value}%
                  </span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-primary/20 border border-primary/40">
                  <div
                    className="absolute left-0 top-0 h-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${core.value}%` : "0%",
                      transitionDelay: `${index * 0.05 + 0.2}s`,
                      background: `linear-gradient(90deg, var(--color-accent), var(--color-primary))`,
                      boxShadow: `0 0 12px var(--color-accent), inset 0 0 8px rgba(0, 246, 255, 0.3)`,
                      borderRight: `2px solid rgba(0, 246, 255, 0.6)`,
                    }}
                  />
                  {/* 진행률 표시를 위한 글로우 효과 */}
                  <div
                    className="absolute left-0 top-0 h-full w-1 bg-accent opacity-80 blur-sm transition-all duration-1000 ease-out"
                    style={{
                      left: isVisible ? `${core.value}%` : "0%",
                      transitionDelay: `${index * 0.05 + 0.2}s`,
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
