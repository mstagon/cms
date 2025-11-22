// ExperienceTimeline 오거니즘은 경력 타임라인 섹션 전체를 구성합니다.
"use client";

import type { Experience } from "@/app/types/about";
import Tag from "@/app/components/atoms/Tag";
import SectionHeading from "@/app/components/atoms/SectionHeading";

interface ExperienceTimelineProps {
  experiences: Experience[];
  delay?: number;
}

export default function ExperienceTimeline({
  experiences,
  delay = 0.2,
}: ExperienceTimelineProps) {
  return (
    <section
      id="experience"
      className="flex flex-col gap-10"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <SectionHeading
        title="Experience"
        subtitle="주요 경력과 기여도"
        align="left"
      />
      <div className="grid grid-cols-[auto_1fr] gap-x-6">
        <div className="flex flex-col items-center gap-6 pt-2">
          <div className="rounded-full bg-[hsl(var(--color-accent))] p-3 text-black shadow-[0_0_0_10px_rgba(52,211,153,0.18)]">
            💼
          </div>
          <div className="w-px flex-1 bg-white/12" />
        </div>
        <div className="flex flex-col gap-14">
          {experiences.map((exp, index) => (
            <article key={`${exp.role}-${exp.company}`} className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-white md:text-xl">
                  {exp.role}, {exp.company}
                </p>
                <p className="text-sm text-white/60">{exp.period}</p>
              </div>
              <p className="text-sm leading-relaxed text-white/85 md:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {index < experiences.length - 1 && (
                <div className="pt-4">
                  <div className="h-px w-full bg-white/8" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


