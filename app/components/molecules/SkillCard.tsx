// SkillCard 분자는 단일 기술의 이름, 숙련도, 진행 바를 표시합니다.
"use client";

import type { SkillItem, SkillLevel } from "@/app/types/about";
import LevelBadge from "@/app/components/atoms/LevelBadge";
import ProgressBar from "@/app/components/atoms/ProgressBar/ProgressBar";

interface SkillCardProps {
  skill: SkillItem;
  levelColor: string;
  gradient: string;
  revealDelay: number;
  progressDelay: number;
}

const levelDurations: Record<SkillLevel, number> = {
  beginner: 0.9,
  intermediate: 1.1,
  comfortable: 1.2,
  advanced: 1.3,
};

export default function SkillCard({
  skill,
  levelColor,
  gradient,
  revealDelay,
  progressDelay,
}: SkillCardProps) {
  const progressDuration = levelDurations[skill.level];

  return (
    <div
      data-animate="scroll"
      data-progress-container
      className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/15 bg-[rgba(17,24,39,0.68)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[hsl(var(--color-accent))]"
      style={{
        transitionDelay: `${revealDelay}s`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{ background: gradient }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-center gap-2">
            <span aria-hidden className="text-2xl">
              {skill.icon}
            </span>
            <h5 className="text-lg font-semibold text-white">{skill.name}</h5>
          </div>
          <LevelBadge label={skill.levelLabel} color={levelColor} />
        </div>
        {/* <span className="text-sm font-semibold text-white/80">
          {skill.proficiency}%
        </span> */}
      </div>
      <div className="relative">
        <ProgressBar
          progress={skill.proficiency}
          color={gradient}
          delay={progressDelay}
          duration={progressDuration}
        />
      </div>
    </div>
  );
}
