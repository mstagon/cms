// AwardsList 오거니즘은 수상 및 활동 내역 리스트를 제공합니다.
"use client";

import type { Award } from "@/app/types/about";
import SectionHeading from "@/app/components/atoms/SectionHeading";

interface AwardsListProps {
  awards: Award[];
  delay?: number;
}

export default function AwardsList({ awards, delay = 0.35 }: AwardsListProps) {
  return (
    <section
      id="awards"
      className="flex flex-col gap-8"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <SectionHeading
        title="Awards"
        subtitle="활동과 성과"
        align="left"
      />
      <div className="space-y-6">
        {awards.map((award, index) => (
          <div
            key={award.title}
            className="flex items-start gap-4"
            data-animate="scroll"
            style={{ transitionDelay: `${delay + 0.05 + index * 0.08}s` }}
          >
            <span aria-hidden className="text-2xl text-[hsl(var(--color-accent))]">
              {award.icon}
            </span>
            <div>
              <p className="text-lg font-medium text-white">{award.title}</p>
              <p className="text-sm text-white/60">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


