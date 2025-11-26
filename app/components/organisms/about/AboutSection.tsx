// AboutSection 오거니즘은 프로필 소개부터 기술 스택, 경력, 수상, 관심사를 순서대로 렌더링합니다.
"use client";

import type {
  Award,
  Experience,
  Interest,
  ProfileIntro,
  SkillCategory,
} from "@/app/types/about";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useRef } from "react";
import ProfileHero from "@/app/components/molecules/ProfileHero";
import ExperienceTimeline from "@/app/components/organisms/about/ExperienceTimeline";
import SkillsSection from "@/app/components/organisms/about/SkillsSection";
import AwardsList from "@/app/components/organisms/about/AwardsList";
import InterestGrid from "@/app/components/organisms/about/InterestGrid";
import { useUI } from "@/app/context/UIContext";

interface AboutSectionProps {
  profile: ProfileIntro;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  awards: Award[];
  interests: Interest[];
}

export default function AboutSection({
  profile,
  experiences,
  skillCategories,
  awards,
  interests,
}: AboutSectionProps) {
  const { language } = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef, {
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px",
  });

  const copy = {
    ko: {
      experienceSubtitle: "주요 경력과 기여도",
      skillsSubtitle: "분야별 기술 역량과 숙련도",
      awardsSubtitle: "활동과 성과",
      interestsSubtitle: "일상 속 영감의 원천",
    },
    en: {
      experienceSubtitle: "Key experiences and contributions",
      skillsSubtitle: "Technical expertise by domain",
      awardsSubtitle: "Highlights & achievements",
      interestsSubtitle: "Sources of everyday inspiration",
    },
  } as const;

  const text = copy[language] ?? copy.ko;

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex w-full max-w-[960px] flex-col gap-20 px-6 py-16 md:px-10 lg:px-16"
    >
      <ProfileHero intro={profile} delay={0.1} />
      <ExperienceTimeline
        experiences={experiences}
        delay={0.2}
        headingSubtitle={text.experienceSubtitle}
      />
      <SkillsSection
        categories={skillCategories}
        delay={0.18}
        headingSubtitle={text.skillsSubtitle}
      />
      <AwardsList awards={awards} delay={0.35} headingSubtitle={text.awardsSubtitle} />
      <InterestGrid interests={interests} delay={0.4} headingSubtitle={text.interestsSubtitle} />
    </section>
  );
}


