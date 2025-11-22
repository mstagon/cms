// InterestGrid 오거니즘은 관심사를 카드 그리드 형태로 출력합니다.
"use client";

import type { Interest } from "@/app/types/about";
import Card from "@/app/components/atoms/Card";
import SectionHeading from "@/app/components/atoms/SectionHeading";

interface InterestGridProps {
  interests: Interest[];
  delay?: number;
}

export default function InterestGrid({
  interests,
  delay = 0.4,
}: InterestGridProps) {
  return (
    <section
      id="interests"
      className="flex flex-col gap-8"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <SectionHeading
        title="Interests"
        subtitle="일상 속 영감의 원천"
        align="left"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
          <Card
            key={interest.title}
            className="flex items-start gap-4 p-4 transition-transform duration-300 hover:-translate-y-1"
            data-animate="scroll"
            style={{ transitionDelay: `${delay + 0.05 + index * 0.08}s` }}
          >
            <span aria-hidden className="text-3xl text-[hsl(var(--color-accent))]">
              {interest.icon}
            </span>
            <div>
              <p className="font-semibold text-white">{interest.title}</p>
              <p className="text-sm text-white/60">{interest.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}


