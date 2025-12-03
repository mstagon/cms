// 성과/결과 섹션 분자
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";

interface AchievementSectionProps {
  achievements: Array<{
    title: string;
    description: string;
    metrics?: string;
    value?: number;
    unit?: string;
  }>;
}

export default function AchievementSection({
  achievements,
}: AchievementSectionProps) {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <SectionHeader title="// ACHIEVEMENTS.log" />
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-bold text-white text-base font-mono">
                {achievement.title}
              </h4>
              {achievement.value !== undefined && (
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-accent">
                    {achievement.value}
                  </span>
                  {achievement.unit && (
                    <span className="text-sm text-accent/70">
                      {achievement.unit}
                    </span>
                  )}
                </div>
              )}
            </div>
            <p className="text-sm text-[#c5c0e5] leading-relaxed">
              {achievement.description}
            </p>
            {achievement.metrics && (
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs font-mono text-accent/80">
                  {achievement.metrics}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

