// SkillsSection 오거니즘은 기술 스택을 영역별 카드 리스트로 구성합니다.
"use client";

import type { SkillCategory, SkillLevel } from "@/app/types/about";
import SkillCard from "@/app/components/molecules/SkillCard";
import SectionHeading from "@/app/components/atoms/SectionHeading";

interface SkillsSectionProps {
  categories: SkillCategory[];
  delay?: number;
  headingTitle?: string;
  headingSubtitle?: string;
}

const levelColors: Record<SkillLevel, string> = {
  beginner: "#a855f7",
  intermediate: "#8b5cf6",
  comfortable: "#34d399",
  advanced: "#38bdf8",
};

const levelGradients: Record<SkillLevel, string> = {
  beginner: "linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)",
  intermediate: "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
  comfortable: "linear-gradient(90deg, #34d399 0%, #10b981 100%)",
  advanced: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
};

export default function SkillsSection({
  categories,
  delay = 0.18,
  headingTitle = "Skills",
  headingSubtitle = "분야별 기술 역량과 숙련도",
}: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="flex flex-col gap-10"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <SectionHeading
        title={headingTitle}
        subtitle={headingSubtitle}
        align="left"
      />

      <div className="flex flex-col gap-12">
        {categories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="flex flex-col gap-6"
            data-animate="scroll"
            style={{ transitionDelay: `${delay + 0.04 + categoryIndex * 0.08}s` }}
          >
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-2xl font-semibold text-white md:text-3xl">
                {category.title}
              </h4>
              <p className="text-sm text-white/65">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  levelColor={levelColors[skill.level]}
                  gradient={levelGradients[skill.level]}
                  revealDelay={delay + 0.06 + categoryIndex * 0.08 + skillIndex * 0.05}
                  progressDelay={delay + 0.04 + categoryIndex * 0.06 + skillIndex * 0.05}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


